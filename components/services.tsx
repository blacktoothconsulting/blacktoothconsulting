import Link from "next/link"
import { 
  Activity, 
  Heart, 
  Apple, 
  Scan, 
  MonitorCheck 
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    name: "Corrective Exercises",
    description: "Personalized exercise programs designed to strengthen your body and support spinal health.",
    icon: Activity,
  },
  {
    name: "Lifestyle Advice",
    description: "Guidance on daily habits and ergonomics to maintain optimal spinal alignment.",
    icon: Heart,
  },
  {
    name: "Nutritional Counseling",
    description: "Customized nutrition plans to support your body's healing and overall wellness.",
    icon: Apple,
  },
  {
    name: "Spinal & Postural Screenings",
    description: "Comprehensive assessments to identify and address postural imbalances.",
    icon: Scan,
  },
  {
    name: "Digital X-ray Imaging",
    description: "State-of-the-art imaging technology for precise diagnosis and treatment planning.",
    icon: MonitorCheck,
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-medium text-sm uppercase tracking-wider mb-3">
            What We Offer
          </p>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Our Services
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            At the Wyoming Clinic, your care is individualized and tailored to your needs, 
            from chiropractic care to corrective exercises and nutrition. Massage therapy has
            its own page &mdash;{" "}
            <Link
              href="/massage"
              className="font-medium text-primary underline underline-offset-4 hover:text-accent transition-colors"
            >
              see what our therapists offer
            </Link>
            .
          </p>
        </div>

        <p className="mx-auto mb-12 max-w-2xl rounded-lg border border-border bg-card px-4 py-3 text-center text-sm text-muted-foreground leading-relaxed">
          <span className="font-semibold text-foreground">Pricing:</span> Chiropractic pricing
          depends on your specific care plan. Call us at{" "}
          <a
            href="tel:307-655-8775"
            className="font-medium text-primary underline underline-offset-4 hover:text-accent transition-colors"
          >
            307.655.8775
          </a>{" "}
          for current pricing.
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card 
              key={service.name} 
              className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30"
            >
              <CardContent className="p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 font-semibold text-lg text-foreground">
                  {service.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
