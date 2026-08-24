import { GraduationCap, BadgeCheck } from "lucide-react"

const credentials = [
  {
    icon: GraduationCap,
    title: "Education",
    items: [
      "Bachelor of Physiology — University of Minnesota",
      "Master of Physician Assistant Studies — Rocky Mountain College, Billings, MT",
    ],
  },
  {
    icon: BadgeCheck,
    title: "Certification & Licensure",
    items: [
      "Certified by the National Commission on Certification of Physician Assistants (NCCPA)",
      "Licensed to practice medicine in the State of Wyoming",
    ],
  },
]

export function GordonBio() {
  return (
    <section id="about-gordon" className="pb-20 lg:pb-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-16">
          {/* Biography */}
          <div className="lg:col-span-2">
            <p className="text-accent font-medium text-sm uppercase tracking-wider mb-3">
              About Gordon
            </p>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Meet Gordon
            </h2>

            <div className="mt-6 space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Gordon Hendrickson, PA-C, is a certified Physician Assistant providing primary and
                acute medical care at Wyoming Clinic of Integrated Health. He has several years of
                experience in family and primary care, caring for both adults and children with a
                wide range of acute illnesses, injuries, chronic medical conditions, and preventive
                health needs.
              </p>
              <p>
                Gordon believes good healthcare should consider the whole person rather than
                focusing only on a diagnosis. His approach incorporates lifestyle modifications
                when they can meaningfully improve a patient&apos;s health, while also using
                medications, diagnostic testing, office-based procedures, and other evidence-based
                treatments when appropriate. He emphasizes clear communication and works with
                patients to develop practical treatment plans based on their individual needs and
                goals.
              </p>
              <p>
                As a Physician Assistant, Gordon is trained to diagnose and treat medical
                conditions, prescribe medications, order and interpret diagnostic testing, and
                perform a variety of office-based procedures. When a condition requires care beyond
                the scope of the clinic, he helps coordinate referral to the appropriate physician
                or specialist.
              </p>
              <p>
                Gordon enjoys being part of the Sheridan community and providing patients with
                straightforward, accessible medical care in a setting where they feel heard and
                understand their treatment options.
              </p>
            </div>
          </div>

          {/* Credentials */}
          <div className="lg:pt-16">
            <div className="rounded-2xl border border-border bg-card p-6 lg:p-8">
              <div className="space-y-8">
                {credentials.map((group) => (
                  <div key={group.title}>
                    <h3 className="flex items-center gap-2.5 font-semibold text-foreground">
                      <group.icon className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                      {group.title}
                    </h3>
                    <ul className="mt-4 space-y-3">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="flex gap-2.5 text-sm text-muted-foreground leading-relaxed"
                        >
                          <span
                            className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                            aria-hidden="true"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
