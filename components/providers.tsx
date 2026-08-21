import Image from "next/image"
import Link from "next/link"
import {
  Stethoscope,
  FlaskConical,
  Scissors,
  Baby,
  Wallet,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const careGroups = [
  {
    name: "Medical Care",
    icon: Stethoscope,
    items: [
      "New and established patient visits",
      "Same-day care for illnesses, injuries, and ongoing concerns",
      "Telemedicine and brief follow-up visits for established patients",
      "Adult preventive, sports, school, employment, and preoperative exams",
    ],
  },
  {
    name: "Testing & Treatments",
    icon: FlaskConical,
    items: [
      "X-rays and EKGs",
      "Rapid illness testing, urinalysis, pregnancy testing, glucose, A1c, and other in-office tests",
      "Nebulizer treatments and medication injections",
    ],
  },
  {
    name: "In-Office Procedures",
    icon: Scissors,
    items: [
      "Wound closure, sutures, and wound care",
      "Abscess drainage, foreign-body removal, and ingrown toenail treatment",
      "Skin biopsies, cryotherapy, and minor skin lesion or cyst removal",
      "Joint and trigger-point injections, and earwax removal",
    ],
  },
]

export function Providers() {
  return (
    <section id="providers" className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-medium text-sm uppercase tracking-wider mb-3">
            Now Scheduling Medical Care
          </p>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Meet Our Providers
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Alongside our trusted Gonstead chiropractic care, we&apos;re proud to welcome general
            medical care to the Wyoming Clinic of Integrated Health &mdash; transparent, cash-pay
            care for patients of all ages, all in one place.
          </p>
        </div>

        {/* Provider spotlight: Gordon Hendrickson, PA-C */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
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
            <h3 className="font-serif text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Gordon Hendrickson, PA-C
            </h3>
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
                <Link href="#pricing">View Pricing Menu</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* What we offer */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h3 className="font-serif text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-balance">
            What We Offer
          </h3>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            A sample of the medical care available in-office. This is not a complete list &mdash;
            call to ask about a specific service.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {careGroups.map((group) => (
            <Card
              key={group.name}
              className="border-border/50 hover:shadow-lg hover:border-accent/40 transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <group.icon className="h-6 w-6 text-accent" aria-hidden="true" />
                </div>
                <h4 className="mt-4 font-semibold text-lg text-foreground">{group.name}</h4>
                <ul className="mt-4 space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm text-muted-foreground leading-relaxed">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Cash-pay note */}
        <div className="mt-12 flex flex-col sm:flex-row items-start gap-4 rounded-2xl bg-primary/5 border border-primary/15 p-6 lg:p-8">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
            <Wallet className="h-6 w-6 text-primary" aria-hidden="true" />
          </div>
          <div>
            <h4 className="font-semibold text-lg text-foreground">Simple Cash-Pay Care</h4>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Insurance is not billed. Payment is due at the time of service. Superbills are
              available upon request for patients to submit to their insurance. Insurance
              reimbursement is not guaranteed.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
