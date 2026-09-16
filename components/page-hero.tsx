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
}

export function PageHero({ eyebrow, title, description, image, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-foreground">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/25 via-foreground to-foreground" />
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:py-20 lg:px-8">
        <div>
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
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl lg:aspect-[5/4]">
          <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill priority className="object-cover" />
        </div>
      </div>
    </section>
  )
}
