import Link from "next/link"
import { Phone, MapPin, Mail, Clock, Star, Activity, Stethoscope, Hand } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AppointmentForm } from "@/components/appointment-form"

const CLINIC_EMAIL = "info@wyochiro.com"

/*
  Google review link. Replace this with the clinic's exact "write a review"
  URL from their Google Business Profile (Google Business dashboard →
  "Ask for reviews" → copy link, usually looks like https://g.page/r/XXXX/review).
  Until that is confirmed, this opens the clinic on Google Maps where the
  Reviews tab and "Write a review" button are available.
*/
const GOOGLE_REVIEW_URL =
  "https://www.google.com/maps/search/?api=1&query=Wyoming+Clinic+of+Integrated+Health+Sheridan+WY"

const bookingOptions = [
  {
    icon: Activity,
    title: "Chiropractic",
    description: "Request a Gonstead chiropractic appointment with Collin Redinger, D.C.",
    href: "/chiropractic#request",
    cta: "Request Chiropractic",
  },
  {
    icon: Stethoscope,
    title: "Medical Care",
    description: "Book online with Gordon Hendrickson, PA-C — pick a time that works for you.",
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
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl text-balance">
            Get Your Life Back!
          </h2>
          <p className="mt-4 text-primary-foreground/80 leading-relaxed">
            Choose the care you&apos;re looking for below, or send us a message. Call{" "}
            <a href="tel:307-655-8775" className="font-medium underline underline-offset-4">
              307.655.8775
            </a>{" "}
            anytime.
          </p>
        </div>

        {/* Service-specific booking paths */}
        <div className="mb-12 grid grid-cols-1 gap-4 md:grid-cols-3">
          {bookingOptions.map((option) => (
            <Card key={option.title} className="border-0 shadow-sm">
              <CardContent className="flex h-full flex-col p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                  <option.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{option.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {option.description}
                </p>
                <Button className="mt-5 w-full" asChild>
                  <Link href={option.href}>{option.cta}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
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
                <div className="flex items-center gap-4 text-primary-foreground/90">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-foreground/10">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Hours</p>
                    <p className="text-primary-foreground/80">
                      Chiropractic: Mon/Wed/Thu 8am&ndash;6pm, Tue 8am&ndash;5pm, Fri 8am&ndash;12pm
                    </p>
                    <p className="text-primary-foreground/80">Medical: Mon&ndash;Fri 8am&ndash;6pm</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto" asChild>
                <a href={GOOGLE_REVIEW_URL} target="_blank" rel="noopener noreferrer">
                  <Star className="mr-2 h-4 w-4" />
                  Leave a Review
                </a>
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-0 shadow-xl">
            <CardContent className="p-6 lg:p-8">
              <h3 className="text-lg font-semibold text-foreground">Send Us a Message</h3>
              <p className="mt-2 mb-6 text-sm text-muted-foreground leading-relaxed">
                Have a question about chiropractic, massage, or medical care? Send it here and
                we&apos;ll reply by email or phone. For anything urgent, call{" "}
                <a
                  href="tel:307-655-8775"
                  className="font-medium text-primary underline underline-offset-4"
                >
                  307.655.8775
                </a>
                .
              </p>
              <AppointmentForm kind="message" service="General" />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
