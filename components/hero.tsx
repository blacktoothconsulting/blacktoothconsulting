"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, MapPin, Clock } from "lucide-react"

const bannerImages = [
  { src: "/images/collin1.avif", alt: "Chiropractic care at the Wyoming Clinic of Integrated Health" },
  { src: "/images/gordon.png", alt: "Gordon Hendrickson, PA-C at the Wyoming Clinic of Integrated Health" },
  { src: "/images/collin2.avif", alt: "Chiropractic care at the Wyoming Clinic of Integrated Health" },
  { src: "/images/front-door.avif", alt: "Front door of the Wyoming Clinic of Integrated Health" },
  { src: "/images/front-entry.avif", alt: "Front entry of the Wyoming Clinic of Integrated Health" },
  { src: "/images/xray1.avif", alt: "Digital X-ray imaging at the Wyoming Clinic of Integrated Health" },
  { src: "/images/xray2.avif", alt: "Digital X-ray equipment at the Wyoming Clinic of Integrated Health" },
  { src: "/images/xray3.avif", alt: "X-ray imaging room at the Wyoming Clinic of Integrated Health" },
]

export function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % bannerImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative overflow-hidden min-h-[600px] sm:min-h-[500px] lg:min-h-[560px] bg-foreground">
      {/* Letterboxed image carousel — narrower than the full-width section */}
      <div className="absolute inset-0 z-0 mx-auto max-w-4xl">
        {bannerImages.map((image, index) => (
          <div
            key={image.src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full min-h-[600px] max-w-7xl flex-col justify-center px-4 py-10 sm:min-h-[500px] lg:min-h-[560px] lg:px-8">
        <div className="max-w-2xl">
          <p className="text-primary-foreground/90 text-sm font-medium uppercase tracking-wider mb-4">
            Sheridan, Wyoming
          </p>
          <h1 className="font-serif text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl text-balance">
            Chiropractic, Massage &amp; Medical Care for the Whole Family
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-primary-foreground/90 max-w-xl">
            Our mission is to create a community that takes an active role in their own
            health! From trusted Gonstead chiropractic to general medical care, we&apos;ll
            always have time for you &mdash; to listen, to explain, and to get you answers.
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

        {/* Carousel Indicators */}
        <div className="mt-12 flex gap-2">
          {bannerImages.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setCurrent(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === current ? "w-8 bg-primary-foreground" : "w-4 bg-primary-foreground/40"
              }`}
              aria-label={`Show image ${index + 1}`}
            />
          ))}
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
                <a
                  href="https://maps.google.com/?q=528+Coffeen+Ave,+Sheridan,+WY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  528 Coffeen Ave, Sheridan, WY
                </a>
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
                <p className="text-sm text-muted-foreground">Chiropractic: Mon&ndash;Thu 8am&ndash;6pm, Fri 8am&ndash;12pm</p>
                <p className="text-sm text-muted-foreground">Medical: Mon&ndash;Fri 8am&ndash;6pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
