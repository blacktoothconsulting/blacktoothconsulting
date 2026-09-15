"use client"

import Image from "next/image"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

type TeamMemberCarouselProps = {
  images: string[]
  name: string
  title: string
}

export function TeamMemberCarousel({ images, name, title }: TeamMemberCarouselProps) {
  const [index, setIndex] = useState(0)
  const total = images.length

  function goTo(next: number) {
    setIndex((next + total) % total)
  }

  return (
    <div className="group relative aspect-[4/3] overflow-hidden bg-muted">
      {images.map((src, i) => (
        <Image
          key={src}
          src={src || "/placeholder.svg"}
          alt={`${name}, ${title} — photo ${i + 1} of ${total}`}
          fill
          className={`object-cover object-top transition-opacity duration-500 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={i === index ? undefined : true}
        />
      ))}

      {total > 1 ? (
        <>
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            aria-label="Previous photo"
            className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-background/80 text-foreground shadow-sm backdrop-blur transition hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            aria-label="Next photo"
            className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-background/80 text-foreground shadow-sm backdrop-blur transition hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>

          <div className="absolute inset-x-0 bottom-3 flex items-center justify-center gap-2">
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to photo ${i + 1}`}
                aria-current={i === index ? "true" : undefined}
                className={`h-2.5 rounded-full transition-all ${
                  i === index ? "w-6 bg-background" : "w-2.5 bg-background/60 hover:bg-background/80"
                }`}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  )
}
