import { Stethoscope, FlaskConical, Scissors, Wallet, FileText, ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const MEDICARE_CONTRACT_URL =
  "https://med.noridianmedicare.com/documents/10525/2052366/Opt-Out%2BPrivate%2BContract.pdf"

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

export function MedicalServices() {
  return (
    <section id="medical-services" className="py-20 lg:py-28 bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <p className="text-primary font-medium text-sm uppercase tracking-wider mb-3">
            What We Offer
          </p>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Medical Services
          </h2>
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
                <h3 className="mt-4 font-semibold text-lg text-foreground">{group.name}</h3>
                <ul className="mt-4 space-y-3">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2.5 text-sm text-muted-foreground leading-relaxed"
                    >
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                        aria-hidden="true"
                      />
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
            <h3 className="font-semibold text-lg text-foreground">Simple Cash-Pay Care</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Insurance is not billed. Payment is due at the time of service. Superbills are
              available upon request for patients to submit to their insurance. Insurance
              reimbursement is not guaranteed.
            </p>
            <div className="mt-4 border-t border-primary/15 pt-4">
              <div className="flex items-start gap-3">
                <FileText className="h-5 w-5 shrink-0 text-primary mt-0.5" aria-hidden="true" />
                <div>
                  <p className="text-sm font-semibold text-foreground">Medicare Patients (Opt-Out)</p>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    Medicare opt-out means that the medical provider has chosen not to bill
                    Medicare. Medicare-covered services are provided through a private agreement
                    between the patient and the provider, and Medicare generally does not reimburse
                    the patient or provider for those services. Patients should review the agreement
                    carefully and contact Medicare or their supplemental insurer with questions
                    about coverage.
                  </p>
                  <Button variant="outline" size="sm" asChild className="mt-4">
                    <a href={MEDICARE_CONTRACT_URL} target="_blank" rel="noopener noreferrer">
                      <FileText className="mr-2 h-4 w-4" />
                      View Medicare Private-Pay Contract
                      <ExternalLink className="ml-2 h-3.5 w-3.5" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
