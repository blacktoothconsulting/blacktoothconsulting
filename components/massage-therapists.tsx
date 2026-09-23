import Image from "next/image"
import { User } from "lucide-react"

const therapists = [
  {
    name: "Kerry Smith",
    title: "Massage Therapist",
    image: null as string | null,
    bio: "Biography coming soon.",
  },
  {
    name: "Susan Kopman",
    title: "Massage Therapist",
    image: null as string | null,
    bio: "Biography coming soon.",
  },
  {
    name: "Nina Charlson",
    title: "Massage Therapist",
    image: null as string | null,
    bio: "Biography coming soon.",
  },
]

export function MassageTherapists() {
  return (
    <section id="therapists" className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-medium text-sm uppercase tracking-wider mb-3">
            Our Team
          </p>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Meet Our Massage Therapists
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Our therapists are licensed in Wyoming and work in the same office as Collin, so
            your massage and your adjustments stay on the same page.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {therapists.map((therapist) => (
            <div
              key={therapist.name}
              className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm sm:flex-row"
            >
              <div className="relative flex aspect-[4/3] shrink-0 items-center justify-center bg-muted sm:aspect-auto sm:w-40">
                {therapist.image ? (
                  <Image
                    src={therapist.image || "/placeholder.svg"}
                    alt={`${therapist.name}, ${therapist.title}`}
                    fill
                    sizes="(max-width: 640px) 100vw, 160px"
                    className="object-cover"
                  />
                ) : (
                  <div className="flex flex-col items-center gap-2 p-6 text-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                      <User className="h-7 w-7 text-primary" aria-hidden="true" />
                    </div>
                    <span className="text-xs text-muted-foreground">Headshot coming soon</span>
                  </div>
                )}
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-serif text-xl font-semibold text-foreground leading-tight">
                  {therapist.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-primary">{therapist.title}</p>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  {therapist.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
