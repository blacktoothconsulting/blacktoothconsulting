import { Fragment } from "react"
import { Clock } from "lucide-react"

// Single source of truth for clinic hours, rendered in the mobile-menu style
// (grouped by service, day/time pairs) everywhere hours appear site-wide.
const scheduleGroups = {
  chiropractic: {
    name: "Chiropractic & Massage:",
    rows: [
      { day: "Mon, Wed, Thu", time: "8:00am - 6:00pm" },
      { day: "Tues", time: "8:00am - 5:00pm" },
      { day: "Fri", time: "8:00am - 12:00pm" },
    ],
  },
  massage: {
    name: "Massage Hours:",
    rows: [
      { day: "Mon, Wed, Thu", time: "8:00am - 6:00pm" },
      { day: "Tues", time: "8:00am - 5:00pm" },
      { day: "Fri", time: "8:00am - 12:00pm" },
    ],
  },
  medical: {
    name: "Medical:",
    rows: [
      { day: "Mon, Wed, Thu, Fri", time: "8:00am - 6:00pm" },
      { day: "Tue", time: "8:00am - 5:00pm" },
    ],
  },
}

type OpeningHoursProps = {
  /** "default" for light surfaces (card/menu), "primary" for the dark primary background, "footer" for the dark footer surface. */
  tone?: "default" | "primary" | "contact" | "footer"
  /** Which service schedule to show. */
  service?: "all" | "chiropractic" | "massage" | "medical"
  /** Render the "Opening Hours" heading with a clock icon. */
  showHeading?: boolean
  /** Override the schedule group label (only applies when a single service is shown). */
  label?: string
}

export function OpeningHours({ tone = "default", service = "all", showHeading = true, label }: OpeningHoursProps) {
  const isPrimary = tone === "primary"
  const isContact = tone === "contact"
  const isFooter = tone === "footer"
  const headingClass = isPrimary || isContact || isFooter ? "text-primary-foreground" : "text-foreground"
  const iconClass = isPrimary || isContact || isFooter ? "text-primary-foreground" : "text-primary"
  const labelClass = isContact
    ? "text-primary-foreground"
    : isFooter
      ? "text-background/50"
      : isPrimary
        ? "text-primary-foreground"
        : "text-primary"
  const dayClass = isContact
    ? "text-primary-foreground"
    : isFooter
      ? "text-background/70"
      : isPrimary
        ? "text-primary-foreground/70"
        : "text-muted-foreground"
  const timeClass = isContact
    ? "text-primary-foreground"
    : isFooter
      ? "text-background/70"
      : isPrimary
        ? "text-primary-foreground"
        : "text-foreground"

  return (
    <div>
      {showHeading && (
        <p className={`mb-3 flex items-center gap-2 text-sm font-semibold ${headingClass}`}>
          <Clock className={`h-4 w-4 ${iconClass}`} aria-hidden="true" />
          Opening Hours
        </p>
      )}
      <div className="space-y-3">
        {(service === "all" ? [scheduleGroups.chiropractic, scheduleGroups.medical] : [scheduleGroups[service]]).map((group) => (
          <div key={group.name}>
            <p className={`mb-[11px] text-sm font-semibold uppercase tracking-wider ${labelClass}`}>
              {label ?? group.name}
            </p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
              {group.rows.map((row) => (
                <Fragment key={row.day}>
                  <span className={dayClass}>{row.day}</span>
                  <span className={timeClass}>{row.time}</span>
                </Fragment>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
