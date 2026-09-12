import { Phone, Clock, CalendarCheck } from "lucide-react"
import { AppointmentForm } from "@/components/appointment-form"

type Service = "Chiropractic" | "Massage"

type AppointmentRequestProps = {
  service: Service
  eyebrow: string
  title: string
  description: string
  points?: string[]
}

export function AppointmentRequest({
  service,
  eyebrow,
  title,
  description,
  points = [],
}: AppointmentRequestProps) {
  return (
    <section id="request" className="scroll-mt-20 bg-muted/50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary">{eyebrow}</p>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{description}</p>

            {points.length > 0 && (
              <ul className="mt-8 space-y-4">
                {points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-relaxed text-foreground">
                    <CalendarCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-8 space-y-3 rounded-2xl border border-border bg-card p-6">
              <p className="flex items-center gap-2 text-sm font-medium text-foreground">
                <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
                Prefer to book by phone?
              </p>
              <a
                href="tel:307-655-8775"
                className="font-serif text-2xl font-semibold text-primary underline underline-offset-4"
              >
                307.655.8775
              </a>
              <p className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4 text-primary" aria-hidden="true" />
                Mon/Wed/Thu 8am&ndash;6pm, Tue 8am&ndash;5pm, Fri 8am&ndash;12pm
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm lg:p-8">
            <h3 className="text-lg font-semibold text-foreground">Request an Appointment</h3>
            <p className="mt-2 mb-6 text-sm leading-relaxed text-muted-foreground">
              Send us your details and preferred times. We&apos;ll reach out to confirm your{" "}
              {service.toLowerCase()} visit.
            </p>
            <AppointmentForm kind="appointment" service={service} />
          </div>
        </div>
      </div>
    </section>
  )
}
