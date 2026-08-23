import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Coffee,
  ClipboardList,
  MessageCircle,
  Stethoscope,
  ClipboardCheck,
  Activity,
  FileImage,
  FlaskConical,
} from "lucide-react"

const sharedSteps = [
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
    description: "Visit with your provider about your condition and concerns.",
    icon: MessageCircle,
  },
  {
    number: "4",
    title: "Examination",
    description: "An exam is performed to determine exactly what is wrong and how we can help.",
    icon: Stethoscope,
  },
  {
    number: "5",
    title: "Your Plan of Care",
    description:
      "We explain what we found, review your options, and agree on next steps together.",
    icon: ClipboardCheck,
  },
]

const providerPaths = [
  {
    label: "Chiropractic",
    provider: "with Collin Redinger, D.C.",
    icon: Activity,
    detail:
      "Your exam focuses on spinal alignment, range of motion, and the mechanics behind your pain.",
    extra: "X-rays are taken if necessary to get a complete picture of your spine.",
    extraIcon: FileImage,
    href: "/chiropractic",
    cta: "Chiropractic care",
  },
  {
    label: "Medical Care",
    provider: "with Gordon Hendrickson, PA-C",
    icon: Stethoscope,
    detail:
      "Your visit covers your symptoms, history, and any chronic conditions or preventive needs.",
    extra:
      "In-office testing, imaging, or procedures may be done the same day, with prices shared up front.",
    extraIcon: FlaskConical,
    href: "/medical-care",
    cta: "Medical care",
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
              Whether you&apos;re here for chiropractic or medical care, your first visit follows
              the same simple path. Here&apos;s what you can expect when you walk through our
              doors.
            </p>

            <div className="mt-8 space-y-6">
              {sharedSteps.map((step) => (
                <div key={step.number} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold text-sm">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground flex items-center gap-2">
                      <step.icon className="h-4 w-4 text-primary" />
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/medical-care#schedule">Schedule Medical Visit</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#contact">Request Chiropractic Visit</Link>
              </Button>
            </div>
          </div>

          <div className="space-y-8">
            <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/front-desk.avif"
                alt="Front desk at the Wyoming Clinic of Integrated Health"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h3 className="font-serif text-xl font-semibold text-foreground">
                What Differs by Provider
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Steps 4 and 5 look a little different depending on who you&apos;re seeing.
              </p>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {providerPaths.map((path) => (
                  <div
                    key={path.label}
                    className="flex flex-col rounded-2xl border border-border bg-card p-5"
                  >
                    <h4 className="flex items-center gap-2 font-semibold text-foreground">
                      <path.icon className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                      {path.label}
                    </h4>
                    <p className="mt-1 text-xs text-muted-foreground">{path.provider}</p>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                      {path.detail}
                    </p>
                    <p className="mt-3 flex gap-2 text-sm text-muted-foreground leading-relaxed">
                      <path.extraIcon
                        className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                        aria-hidden="true"
                      />
                      {path.extra}
                    </p>
                    <Link
                      href={path.href}
                      className="mt-4 inline-flex text-sm font-medium text-primary underline underline-offset-4"
                    >
                      {path.cta}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
