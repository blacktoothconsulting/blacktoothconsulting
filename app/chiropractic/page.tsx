import type { Metadata } from "next"
import { Header } from "@/components/header"
import { PageHero } from "@/components/page-hero"
import { CollinProfile } from "@/components/collin-profile"
import { GonsteadProcess } from "@/components/gonstead-process"
import { Services } from "@/components/services"
import { XrayResults } from "@/components/xray-results"
import { AppointmentRequest } from "@/components/appointment-request"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Chiropractic Care | Wyoming Clinic of Integrated Health | Sheridan, WY",
  description:
    "Specific Gonstead chiropractic care for the whole family in Sheridan, Wyoming, with Collin Redinger, D.C. Corrective exercises, spinal and postural screenings, digital X-ray, and more.",
}

export default function ChiropracticPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content" tabIndex={-1} className="outline-none">
        <PageHero
          eyebrow="Chiropractic Care"
          title="Gonstead Chiropractic for the Whole Family"
          description="Specific, hands-on chiropractic care focused on finding and correcting the root cause of your discomfort, so you can move well, feel better, and live the life you deserve."
          image={{
            src: "/images/collins-office.jpeg",
            alt: "Chiropractic treatment room with a Gonstead adjustment table at the Wyoming Clinic of Integrated Health",
          }}
          imagePosition="left"
        >
          <Button size="lg" asChild>
            <a href="#request">Request Appointment</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary-foreground"
          >
            <a href="tel:307-655-8775">Call 307.655.8775</a>
          </Button>
        </PageHero>
        <CollinProfile />
        <GonsteadProcess />
        <Services />
        <XrayResults />
        <AppointmentRequest
          service="Chiropractic"
          eyebrow="Book Your Visit"
          title="Request a Chiropractic Appointment"
          description="New patients welcome. Send your details and preferred times and our team will call or email you to confirm. No online account needed."
          points={[
            "Gonstead care for the whole family, from newborns to grandparents",
            "We'll match you with a time that fits your schedule",
            "Questions about your condition? Add them and we'll come prepared",
          ]}
        />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
