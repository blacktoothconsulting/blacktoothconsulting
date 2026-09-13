import { Star, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

// Direct "write a review" link for the clinic's Google Business Profile.
const GOOGLE_WRITE_REVIEW_URL = "https://g.page/r/CS3mz2OaQCStEBM/review"
// Google search results page listing the clinic's reviews.
const GOOGLE_READ_REVIEWS_URL =
  "https://www.google.com/search?hl=en&q=wyoming+clinic+of+chiropractic+reviews&uds=AJ5uw195tToiqL6ANOx-is4h96lHdnabsJC3UkotAG8a3Ykzp9nDY_Oh4Ny5RfaHzK5lJXRVNwIye2YK3wedRFjmlu_LEMlMioSpS6Gx1LUCmtjhENkPXpzxf1pIfJo2MJz9CwdGIc6mWwErtFDZd2dkZfh8y6PkV1uMv5mDPCEPR3y7Vz9H42-IijZB6k3XJv8tZSCOa_hoVarbNg2-CMkrW-ml_5YvCKf3B2NX7W5vmyilIjiU9v8MecX8wXn3qVE43ILiqXbkr4GXicSB1B-yq8sNw08TF2qBf14wClgiQMeNjdmHOU6Kfw_obFY8n705VXbCkW4MTcZcp6sK_zScWRNTzDP6yBVzetiuNuSiD8L8RJ8L9rgCLB4OUEVkOkI9y3WxcVH-HClqSa0Sqc-SNKQ45PHn0-WrQKYFzEUjrTFYkI2S92TU8611LYK5A6D6xMqdn5hFtlvq_d2j8EICCMeDqqpmsh3x4W25sZbAeTP_tbAM5rYk680I9GgAMkHUC8sUKSHh7nmrENL11hFAMSL6FO692IqZ1PwryznhE_cD3KtsO2M&si=APenkKm7iecQ4G6P-TsbSMFKIQtv3EFIqRAFw-i8uEbk55Z-_-XvU4xTV7Fc4ZzfrPduEGbN8637CsOM0ShjVVZNEUIazbRepBIkX2M9XFQ9F9K6RQBfrNMRDV2T_HNPRat61QqSo7IkEtVaKama2SvgwPYCM61XFQ%3D%3D&sa=X"

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
              Read reviews from Sheridan families on Google. If we&apos;ve helped you, we&apos;d be
              honored if you shared your experience.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg" asChild>
                <a href={GOOGLE_READ_REVIEWS_URL} target="_blank" rel="noreferrer">
                  Read Our Google Reviews
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href={GOOGLE_WRITE_REVIEW_URL} target="_blank" rel="noreferrer">
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
