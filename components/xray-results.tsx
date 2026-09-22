"use client"

import { useState } from "react"
import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"

type SplitCase = {
  label: string
  layout: "split"
  before: { src: string; alt: string }
  after: { src: string; alt: string }
  note: string
}

type CombinedCase = {
  label: string
  layout: "combined"
  images: { src: string; alt: string }[]
  note: string
}

const cases: (SplitCase | CombinedCase)[] = [
  {
    label: "Torticollis Case",
    layout: "split",
    before: {
      src: "/images/torticollis-before.png",
      alt: "Before chiropractic care: cervical X-ray showing torticollis with significant curve and rotation of the neck",
    },
    after: {
      src: "/images/torticollis-after.png",
      alt: "After chiropractic care: cervical X-ray showing improved cervical curve and alignment",
    },
    note: "Cervical curve and rotation measurements improved significantly following a specific course of Gonstead care.",
  },
  {
    label: "Chronic Migraine Case",
    layout: "combined",
    images: [
      {
        src: "/images/migraine-case-ap.png",
        alt: "Before and after AP spinal X-ray comparison showing improved cervical, thoracic, and pelvic alignment measurements",
      },
      {
        src: "/images/migraine-case-lateral.png",
        alt: "Before and after lateral spinal X-ray comparison showing improved cervical curve",
      },
    ],
    note: "This one was a young gal with weekly migraines that would put her in the ER. She hasn't had one in 5 years now and her spine continues to improve.",
  },
]

export function XrayResults() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  const handleSetApi = (nextApi: CarouselApi) => {
    setApi(nextApi)
    if (!nextApi) return
    setCurrent(nextApi.selectedScrollSnap())
    nextApi.on("select", () => setCurrent(nextApi.selectedScrollSnap()))
  }

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-medium text-sm uppercase tracking-wider mb-3">
            Real Results
          </p>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Before &amp; After X-Rays
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Digital X-ray lets us measure, not guess, how the spine is changing under
            care. Here are two patients&apos; spines before starting care and after a
            course of specific Gonstead adjustments.
          </p>
        </div>

        <div className="relative">
          <Carousel setApi={handleSetApi} opts={{ align: "start" }} className="mx-auto max-w-4xl">
            <CarouselContent>
              {cases.map((c) => (
                <CarouselItem key={c.label}>
                  <div className="rounded-2xl border border-border bg-card p-6 lg:p-8">
                    <h3 className="font-serif text-lg font-semibold text-foreground mb-6">
                      {c.label}
                    </h3>

                    {c.layout === "split" ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-foreground">
                            <Image
                              src={c.before.src || "/placeholder.svg"}
                              alt={c.before.alt}
                              fill
                              className="object-contain"
                            />
                          </div>
                          <p className="mt-3 text-center text-sm font-medium text-muted-foreground uppercase tracking-wider">
                            Before
                          </p>
                        </div>
                        <div>
                          <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-foreground">
                            <Image
                              src={c.after.src || "/placeholder.svg"}
                              alt={c.after.alt}
                              fill
                              className="object-contain"
                            />
                          </div>
                          <p className="mt-3 text-center text-sm font-medium text-muted-foreground uppercase tracking-wider">
                            After
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {c.images.map((image, index) => (
                          <div key={image.src}>
                            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-foreground">
                              <Image
                                src={image.src || "/placeholder.svg"}
                                alt={image.alt}
                                fill
                                className="object-contain"
                              />
                            </div>
                            <p className="mt-3 text-center text-sm font-medium text-muted-foreground uppercase tracking-wider">
                              Before &amp; After
                            </p>
                          </div>
                        ))}
                      </div>
                    )}

                    <p className="mt-6 text-sm text-muted-foreground leading-relaxed text-center">
                      {c.note}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>

          <div className="mt-6 flex items-center justify-center gap-2">
            {cases.map((c, index) => (
              <button
                key={c.label}
                type="button"
                onClick={() => api?.scrollTo(index)}
                aria-label={`Show ${c.label}`}
                aria-current={current === index}
                className={`h-2.5 rounded-full transition-all ${
                  current === index ? "w-6 bg-primary" : "w-2.5 bg-border"
                }`}
              />
            ))}
          </div>

          <div className="mt-4 flex items-center justify-center gap-4 sm:hidden">
            <button
              type="button"
              onClick={() => api?.scrollPrev()}
              className="text-sm font-medium text-muted-foreground underline"
            >
              Previous
            </button>
            <button
              type="button"
              onClick={() => api?.scrollNext()}
              className="text-sm font-medium text-muted-foreground underline"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
