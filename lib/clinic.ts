/**
 * Single source of truth for clinic hours and provider/entity naming.
 *
 * Chiropractic and medical keep DIFFERENT schedules, and these hours appear in
 * the hero, contact section, header dropdown, the Hours section, AND are fed to
 * Google via structured data. They previously drifted out of sync and showed the
 * chiropractic-only schedule as if it were clinic-wide, so change them here only.
 *
 * Hours confirmed by Gordon Hendrickson, PA-C:
 *   Chiropractic — Mon-Thu 8:00-6:00, Fri 8:00-12:00
 *   Medical      — Mon-Fri 8:00-6:00
 *
 * Massage hours are not confirmed yet — see WEBSITE-NEEDS.md. Once Collin
 * provides them, add a MASSAGE_SCHEDULE entry and surface it alongside the others.
 */

export type DaySchedule = {
  day: string
  time: string
  isOpen: boolean
}

/** Compact one-line summaries, for tight spaces like the hero and contact cards. */
export const CHIROPRACTIC_HOURS = "Mon-Thu 8am-6pm, Fri 8am-12pm"
export const MEDICAL_HOURS = "Mon-Fri 8am-6pm"

const CLOSED = "Closed"

export const CHIROPRACTIC_SCHEDULE: DaySchedule[] = [
  { day: "Monday", time: "8:00am - 6:00pm", isOpen: true },
  { day: "Tuesday", time: "8:00am - 6:00pm", isOpen: true },
  { day: "Wednesday", time: "8:00am - 6:00pm", isOpen: true },
  { day: "Thursday", time: "8:00am - 6:00pm", isOpen: true },
  { day: "Friday", time: "8:00am - 12:00pm", isOpen: true },
  { day: "Saturday", time: CLOSED, isOpen: false },
  { day: "Sunday", time: CLOSED, isOpen: false },
]

export const MEDICAL_SCHEDULE: DaySchedule[] = [
  { day: "Monday", time: "8:00am - 6:00pm", isOpen: true },
  { day: "Tuesday", time: "8:00am - 6:00pm", isOpen: true },
  { day: "Wednesday", time: "8:00am - 6:00pm", isOpen: true },
  { day: "Thursday", time: "8:00am - 6:00pm", isOpen: true },
  { day: "Friday", time: "8:00am - 6:00pm", isOpen: true },
  { day: "Saturday", time: CLOSED, isOpen: false },
  { day: "Sunday", time: CLOSED, isOpen: false },
]

/**
 * Clinic-wide open hours for schema.org. This is the UNION of both schedules —
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

/**
 * Cross-referral wording supplied by Gordon Hendrickson, PA-C.
 *
 * Deliberately subtle — it should NOT read as though patients are routinely
 * shuttled between services. Used in a small number of places only; repeating
 * it on every section would undercut the intent. Do not reword without his
 * sign-off.
 */
export const CROSS_REFERRAL_NOTE =
  "Medical, chiropractic, and massage services are available under one roof and may complement one another when appropriate. Each service can also be scheduled independently."
