import Image from "next/image"
import { MapPin, UserRound } from "lucide-react"

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
    name: "Our Care Coordinators",
    title: "Care Coordinators",
    bio: "Team introduction coming soon.",
  },
  {
    name: "Kerry Baros",
    title: "Massage Therapist",
  },
  {
    name: "Susan Kopman",
    title: "Massage Therapist",
  },
  {
    name: "Nina Charlson",
    title: "Massage Therapist",
  },
]

function initials(name: string) {
  return name
    .replace(/,.*$/, "")
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase()
}

export function MeetOurTeam() {
  return (
    <section id="team" className="scroll-mt-20 border-y border-border bg-secondary/30 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary">The People Behind Your Care</p>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl">Meet Our Team</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Chiropractic, medical, and massage providers working together under one roof to support the
            health of Sheridan families.
          </p>
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
            Sheridan, Wyoming
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <article key={member.name} className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                {member.image ? (
                  <Image src={member.image} alt={`${member.name}, ${member.title}`} fill className="object-cover object-top" />
                ) : (
                  <div className="flex h-full items-center justify-center bg-primary/5">
                    <span className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 font-serif text-2xl font-semibold text-primary">
                      {initials(member.name)}
                    </span>
                  </div>
                )}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-serif text-xl font-semibold leading-tight text-foreground">{member.name}</h3>
                <p className="mt-1 text-sm font-medium text-primary">{member.title}</p>
                {member.bio ? (
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{member.bio}</p>
                ) : null}
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
      </div>
    </section>
  )
}
