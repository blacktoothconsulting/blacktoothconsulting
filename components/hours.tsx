import { Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const hours = [
  { day: "Monday", time: "8:00am – 6:00pm", isOpen: true },
  { day: "Tuesday", time: "8:00am – 6:00pm", isOpen: true },
  { day: "Wednesday", time: "8:00am – 6:00pm", isOpen: true },
  { day: "Thursday", time: "8:00am – 6:00pm", isOpen: true },
  { day: "Friday", time: "8:00am – 12:00pm", isOpen: true },
  { day: "Saturday", time: "CLOSED", isOpen: false },
  { day: "Sunday", time: "CLOSED", isOpen: false },
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

        <Card className="max-w-md mx-auto border-border/50">
          <CardContent className="p-0">
            <div className="divide-y divide-border">
              {hours.map((item) => (
                <div 
                  key={item.day} 
                  className={`flex items-center justify-between px-6 py-4 ${
                    !item.isOpen ? "bg-muted/50" : ""
                  }`}
                >
                  <span className="font-medium text-foreground">{item.day}</span>
                  <span className={item.isOpen ? "text-muted-foreground" : "text-muted-foreground/60"}>
                    {item.time}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
