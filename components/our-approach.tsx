import Image from "next/image"
import { MapPin } from "lucide-react"

export function OurApproach() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl border bg-card shadow-sm">
          <div className="grid md:grid-cols-2">
            <div className="relative min-h-64 md:min-h-full">
              <Image
                src="/images/clinic-approach-landscape.jpeg"
                alt="Wyoming alpine landscape near Sheridan with granite peaks, evergreen forest, and golden meadows"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col justify-center gap-6 p-8 lg:p-12">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">Our Approach</p>
              <h2 className="font-serif text-3xl leading-tight text-foreground text-balance lg:text-4xl">
                Care feels different when it feels personal.
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
                At Wyoming Clinic of Integrated Health, we believe good care starts with taking the time to listen. Our
                team works together to provide personal, practical care and help you take an active role in your health.
              </p>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="size-5 text-primary" aria-hidden="true" />
                <span>Sheridan, Wyoming</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
