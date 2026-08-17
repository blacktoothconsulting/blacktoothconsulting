import Image from "next/image"
import Link from "next/link"
import { Phone, MapPin, Mail } from "lucide-react"

const navigation = {
  main: [
    { name: "Home", href: "#" },
    { name: "Services", href: "#services" },
    { name: "Our Providers", href: "#providers" },
    { name: "About", href: "#about" },
    { name: "New Patients", href: "#new-patients" },
    { name: "Contact", href: "#contact" },
  ],
  services: [
    { name: "Gonstead Chiropractic", href: "#services" },
    { name: "General Medical Care", href: "#providers" },
    { name: "Massage Therapy", href: "#services" },
    { name: "Nutritional Counseling", href: "#services" },
    { name: "Digital X-ray", href: "#services" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="#" className="flex items-center gap-3">
              <Image
                src="/images/logo.avif"
                alt="The Wyoming Clinic Logo"
                width={50}
                height={50}
                className="h-12 w-auto brightness-200"
              />
              <div>
                <p className="font-serif text-lg font-semibold leading-tight">
                  The Wyoming Clinic
                </p>
                <p className="text-xs text-background/70">Chiropractic &amp; Medical Care</p>
              </div>
            </Link>
            <p className="mt-4 text-sm text-background/70 leading-relaxed">
              Chiropractic and general medical care for the whole family in Sheridan, Wyoming.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="tel:307-655-8775" 
                  className="flex items-center gap-2 text-sm text-background/70 hover:text-background transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  307.655.8775
                </a>
              </li>
              <li>
                <a 
                  href="mailto:info@wyochiro.com" 
                  className="flex items-center gap-2 text-sm text-background/70 hover:text-background transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  info@wyochiro.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-background/70">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                <span>Sheridan, Wyoming</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10">
          <p className="text-center text-sm text-background/50">
            &copy; {new Date().getFullYear()} The Wyoming Clinic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
