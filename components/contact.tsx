"use client"

import { useState, useEffect } from "react"
import { Phone, MapPin, Mail, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

export function Contact() {
  const [mounted, setMounted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  // Render the form only after mount so browser extensions (e.g. password
  // managers) that inject DOM into inputs can't cause a hydration mismatch.
  useEffect(() => {
    setMounted(true)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We will get back to you soon.")
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  return (
    <section id="contact" className="py-20 lg:py-28 bg-primary">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl text-balance">
            Get Your Life Back!
          </h2>
          <p className="mt-4 text-primary-foreground/80 leading-relaxed">
            Ready to start your journey to better health? Contact us today to schedule 
            your appointment or ask any questions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-primary-foreground mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <a 
                  href="tel:307-655-8775" 
                  className="flex items-center gap-4 text-primary-foreground/90 hover:text-primary-foreground transition-colors"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-foreground/10">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-primary-foreground/80">307.655.8775</p>
                  </div>
                </a>
                <div className="flex items-center gap-4 text-primary-foreground/90">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-foreground/10">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-primary-foreground/80">Sheridan, Wyoming</p>
                  </div>
                </div>
                <a 
                  href="mailto:info@wyochiro.com" 
                  className="flex items-center gap-4 text-primary-foreground/90 hover:text-primary-foreground transition-colors"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-foreground/10">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-primary-foreground/80">info@wyochiro.com</p>
                  </div>
                </a>
                <div className="flex items-center gap-4 text-primary-foreground/90">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-foreground/10">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Hours</p>
                    <p className="text-primary-foreground/80">Mon-Thu 8am-6pm, Fri 8am-12pm</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Button 
                size="lg" 
                variant="secondary" 
                className="w-full sm:w-auto"
                asChild
              >
                <a href="tel:307-655-8775">
                  <Phone className="mr-2 h-4 w-4" />
                  Call to Get Started
                </a>
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-0 shadow-xl">
            <CardContent className="p-6 lg:p-8">
              <h3 className="text-lg font-semibold text-foreground mb-6">
                Send Us a Message
              </h3>
              {mounted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">
                        Phone
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(307) 555-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="How can we help you?"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              ) : (
                <div className="space-y-4" aria-hidden="true">
                  <div className="h-[68px] rounded-md bg-muted/50" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="h-[68px] rounded-md bg-muted/50" />
                    <div className="h-[68px] rounded-md bg-muted/50" />
                  </div>
                  <div className="h-[122px] rounded-md bg-muted/50" />
                  <div className="h-10 rounded-md bg-muted/50" />
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
