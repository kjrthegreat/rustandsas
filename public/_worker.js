export default {
  async fetch(request, env) {
    if (request.method === "OPTIONS") {
      return cors(null, 204);
    }

    const url = new URL(request.url);

    if (request.method === "POST" && url.pathname === "/api/contact") {
      return handleContact(request, env);
    }

    return new Response("Not found", { status: 404 });
  },
};

async function handleContact(request, env) {
  let data;
  try {
    data = await request.json();
  } catch {
    return cors({ error: "Invalid request body" }, 400);
  }

  const { firstName, lastName, phone, email, service, description, website } = data;

  if (website) return cors({ success: true }, 200);

  if (!firstName || !lastName || !phone || !email || !description) {
    return cors({ error: "Missing required fields" }, 400);
  }

  const lines = [
    `Name: ${firstName} ${lastName}`,
    `Phone: ${phone}`,
    `Email: ${email}`,
    `Service: ${service || "Not specified"}`,
    ``,
    `Project Description:`,
    description,
  ];

  const payload = {
    from: "Rust & Sawdust <noreply@rustandsawdustky.com>",
    to: ["rustandsawdustky@outlook.com"],
    reply_to: email,
    subject: `Quote Request — ${service || "General"} — ${firstName} ${lastName}`,
    text: lines.join("\n"),
  };

  const resendRes = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${env.RESEND_API_KEY}`,
    },
    body: JSON.stringify(payload),
  });

  const result = await resendRes.json().catch(() => ({}));

  if (!resendRes.ok) {
    console.error("Resend error:", result);
    return cors({ error: "Failed to send email" }, 502);
  }

  return cors({ success: true }, 200);
}

function cors(body, status) {
  return new Response(body ? JSON.stringify(body) : null, {
    status,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
