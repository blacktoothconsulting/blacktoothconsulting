import type { ReactNode } from "react"

type PageHeroProps = {
  eyebrow: string
  title: string
  description: string
  children?: ReactNode
}

export function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-foreground">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/25 via-foreground to-foreground" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:py-24 lg:py-28 lg:px-8">
        <div className="max-w-2xl">
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
      </div>
    </section>
  )
}
