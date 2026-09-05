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
    <section id="about" className="scroll-mt-20 pb-20 lg:pb-28 bg-background">
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
                same-day medical care for adults and children at Wyoming Clinic of Integrated
                Health. His clinical experience includes treating acute illnesses and injuries,
                managing chronic conditions and medications, and providing preventive care.
              </p>
              <p>
                Gordon believes healthcare should focus on the whole person, not just a diagnosis.
                His approach combines lifestyle changes when they can meaningfully improve health,
                along with other evidence-based treatments when appropriate. He emphasizes clear
                communication and works with patients to develop practical treatment plans based on
                their individual needs and goals.
              </p>
              <p>
                As a Physician Assistant, Gordon can diagnose and treat medical conditions,
                prescribe medications, order and interpret diagnostic testing, and perform
                office-based procedures. When additional evaluation or specialized care is needed,
                he helps coordinate referral to the appropriate specialist.
              </p>
              <p>
                Gordon studied physiology at the University of Minnesota before continuing his
                medical training at Rocky Mountain College in Billings, Montana, where he earned his
                Master of Physician Assistant Studies.
              </p>
              <p>
                Outside of the clinic, Gordon enjoys spending time with his wife and five children,
                as well as hiking and mountain biking in the Bighorn Mountains.
              </p>
              <p>
                Gordon is proud to serve the Sheridan community and strives to provide thoughtful,
                accessible medical care in a setting where patients feel heard, understand their
                options, and have an active role in their healthcare.
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
