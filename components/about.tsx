import Image from "next/image"
import { CheckCircle } from "lucide-react"

const features = [
  "Gonstead Chiropractic Care",
  "Cash-Pay Medical Care",
  "Therapeutic Massage",
  "Family-Friendly Environment",
]

export function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative lg:order-2">
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/office.avif"
                  alt="Reception and office at the Wyoming Clinic of Integrated Health"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-[3/4] relative rounded-2xl overflow-hidden shadow-xl mt-8">
                <Image
                  src="/images/medical-exam-room.jpg"
                  alt="Medical exam room at the Wyoming Clinic of Integrated Health"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 lg:right-auto lg:-left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg hidden sm:block">
              <p className="text-3xl font-bold font-serif">Integrated</p>
              <p className="text-sm opacity-90">Whole-Family Care</p>
            </div>
          </div>

          <div className="lg:order-1">
            <p className="text-primary font-medium text-sm uppercase tracking-wider mb-3">
              About Our Clinic
            </p>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Integrated Care for the Whole Family
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              The Wyoming Clinic of Integrated Health brings Gonstead chiropractic, cash-pay
              general medical care, and therapeutic massage together under one roof in Sheridan.
              Our mission is to create a community that takes an active role in their own health.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Whether you see Dr. Collin Redinger for chiropractic, Gordon Hendrickson, PA-C for
              straightforward medical care, or one of our massage therapists, we will always have
              time for you &mdash; to listen, to explain, and to find and correct the root cause so
              you can stay well for the long run.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-sm text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
