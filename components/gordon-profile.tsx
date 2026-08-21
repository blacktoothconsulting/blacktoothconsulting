import Image from "next/image"
import { Baby } from "lucide-react"
import { Button } from "@/components/ui/button"

export function GordonProfile() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-xl bg-muted">
              {/* Replace this placeholder with Gordon Hendrickson's photo when available */}
              <Image
                src="/placeholder.svg?height=750&width=600"
                alt="Gordon Hendrickson, PA-C at the Wyoming Clinic of Integrated Health"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-6 rounded-xl shadow-lg hidden sm:block">
              <p className="text-2xl font-bold font-serif">Now</p>
              <p className="text-sm opacity-90">Scheduling</p>
            </div>
          </div>

          <div>
            <p className="text-accent font-medium text-sm uppercase tracking-wider mb-3">
              Physician Assistant
            </p>
            <h2 className="font-serif text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Gordon Hendrickson, PA-C
            </h2>
            <p className="mt-3 text-base font-medium text-foreground">
              Adult Primary Care &nbsp;|&nbsp; Acute Care for Children and Adults
            </p>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Gordon Hendrickson, PA-C provides straightforward, cash-pay medical care with clear
              prices and convenient scheduling. From same-day illness and injury visits to
              preventive exams and in-office procedures, you&apos;ll always have time to ask
              questions and get clear answers.
            </p>

            {/* Pediatric care note */}
            <div className="mt-6 flex gap-3 rounded-xl border border-border bg-muted/50 p-4">
              <Baby className="h-5 w-5 shrink-0 text-primary mt-0.5" aria-hidden="true" />
              <p className="text-sm text-muted-foreground leading-relaxed">
                <span className="font-semibold text-foreground">Pediatric care:</span> Children are
                welcome for new or ongoing health concerns and injuries. Well-child exams and
                vaccines are not currently offered &mdash; please continue routine preventive care
                with your child&apos;s regular pediatrician.
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <a href="tel:307-655-8775">Call 307.655.8775 to Schedule</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#pricing">View Pricing Menu</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
