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
  groupMembers?: { name: string; title: string; image?: string }[]
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
    name: "Massage Therapists",
    title: "Kerry Baros, Susan Kopman, and Nina Charlson",
    bio: "Kerry Baros, Susan Kopman, and Nina Charlson offer therapeutic massage to help ease pain, reduce tension, and support recovery alongside our chiropractic and medical care.",
    wide: true,
    groupMembers: [
      { name: "Kerry Baros", title: "Massage Therapist" },
      { name: "Susan Kopman", title: "Massage Therapist" },
      { name: "Nina Charlson", title: "Massage Therapist" },
    ],
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

        <div className="flex flex-col gap-6">
          {teamMemberRows.map((row, rowIndex) =>
            row.wide ? (
              <WideMemberCard key={row.members[0].name} member={row.members[0]} />
            ) : (
              <div
                key={`row-${rowIndex}`}
                className="mx-auto grid w-full gap-6 sm:grid-cols-2 lg:max-w-3xl"
              >
                {row.members.map((member) => (
                  <StandardMemberCard key={member.name} member={member} />
                ))}
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  )
}

type TeamMemberRow = { wide: true; members: [TeamMember] } | { wide: false; members: TeamMember[] }

const teamMemberRows: TeamMemberRow[] = teamMembers.reduce<TeamMemberRow[]>((rows, member) => {
  if (member.wide) {
    rows.push({ wide: true, members: [member] })
    return rows
  }
  const lastRow = rows[rows.length - 1]
  if (lastRow && !lastRow.wide) {
    lastRow.members.push(member)
  } else {
    rows.push({ wide: false, members: [member] })
  }
  return rows
}, [])

function WideMemberCard({ member }: { member: TeamMember }) {
  return (
              <article className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm lg:flex-row">
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
                  {member.groupMembers && member.groupMembers.length > 0 ? (
                    <div className="mt-6 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:gap-6">
                      {member.groupMembers.map((groupMember) => (
                        <div key={groupMember.name} className="flex items-center gap-3">
                          <div className="relative flex h-14 w-14 shrink-0 overflow-hidden rounded-full bg-primary/5">
                            {groupMember.image ? (
                              <Image
                                src={groupMember.image}
                                alt={`${groupMember.name}, ${groupMember.title}`}
                                fill
                                className="object-cover object-top"
                              />
                            ) : (
                              <span className="flex h-full w-full items-center justify-center font-serif text-sm font-semibold text-primary">
                                {initials(groupMember.name)}
                              </span>
                            )}
                          </div>
                          <div>
                            <p className="text-sm font-semibold leading-tight text-foreground">{groupMember.name}</p>
                            <p className="text-xs text-muted-foreground">{groupMember.title}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              </article>
  )
}

function StandardMemberCard({ member }: { member: TeamMember }) {
  return (
              <article className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
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
  )
}
