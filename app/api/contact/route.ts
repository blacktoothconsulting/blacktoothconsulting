import { NextResponse } from "next/server"
import { Resend } from "resend"
import { z } from "zod"

const CLINIC_EMAIL = "frontdesk@thewyomingclinic.com"

const submissionSchema = z.object({
  // "message" = general contact form, "appointment" = service appointment request
  type: z.enum(["message", "appointment"]).default("message"),
  service: z.enum(["Chiropractic", "Massage", "Medical", "General"]).default("General"),
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("A valid email is required").max(200),
  phone: z.string().trim().max(40).optional().default(""),
  preferredTime: z.string().trim().max(300).optional().default(""),
  message: z.string().trim().max(3000).optional().default(""),
  // Unique id from the client so retries reuse the same idempotency key.
  requestId: z.string().trim().min(1).max(200),
  // Honeypot field — must be empty for a real human submission.
  company: z.string().max(0).optional().default(""),
})

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}

export async function POST(req: Request) {
  let json: unknown
  try {
    json = await req.json()
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 })
  }

  const parsed = submissionSchema.safeParse(json)
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Invalid submission." },
      { status: 400 },
    )
  }

  const { type, service, name, email, phone, preferredTime, message, requestId } = parsed.data

  const apiKey = process.env.RESEND_API_KEY
  const domain = process.env.RESEND_EMAIL_DOMAIN
  if (!apiKey || !domain) {
    console.error("[v0] Resend env vars missing (RESEND_API_KEY / RESEND_EMAIL_DOMAIN)")
    return NextResponse.json(
      { error: "The message service is not configured. Please call us at 307.655.8775." },
      { status: 500 },
    )
  }

  const resend = new Resend(apiKey)

  const isAppointment = type === "appointment"
  const subject = isAppointment
    ? `${service} appointment request from ${name}`
    : `Website message from ${name}`

  const rows: Array<[string, string]> = [
    ["Type", isAppointment ? `${service} appointment request` : "General message"],
    ["Name", name],
    ["Email", email],
    ["Phone", phone || "Not provided"],
  ]
  if (isAppointment) rows.push(["Preferred day/time", preferredTime || "Not provided"])
  rows.push(["Message", message || "Not provided"])

  const html = `
    <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;color:#111;line-height:1.6">
      <h2 style="margin:0 0 16px">${escapeHtml(subject)}</h2>
      <table style="border-collapse:collapse;width:100%;max-width:560px">
        ${rows
          .map(
            ([label, value]) => `
          <tr>
            <td style="padding:8px 12px;border:1px solid #e5e5e5;background:#f7f7f7;font-weight:600;vertical-align:top;white-space:nowrap">${escapeHtml(
              label,
            )}</td>
            <td style="padding:8px 12px;border:1px solid #e5e5e5;vertical-align:top;white-space:pre-wrap">${escapeHtml(
              value,
            )}</td>
          </tr>`,
          )
          .join("")}
      </table>
      <p style="margin-top:16px;font-size:13px;color:#666">Sent from the Wyoming Clinic of Integrated Health website.</p>
    </div>
  `

  const { data, error } = await resend.emails.send(
    {
      from: `Wyoming Clinic Website <noreply@${domain}>`,
      to: [CLINIC_EMAIL],
      replyTo: email,
      subject,
      html,
    },
    { idempotencyKey: `${type}/${requestId}` },
  )

  if (error) {
    console.error("[v0] Resend send failed:", error.message)
    return NextResponse.json(
      { error: "We couldn't send your message. Please call us at 307.655.8775." },
      { status: 502 },
    )
  }

  return NextResponse.json({ ok: true, id: data?.id })
}
