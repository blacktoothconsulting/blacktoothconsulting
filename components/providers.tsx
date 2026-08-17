import Image from "next/image"
import Link from "next/link"
import {
  Stethoscope,
  ClipboardList,
  HeartPulse,
  FlaskConical,
  ShieldCheck,
  Activity,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

// NOTE: General healthcare service list below is placeholder content.
// Update these to match the exact services Gordon Hendrickson, PA will offer.
const medicalServices = [
  {
    name: "Primary & Preventive Care",
    description: "Annual wellness exams, routine checkups, and proactive care to keep you healthy.",
    icon: Stethoscope,
  },
  {
    name: "Acute & Sick Visits",
    description: "Same-week care for colds, infections, minor injuries, and other everyday illnesses.",
    icon: HeartPulse,
  },
  {
    name: "Chronic Disease Management",
    description: "Ongoing support for conditions like diabetes, hypertension, and thyroid health.",
    icon: Activity,
  },
  {
    name: "Lab Work & Diagnostics",
    description: "Convenient in-office bloodwork, screenings, and diagnostic testing.",
    icon: FlaskConical,
  },
  {
    name: "Physicals & Sports Physicals",
    description: "School, sports, employment, and DOT physicals for the whole family.",
    icon: ClipboardList,
  },
  {
    name: "Wellness & Health Screenings",
    description: "Preventive screenings and personalized guidance for long-term wellness.",
    icon: ShieldCheck,
  },
]

export function Providers() {
  return (
    <section id="providers" className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-medium text-sm uppercase tracking-wider mb-3">
            Now Offering Medical Care
          </p>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Meet Our Providers
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            The Wyoming Clinic is growing. Alongside our trusted Gonstead chiropractic care,
            we&apos;re proud to welcome general medical care to our practice &mdash; giving your
            family more ways to stay well, all in one place.
          </p>
        </div>

        {/* Provider spotlight: Gordon Hendrickson, PA */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <div className="relative">
            <div className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-xl bg-muted">
              {/* Replace this placeholder with Gordon Hendrickson's photo when available */}
              <Image
                src="/placeholder.svg?height=750&width=600"
                alt="Gordon Hendrickson, Physician Assistant at The Wyoming Clinic"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-6 rounded-xl shadow-lg hidden sm:block">
              <p className="text-2xl font-bold font-serif">New</p>
              <p className="text-sm opacity-90">Medical Provider</p>
            </div>
          </div>

          <div>
            <p className="text-accent font-medium text-sm uppercase tracking-wider mb-3">
              Physician Assistant
            </p>
            <h3 className="font-serif text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Gordon Hendrickson, PA
            </h3>
            {/* Placeholder bio - replace with Gordon's actual bio when provided */}
            <p className="mt-6 text-muted-foreground leading-relaxed">
              We&apos;re thrilled to welcome Gordon Hendrickson, PA to The Wyoming Clinic. As a
              certified Physician Assistant, Gordon brings comprehensive general medical care to
              our community &mdash; from preventive checkups to managing everyday health concerns.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              His patient-first approach means you&apos;ll always have time to ask questions, get
              clear answers, and build a care plan that fits your life. A full biography is on the
              way.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="#contact">Schedule a Visit</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:307-655-8775">Call 307.655.8775</a>
              </Button>
            </div>
          </div>
        </div>

        {/* Medical services grid */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h3 className="font-serif text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-balance">
            General Healthcare Services
          </h3>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Comprehensive medical care for every stage of life, right here in Sheridan.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {medicalServices.map((service) => (
            <Card
              key={service.name}
              className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-accent/40"
            >
              <CardContent className="p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="h-6 w-6 text-accent" />
                </div>
                <h4 className="mt-4 font-semibold text-lg text-foreground">
                  {service.name}
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
