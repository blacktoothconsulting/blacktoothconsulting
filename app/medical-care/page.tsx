import type { Metadata } from "next"
import { Header } from "@/components/header"
import { PageHero } from "@/components/page-hero"
import { GordonProfile } from "@/components/gordon-profile"
import { GordonBio } from "@/components/gordon-bio"
import { MedicalScheduler } from "@/components/medical-scheduler"
import { MedicalServices } from "@/components/medical-services"
import { Pricing } from "@/components/pricing"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Medical Care | Wyoming Clinic of Integrated Health | Sheridan, WY",
  description:
    "Cash-pay primary and acute medical care in Sheridan, Wyoming, with Gordon Hendrickson, PA-C. Transparent pricing, same-day visits, in-office testing and procedures.",
}

export default function MedicalCarePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHero
          eyebrow="Primary & Acute Medical Care"
          title="Straightforward Medical Care, Clear Prices"
          description="Primary & same-day care for adults and children with Gordon Hendrickson, PA-C — same-day visits, in-office testing and procedures, and transparent pricing with no surprise clinic bills."
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
          <Button
            size="lg"
            variant="ghost"
            asChild
            className="text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
          >
            <Link href="/chiropractic">Looking for Chiropractic?</Link>
          </Button>
        </PageHero>
        <GordonProfile />
        <GordonBio />
        <MedicalScheduler />
        <MedicalServices />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
