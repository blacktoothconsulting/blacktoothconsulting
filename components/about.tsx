import Image from "next/image"
import { CheckCircle } from "lucide-react"

const features = [
  "Gonstead Technique Specialists",
  "Family-Friendly Environment",
  "Personalized Treatment Plans",
  "Modern Diagnostic Equipment",
]

export function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/office.avif"
                alt="Office at the Wyoming Clinic of Integrated Health"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg hidden sm:block">
              <p className="text-3xl font-bold font-serif">Gonstead</p>
              <p className="text-sm opacity-90">Technique Certified</p>
            </div>
          </div>

          <div>
            <p className="text-primary font-medium text-sm uppercase tracking-wider mb-3">
              About Our Practice
            </p>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Dedicated to Your Health and Wellness
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Our mission is to help you live the life you deserve through chiropractic care. 
              We will always have time for you. To listen. To explain. You will get answers 
              in our office and it is an honor to do so. Thank you for your trust and confidence.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              At the Wyoming Clinic your care is individualized and tailored to your needs, 
              from the chiropractic care to the corrective exercises, as well as even the 
              massage therapy and nutrition.
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
