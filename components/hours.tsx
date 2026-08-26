import { Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { CHIROPRACTIC_SCHEDULE, MEDICAL_SCHEDULE } from "@/lib/clinic"

const schedules = [
  { name: "Chiropractic", hours: CHIROPRACTIC_SCHEDULE },
  { name: "Medical Care", hours: MEDICAL_SCHEDULE },
]

export function Hours() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-primary font-medium text-sm uppercase tracking-wider mb-3">
            <Clock className="h-4 w-4" />
            Office Hours
          </div>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Opening Hours
          </h2>
        </div>

        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {schedules.map((schedule) => (
            <Card key={schedule.name} className="border-border/50">
              <CardContent className="p-0">
                <h3 className="border-b border-border px-6 py-4 font-serif text-xl font-semibold text-foreground">
                  {schedule.name}
                </h3>
                <div className="divide-y divide-border">
                  {schedule.hours.map((item) => (
                    <div
                      key={item.day}
                      className={`flex items-center justify-between px-6 py-3 ${
                        !item.isOpen ? "bg-muted/50" : ""
                      }`}
                    >
                      <span className="font-medium text-foreground">{item.day}</span>
                      <span
                        className={
                          item.isOpen ? "text-muted-foreground" : "text-muted-foreground/60"
                        }
                      >
                        {item.time}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground">
          Massage availability varies by therapist. Call 307.655.8775 for current appointment times.
        </p>
      </div>
    </section>
  )
}
