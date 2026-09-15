import Image from "next/image"
import { MapPin, UserRound } from "lucide-react"
import { TeamMemberCarousel } from "@/components/team-member-carousel"

type TeamMember = {
  name: string
  title: string
  image?: string
  images?: string[]
  imagePositions?: string[]
  bio?: string
  personalNote?: string
  wide?: boolean
}

const teamMembers: TeamMember[] = [
  {
    name: "Care Coordinators",
    title: "Jolene Laumbach, Leeanna Miller, and Shari Willet",
    image: "/images/front-desk.avif",
    bio: "Our care coordinators, Jolene Laumbach, Leeanna Miller, and Shari Willet, are here to help make your experience at Wyoming Clinic of Integrated Health as smooth and welcoming as possible. From scheduling appointments and answering questions to helping coordinate the details of your visit, they are an important part of keeping our clinic running smoothly and ensuring patients feel well cared for from the moment they walk through the door.",
    wide: true,
  },
  {
    name: "Collin Redinger, D.C.",
    title: "Doctor of Chiropractic",
    images: [
      "/images/collin-horse.jpeg",
      "/images/collin-hunt-creek.jpeg",
      "/images/collin-alpine.jpeg",
      "/images/collin-kids-turkey.jpeg",
      "/images/collin-cattle.jpeg",
      "/images/collin-tall-grass.jpeg",
    ],
    imagePositions: ["center 32%", "center top", "center top", "center 32%", "center top", "center 30%"],
    bio: "Dr. Collin Redinger brings Gonstead chiropractic care to families in Sheridan, with a focus on specific, individualized care and long-term health.",
    personalNote: "Family, ranch life, and the Sheridan community",
  },
  {
    name: "Gordon Hendrickson, PA-C",
    title: "Physician Assistant",
    image: "/images/gordon.png",
    bio: "Gordon Hendrickson provides primary and same-day medical care for adults and children, with a personal approach and time to listen, explain, and answer your questions.",
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
          {teamMembers.map((member) =>
            member.wide ? (
              <article
                key={member.name}
                className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm md:col-span-2 lg:col-span-3 lg:flex-row"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-muted lg:aspect-auto lg:w-80 lg:shrink-0">
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
                <div className="flex flex-1 flex-col justify-center p-6 lg:p-8">
                  <h3 className="font-serif text-xl font-semibold leading-tight text-foreground">{member.name}</h3>
                  <p className="mt-1 text-sm font-medium text-primary">{member.title}</p>
                  {member.bio ? (
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{member.bio}</p>
                  ) : null}
                </div>
              </article>
            ) : (
              <article key={member.name} className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                {member.images && member.images.length > 0 ? (
                  <TeamMemberCarousel
                    images={member.images}
                    imagePositions={member.imagePositions}
                    name={member.name}
                    title={member.title}
                  />
                ) : (
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
                )}
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
            ),
          )}
        </div>
      </div>
    </section>
  )
}
