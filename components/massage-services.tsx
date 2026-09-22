import Image from "next/image"
import { Hand, Waves, Dumbbell, HeartPulse } from "lucide-react"
import { Reveal } from "@/components/reveal"

const modalities = [
  {
    name: "Therapeutic Massage",
    description:
      "Work on the specific muscles that are giving you trouble, usually the ones around your neck, shoulders, and low back.",
    icon: Hand,
  },
  {
    name: "Deep Tissue",
    description:
      "Slower and firmer, for knots and tightness that have been there a while and do not let go easily.",
    icon: Waves,
  },
  {
    name: "Sport & Recovery",
    description:
      "For anyone training, competing, or working a physical job. Book it before an event or after a hard week.",
    icon: Dumbbell,
  },
  {
    name: "Relaxation Massage",
    description:
      "Lighter pressure over the whole body. Good if you are mainly here to unwind.",
    icon: HeartPulse,
  },
]

function ModalityCard({ modality }: { modality: (typeof modalities)[number] }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm">
      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
        <modality.icon className="h-6 w-6 text-primary" aria-hidden="true" />
      </div>
      <h3 className="mt-4 font-semibold text-foreground">{modality.name}</h3>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{modality.description}</p>
    </div>
  )
}

export function MassageServices() {
  return (
    <section id="massage-services" className="py-20 lg:py-28 bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-primary font-medium text-sm uppercase tracking-wider mb-3">
            What We Offer
          </p>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Types of Massage We Offer
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            You do not need to be a chiropractic patient to book a massage. If you are one, it
            helps: tight muscles pull joints back out of place, so the two work well together.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:grid-rows-2">
          <Reveal
            direction="right"
            className="relative overflow-hidden rounded-2xl bg-muted shadow-sm lg:row-span-2 lg:h-full min-h-[280px]"
          >
            <Image
              src="/images/massage-hands-shoulder.png"
              alt="Massage therapist performing deep tissue work on a client's shoulder"
              fill
              className="object-cover"
            />
          </Reveal>

          <Reveal delay={80}>
            <ModalityCard modality={modalities[0]} />
          </Reveal>
          <Reveal delay={160}>
            <ModalityCard modality={modalities[1]} />
          </Reveal>
          <Reveal delay={80}>
            <ModalityCard modality={modalities[2]} />
          </Reveal>
          <Reveal delay={160}>
            <ModalityCard modality={modalities[3]} />
          </Reveal>
        </div>

        <Reveal className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="relative aspect-[16/7] overflow-hidden rounded-2xl bg-muted shadow-sm lg:col-span-2">
            <Image
              src="/images/massage-1.jpeg"
              alt="Massage treatment room at the Wyoming Clinic of Integrated Health"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-center rounded-2xl border border-border bg-card px-6 py-5 text-sm text-muted-foreground leading-relaxed">
            <span className="font-semibold text-foreground">Pricing</span>
            <p className="mt-1">
              Rates vary by session length and type. Call{" "}
              <a
                href="tel:307-655-8775"
                className="font-medium text-primary underline underline-offset-4 hover:text-accent transition-colors"
              >
                307.655.8775
              </a>{" "}
              for current pricing and to book.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
