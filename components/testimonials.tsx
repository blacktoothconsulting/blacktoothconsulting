"use client"

import * as React from "react"
import { Star, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { Reveal } from "@/components/reveal"

// Direct "write a review" link for the clinic's Google Business Profile.
const GOOGLE_WRITE_REVIEW_URL = "https://g.page/r/CS3mz2OaQCStEBM/review"
// Google search results page listing the clinic's reviews.
const GOOGLE_READ_REVIEWS_URL =
  "https://www.google.com/search?hl=en&q=wyoming+clinic+of+chiropractic+reviews&uds=AJ5uw195tToiqL6ANOx-is4h96lHdnabsJC3UkotAG8a3Ykzp9nDY_Oh4Ny5RfaHzK5lJXRVNwIye2YK3wedRFjmlu_LEMlMioSpS6Gx1LUCmtjhENkPXpzxf1pIfJo2MJz9CwdGIc6mWwErtFDZd2dkZfh8y6PkV1uMv5mDPCEPR3y7Vz9H42-IijZB6k3XJv8tZSCOa_hoVarbNg2-CMkrW-ml_5YvCKf3B2NX7W5vmyilIjiU9v8MecX8wXn3qVE43ILiqXbkr4GXicSB1B-yq8sNw08TF2qBf14wClgiQMeNjdmHOU6Kfw_obFY8n705VXbCkW4MTcZcp6sK_zScWRNTzDP6yBVzetiuNuSiD8L8RJ8L9rgCLB4OUEVkOkI9y3WxcVH-HClqSa0Sqc-SNKQ45PHn0-WrQKYFzEUjrTFYkI2S92TU8611LYK5A6D6xMqdn5hFtlvq_d2j8EICCMeDqqpmsh3x4W25sZbAeTP_tbAM5rYk680I9GgAMkHUC8sUKSHh7nmrENL11hFAMSL6FO692IqZ1PwryznhE_cD3KtsO2M&si=APenkKm7iecQ4G6P-TsbSMFKIQtv3EFIqRAFw-i8uEbk55Z-_-XvU4xTV7Fc4ZzfrPduEGbN8637CsOM0ShjVVZNEUIazbRepBIkX2M9XFQ9F9K6RQBfrNMRDV2T_HNPRat61QqSo7IkEtVaKama2SvgwPYCM61XFQ%3D%3D&sa=X"

type SuccessStory = {
  name: string
  quote: string
}

const SUCCESS_STORIES: SuccessStory[] = [
  {
    name: "Lindsey Monk",
    quote:
      "Originally I came in for a herniated disk between L5-S1 that severely impacted my everyday life. I couldn't work let alone sit or stand comfortably. Gabbie at Evolve physical therapy had recommended I come in and I am very glad I did. My life has improved considerably. I am back at my part time job back to taking care of my own livestock. Another great bonus from my chiropractic care is no more tingly/numb hands in the morning, it was hard for me to even make breakfast in the morning! I am very pleased with the difference I have felt in the first 2 months. My hope with all ongoing care is to keep improving and feeling better!",
  },
  {
    name: "Jodi",
    quote:
      "I was experiencing persistent vertigo and nausea that would not resolve, which caused a loss of appetite and unintended weight loss. I had numbness and tingling in my head along with swelling in my neck. My fine motor skills declined to the point that my handwriting became illegible. I also suffered from severe, sharp headaches. As these symptoms continued, my anxiety increased to the point of panic attacks. My life has changed dramatically since coming to The Wyoming Clinic. Dr. Redinger not only has healing hands and the wisdom to support his work, but he also has a genuine, compassionate heart, along with an exceptional staff who truly care. They have been a lifeline to me. I feel years younger than I did just a few months ago.",
  },
  {
    name: "Hank & Deb Owens",
    quote:
      "The original problem that brought me in to see Dr. Redinger was back and leg pain. It hurt to stand up, walk, and I couldn't lift my leg to go up the stairs. Nightly leg spasms caused many sleepless nights. The pain was taking over my life and I was drowning. My life is changed, I am gaining my life back! I wake up excited again for the day, knowing the painful struggle of just existing has given away to happiness, laughter, a clever mind, and a grateful heart. Dr. Redinger is a gift. He speaks facts, he cares, he encourages wellness on all accounts. Him and his staff are a blessing!",
  },
  {
    name: "Dawn Sipe",
    quote:
      "While helping a friend drive to North Carolina, I woke up with a stiff leg that turned into the worst pain of my life. I spent an extra week there laying on my side in so much pain, going to the ER twice with three chiropractors who were of no help. All I wanted was to get home and see Dr. Redinger. I got in on February 2nd and we started with three days a week appointments. By March 12th, I was back to work part-time and full-time by March 27th, and back to trimming horses on the weekends by March 28th. I am so thankful for Dr. Redinger. His knowledge and level of care for his patients far exceeds any other out there.",
  },
]

export function Testimonials() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)

  React.useEffect(() => {
    if (!api) return
    setCurrent(api.selectedScrollSnap())
    api.on("select", () => setCurrent(api.selectedScrollSnap()))
  }, [api])

  return (
    <section id="testimonials" className="bg-muted/50 py-16 lg:py-24">
      <div className="mx-auto max-w-5xl px-4 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary">
            Patient Experiences
          </p>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl">
            What Our Patients Say
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            We are grateful for the trust our patients place in the Wyoming Clinic of Integrated Health.
          </p>
        </Reveal>

        <Reveal delay={150} className="mt-12 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          <Carousel setApi={setApi} opts={{ loop: true }} className="px-8 py-10 sm:px-14 sm:py-12">
            <CarouselContent>
              {SUCCESS_STORIES.map((story) => (
                <CarouselItem key={story.name}>
                  <div className="flex flex-col items-center gap-5 text-center">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                      <Quote className="h-7 w-7 text-primary" aria-hidden="true" />
                    </span>
                    <div className="flex items-center gap-1 text-primary" aria-hidden="true">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="size-5 fill-current" />
                      ))}
                    </div>
                    <p className="mx-auto max-w-2xl leading-relaxed text-foreground text-balance">
                      &ldquo;{story.quote}&rdquo;
                    </p>
                    <p className="font-serif text-lg font-semibold text-foreground">
                      {story.name}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 sm:-left-2" />
            <CarouselNext className="right-0 sm:-right-2" />
          </Carousel>

          <div className="flex items-center justify-center gap-2 pb-8" role="tablist" aria-label="Select testimonial">
            {SUCCESS_STORIES.map((story, index) => (
              <button
                key={story.name}
                type="button"
                role="tab"
                aria-selected={current === index}
                aria-label={`Show testimonial from ${story.name}`}
                onClick={() => api?.scrollTo(index)}
                className={`h-2 w-2 rounded-full transition-colors ${
                  current === index ? "bg-primary" : "bg-border"
                }`}
              />
            ))}
          </div>
        </Reveal>

        <Reveal delay={250} className="mt-8 flex flex-col items-center gap-4">
          <p className="text-center text-muted-foreground">
            Read reviews from Sheridan families on Google. If we&apos;ve helped you, we&apos;d be
            honored if you shared your experience.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button size="lg" asChild className="transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]">
              <a href={GOOGLE_READ_REVIEWS_URL} target="_blank" rel="noreferrer">
                Read Our Google Reviews
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <a href={GOOGLE_WRITE_REVIEW_URL} target="_blank" rel="noreferrer">
                <Star className="mr-2 h-4 w-4" />
                Leave a Review
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
