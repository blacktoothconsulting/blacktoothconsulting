import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { PageHero } from "@/components/page-hero"
import { MassageTherapists } from "@/components/massage-therapists"
import { MassageServices } from "@/components/massage-services"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Massage Therapy | Wyoming Clinic of Integrated Health | Sheridan, WY",
  description:
    "Therapeutic massage in Sheridan, Wyoming, with licensed massage therapists. Deep tissue, sport and recovery, and relaxation massage — on its own or alongside Gonstead chiropractic care.",
}

export default function MassagePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHero
          eyebrow="Therapeutic Massage"
          title="Massage Therapy in Sheridan"
          description="Licensed massage therapists, in the same building as your chiropractor. Call to book a session, and tell us what is bothering you when you do."
        >
          <Button size="lg" asChild>
            <a href="tel:307-655-8775">Call 307.655.8775 to Book</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary-foreground"
          >
            <Link href="/chiropractic">Explore Chiropractic Care</Link>
          </Button>
        </PageHero>
        <MassageServices />
        <MassageTherapists />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
