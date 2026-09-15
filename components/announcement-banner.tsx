import Link from "next/link"
import { Sparkles, ArrowRight } from "lucide-react"

export function AnnouncementBanner() {
  return (
    <section className="bg-accent text-accent-foreground">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 py-3 sm:py-5">
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-center sm:gap-4 sm:text-left">
          <span className="hidden h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-foreground/15 sm:flex">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
          </span>
          <p className="w-[800px] max-w-full text-base font-medium text-balance sm:text-lg">
            <span className="font-semibold">Now scheduling primary and same-day care visits</span> with Gordon
            Hendrickson, PA-C{" "}
            <span className="hidden sm:inline">
              — convenient, personal medical care alongside chiropractic services, all under one roof.
            </span>
          </p>
          <Link
            href="#providers"
            className="group inline-flex shrink-0 items-center gap-1.5 rounded-full bg-accent-foreground/15 px-4 py-1.5 text-sm font-semibold transition-colors hover:bg-accent-foreground/25"
          >
            Meet our providers
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
