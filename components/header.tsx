"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Phone, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  // The "About" link points to the about section on whatever page you're on.
  const aboutHref =
    pathname === "/chiropractic"
      ? "/chiropractic#about"
      : pathname === "/medical-care"
        ? "/medical-care#about"
        : "/#about"

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Chiropractic", href: "/chiropractic" },
    { name: "Medical Care", href: "/medical-care" },
    { name: "Massage", href: "/massage" },
    { name: "About", href: aboutHref },
    { name: "New Patients", href: "/#new-patients" },
    { name: "Contact", href: "/#contact" },
  ]

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [mobileMenuOpen])

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        <div className="flex min-w-0 lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex min-w-0 items-center gap-2 sm:gap-3">
            <Image
              src="/images/logo-horse-tight.png"
              alt="Wyoming Clinic of Integrated Health Logo"
              width={120}
              height={120}
              className="h-12 w-auto shrink-0 mix-blend-multiply sm:h-16"
            />
            <div className="min-w-0 text-center">
              <p className="font-serif text-base font-semibold text-foreground leading-tight sm:text-lg">
                Wyoming Clinic
              </p>
              <p className="text-[11px] text-muted-foreground sm:text-xs">of Integrated Health</p>
            </div>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-lg p-2.5 text-foreground hover:bg-muted transition-colors"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-expanded={mobileMenuOpen}
          >
            <span className="sr-only">{mobileMenuOpen ? "Close main menu" : "Open main menu"}</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-4 lg:ml-10 xl:ml-14">
          <a
            href="tel:307-655-8775"
            className="flex items-center gap-2 text-sm font-medium text-primary hover:text-accent transition-colors"
          >
            <Phone className="h-4 w-4" />
            307.655.8775
          </a>
          <Button asChild>
            <Link href="/medical-care#schedule">Book Appointment</Link>
          </Button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      <div 
        className={`lg:hidden absolute top-full left-0 right-0 max-h-[calc(100vh-4rem)] overflow-y-auto overscroll-contain bg-card border-b border-border shadow-lg transform transition-all duration-200 ease-out origin-top ${
          mobileMenuOpen 
            ? "opacity-100 scale-y-100" 
            : "opacity-0 scale-y-0 pointer-events-none"
        }`}
      >
        <div className="px-4 py-4">
          {/* Navigation links */}
          <nav className="space-y-1 mb-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-3 rounded-lg text-base font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Divider */}
          <div className="border-t border-border my-4" />

          {/* Hours section - styled like original site */}
          <div className="px-4 mb-4">
            <p className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              Opening Hours
            </p>
            <div className="mb-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">
                Chiropractic &amp; Massage
              </p>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
                <span className="text-muted-foreground">Mon &ndash; Thu</span>
                <span className="text-foreground">8:00am - 6:00pm</span>
                <span className="text-muted-foreground">Friday</span>
                <span className="text-foreground">8:00am - 12:00pm</span>
                <span className="text-muted-foreground">Sat &amp; Sun</span>
                <span className="text-foreground">CLOSED</span>
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">
                Medical Care
              </p>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
                <span className="text-muted-foreground">Mon &ndash; Fri</span>
                <span className="text-foreground">8:00am - 6:00pm</span>
                <span className="text-muted-foreground">Sat &amp; Sun</span>
                <span className="text-foreground">CLOSED</span>
              </div>
            </div>
          </div>

          {/* Contact info */}
          <div className="flex flex-col gap-3 px-4">
            <a
              href="tel:307-655-8775"
              className="flex items-center gap-2 text-primary font-medium"
            >
              <Phone className="h-4 w-4" />
              307.655.8775
            </a>
            <Button asChild className="w-full">
              <Link href="/medical-care#schedule" onClick={() => setMobileMenuOpen(false)}>
                Book Appointment
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Backdrop for closing menu when clicking outside */}
      {mobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 z-[-1]"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </header>
  )
}
