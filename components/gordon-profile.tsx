import Image from "next/image"
import { Baby } from "lucide-react"
import { Button } from "@/components/ui/button"

export function GordonProfile() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-xl bg-muted">
              <Image
                src="/images/gordon.png"
                alt="Gordon Hendrickson, PA-C at the Wyoming Clinic of Integrated Health"
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-6 rounded-xl shadow-lg hidden sm:block">
              <p className="text-2xl font-bold font-serif">Now</p>
              <p className="text-sm opacity-90">Scheduling</p>
            </div>
          </div>

          <div>
            <p className="text-accent font-medium text-sm uppercase tracking-wider mb-3">
              Physician Assistant
            </p>
            <h2 className="font-serif text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Gordon Hendrickson, PA-C
            </h2>
            <p className="mt-3 text-base font-medium text-foreground">
              Primary &amp; Same-Day Care for Adults and Children
            </p>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Gordon Hendrickson, PA-C provides straightforward, cash-pay medical care with clear
              prices and convenient scheduling. From same-day illness and injury visits to
              preventive exams and in-office procedures, you&apos;ll always have time to ask
              questions and get clear answers.
            </p>

            {/* Pediatric care note */}
            <div className="mt-6 flex gap-3 rounded-xl border border-border bg-muted/50 p-4">
              <Baby className="h-5 w-5 shrink-0 text-primary mt-0.5" aria-hidden="true" />
              <p className="text-sm text-muted-foreground leading-relaxed">
                <span className="font-semibold text-foreground">Pediatric Primary Care:</span>{" "}
                Children are welcome for primary and same-day care. Childhood vaccines are not
                currently administered in our clinic and may be obtained through public health or
                another local vaccine provider.
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <a href="#schedule">Schedule Online</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:307-655-8775">Call 307.655.8775</a>
              </Button>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Or{" "}
              <a href="#pricing" className="font-medium text-primary underline underline-offset-4">
                view the pricing menu
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
