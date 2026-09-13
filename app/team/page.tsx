import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { PageHero } from "@/components/page-hero"
import { MeetOurTeam } from "@/components/meet-our-team"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Meet Our Team | Wyoming Clinic of Integrated Health | Sheridan, WY",
  description:
    "Meet the providers and care coordinators behind the Wyoming Clinic of Integrated Health in Sheridan, Wyoming. They welcome you, guide your care, and keep you moving.",
}

export default function TeamPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHero
          eyebrow="About Us"
          title="Meet Our Team"
          description="Get to know the providers and care coordinators behind the Wyoming Clinic of Integrated Health. They welcome you at the door and help with your care every step of the way."
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
            <Link href="/#contact">Get in Touch</Link>
          </Button>
        </PageHero>
        <MeetOurTeam />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
