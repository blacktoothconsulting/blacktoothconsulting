import type { Metadata } from "next"
import { Header } from "@/components/header"
import { PageHero } from "@/components/page-hero"
import { CollinProfile } from "@/components/collin-profile"
import { Services } from "@/components/services"
import { ChiropracticPricing } from "@/components/chiropractic-pricing"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Chiropractic Care | Wyoming Clinic of Integrated Health | Sheridan, WY",
  description:
    "Specific Gonstead chiropractic care for the whole family in Sheridan, Wyoming, with Collin Redinger, D.C. — corrective exercises, massage therapy, digital X-ray, and more.",
}

export default function ChiropracticPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHero
          eyebrow="Chiropractic Care"
          title="Gonstead Chiropractic for the Whole Family"
          description="Specific, hands-on chiropractic care focused on finding and correcting the root cause of your discomfort — so you can move well, feel better, and live the life you deserve."
        >
          <Button size="lg" asChild>
            <a href="tel:307-655-8775">Call 307.655.8775</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary-foreground"
          >
            <Link href="/medical-care">Looking for Medical Care?</Link>
          </Button>
        </PageHero>
        <CollinProfile />
        <Services />
        <ChiropracticPricing />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
