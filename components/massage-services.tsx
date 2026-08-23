import Image from "next/image"
import { Hand, Waves, Dumbbell, HeartPulse } from "lucide-react"

const modalities = [
  {
    name: "Therapeutic Massage",
    description:
      "Focused soft-tissue work targeting the muscles that support your spine, relieving tension and improving range of motion.",
    icon: Hand,
  },
  {
    name: "Deep Tissue",
    description:
      "Slower, firmer pressure that reaches the deeper layers of muscle and fascia to release chronic tightness and adhesions.",
    icon: Waves,
  },
  {
    name: "Sport & Recovery",
    description:
      "Pre- and post-activity work for athletes and active patients to support recovery, flexibility, and injury prevention.",
    icon: Dumbbell,
  },
  {
    name: "Relaxation Massage",
    description:
      "Gentler, full-body work focused on stress relief, circulation, and giving your nervous system a chance to reset.",
    icon: HeartPulse,
  },
]

export function MassageServices() {
  return (
    <section id="massage-services" className="py-20 lg:py-28 bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted shadow-sm">
            <Image
              src="/images/massage-room.png"
              alt="Massage treatment room at the Wyoming Clinic of Integrated Health"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-primary font-medium text-sm uppercase tracking-wider mb-3">
              What We Offer
            </p>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Massage That Works With Your Care Plan
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Massage is available on its own or alongside chiropractic care. When muscles stay
              tight, adjustments have a harder time holding &mdash; addressing both together helps
              your progress last.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {modalities.map((modality) => (
                <div key={modality.name}>
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                    <modality.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 font-semibold text-foreground">{modality.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {modality.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
