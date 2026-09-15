"use client"

import { useEffect, useState } from "react"
import { Loader2, Send, CheckCircle2, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const CLINIC_PHONE = "307.655.8775"
const CLINIC_PHONE_TEL = "tel:307-655-8775"

type Service = "Chiropractic" | "Massage" | "Medical" | "General"
type Kind = "message" | "appointment"

type AppointmentFormProps = {
  kind?: Kind
  service?: Service
  submitLabel?: string
}

type Status = "idle" | "submitting" | "success" | "error"

export function AppointmentForm({
  kind = "message",
  service = "General",
  submitLabel,
}: AppointmentFormProps) {
  const [mounted, setMounted] = useState(false)
  const [status, setStatus] = useState<Status>("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredTime: "",
    message: "",
    company: "", // honeypot
  })

  // Render only after mount so browser extensions injecting DOM into inputs
  // can't trigger a hydration mismatch.
  useEffect(() => {
    setMounted(true)
  }, [])

  const isAppointment = kind === "appointment"

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("submitting")
    setErrorMessage("")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: kind,
          service,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          preferredTime: formData.preferredTime,
          message: formData.message,
          company: formData.company,
          requestId:
            typeof crypto !== "undefined" && "randomUUID" in crypto
              ? crypto.randomUUID()
              : `${Date.now()}-${Math.random().toString(36).slice(2)}`,
        }),
      })

      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as { error?: string } | null
        throw new Error(data?.error ?? "Something went wrong. Please try again.")
      }

      setStatus("success")
      setFormData({ name: "", email: "", phone: "", preferredTime: "", message: "", company: "" })
    } catch (err) {
      setStatus("error")
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.")
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex flex-col items-start gap-3 rounded-lg border border-primary/20 bg-primary/5 p-6 text-sm leading-relaxed text-muted-foreground"
      >
        <span className="flex items-center gap-2 text-base font-semibold text-foreground">
          <CheckCircle2 className="h-5 w-5 text-primary" aria-hidden="true" />
          Thank you — your {isAppointment ? "request" : "message"} is on its way.
        </span>
        <p>
          {isAppointment
            ? "Our team will call or email you to confirm a time. For anything urgent, please call us."
            : "We'll get back to you as soon as we can. For anything urgent, please call us."}{" "}
          <a
            href={CLINIC_PHONE_TEL}
            className="font-medium text-primary underline underline-offset-4"
          >
            {CLINIC_PHONE}
          </a>
        </p>
        <Button variant="outline" onClick={() => setStatus("idle")}>
          Send another {isAppointment ? "request" : "message"}
        </Button>
      </div>
    )
  }

  if (!mounted) {
    return (
      <div className="space-y-4" aria-hidden="true">
        <div className="h-[68px] rounded-md bg-muted/50" />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="h-[68px] rounded-md bg-muted/50" />
          <div className="h-[68px] rounded-md bg-muted/50" />
        </div>
        <div className="h-[122px] rounded-md bg-muted/50" />
        <div className="h-10 rounded-md bg-muted/50" />
      </div>
    )
  }

  const busy = status === "submitting"

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Honeypot: hidden from users, catches bots */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor={`company-${service}`}>Company</label>
        <input
          id={`company-${service}`}
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor={`name-${service}`} className="mb-1.5 block text-sm font-medium text-foreground">
          Full Name
        </label>
        <Input
          id={`name-${service}`}
          type="text"
          placeholder="Your name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          disabled={busy}
        />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor={`email-${service}`} className="mb-1.5 block text-sm font-medium text-foreground">
            Email
          </label>
          <Input
            id={`email-${service}`}
            type="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            disabled={busy}
          />
        </div>
        <div>
          <label htmlFor={`phone-${service}`} className="mb-1.5 block text-sm font-medium text-foreground">
            Phone
          </label>
          <Input
            id={`phone-${service}`}
            type="tel"
            placeholder="(307) 555-0000"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            disabled={busy}
          />
        </div>
      </div>

      {isAppointment && (
        <div>
          <label
            htmlFor={`preferred-${service}`}
            className="mb-1.5 block text-sm font-medium text-foreground"
          >
            Preferred days & times
          </label>
          <Input
            id={`preferred-${service}`}
            type="text"
            placeholder="e.g. weekday mornings, or Tue/Thu afternoons"
            value={formData.preferredTime}
            onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
            disabled={busy}
          />
        </div>
      )}

      <div>
        <label htmlFor={`message-${service}`} className="mb-1.5 block text-sm font-medium text-foreground">
          {isAppointment ? "What would you like help with?" : "Message"}
        </label>
        <Textarea
          id={`message-${service}`}
          placeholder={
            isAppointment
              ? "Tell us briefly what's bothering you or what you'd like to book."
              : "How can we help you?"
          }
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required={!isAppointment}
          disabled={busy}
        />
      </div>

      {status === "error" && (
        <p
          role="alert"
          className="rounded-lg border border-destructive/30 bg-destructive/5 p-3 text-sm text-destructive"
        >
          {errorMessage}{" "}
          <a href={CLINIC_PHONE_TEL} className="font-medium underline underline-offset-4">
            Call {CLINIC_PHONE}
          </a>
        </p>
      )}

      <Button type="submit" className="w-full" disabled={busy}>
        {busy ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
            Sending…
          </>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" aria-hidden="true" />
            {submitLabel ?? (isAppointment ? "Request Appointment" : "Send Message")}
          </>
        )}
      </Button>

      <p className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
        <Phone className="h-3.5 w-3.5" aria-hidden="true" />
        Prefer to talk? Call{" "}
        <a href={CLINIC_PHONE_TEL} className="font-medium text-primary underline underline-offset-4">
          {CLINIC_PHONE}
        </a>
      </p>
    </form>
  )
}
