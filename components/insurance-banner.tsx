import { ShieldCheck } from "lucide-react"

export function InsuranceBanner() {
  return (
    <section aria-label="Insurance announcement" className="border-y border-primary/20 bg-primary/10">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 px-4 py-4 lg:px-8">
        <ShieldCheck className="size-5 shrink-0 text-primary" aria-hidden="true" />
        <p className="text-base font-medium leading-relaxed text-foreground text-pretty">
          Insurance for medical care coming soon
        </p>
      </div>
    </section>
  )
}
