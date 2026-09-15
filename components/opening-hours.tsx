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
  /** "default" for light surfaces (card/menu), "primary" for the dark primary background. */
  tone?: "default" | "primary" | "contact"
  /** Which service schedule to show. */
  service?: "all" | "chiropractic" | "massage" | "medical"
  /** Render the "Opening Hours" heading with a clock icon. */
  showHeading?: boolean
}

export function OpeningHours({ tone = "default", service = "all", showHeading = true }: OpeningHoursProps) {
  const isPrimary = tone === "primary"
  const isContact = tone === "contact"
  const headingClass = isPrimary || isContact ? "text-primary-foreground" : "text-foreground"
  const iconClass = isPrimary || isContact ? "text-primary-foreground" : "text-primary"
  const labelClass = isContact ? "text-primary-foreground" : isPrimary ? "text-accent" : "text-primary"
  const dayClass = isContact ? "text-primary-foreground" : isPrimary ? "text-accent" : "text-muted-foreground"
  const timeClass = isContact ? "text-primary-foreground" : isPrimary ? "text-accent" : "text-foreground"

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
              {group.name}
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
