import Image from "next/image"

const cases = [
  {
    label: "Torticollis Case",
    before: {
      src: "/images/torticollis-before.png",
      alt: "Before chiropractic care: cervical X-ray showing torticollis with significant curve and rotation of the neck",
    },
    after: {
      src: "/images/torticollis-after.png",
      alt: "After chiropractic care: cervical X-ray showing improved cervical curve and alignment",
    },
    note: "Cervical curve and rotation measurements improved significantly following a specific course of Gonstead care.",
  },
]

export function XrayResults() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-medium text-sm uppercase tracking-wider mb-3">
            Real Results
          </p>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Before &amp; After X-Rays
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Digital X-ray lets us measure &mdash; not guess &mdash; how the spine is changing under
            care. Here is one patient&apos;s cervical spine before starting care and after a course
            of specific Gonstead adjustments.
          </p>
        </div>

        <div className="space-y-12">
          {cases.map((c) => (
            <div key={c.label} className="rounded-2xl border border-border bg-card p-6 lg:p-8">
              <h3 className="font-serif text-lg font-semibold text-foreground mb-6">{c.label}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-foreground">
                    <Image src={c.before.src || "/placeholder.svg"} alt={c.before.alt} fill className="object-contain" />
                  </div>
                  <p className="mt-3 text-center text-sm font-medium text-muted-foreground uppercase tracking-wider">
                    Before
                  </p>
                </div>
                <div>
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-foreground">
                    <Image src={c.after.src || "/placeholder.svg"} alt={c.after.alt} fill className="object-contain" />
                  </div>
                  <p className="mt-3 text-center text-sm font-medium text-muted-foreground uppercase tracking-wider">
                    After
                  </p>
                </div>
              </div>
              <p className="mt-6 text-sm text-muted-foreground leading-relaxed">{c.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
