import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Coffee, ClipboardList, MessageCircle, Stethoscope, FileImage } from "lucide-react"

const steps = [
  {
    number: "1",
    title: "Get Comfortable",
    description: "Get a cup of coffee and relax in our comfy chairs.",
    icon: Coffee,
  },
  {
    number: "2",
    title: "Complete Paperwork",
    description: "Fill out the necessary paperwork to help us understand your needs.",
    icon: ClipboardList,
  },
  {
    number: "3",
    title: "Consultation",
    description: "Visit with the Doctor about your condition and concerns.",
    icon: MessageCircle,
  },
  {
    number: "4",
    title: "Examination",
    description: "Exam performed to determine exactly what is wrong and if we can help.",
    icon: Stethoscope,
  },
  {
    number: "5",
    title: "Imaging",
    description: "X-rays taken if necessary to get a complete picture of your spine.",
    icon: FileImage,
  },
]

export function NewPatients() {
  return (
    <section id="new-patients" className="py-20 lg:py-28 bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-primary font-medium text-sm uppercase tracking-wider mb-3">
              New Patients
            </p>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              What to Expect on Your First Visit
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              We want your first visit to be comfortable and informative. Here&apos;s what 
              you can expect when you walk through our doors.
            </p>

            <div className="mt-8 space-y-6">
              {steps.map((step) => (
                <div key={step.number} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold text-sm">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground flex items-center gap-2">
                      <step.icon className="h-4 w-4 text-primary" />
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Button size="lg" asChild>
                <Link href="#contact">Schedule Your First Visit</Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/clinic-interior.jpg"
                alt="Wyoming Clinic of Chiropractic waiting room"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
