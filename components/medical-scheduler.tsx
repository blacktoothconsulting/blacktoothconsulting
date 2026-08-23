import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const SCHEDULING_URL =
  "https://drchrono.com/scheduling/offices/dGhpcyBpcyAxNiBjaGFyc_pMJs8vsByeL-uGI-2sbBI="

export function MedicalScheduler() {
  return (
    <section id="schedule" className="py-20 lg:py-28 bg-muted/50 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-primary font-medium text-sm uppercase tracking-wider mb-3">
            Online Scheduling
          </p>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Book an Appointment with Gordon
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Choose a time that works for you using the calendar below. Prefer to talk to someone?
            Give us a call and we&apos;ll get you scheduled.
          </p>
        </div>

        <div className="mx-auto w-full max-w-[650px] overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          <iframe
            src={SCHEDULING_URL}
            title="Schedule an appointment with Gordon Hendrickson, PA-C"
            className="block h-[900px] w-full border-0"
            loading="lazy"
          />
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Having trouble with the scheduler, or need a same-day visit?
          </p>
          <Button size="lg" variant="outline" asChild>
            <a href="tel:307-655-8775">
              <Phone className="mr-2 h-4 w-4" />
              Call 307.655.8775
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
