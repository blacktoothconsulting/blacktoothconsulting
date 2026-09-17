import type { ReactNode } from "react"
import Image from "next/image"

type PageHeroProps = {
  eyebrow: string
  title: string
  description: string
  image: {
    src: string
    alt: string
  }
  children?: ReactNode
  /**
   * Which side the image sits on at the lg breakpoint and above. Defaults to
   * "right". Alternating this across service pages gives each hero a subtly
   * different structure instead of every page repeating an identical template.
   */
  imagePosition?: "left" | "right"
}

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  children,
  imagePosition = "right",
}: PageHeroProps) {
  const isLeft = imagePosition === "left"

  return (
    <section className="relative overflow-hidden bg-foreground">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/25 via-foreground to-foreground" />
      <div
        className={`relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 lg:gap-12 lg:py-20 lg:px-8 ${
          isLeft ? "lg:grid-cols-[0.9fr_1.1fr]" : "lg:grid-cols-[1.1fr_0.9fr]"
        }`}
      >
        <div className={isLeft ? "lg:order-2" : "lg:order-1"}>
          <p className="text-primary-foreground/80 text-sm font-medium uppercase tracking-wider mb-4">
            {eyebrow}
          </p>
          <h1 className="font-serif text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl text-balance">
            {title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-primary-foreground/90 text-pretty">
            {description}
          </p>
          {children && <div className="mt-10 flex flex-col sm:flex-row gap-4">{children}</div>}
        </div>
        <div
          className={`relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl lg:aspect-[5/4] ${
            isLeft ? "lg:order-1" : "lg:order-2"
          }`}
        >
          <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill priority className="object-cover" />
        </div>
      </div>
    </section>
  )
}
