import Image from "next/image"
import { ImageIcon, MapPin, UserRound } from "lucide-react"

type TeamMember = {
  name: string
  title: string
  image?: string
  bio?: string
  personalNote?: string
}

const teamMembers: TeamMember[] = [
  {
    name: "Collin Redinger, D.C.",
    title: "Doctor of Chiropractic",
    image: "/images/collin-headshot.avif",
    bio: "Dr. Collin Redinger brings Gonstead chiropractic care to families in Sheridan, with a focus on specific, individualized care and long-term health.",
    personalNote: "Family, ranch life, and the Sheridan community",
  },
  {
    name: "Gordon Hendrickson, PA-C",
    title: "Physician Assistant",
    image: "/images/gordon.png",
    bio: "Gordon Hendrickson provides straightforward primary and same-day medical care for adults and children, with time for clear answers.",
  },
  {
    name: "Kerry Baros",
    title: "Massage Therapist",
    bio: "Biography coming soon.",
  },
  {
    name: "Susan Kopman",
    title: "Massage Therapist",
    bio: "Biography coming soon.",
  },
  {
    name: "Nina Charlson",
    title: "Massage Therapist",
    bio: "Biography coming soon.",
  },
]

function PhotoPlaceholder({ label, compact = false }: { label: string; compact?: boolean }) {
  return (
    <div className={`flex h-full min-h-40 flex-col items-center justify-center gap-3 bg-muted px-5 text-center ${compact ? "min-h-32" : ""}`}>
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
        <ImageIcon className="h-6 w-6 text-primary" aria-hidden="true" />
      </div>
      <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</p>
    </div>
  )
}

export function MeetOurTeam() {
  return (
    <section id="team" className="scroll-mt-20 border-y border-border bg-secondary/30 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary">The People Behind Your Care</p>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl">Meet Our Team</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            A welcoming team, working together under one roof to support the health of Sheridan families.
          </p>
        </div>

        <div className="mb-16 grid overflow-hidden rounded-2xl border border-border bg-card shadow-sm lg:grid-cols-[1.15fr_0.85fr]">
          <div className="min-h-64 lg:min-h-80">
            <PhotoPlaceholder label="Group photo placeholder — add clinic team photo" />
          </div>
          <div className="flex flex-col justify-center p-7 sm:p-10">
            <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary">One connected clinic</p>
            <h3 className="font-serif text-2xl font-semibold leading-tight text-foreground sm:text-3xl">Care feels different when it feels personal.</h3>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Use this space for a short welcome from the clinic, a shared philosophy of care, or a note about the people and community that make the practice feel like home.
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
              Sheridan, Wyoming
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <article key={member.name} className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                {member.image ? (
                  <Image src={member.image} alt={`${member.name}, ${member.title}`} fill className="object-cover object-top" />
                ) : (
                  <PhotoPlaceholder label="Provider photo placeholder" compact />
                )}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-serif text-xl font-semibold leading-tight text-foreground">{member.name}</h3>
                <p className="mt-1 text-sm font-medium text-primary">{member.title}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{member.bio}</p>
                {member.personalNote ? (
                  <p className="mt-5 flex items-start gap-2 border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground">
                    <UserRound className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    {member.personalNote}
                  </p>
                ) : null}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-xl border border-dashed border-border bg-background/70 p-5 text-center">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Optional future content: family or community photos can be added here when the clinic chooses to share them.
          </p>
        </div>
      </div>
    </section>
  )
}
