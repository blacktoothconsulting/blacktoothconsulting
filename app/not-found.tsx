import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Page Not Found | Wyoming Clinic of Integrated Health",
  description: "The page you were looking for could not be found.",
  robots: { index: false, follow: true },
}

const destinations = [
  {
    name: "Chiropractic",
    href: "/chiropractic",
    description: "Gonstead spinal care for the whole family.",
  },
  {
    name: "Medical Care",
    href: "/medical-care",
    description: "Straightforward medical care with Gordon Hendrickson, PA-C.",
  },
  {
    name: "Massage",
    href: "/massage",
    description: "Therapeutic bodywork and massage, on its own or with your adjustments.",
  },
  {
    name: "Home",
    href: "/",
    description: "Hours, providers, and how to request an appointment.",
  },
]

export default function NotFound() {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content" tabIndex={-1} className="outline-none">
        <section className="relative overflow-hidden bg-foreground">
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/25 via-foreground to-foreground" />
          <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-16 lg:grid-cols-[1fr_1fr] lg:gap-16 lg:py-24 lg:px-8">
            <div>
              <p className="mb-4 text-sm font-medium uppercase tracking-wider text-primary-foreground/80">
                Error 404
              </p>
              <h1 className="font-serif text-4xl font-bold tracking-tight text-primary-foreground text-balance sm:text-5xl">
                We could not find that page
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/90 text-pretty">
                The link may be out of date, or the address may have a typo. Pick one of our main
                pages below, or call the front desk and we will point you in the right direction.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button size="lg" asChild>
                  <Link href="/#contact">Request Appointment</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary-foreground"
                >
                  <a href="tel:307-655-8775">
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    Call 307.655.8775
                  </a>
                </Button>
              </div>
            </div>

            <nav aria-label="Main pages">
              <ul className="flex flex-col gap-3">
                {destinations.map((destination) => (
                  <li key={destination.href}>
                    <Link
                      href={destination.href}
                      className="group flex min-h-16 items-center justify-between gap-4 rounded-xl border border-primary-foreground/20 bg-primary-foreground/10 px-5 py-4 text-primary-foreground transition-colors hover:bg-primary-foreground/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-foreground"
                    >
                      <span>
                        <span className="block font-serif text-xl font-semibold">
                          {destination.name}
                        </span>
                        <span className="mt-1 block text-sm leading-relaxed text-primary-foreground/80">
                          {destination.description}
                        </span>
                      </span>
                      <ArrowRight
                        className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
