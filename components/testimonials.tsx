import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const GOOGLE_REVIEW_URL =
  "https://www.google.com/maps/search/?api=1&query=Wyoming+Clinic+of+Integrated+Health+Sheridan+WY"

const placeholderTestimonials = [
  {
    label: "Placeholder testimonial",
    text: "Patient testimonial coming soon.",
    attribution: "Patient name or anonymous attribution to be added",
  },
  {
    label: "Placeholder testimonial",
    text: "Patient testimonial coming soon.",
    attribution: "Patient name or anonymous attribution to be added",
  },
  {
    label: "Placeholder testimonial",
    text: "Patient testimonial coming soon.",
    attribution: "Patient name or anonymous attribution to be added",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-muted/50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary">
            Patient Experiences
          </p>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl">
            What Our Patients Say
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            We are grateful for the trust our patients place in the Wyoming Clinic of Integrated
            Health. Patient experiences will be shared here as they become available.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {placeholderTestimonials.map((testimonial, index) => (
            <Card key={`${testimonial.label}-${index}`} className="h-full border-border bg-card shadow-sm">
              <CardContent className="flex h-full flex-col p-6 lg:p-8">
                <div className="mb-5 flex items-center gap-1 text-primary" aria-label="Rating placeholder">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={starIndex} className="size-4" aria-hidden="true" />
                  ))}
                  <span className="sr-only">Rating to be added</span>
                </div>
                <p className="mb-2 text-xs font-medium uppercase tracking-wider text-primary">
                  {testimonial.label}
                </p>
                <blockquote className="flex-1 font-serif text-lg leading-relaxed text-foreground">
                  “{testimonial.text}”
                </blockquote>
                <p className="mt-6 text-sm text-muted-foreground">{testimonial.attribution}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="mb-5 text-muted-foreground">Have you visited our clinic?</p>
          <Button asChild>
            <a href={GOOGLE_REVIEW_URL} target="_blank" rel="noreferrer">
              Leave a Google Review
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
