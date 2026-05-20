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

  const { firstName, lastName, phone, email, service, description, images = [] } = data;

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

  if (images.length > 0) {
    lines.push(``, `${images.length} photo${images.length > 1 ? "s" : ""} submitted — reply to this email to request them.`);
  }

  const payload = {
    access_key: env.WEB3FORMS_KEY,
    subject: `Quote Request — ${service || "General"} — ${firstName} ${lastName}`,
    from_name: `${firstName} ${lastName} via Rust & Sawdust`,
    replyto: email,
    message: lines.join("\n"),
  };

  const w3Res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const result = await w3Res.json().catch(() => ({}));

  if (!w3Res.ok || !result.success) {
    console.error("Web3Forms error:", result);
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
