import Image from "next/image"
import Link from "next/link"
import { Activity, Stethoscope, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const careLines = [
  {
    eyebrow: "Chiropractic Care",
    provider: "Collin Redinger, D.C.",
    icon: Activity,
    image: "/images/collin1.avif",
    imageAlt: "Chiropractic care at the Wyoming Clinic of Integrated Health",
    description:
      "Specific, hands-on Gonstead chiropractic care for the whole family — helping you move well, feel better, and live the life you deserve.",
    highlights: [
      "Gonstead technique specialists",
      "Corrective exercises & massage therapy",
      "Digital X-ray & postural screenings",
    ],
    href: "/chiropractic",
    cta: "Explore Chiropractic Care",
  },
  {
    eyebrow: "Medical Care",
    provider: "Gordon Hendrickson, PA-C",
    icon: Stethoscope,
    image: "/placeholder.svg?height=750&width=600",
    imageAlt: "Gordon Hendrickson, PA-C at the Wyoming Clinic of Integrated Health",
    description:
      "Straightforward, cash-pay primary and acute medical care with clear, up-front pricing and convenient same-day scheduling.",
    highlights: [
      "Primary & same-day acute care",
      "In-office testing & procedures",
      "Transparent cash-pay pricing",
    ],
    href: "/medical-care",
    cta: "Explore Medical Care",
  },
]

export function ProvidersOverview() {
  return (
    <section id="providers" className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-medium text-sm uppercase tracking-wider mb-3">
            Two Kinds of Care, One Clinic
          </p>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Meet Our Providers
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            The Wyoming Clinic of Integrated Health brings together trusted Gonstead chiropractic
            and cash-pay medical care under one roof. Choose the care you&apos;re looking for to
            learn more.
          </p>
        </div>

        {/* Two care-line cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {careLines.map((line) => (
            <div
              key={line.href}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                <Image
                  src={line.image || "/placeholder.svg"}
                  alt={line.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
              </div>

              <div className="flex flex-1 flex-col p-6 lg:p-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                    <line.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-primary">
                      {line.eyebrow}
                    </p>
                    <p className="font-serif text-lg font-semibold text-foreground leading-tight">
                      {line.provider}
                    </p>
                  </div>
                </div>

                <p className="mt-5 text-muted-foreground leading-relaxed">{line.description}</p>

                <ul className="mt-6 space-y-3">
                  {line.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex gap-2.5 text-sm text-foreground leading-relaxed"
                    >
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                        aria-hidden="true"
                      />
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-2 mt-auto">
                  <Button asChild className="w-full sm:w-auto">
                    <Link href={line.href}>
                      {line.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
