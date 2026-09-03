import { Phone, FileText, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const MEDICARE_CONTRACT_URL =
  "https://med.noridianmedicare.com/documents/10525/2052366/Opt-Out%2BPrivate%2BContract.pdf"

type PriceItem = { service: string; price: string }

const priceGroups: { title: string; note?: string; items: PriceItem[] }[] = [
  {
    title: "Common Visits",
    items: [
      { service: "Standard medical visit", price: "$125" },
      { service: "New patient comprehensive visit", price: "$195" },
      { service: "Extended or complex visit", price: "$175" },
      { service: "Brief follow-up visit", price: "$85" },
      { service: "Telemedicine visit", price: "$85" },
      { service: "Adult annual physical", price: "$175" },
      { service: "Sports, school, or camp physical", price: "$50" },
    ],
  },
  {
    title: "Common In-Office Testing",
    note: "Tests are usually added to the appropriate medical visit unless specifically included.",
    items: [
      { service: "X-ray", price: "$95" },
      { service: "Urinalysis", price: "$15" },
      { service: "Rapid strep test", price: "$25" },
      { service: "Combined COVID-19 / flu test", price: "$35" },
      { service: "12-lead EKG", price: "$65" },
      { service: "Hemoglobin A1c", price: "$30" },
      { service: "Nebulizer treatment", price: "$25" },
    ],
  },
  {
    title: "Common In-Office Procedures",
    note: "More complex procedures may cost more. We provide an estimate before non-urgent treatment. Outside pathology fees are separate.",
    items: [
      { service: "Laceration repair", price: "$175–295" },
      { service: "Abscess drainage", price: "$125–175" },
      { service: "Ingrown toenail partial removal", price: "$200" },
      { service: "Earwax removal — one ear", price: "$65" },
      { service: "Earwax removal — both ears", price: "$85" },
      { service: "Cryotherapy — 1–14 lesions", price: "$50" },
      { service: "Cryotherapy — 15+ lesions", price: "$75" },
      { service: "Large joint injection", price: "$150" },
      { service: "Small joint or bursa injection", price: "$125" },
      { service: "Trigger-point injection — 1–2 muscles", price: "$125" },
      { service: "Trigger-point injection — 3+ muscles", price: "$175" },
      { service: "Skin biopsy", price: "$150" },
    ],
  },
  {
    title: "Common In-Office Medications",
    note: "The medical visit required to evaluate and prescribe treatment is charged separately.",
    items: [
      { service: "B12 injection", price: "$30" },
      { service: "Toradol injection", price: "$40" },
      { service: "Kenalog IM injection", price: "$50" },
      { service: "Rocephin injection", price: "$27.50–50" },
      { service: "Dexamethasone injection", price: "$40" },
      { service: "Ondansetron injection", price: "$30" },
      { service: "Ondansetron (oral)", price: "$5–10" },
      { service: "IV hydration", price: "$75–90" },
      { service: "Patient-supplied medication injection", price: "$25" },
    ],
  },
]

const policies = [
  "Routine wound checks and suture removal are included when the original repair was performed at our clinic.",
  "Straightforward test-result communication is included.",
  "Outside laboratory, imaging, pathology, pharmacy, hospital, and specialist charges are billed separately by those organizations.",
  "A missed appointment or late cancellation fee of $50 may apply.",
  "Prices may change as supply and operating costs change; current pricing will be confirmed before treatment.",
]

export function Pricing() {
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-medium text-sm uppercase tracking-wider mb-3">
            Transparent Cash-Pay Pricing
          </p>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Patient Pricing Menu
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Straightforward cash-pay care with no surprise clinic bills. Payment is due at the time
            of service. You may request an itemized receipt or superbill to submit to your insurance
            plan; reimbursement is not guaranteed. This menu highlights our most common services and
            is not a complete list &mdash; please call to ask about a specific service.
          </p>
        </div>

        {/* Price tables */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {priceGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-border bg-card overflow-hidden flex flex-col"
            >
              <h3 className="font-serif text-xl font-semibold text-foreground px-6 py-4 border-b border-border">
                {group.title}
              </h3>
              <ul className="divide-y divide-border">
                {group.items.map((item) => (
                  <li key={item.service} className="flex items-baseline justify-between gap-4 px-6 py-3">
                    <span className="text-sm text-foreground">{item.service}</span>
                    <span className="text-sm font-semibold text-primary whitespace-nowrap">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
              {group.note && (
                <p className="text-xs text-muted-foreground leading-relaxed px-6 py-4 mt-auto border-t border-border bg-muted/40">
                  {group.note}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* How procedure pricing works */}
        <div className="mt-12 rounded-2xl border border-border bg-card p-6 lg:p-8">
          <h3 className="font-serif text-xl font-semibold text-foreground">
            How Procedure Pricing Works
          </h3>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            A brief evaluation directly related to safely performing a procedure is included in the
            procedure price. A separate medical-visit fee may apply when the provider also evaluates
            new symptoms, additional diagnoses, or another medical concern during the same
            appointment.
          </p>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            <span className="font-semibold text-foreground">Example:</span> A planned knee injection
            may cost $150 by itself. When the knee pain is new and requires a full medical evaluation
            before deciding on treatment, the $125 medical visit and $150 injection may both apply.
            We will explain the expected cost before proceeding whenever possible.
          </p>
        </div>

        {/* Helpful policies */}
        <div className="mt-8 rounded-2xl border border-border bg-card p-6 lg:p-8">
          <h3 className="font-serif text-xl font-semibold text-foreground">Helpful Policies</h3>
          <ul className="mt-4 space-y-3">
            {policies.map((policy) => (
              <li key={policy} className="flex gap-2.5 text-sm text-muted-foreground leading-relaxed">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                {policy}
              </li>
            ))}
          </ul>
          <div className="mt-6 border-t border-border pt-6">
            <p className="text-sm font-semibold text-foreground">Medicare Patients (Opt-Out)</p>
            <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
              Medicare opt-out means that the medical provider has chosen not to bill Medicare.
              Medicare-covered services are provided through a private agreement between the patient
              and the provider, and Medicare generally does not reimburse the patient or provider
              for those services. Patients should review the agreement carefully and contact
              Medicare or their supplemental insurer with questions about coverage.
            </p>
            <Button variant="outline" size="sm" asChild className="mt-4 h-auto w-full sm:w-auto whitespace-normal text-left">
              <a href={MEDICARE_CONTRACT_URL} target="_blank" rel="noopener noreferrer">
                <FileText className="h-4 w-4 shrink-0" />
                <span>View Medicare Private-Pay Contract</span>
                <ExternalLink className="h-3.5 w-3.5 shrink-0" />
              </a>
            </Button>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Prices updated September 2026. Current pricing will be confirmed before treatment.
          </p>
          <Button size="lg" asChild>
            <a href="tel:307-655-8775">
              <Phone className="mr-2 h-4 w-4" />
              Call to Schedule: 307.655.8775
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
