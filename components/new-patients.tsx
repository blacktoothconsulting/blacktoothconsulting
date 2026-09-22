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
  Hand,
  Sparkles,
} from "lucide-react"
import { Reveal } from "@/components/reveal"

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
    label: "Chiropractic Care",
    provider: "with Collin Redinger, D.C.",
    icon: Activity,
    detail:
      "Your exam focuses on spinal alignment, range of motion, and the mechanics behind your condition.",
    extra: "X-rays are taken if necessary to get a complete picture of your spine.",
    extraIcon: FileImage,
    href: "/chiropractic",
    cta: "Chiropractic Care",
    wide: false,
    scheduleHref: "/chiropractic#request",
    scheduleLabel: "Request Chiropractic Visit",
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
    cta: "Medical Care",
    wide: false,
    scheduleHref: "/medical-care#schedule",
    scheduleLabel: "Schedule Medical Visit",
  },
  {
    label: "Massage Therapy",
    provider: "with a Licensed Massage Therapist",
    icon: Hand,
    detail:
      "Your therapist asks what is bothering you, what you want worked on, and how much pressure you like.",
    extra:
      "You undress only to your comfort level and stay covered by a sheet the whole time.",
    extraIcon: Sparkles,
    href: "/massage",
    cta: "Massage Therapy",
    wide: true,
    scheduleHref: "/massage#request",
    scheduleLabel: "Request Massage Session",
  },
]

export function NewPatients() {
  return (
    <section id="new-patients" className="py-20 lg:py-28 bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="space-y-16 lg:space-y-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <Reveal direction="left">
              <div className="aspect-[4/3] relative mb-8 rounded-2xl overflow-hidden shadow-xl lg:hidden">
                <Image
                  src="/images/waiting-area-2-new.jpeg"
                  alt="Front desk at the Wyoming Clinic of Integrated Health"
                  fill
                  className="object-cover"
                />
              </div>

              <p className="text-primary font-medium text-sm uppercase tracking-wider mb-3">
                New Patients
              </p>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                What to Expect on Your First Visit
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Chiropractic, massage, or medical care: every first visit starts the same
                way. Here is how it goes.
              </p>

              <div className="mt-8 space-y-6">
                {sharedSteps.map((step, index) => (
                  <Reveal key={step.number} delay={index * 80} className="flex gap-4">
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
                  </Reveal>
                ))}
              </div>
            </Reveal>

            <Reveal direction="right" delay={100} className="hidden lg:block">
              <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/waiting-area-2-new.jpeg"
                  alt="Front desk at the Wyoming Clinic of Integrated Health"
                  fill
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>

          <Reveal delay={150}>
            <div className="text-center">
              <h3 className="font-serif text-xl font-semibold text-foreground lg:text-2xl">
                What Differs by Provider
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed lg:mx-auto lg:max-w-2xl">
                Steps 4 and 5 look a little different depending on who you&apos;re seeing.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-8 lg:grid-cols-3 lg:gap-6">
              {providerPaths.map((path, index) => (
                <Reveal
                  key={path.label}
                  delay={index * 100}
                  className={`flex flex-col rounded-2xl border border-border bg-card p-5 lg:p-6 ${
                    path.wide ? "sm:col-span-2 lg:col-span-1" : ""
                  }`}
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
                  <div className="mt-auto pt-4">
                    <Link
                      href={path.href}
                      className="inline-flex text-sm font-medium text-primary underline underline-offset-4"
                    >
                      {path.cta}
                    </Link>
                    <Button size="sm" className="mt-4 w-full" asChild>
                      <Link href={path.scheduleHref}>{path.scheduleLabel}</Link>
                    </Button>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
