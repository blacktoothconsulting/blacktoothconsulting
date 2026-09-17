import { Phone, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { OpeningHours } from "@/components/opening-hours"

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
            Pick a time from the calendar below. If you would rather book over the phone, call
            us at 307.655.8775.
          </p>
        </div>

        {/* Mobile: a tall embedded iframe is a scroll trap on touch, so offer a
            full-screen "open scheduler" action instead. The embed shows from md up. */}
        <div className="mx-auto max-w-md md:hidden">
          <div className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Open the scheduler to pick a time. It works best full-screen on your phone.
            </p>
            <Button size="lg" className="mt-5 w-full" asChild>
              <a href={SCHEDULING_URL} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Open Scheduler
              </a>
            </Button>
            <div className="my-4 flex items-center gap-3 text-xs text-muted-foreground">
              <span className="h-px flex-1 bg-border" />
              or
              <span className="h-px flex-1 bg-border" />
            </div>
            <div className="mt-6 rounded-xl bg-primary p-5 text-left">
              <OpeningHours tone="primary" service="medical" showHeading={false} />
            </div>
            <Button size="lg" variant="outline" className="mt-4 w-full" asChild>
              <a href="tel:307-655-8775">
                <Phone className="mr-2 h-4 w-4" />
                Call 307.655.8775
              </a>
            </Button>
          </div>
        </div>

        <div className="mx-auto hidden w-full max-w-[650px] overflow-hidden rounded-2xl border border-border bg-card p-4 shadow-sm md:block sm:p-6 lg:max-w-4xl lg:p-8">
          <iframe
            src={SCHEDULING_URL}
            title="Schedule an appointment with Gordon Hendrickson, PA-C"
            className="block h-[70vh] max-h-[900px] min-h-[600px] w-full rounded-lg border-0"
            loading="lazy"
          />
        </div>

        <div className="mt-10 hidden text-center md:block">
          <div className="mx-auto mb-6 max-w-md rounded-xl bg-primary p-5 text-left">
            <OpeningHours tone="primary" service="medical" showHeading={false} />
          </div>
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
