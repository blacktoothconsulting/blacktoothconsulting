/**
 * LocalBusiness (MedicalClinic) structured data for Google Search & Maps.
 *
 * TODO — confirm before/after launch:
 *   1. SITE_URL must match the live domain exactly (inferred from info@wyochiro.com).
 *   2. POSTAL_CODE is Sheridan's main ZIP — confirm it matches the Coffeen Ave suite.
 *   3. Opening hours are not published anywhere on the site yet. Once Collin
 *      provides them, fill in OPENING_HOURS below and it will be included.
 *   4. Add `geo` (latitude/longitude) and `sameAs` (Google Business Profile,
 *      Facebook, etc.) once those are known — both improve local ranking.
 */

const SITE_URL = "https://www.wyochiro.com"

const STREET_ADDRESS = "528 Coffeen Ave"
const CITY = "Sheridan"
const REGION = "WY"
const POSTAL_CODE = "82801"
const PHONE = "+1-307-655-8775"
const EMAIL = "info@wyochiro.com"
const MAP_URL = "https://maps.google.com/?q=528+Coffeen+Ave,+Sheridan,+WY"

/**
 * Example once hours are confirmed:
 *   [{ days: ["Monday", "Tuesday"], opens: "09:00", closes: "17:00" }]
 */
const OPENING_HOURS: { days: string[]; opens: string; closes: string }[] = []

const address = {
  "@type": "PostalAddress",
  streetAddress: STREET_ADDRESS,
  addressLocality: CITY,
  addressRegion: REGION,
  postalCode: POSTAL_CODE,
  addressCountry: "US",
}

const clinic = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "@id": `${SITE_URL}/#clinic`,
  name: "Wyoming Clinic of Integrated Health",
  description:
    "Integrated Gonstead chiropractic, cash-pay general medical care, and therapeutic massage for the whole family in Sheridan, Wyoming.",
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  image: `${SITE_URL}/images/logo.png`,
  telephone: PHONE,
  email: EMAIL,
  address,
  hasMap: MAP_URL,
  areaServed: {
    "@type": "City",
    name: "Sheridan",
    containedInPlace: { "@type": "State", name: "Wyoming" },
  },
  // Cash-pay clinic: insurance is not billed.
  paymentAccepted: "Cash, Check, Credit Card, Debit Card",
  currenciesAccepted: "USD",
  medicalSpecialty: "PrimaryCare",
  ...(OPENING_HOURS.length > 0 && {
    openingHoursSpecification: OPENING_HOURS.map((slot) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: slot.days,
      opens: slot.opens,
      closes: slot.closes,
    })),
  }),
  employee: [
    {
      "@type": "Person",
      name: "Collin Redinger",
      honorificSuffix: "D.C.",
      jobTitle: "Chiropractor",
      url: `${SITE_URL}/chiropractic`,
    },
    {
      "@type": "Person",
      name: "Gordon Hendrickson",
      honorificSuffix: "PA-C",
      jobTitle: "Physician Assistant",
      url: `${SITE_URL}/medical-care`,
    },
  ],
  availableService: [
    {
      "@type": "MedicalTherapy",
      name: "Gonstead Chiropractic Care",
      description:
        "Specific, hands-on Gonstead chiropractic adjustments, spinal and postural screenings, and digital X-ray imaging.",
      url: `${SITE_URL}/chiropractic`,
    },
    {
      "@type": "MedicalTherapy",
      name: "General Medical Care",
      description:
        "Cash-pay primary and same-day acute medical care with clear, up-front pricing.",
      url: `${SITE_URL}/medical-care`,
    },
    {
      "@type": "MedicalTherapy",
      name: "Therapeutic Massage",
      description:
        "Therapeutic, deep tissue, sport, recovery, and relaxation massage from licensed massage therapists.",
      url: `${SITE_URL}/massage`,
    },
  ],
}

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      // Structured data is static and contains no user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(clinic) }}
    />
  )
}
