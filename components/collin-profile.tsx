import Image from "next/image"
import { Button } from "@/components/ui/button"

export function CollinProfile() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-xl bg-muted">
              <Image
                src="/images/collin-headshot.avif"
                alt="Collin Redinger, D.C. at the Wyoming Clinic of Integrated Health"
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg hidden sm:block">
              <p className="text-2xl font-bold font-serif">Gonstead</p>
              <p className="text-sm opacity-90">Chiropractic</p>
            </div>
          </div>

          <div>
            <p className="text-primary font-medium text-sm uppercase tracking-wider mb-3">
              Doctor of Chiropractic
            </p>
            <h2 className="font-serif text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Collin Redinger, D.C.
            </h2>
            <p className="mt-3 text-base font-medium text-foreground">
              Gonstead Chiropractic &nbsp;|&nbsp; Care for the Whole Family
            </p>

            {/*
              TODO: Replace with Collin's full bio once he provides it.
              Needed: education/chiropractic school, Gonstead training, years in
              practice, years in Sheridan, and a personal note. The copy below is
              intentionally general so nothing unverified is published.
            */}
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Collin practices Gonstead chiropractic &mdash; a specific, hands-on approach that
              looks for the underlying cause of your problem rather than just the spot that hurts.
              He treats the whole family, from newborns to grandparents.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              He will take the time to explain what he finds and why he is recommending what he
              recommends. If you have questions about whether chiropractic is right for what you
              are dealing with, call the office and ask.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <a href="tel:307-655-8775">Call 307.655.8775 to Schedule</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#chiropractic-pricing">View Pricing</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
