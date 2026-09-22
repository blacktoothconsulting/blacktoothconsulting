"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, MapPin, Clock } from "lucide-react"
import { OpeningHours } from "@/components/opening-hours"

const bannerImages = [
  { src: "/images/front-door.avif", alt: "Front door of the Wyoming Clinic of Integrated Health" },
  { src: "/images/front-entry.avif", alt: "Front entry of the Wyoming Clinic of Integrated Health" },
  { src: "/images/xray1.avif", alt: "Digital X-ray imaging at the Wyoming Clinic of Integrated Health" },
  { src: "/images/xray2.avif", alt: "Digital X-ray equipment at the Wyoming Clinic of Integrated Health" },
  { src: "/images/xray3.avif", alt: "X-ray imaging room at the Wyoming Clinic of Integrated Health" },
  { src: "/images/collin1.avif", alt: "Chiropractic care at the Wyoming Clinic of Integrated Health" },
  { src: "/images/gordon.png", alt: "Gordon Hendrickson, PA-C at the Wyoming Clinic of Integrated Health" },
  { src: "/images/collin2.avif", alt: "Chiropractic care at the Wyoming Clinic of Integrated Health" },
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
    <section className="relative overflow-hidden bg-foreground sm:min-h-[500px] lg:min-h-[560px]">
      {/*
        Most banner photos are close to a 4:3 ratio. On desktop the band is
        given that fixed aspect ratio and vertically centered within the
        section (rather than stretched to fill the section's full height),
        so object-cover only trims a small margin instead of cropping deep
        into faces to fill an oversized frame. On mobile it keeps a portrait
        4:5 ratio, which is closer to how the section's height is used there.
      */}
      <div className="relative aspect-[4/5] w-full sm:absolute sm:inset-x-0 sm:top-1/2 sm:z-0 sm:mx-auto sm:aspect-[4/3] sm:h-auto sm:max-w-xl sm:-translate-y-1/2">
        {bannerImages.map((image, index) => (
          <div
            key={image.src}
            className={`absolute inset-0 overflow-hidden transition-opacity duration-1000 ease-in-out ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className={`object-cover ${index === current ? "animate-hero-zoom" : ""}`}
              priority={index === 0}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-foreground/60" />

        {/*
          Carousel Indicators — a vertical stack pinned near the top-right of the
          image itself. Anchored near the top (rather than the bottom of the full
          hero section, which can exceed the viewport height) so they stay visible
          on load without requiring a scroll.
        */}
        <div className="absolute right-3 top-3 flex flex-col gap-1.5 sm:right-4 sm:top-4">
          {bannerImages.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setCurrent(index)}
              className={`w-1 rounded-full transition-all duration-300 ${
                index === current ? "h-5 bg-primary-foreground/70" : "h-1.5 bg-primary-foreground/30"
              }`}
              aria-label={`Show image ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col justify-center px-4 py-10 sm:h-full sm:min-h-[500px] lg:min-h-[560px] lg:px-8">
        <div className="max-w-2xl">
          <p
            className="animate-fade-up text-primary-foreground/90 text-sm font-medium uppercase tracking-wider mb-4"
            style={{ animationDelay: "0ms" }}
          >
            Sheridan, Wyoming
          </p>
          <h1
            className="animate-fade-up font-serif text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl text-balance"
            style={{ animationDelay: "90ms" }}
          >
            Chiropractic, Massage &amp; Medical Care for the Whole Family
          </h1>
          <p
            className="animate-fade-up mt-6 text-lg leading-relaxed text-primary-foreground/90 max-w-xl"
            style={{ animationDelay: "180ms" }}
          >
            Our mission is to create a community that takes an active role in their own
            health! From trusted Gonstead chiropractic to general medical care, we&apos;ll
            always have time for you: to listen, to explain, and to get you answers.
          </p>
          <div
            className="animate-fade-up mt-10 flex flex-col sm:flex-row gap-4"
            style={{ animationDelay: "270ms" }}
          >
            <Button size="lg" asChild className="transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]">
              <Link href="#contact">Request Appointment</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary-foreground transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <a href="tel:307-655-8775">
                <Phone className="mr-2 h-4 w-4" />
                Call 307.655.8775
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Info Cards */}
      <div className="animate-fade-up relative z-10 bg-card border-t border-border" style={{ animationDelay: "360ms" }}>
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
            <div className="flex items-start gap-4 py-6 px-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-foreground mb-3">Hours</p>
                <OpeningHours showHeading={false} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
