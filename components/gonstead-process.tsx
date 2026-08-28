import { Eye, Radar, Hand, Move, Scan } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Visualization",
    description: "Looking at posture, gait, and body balance.",
    icon: Eye,
  },
  {
    number: "02",
    title: "Instrumentation",
    description:
      "Using a tool called a Nervoscope to detect uneven heat distribution along the spine, which signals inflammation and nerve pressure.",
    icon: Radar,
  },
  {
    number: "03",
    title: "Static Palpation",
    description: "Feeling the spine while the patient is still to check for swelling, tenderness, and muscle texture.",
    icon: Hand,
  },
  {
    number: "04",
    title: "Motion Palpation",
    description: "Moving the spine to see how individual vertebrae restrict normal movement.",
    icon: Move,
  },
  {
    number: "05",
    title: "X-Ray Analysis",
    description: "Utilizing full-spine X-rays to study the complete skeletal structure, disc spacing, and alignment.",
    icon: Scan,
  },
]

export function GonsteadProcess() {
  return (
    <section className="py-20 lg:py-28 bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-medium text-sm uppercase tracking-wider mb-3">
            Experience the Gonstead Difference
          </p>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            The 5-Step Examination Process
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Chiropractic works when applied properly &mdash; we have to be precise and only
            correct what is wrong. <span className="italic">Find it, fix it, leave it alone.</span>{" "}
            Before any adjustment occurs, Collin performs a thorough evaluation using five
            distinct criteria.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative rounded-2xl border border-border bg-card p-6 flex flex-col gap-4"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                  <step.icon className="h-5 w-5 text-primary" />
                </div>
                <span className="font-serif text-sm font-semibold text-muted-foreground/60">
                  {step.number}
                </span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
