import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

type PriceItem = { service: string; price: string }

// Placeholder chiropractic pricing — replace these with the clinic's actual prices.
const priceGroups: { title: string; items: PriceItem[] }[] = [
  {
    title: "New Patient Visits",
    items: [
      { service: "New patient exam & consultation", price: "$—" },
      { service: "Exam with digital X-rays", price: "$—" },
      { service: "Report of findings & first adjustment", price: "$—" },
    ],
  },
  {
    title: "Chiropractic Adjustments",
    items: [
      { service: "Standard adjustment", price: "$—" },
      { service: "Extended visit", price: "$—" },
      { service: "Follow-up / maintenance visit", price: "$—" },
    ],
  },
  {
    title: "Therapies & Add-Ons",
    items: [
      { service: "Massage therapy (see Massage page)", price: "$—" },
      { service: "Corrective exercise session", price: "$—" },
      { service: "Additional digital X-ray", price: "$—" },
    ],
  },
]

export function ChiropracticPricing() {
  return (
    <section id="chiropractic-pricing" className="py-20 lg:py-28 bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-medium text-sm uppercase tracking-wider mb-3">
            Chiropractic Pricing
          </p>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Chiropractic Pricing Menu
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Our chiropractic rates are being finalized. Call the clinic at 307.655.8775 and
            we will go over current pricing with you.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
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
                  <li
                    key={item.service}
                    className="flex items-baseline justify-between gap-4 px-6 py-3"
                  >
                    <span className="text-sm text-foreground">{item.service}</span>
                    <span className="text-sm font-semibold text-primary whitespace-nowrap">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Call for current chiropractic pricing and to schedule your visit.
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
