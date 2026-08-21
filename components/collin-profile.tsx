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

            {/* Placeholder bio — replace with Collin's real bio when available */}
            <p className="mt-6 text-muted-foreground leading-relaxed">
              [Placeholder bio] Collin Redinger, D.C. provides specific, hands-on Gonstead
              chiropractic care focused on finding and correcting the root cause of your discomfort.
              He takes the time to listen, explain your care, and build a plan tailored to your
              body and your goals &mdash; so you can move well and feel your best.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              [Placeholder bio] Add Collin&apos;s background, education, certifications, and a
              personal note here. Share this text and a photo and we&apos;ll drop them right in.
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
