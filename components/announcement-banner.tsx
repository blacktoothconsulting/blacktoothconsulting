import Link from "next/link"
import { Sparkles, ArrowRight } from "lucide-react"

export function AnnouncementBanner() {
  return (
    <section className="bg-accent text-accent-foreground">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 py-4 sm:py-5">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2 shrink-0">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-foreground/15">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider">
              Now Expanding
            </span>
          </div>
          <p className="text-sm sm:text-base font-medium text-balance">
            Now scheduling cash-pay medical care with{" "}
            <span className="font-semibold">Gordon Hendrickson, PA-C</span> — chiropractic and
            healthcare under one roof.
          </p>
          <Link
            href="#providers"
            className="group inline-flex items-center gap-1.5 shrink-0 rounded-full bg-accent-foreground/15 px-4 py-1.5 text-sm font-semibold transition-colors hover:bg-accent-foreground/25"
          >
            Meet our providers
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
