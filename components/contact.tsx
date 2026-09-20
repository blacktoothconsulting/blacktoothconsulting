import Link from "next/link"
import { Phone, MapPin, Mail, Clock, Star, Bone, Stethoscope, Hand } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { OpeningHours } from "@/components/opening-hours"
import { Reveal } from "@/components/reveal"

// Direct "write a review" link for the clinic's Google Business Profile.
const GOOGLE_REVIEW_URL = "https://g.page/r/CS3mz2OaQCStEBM/review"

const bookingOptions = [
  {
    icon: Bone,
    title: "Chiropractic",
    description: "Request a Gonstead chiropractic appointment with Collin Redinger, D.C.",
    href: "/chiropractic#request",
    cta: "Request Chiropractic",
  },
  {
    icon: Stethoscope,
    title: "Medical Care",
    description: "Book online with Gordon Hendrickson, PA-C. Pick a time that works for you.",
    href: "/medical-care#schedule",
    cta: "Book Medical Online",
  },
  {
    icon: Hand,
    title: "Massage Therapy",
    description: "Request a session with one of our licensed massage therapists.",
    href: "/massage#request",
    cta: "Request Massage",
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-primary scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl text-balance">
            Get Your Life Back!
          </h2>
          <p className="mt-4 text-primary-foreground/80 leading-relaxed">
            Choose the care you&apos;re looking for below, or call us at{" "}
            <a href="tel:307-655-8775" className="font-medium underline underline-offset-4">
              307.655.8775
            </a>{" "}
            anytime.
          </p>
        </Reveal>

        {/* Service-specific booking paths */}
        <div className="mb-12 grid grid-cols-1 gap-4 md:grid-cols-3">
          {bookingOptions.map((option, index) => (
            <Reveal key={option.title} delay={index * 100}>
            <Card
              className="border-0 shadow-sm transition-shadow hover:shadow-md focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2"
            >
              <Link href={option.href} className="block h-full rounded-xl focus:outline-none">
                <CardContent className="flex h-full flex-col p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                    <option.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">{option.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {option.description}
                  </p>
                  <span className="mt-5 inline-flex h-10 w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
                    {option.cta}
                  </span>
                </CardContent>
              </Link>
            </Card>
            </Reveal>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <Reveal direction="left" className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-primary-foreground mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <a
                  href="tel:307-655-8775"
                  className="flex items-center gap-4 text-primary-foreground/90 hover:text-primary-foreground transition-colors"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-foreground/10">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-primary-foreground/80">307.655.8775</p>
                  </div>
                </a>
                <a
                  href="https://maps.google.com/?q=528+Coffeen+Ave,+Sheridan,+WY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-primary-foreground/90 hover:text-primary-foreground transition-colors"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-foreground/10">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-primary-foreground/80">528 Coffeen Ave, Sheridan, WY</p>
                  </div>
                </a>
                <a
                  href="mailto:info@wyochiro.com"
                  className="flex items-center gap-4 text-primary-foreground/90 hover:text-primary-foreground transition-colors"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-foreground/10">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-primary-foreground/80">info@wyochiro.com</p>
                  </div>
                </a>
                <div className="flex items-start gap-4 text-primary-foreground/90">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-foreground/10">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium mb-3">Hours</p>
                    <OpeningHours tone="contact" showHeading={false} />
                    <div className="mt-4 flex justify-center">
                      <Button size="lg" variant="secondary" className="w-full sm:w-auto" asChild>
                        <a href={GOOGLE_REVIEW_URL} target="_blank" rel="noopener noreferrer">
                          <Star className="mr-2 h-4 w-4" />
                          Leave a Review
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Clinic location */}
          <Reveal direction="right" delay={100}>
            <Card className="w-full overflow-hidden rounded-[17px] border-0 pt-[73px] pb-[69px] shadow-xl lg:w-[380.6px]">
              <CardContent className="p-0">
                <div className="sr-only">
                  <h3>Find us in Sheridan</h3>
                  <p>Visit Wyoming Clinic of Integrated Health at 528 Coffeen Ave, Sheridan, Wyoming.</p>
                </div>
                <iframe
                  title="Map showing Wyoming Clinic of Integrated Health at 528 Coffeen Ave, Sheridan, WY"
                  src="https://www.google.com/maps?q=528+Coffeen+Ave,+Sheridan,+WY&output=embed"
                  className="h-[320px] w-full border-0 sm:h-[380px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
