import { Header } from "@/components/header"
import { AnnouncementBanner } from "@/components/announcement-banner"
import { Hero } from "@/components/hero"
import { ProvidersOverview } from "@/components/providers-overview"
import { NewPatients } from "@/components/new-patients"
import { Hours } from "@/components/hours"
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
        <NewPatients />
        <Hours />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
