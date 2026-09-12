import Link from "next/link"
import { ArrowRight, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MeetTeamCtaProps {
  heading?: string
  description?: string
}

export function MeetTeamCta({
  heading = "Meet the People Behind Your Care",
  description = "Get to know the providers and care coordinators who make up the Wyoming Clinic of Integrated Health.",
}: MeetTeamCtaProps) {
  return (
    <section className="py-16 lg:py-20 bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col gap-6 rounded-2xl border border-border bg-card p-8 text-center shadow-sm sm:p-10 lg:flex-row lg:items-center lg:justify-between lg:text-left">
          <div className="flex flex-col items-center gap-3 lg:flex-row lg:items-center lg:gap-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Users className="h-6 w-6" aria-hidden="true" />
            </div>
            <div>
              <h2 className="font-serif text-2xl font-bold tracking-tight text-foreground text-balance sm:text-3xl">
                {heading}
              </h2>
              <p className="mt-2 text-muted-foreground leading-relaxed text-pretty">{description}</p>
            </div>
          </div>
          <Button size="lg" asChild className="shrink-0">
            <Link href="/team">
              Meet Our Team
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
