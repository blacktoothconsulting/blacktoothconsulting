import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, MapPin, Clock } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-chiro.jpg"
          alt="Chiropractic care at Wyoming Clinic"
          fill
          className="object-cover object-[center_calc(50%+40px)]"
          priority
        />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 sm:py-32 lg:py-40 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-primary-foreground/90 text-sm font-medium uppercase tracking-wider mb-4">
            Sheridan, Wyoming
          </p>
          <h1 className="font-serif text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl text-balance">
            Specific Chiropractic Healthcare for the Whole Family
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-primary-foreground/90 max-w-xl">
            Our mission is to help you live the life you deserve through chiropractic care. 
            We will always have time for you. To listen. To explain. You will get answers in our office.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link href="#contact">Schedule Your Visit</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary-foreground">
              <a href="tel:307-655-8775">
                <Phone className="mr-2 h-4 w-4" />
                Call 307.655.8775
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Info Cards */}
      <div className="relative z-10 bg-card border-t border-border">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
            <div className="flex items-center gap-4 py-6 px-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground">Location</p>
                <p className="text-sm text-muted-foreground">Sheridan, Wyoming</p>
              </div>
            </div>
            <div className="flex items-center gap-4 py-6 px-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground">Phone</p>
                <a href="tel:307-655-8775" className="text-sm text-primary hover:text-accent transition-colors">
                  307.655.8775
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4 py-6 px-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground">Hours</p>
                <p className="text-sm text-muted-foreground">Mon-Thu 8am-6pm, Fri 8am-12pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
