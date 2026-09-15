import { Header } from "@/components/header"
import { AnnouncementBanner } from "@/components/announcement-banner"
import { Hero } from "@/components/hero"
import { ProvidersOverview } from "@/components/providers-overview"
import { MeetTeamCta } from "@/components/meet-team-cta"
import { About } from "@/components/about"
import { Testimonials } from "@/components/testimonials"
import { NewPatients } from "@/components/new-patients"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <AnnouncementBanner />
        <Hero />
        <ProvidersOverview />
        <MeetTeamCta />
        <About />
        <Testimonials />
        <NewPatients />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
