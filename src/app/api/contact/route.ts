import { NextRequest, NextResponse } from "next/server";

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(req: NextRequest) {
  const { name, company, email, phone, service, message } = await req.json();

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
  }

  const safeName = escapeHtml(name.trim());
  const safeCompany = company?.trim() ? escapeHtml(company.trim()) : "";
  const safeEmail = escapeHtml(email.trim());
  const safePhone = phone?.trim() ? escapeHtml(phone.trim()) : "";
  const safeService = service?.trim() ? escapeHtml(service.trim()) : "";
  const safeMessage = escapeHtml(message.trim()).replace(/\n/g, "<br>");

  const brevoHeaders = {
    "Content-Type": "application/json",
    "api-key": apiKey,
  };

  // Email to you — with Reply-To set to the client so you can reply directly
  const notificationPayload = {
    sender: { name: "Mulsetu Contact Form", email: "founder@mulsetu.com" },
    to: [{ email: "founder@mulsetu.com", name: "Mulsetu" }],
    replyTo: { email: email.trim(), name: name.trim() },
    subject: `New enquiry: ${safeName}${safeCompany ? ` — ${safeCompany}` : ""}`,
    htmlContent: `
      <!DOCTYPE html>
      <html>
      <body style="font-family: Arial, sans-serif; background: #f4f4f4; padding: 20px;">
        <div style="max-width: 580px; margin: 0 auto; background: #ffffff; border-radius: 10px; overflow: hidden;">
          <div style="background: #0d9488; padding: 24px 32px;">
            <h2 style="color: #ffffff; margin: 0; font-size: 18px;">New Contact Form Submission</h2>
          </div>
          <div style="padding: 32px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 13px; width: 120px;">Name</td>
                <td style="padding: 8px 0; color: #111827; font-size: 14px; font-weight: 600;">${safeName}</td>
              </tr>
              ${safeCompany ? `<tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 13px;">Company</td>
                <td style="padding: 8px 0; color: #111827; font-size: 14px;">${safeCompany}</td>
              </tr>` : ""}
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 13px;">Email</td>
                <td style="padding: 8px 0; color: #0d9488; font-size: 14px;">${safeEmail}</td>
              </tr>
              ${safePhone ? `<tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 13px;">Phone</td>
                <td style="padding: 8px 0; color: #111827; font-size: 14px;">${safePhone}</td>
              </tr>` : ""}
              ${safeService ? `<tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 13px;">Service</td>
                <td style="padding: 8px 0; color: #111827; font-size: 14px;">${safeService}</td>
              </tr>` : ""}
            </table>
            <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
              <p style="color: #6b7280; font-size: 13px; margin: 0 0 10px;">Message</p>
              <p style="color: #111827; font-size: 14px; line-height: 1.7; margin: 0;">${safeMessage}</p>
            </div>
            <div style="margin-top: 28px;">
              <a href="mailto:${safeEmail}" style="display: inline-block; background: #0d9488; color: #ffffff; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-size: 14px; font-weight: 600;">
                Reply to ${safeName} →
              </a>
            </div>
          </div>
          <div style="padding: 16px 32px; background: #f9fafb; border-top: 1px solid #e5e7eb;">
            <p style="color: #9ca3af; font-size: 12px; margin: 0;">Sent via mulsetu.com/contact</p>
          </div>
        </div>
      </body>
      </html>
    `,
  };

  // Confirmation email to the client
  const confirmationPayload = {
    sender: { name: "Mulsetu", email: "founder@mulsetu.com" },
    to: [{ email: email.trim(), name: name.trim() }],
    replyTo: { email: "founder@mulsetu.com", name: "Mulsetu" },
    subject: `Got it, ${name.trim().split(" ")[0]} — we'll be in touch shortly`,
    htmlContent: `
      <!DOCTYPE html>
      <html>
      <body style="font-family: Arial, sans-serif; background: #f4f4f4; padding: 20px;">
        <div style="max-width: 580px; margin: 0 auto; background: #ffffff; border-radius: 10px; overflow: hidden;">
          <div style="background: #05080f; padding: 24px 32px;">
            <h2 style="color: #2dd4bf; margin: 0; font-size: 20px; font-weight: 700;">Mulsetu</h2>
            <p style="color: #94a3b8; margin: 4px 0 0; font-size: 13px;">Your dedicated technology partner</p>
          </div>
          <div style="padding: 36px 32px;">
            <h2 style="color: #111827; font-size: 22px; margin: 0 0 12px;">Hi ${safeName.split(" ")[0]}, we received your message.</h2>
            <p style="color: #4b5563; font-size: 15px; line-height: 1.7; margin: 0 0 20px;">
              Thank you for reaching out. Our team will review your enquiry and get back to you within <strong>4 business hours</strong>.
            </p>
            <div style="background: #f0fdfa; border: 1px solid #99f6e4; border-radius: 8px; padding: 20px 24px; margin-bottom: 28px;">
              <p style="color: #0f766e; font-size: 13px; font-weight: 700; margin: 0 0 10px; text-transform: uppercase; letter-spacing: 0.05em;">What happens next</p>
              <ul style="color: #374151; font-size: 14px; line-height: 1.8; margin: 0; padding-left: 18px;">
                <li>We'll review your project details</li>
                <li>We'll reach out to schedule a <strong>free 30-minute strategy session</strong></li>
                <li>You'll receive a clear technology roadmap — no obligation, no pressure</li>
              </ul>
            </div>
            <p style="color: #4b5563; font-size: 14px; line-height: 1.7; margin: 0 0 28px;">
              In the meantime, feel free to explore our work or read our blog.
            </p>
            <div style="display: flex; gap: 12px;">
              <a href="https://mulsetu.com/our-work" style="display: inline-block; background: #0d9488; color: #ffffff; padding: 11px 22px; border-radius: 6px; text-decoration: none; font-size: 14px; font-weight: 600; margin-right: 10px;">
                See Our Work →
              </a>
              <a href="https://mulsetu.com/blog" style="display: inline-block; background: #f3f4f6; color: #374151; padding: 11px 22px; border-radius: 6px; text-decoration: none; font-size: 14px; font-weight: 600;">
                Read Our Blog
              </a>
            </div>
          </div>
          <div style="padding: 20px 32px; background: #f9fafb; border-top: 1px solid #e5e7eb;">
            <p style="color: #374151; font-size: 13px; margin: 0 0 4px;"><strong>Mulsetu</strong></p>
            <p style="color: #9ca3af; font-size: 12px; margin: 0;">
              <a href="mailto:founder@mulsetu.com" style="color: #0d9488; text-decoration: none;">founder@mulsetu.com</a>
              &nbsp;·&nbsp;
              <a href="https://mulsetu.com" style="color: #0d9488; text-decoration: none;">mulsetu.com</a>
            </p>
          </div>
        </div>
      </body>
      </html>
    `,
  };

  const [notifyRes, confirmRes] = await Promise.allSettled([
    fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: brevoHeaders,
      body: JSON.stringify(notificationPayload),
    }),
    fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: brevoHeaders,
      body: JSON.stringify(confirmationPayload),
    }),
  ]);

  const notifyOk = notifyRes.status === "fulfilled" && notifyRes.value.ok;
  const confirmOk = confirmRes.status === "fulfilled" && confirmRes.value.ok;

  if (!notifyOk && !confirmOk) {
    console.error("Both emails failed:", notifyRes, confirmRes);
    return NextResponse.json({ error: "Failed to send emails" }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
