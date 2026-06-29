import { NextRequest, NextResponse } from "next/server";

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(req: NextRequest) {
  const { name, org, country, website, email, phone, partnerType, monthlyLeads, network, why } = await req.json();

  if (!name?.trim() || !org?.trim() || !email?.trim() || !network?.trim()) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
  }

  const s = (v: string | undefined) => v?.trim() ? escapeHtml(v.trim()) : "—";
  const safeNetwork = escapeHtml((network || "").trim()).replace(/\n/g, "<br>");
  const safeWhy = escapeHtml((why || "").trim()).replace(/\n/g, "<br>");

  const brevoHeaders = { "Content-Type": "application/json", "api-key": apiKey };

  const row = (label: string, value: string) =>
    `<tr><td style="padding:8px 0;color:#6b7280;font-size:13px;width:140px;vertical-align:top;">${label}</td><td style="padding:8px 0;color:#111827;font-size:14px;">${value}</td></tr>`;

  // Notification to founder
  const notificationPayload = {
    sender: { name: "Mulsetu Partner Form", email: "founder@mulsetu.com" },
    to: [{ email: "founder@mulsetu.com", name: "Mulsetu" }],
    replyTo: { email: email.trim(), name: name.trim() },
    subject: `New Partner Application: ${s(name)} — ${s(org)} (${s(country)})`,
    htmlContent: `
      <!DOCTYPE html><html><body style="font-family:Arial,sans-serif;background:#f4f4f4;padding:20px;">
        <div style="max-width:600px;margin:0 auto;background:#fff;border-radius:10px;overflow:hidden;">
          <div style="background:#0d9488;padding:24px 32px;">
            <h2 style="color:#fff;margin:0;font-size:18px;">New Partner Application</h2>
          </div>
          <div style="padding:32px;">
            <table style="width:100%;border-collapse:collapse;">
              ${row("Name", s(name))}
              ${row("Organisation", s(org))}
              ${row("Country", s(country))}
              ${row("Email", s(email))}
              ${row("Phone", s(phone))}
              ${row("Website", website?.trim() ? `<a href="${s(website)}" style="color:#0d9488;">${s(website)}</a>` : "—")}
              ${row("Partner Type", s(partnerType))}
              ${row("Monthly Referrals", s(monthlyLeads))}
            </table>
            <div style="margin-top:20px;padding-top:20px;border-top:1px solid #e5e7eb;">
              <p style="color:#6b7280;font-size:13px;margin:0 0 6px;font-weight:600;">About Their Network</p>
              <p style="color:#111827;font-size:14px;line-height:1.7;margin:0 0 16px;">${safeNetwork}</p>
              ${safeWhy !== "—" ? `<p style="color:#6b7280;font-size:13px;margin:0 0 6px;font-weight:600;">Why Mulsetu?</p><p style="color:#111827;font-size:14px;line-height:1.7;margin:0;">${safeWhy}</p>` : ""}
            </div>
            <div style="margin-top:28px;">
              <a href="mailto:${s(email)}" style="display:inline-block;background:#0d9488;color:#fff;padding:12px 24px;border-radius:6px;text-decoration:none;font-size:14px;font-weight:600;">
                Reply to ${s(name)} →
              </a>
            </div>
          </div>
          <div style="padding:16px 32px;background:#f9fafb;border-top:1px solid #e5e7eb;">
            <p style="color:#9ca3af;font-size:12px;margin:0;">Submitted via mulsetu.com/partners</p>
          </div>
        </div>
      </body></html>
    `,
  };

  // Confirmation to applicant
  const confirmationPayload = {
    sender: { name: "Mulsetu", email: "founder@mulsetu.com" },
    to: [{ email: email.trim(), name: name.trim() }],
    replyTo: { email: "founder@mulsetu.com", name: "Mulsetu" },
    subject: `Your Mulsetu Partner Application is Received, ${name.trim().split(" ")[0]}`,
    htmlContent: `
      <!DOCTYPE html><html><body style="font-family:Arial,sans-serif;background:#f4f4f4;padding:20px;">
        <div style="max-width:580px;margin:0 auto;background:#fff;border-radius:10px;overflow:hidden;">
          <div style="background:#05080f;padding:24px 32px;">
            <h2 style="color:#2dd4bf;margin:0;font-size:20px;font-weight:700;">Mulsetu</h2>
            <p style="color:#94a3b8;margin:4px 0 0;font-size:13px;">Partner Program</p>
          </div>
          <div style="padding:36px 32px;">
            <h2 style="color:#111827;font-size:22px;margin:0 0 12px;">Hi ${s(name).split(" ")[0]}, your application is in!</h2>
            <p style="color:#4b5563;font-size:15px;line-height:1.7;margin:0 0 20px;">
              Thank you for applying to the Mulsetu Partner Program. We've received your application and our team will review it within <strong>48 hours</strong>.
            </p>
            <div style="background:#f0fdfa;border:1px solid #99f6e4;border-radius:8px;padding:20px 24px;margin-bottom:28px;">
              <p style="color:#0f766e;font-size:13px;font-weight:700;margin:0 0 10px;text-transform:uppercase;letter-spacing:0.05em;">What Happens Next</p>
              <ul style="color:#374151;font-size:14px;line-height:1.8;margin:0;padding-left:18px;">
                <li>Our team reviews your application (within 48 hours)</li>
                <li>We schedule a short 20-minute onboarding call</li>
                <li>You receive your partner welcome kit and materials</li>
                <li>You start referring clients and earning commission</li>
              </ul>
            </div>
            <div style="background:#f8fafc;border-radius:8px;padding:16px 20px;margin-bottom:28px;">
              <p style="color:#374151;font-size:13px;margin:0 0 8px;font-weight:600;">Your Application Summary</p>
              <p style="color:#6b7280;font-size:13px;margin:0;line-height:1.6;">
                <strong>Organisation:</strong> ${s(org)}<br/>
                <strong>Country:</strong> ${s(country)}<br/>
                <strong>Partner Type:</strong> ${s(partnerType) !== "—" ? s(partnerType) : "To be discussed"}
              </p>
            </div>
            <p style="color:#4b5563;font-size:14px;line-height:1.7;margin:0 0 8px;">
              Have questions in the meantime? Reply to this email and we&apos;ll get back to you shortly.
            </p>
          </div>
          <div style="padding:20px 32px;background:#f9fafb;border-top:1px solid #e5e7eb;">
            <p style="color:#374151;font-size:13px;margin:0 0 4px;"><strong>Mulsetu Partner Team</strong></p>
            <p style="color:#9ca3af;font-size:12px;margin:0;">
              <a href="mailto:founder@mulsetu.com" style="color:#0d9488;text-decoration:none;">founder@mulsetu.com</a>
              &nbsp;·&nbsp;
              <a href="https://mulsetu.com/partners" style="color:#0d9488;text-decoration:none;">mulsetu.com/partners</a>
            </p>
          </div>
        </div>
      </body></html>
    `,
  };

  const [notifyRes, confirmRes] = await Promise.allSettled([
    fetch("https://api.brevo.com/v3/smtp/email", { method: "POST", headers: brevoHeaders, body: JSON.stringify(notificationPayload) }),
    fetch("https://api.brevo.com/v3/smtp/email", { method: "POST", headers: brevoHeaders, body: JSON.stringify(confirmationPayload) }),
  ]);

  const notifyOk = notifyRes.status === "fulfilled" && notifyRes.value.ok;
  const confirmOk = confirmRes.status === "fulfilled" && confirmRes.value.ok;

  if (!notifyOk) {
    const body = notifyRes.status === "fulfilled" ? await notifyRes.value.text() : "rejected";
    console.error("[Brevo] Partner notification failed:", body);
  }
  if (!confirmOk) {
    const body = confirmRes.status === "fulfilled" ? await confirmRes.value.text() : "rejected";
    console.error("[Brevo] Partner confirmation failed:", body);
  }

  if (!notifyOk && !confirmOk) {
    return NextResponse.json({ error: "Failed to send emails" }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
