import type { Metadata } from "next"
import { Header } from "@/components/header"
import { PageHero } from "@/components/page-hero"
import { GordonProfile } from "@/components/gordon-profile"
import { GordonBio } from "@/components/gordon-bio"
import { MedicalScheduler } from "@/components/medical-scheduler"
import { MedicalServices } from "@/components/medical-services"
import { MeetTeamCta } from "@/components/meet-team-cta"
import { Pricing } from "@/components/pricing"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Medical Care | Wyoming Clinic of Integrated Health | Sheridan, WY",
  description:
    "Straightforward primary and same-day care for adults and children in Sheridan, Wyoming, with Gordon Hendrickson, PA-C. Transparent pricing, same-day visits, in-office testing and procedures.",
}

export default function MedicalCarePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHero
          eyebrow="Primary & Acute Medical Care"
          title="Straightforward Medical Care, Clear Prices"
          description="Primary & same-day care for adults and children with Gordon Hendrickson, PA-C, same-day visits, in-office testing and procedures, and transparent pricing with no surprise clinic bills."
          image={{
            src: "/images/medical-exam-room.jpg",
            alt: "Medical exam room at the Wyoming Clinic of Integrated Health",
          }}
        >
          <Button size="lg" asChild>
            <a href="#schedule">Schedule Online</a>
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
        <GordonProfile />
        <GordonBio />
        <MedicalScheduler />
        <MedicalServices />
        <MeetTeamCta />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
