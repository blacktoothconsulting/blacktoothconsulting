/**
 * Single source of truth for clinic hours.
 *
 * Chiropractic and medical keep different schedules, and these hours are shown
 * in the hero, the contact section, AND fed to Google via structured data.
 * They previously drifted out of sync, so change them here only.
 *
 * Massage hours are not confirmed yet — see WEBSITE-NEEDS.md. Once Collin
 * provides them, add a MASSAGE_HOURS entry and surface it alongside the others.
 */

export const CHIROPRACTIC_HOURS = "Mon-Thu 8am-6pm, Fri 8am-12pm"
export const MEDICAL_HOURS = "Mon-Fri 8am-6pm"

/**
 * Clinic-wide open hours for schema.org. This is the union of both schedules —
 * the window when someone is at the clinic — not either service on its own.
 * Medical runs latest, so Friday closes at 6pm even though chiropractic ends at noon.
 */
export const OPENING_HOURS: { days: string[]; opens: string; closes: string }[] = [
  {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "18:00",
  },
]
