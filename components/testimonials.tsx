import { Star, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const GOOGLE_REVIEW_URL =
  "https://www.google.com/maps/search/?api=1&query=Wyoming+Clinic+of+Integrated+Health+Sheridan+WY"

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-muted/50 py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary">
            Patient Experiences
          </p>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl">
            What Our Patients Say
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            We are grateful for the trust our patients place in the Wyoming Clinic of Integrated Health.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          <div className="flex flex-col items-center gap-6 p-8 text-center sm:p-12">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
              <Quote className="h-7 w-7 text-primary" aria-hidden="true" />
            </span>
            <div className="flex items-center gap-1 text-primary" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-5 fill-current" />
              ))}
            </div>
            <p className="max-w-xl font-serif text-xl leading-relaxed text-foreground text-balance sm:text-2xl">
              Read reviews from Sheridan families on Google — and if we&apos;ve helped you, we&apos;d be
              honored if you shared your experience.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg" asChild>
                <a href={GOOGLE_REVIEW_URL} target="_blank" rel="noreferrer">
                  Read Our Google Reviews
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href={GOOGLE_REVIEW_URL} target="_blank" rel="noreferrer">
                  <Star className="mr-2 h-4 w-4" />
                  Leave a Review
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
