const RECIPIENT_EMAIL = "rustandsawdustky@gmail.com";
const SENDER_EMAIL = "contact@rustandsawdustky.com";
const SENDER_NAME = "Rust & Sawdust Website";

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

  const html = `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
      <h2 style="background:#14130f;color:#f5f0e8;padding:16px 20px;margin:0;letter-spacing:0.1em;">
        NEW QUOTE REQUEST
      </h2>
      <table style="width:100%;border-collapse:collapse;font-size:15px;">
        <tr style="border-bottom:1px solid #e8e0d0;">
          <td style="padding:12px 16px;color:#888;width:110px;">Name</td>
          <td style="padding:12px 16px;"><strong>${esc(firstName)} ${esc(lastName)}</strong></td>
        </tr>
        <tr style="border-bottom:1px solid #e8e0d0;">
          <td style="padding:12px 16px;color:#888;">Phone</td>
          <td style="padding:12px 16px;"><a href="tel:${esc(phone)}" style="color:#b84a1a;">${esc(phone)}</a></td>
        </tr>
        <tr style="border-bottom:1px solid #e8e0d0;">
          <td style="padding:12px 16px;color:#888;">Email</td>
          <td style="padding:12px 16px;"><a href="mailto:${esc(email)}" style="color:#b84a1a;">${esc(email)}</a></td>
        </tr>
        <tr style="border-bottom:1px solid #e8e0d0;">
          <td style="padding:12px 16px;color:#888;">Service</td>
          <td style="padding:12px 16px;">${esc(service || "Not specified")}</td>
        </tr>
        <tr>
          <td style="padding:12px 16px;color:#888;vertical-align:top;">Project</td>
          <td style="padding:12px 16px;line-height:1.6;">${esc(description).replace(/\n/g, "<br>")}</td>
        </tr>
      </table>
      ${images.length > 0
        ? `<p style="padding:12px 16px;color:#888;font-size:13px;border-top:1px solid #e8e0d0;">
             ${images.length} photo${images.length > 1 ? "s" : ""} attached.
           </p>`
        : ""}
    </div>
  `;

  const payload = {
    sender: { name: SENDER_NAME, email: SENDER_EMAIL },
    to: [{ email: RECIPIENT_EMAIL, name: "Rust & Sawdust" }],
    replyTo: { email, name: `${firstName} ${lastName}` },
    subject: `Quote Request — ${service || "General"} — ${firstName} ${lastName}`,
    htmlContent: html,
  };

  if (images.length > 0) {
    payload.attachment = images.map((img) => ({
      name: img.name,
      content: img.base64,
    }));
  }

  const brevoRes = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "api-key": env.BREVO_API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!brevoRes.ok) {
    const errText = await brevoRes.text();
    console.error("Brevo error:", errText);
    return cors({ error: "Failed to send email" }, 502);
  }

  return cors({ success: true }, 200);
}

function esc(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
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
