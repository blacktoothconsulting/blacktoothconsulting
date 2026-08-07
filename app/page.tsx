import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { NewPatients } from "@/components/new-patients"
import { Hours } from "@/components/hours"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <NewPatients />
        <Hours />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
