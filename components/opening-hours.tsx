import { Fragment } from "react"
import { Clock } from "lucide-react"

// Single source of truth for clinic hours, rendered in the mobile-menu style
// (grouped by service, day/time pairs) everywhere hours appear site-wide.
const scheduleGroups = [
  {
    name: "Massage Hours:",
    rows: [
      { day: "Mon, Wed, Thu", time: "8:00am - 6:00pm" },
      { day: "Tuesday", time: "8:00am - 5:00pm" },
      { day: "Friday", time: "8:00am - 12:00pm" },
      { day: "Sat & Sun", time: "CLOSED" },
    ],
  },
]

type OpeningHoursProps = {
  /** "default" for light surfaces (card/menu), "primary" for the dark primary background. */
  tone?: "default" | "primary"
  /** Render the "Opening Hours" heading with a clock icon. */
  showHeading?: boolean
}

export function OpeningHours({ tone = "default", showHeading = true }: OpeningHoursProps) {
  const isPrimary = tone === "primary"
  const headingClass = isPrimary ? "text-primary-foreground" : "text-foreground"
  const iconClass = isPrimary ? "text-primary-foreground" : "text-primary"
  const labelClass = isPrimary ? "text-accent" : "text-primary"
  const dayClass = isPrimary ? "text-accent" : "text-muted-foreground"
  const timeClass = isPrimary ? "text-accent" : "text-foreground"

  return (
    <div>
      {showHeading && (
        <p className={`mb-3 flex items-center gap-2 text-sm font-semibold ${headingClass}`}>
          <Clock className={`h-4 w-4 ${iconClass}`} aria-hidden="true" />
          Opening Hours
        </p>
      )}
      <div className="space-y-3">
        {scheduleGroups.map((group) => (
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
