import Image from "next/image"
import { CheckCircle } from "lucide-react"
import { Reveal } from "@/components/reveal"

const features = [
  "Gonstead Chiropractic Care",
  "Straightforward Medical Care",
  "Therapeutic Massage",
  "Family-Friendly Environment",
]

export function About() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal direction="left" className="relative lg:order-1">
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
          </Reveal>

          <Reveal direction="right" delay={150} className="lg:order-2">
            <p className="text-primary font-medium text-sm uppercase tracking-wider mb-3">
              About Our Clinic
            </p>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Integrated Care for the Whole Family
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              The Wyoming Clinic of Integrated Health brings Gonstead chiropractic, practical medical
              care, and therapeutic massage together under one roof in Sheridan. Our goal is to help
              build a healthier community by giving people the time, information, and support they
              need to take an active role in their own health.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Whether you see Dr. Collin Redinger for chiropractic care, Gordon Hendrickson, PA-C for
              medical care, or one of our massage therapists, you can expect a personal approach
              centered around listening, explaining, and understanding what’s contributing to your
              concerns. We want you to leave each visit with a clear plan and the support you need
              to feel better and stay well for the long run.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-sm text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
