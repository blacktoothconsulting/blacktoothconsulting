"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"

type ZoomedImage = { src: string; alt: string }

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
  const [zoomedImage, setZoomedImage] = useState<ZoomedImage | null>(null)

  const handleSetApi = (nextApi: CarouselApi) => {
    setApi(nextApi)
    if (!nextApi) return
    setCurrent(nextApi.selectedScrollSnap())
    nextApi.on("select", () => setCurrent(nextApi.selectedScrollSnap()))
  }

  useEffect(() => {
    if (!zoomedImage) return

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setZoomedImage(null)
    }
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [zoomedImage])

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
                          <button
                            type="button"
                            onClick={() => setZoomedImage(c.before)}
                            aria-label={`Enlarge ${c.before.alt}`}
                            className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-foreground cursor-zoom-in transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                          >
                            <Image
                              src={c.before.src || "/placeholder.svg"}
                              alt={c.before.alt}
                              fill
                              className="object-contain"
                            />
                          </button>
                          <p className="mt-3 text-center text-sm font-medium text-muted-foreground uppercase tracking-wider">
                            Before
                          </p>
                        </div>
                        <div>
                          <button
                            type="button"
                            onClick={() => setZoomedImage(c.after)}
                            aria-label={`Enlarge ${c.after.alt}`}
                            className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-foreground cursor-zoom-in transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                          >
                            <Image
                              src={c.after.src || "/placeholder.svg"}
                              alt={c.after.alt}
                              fill
                              className="object-contain"
                            />
                          </button>
                          <p className="mt-3 text-center text-sm font-medium text-muted-foreground uppercase tracking-wider">
                            After
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {c.images.map((image, index) => (
                          <div key={image.src}>
                            <button
                              type="button"
                              onClick={() => setZoomedImage(image)}
                              aria-label={`Enlarge ${image.alt}`}
                              className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-foreground cursor-zoom-in transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                            >
                              <Image
                                src={image.src || "/placeholder.svg"}
                                alt={image.alt}
                                fill
                                className="object-contain"
                              />
                            </button>
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

      {zoomedImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={zoomedImage.alt}
          onClick={() => setZoomedImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 p-4 backdrop-blur-sm animate-in fade-in duration-200 sm:p-8"
        >
          <button
            type="button"
            onClick={() => setZoomedImage(null)}
            aria-label="Close enlarged image"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-card text-foreground shadow-lg transition-colors hover:bg-muted sm:right-6 sm:top-6"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => setZoomedImage(null)}
            aria-label="Close enlarged image"
            className="relative h-full w-full max-w-5xl cursor-zoom-out"
          >
            <Image
              src={zoomedImage.src || "/placeholder.svg"}
              alt={zoomedImage.alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </button>
        </div>
      )}
    </section>
  )
}
