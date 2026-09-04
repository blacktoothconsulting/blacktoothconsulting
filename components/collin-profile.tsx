import Image from "next/image"
import { Button } from "@/components/ui/button"

export function CollinProfile() {
  return (
    <section id="about" className="scroll-mt-20 py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-xl bg-muted">
              <Image
                src="/images/collin-headshot.avif"
                alt="Collin Redinger, D.C. at the Wyoming Clinic of Integrated Health"
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg hidden sm:block">
              <p className="text-2xl font-bold font-serif">Gonstead</p>
              <p className="text-sm opacity-90">Chiropractic</p>
            </div>
          </div>

          <div>
            <p className="text-primary font-medium text-sm uppercase tracking-wider mb-3">
              Doctor of Chiropractic
            </p>
            <h2 className="font-serif text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Collin Redinger, D.C.
            </h2>
            <p className="mt-3 text-base font-medium text-foreground">
              Gonstead Chiropractic &nbsp;|&nbsp; Care for the Whole Family
            </p>

            <p className="mt-6 text-muted-foreground leading-relaxed">
              Dr. Collin Redinger was born and raised in Sheridan, Wyoming. He went to the
              University of Wyoming for his undergraduate studies, then completed his Doctorate
              at Northwestern Health Sciences University in Bloomington, MN. He studied and
              practiced under Gonstead doctors while continuing his education on weekends with
              countless seminars fine-tuning his training in the Gonstead System.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              After clinical work in Minnesota, he moved his growing family back home to Sheridan
              and opened The Wyoming Clinic in 2018. With over 8 years of clinical experience, he
              continues to learn and fine-tune his craft.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              With the Gonstead System, every patient is unique and has to be examined and
              adjusted very specifically to get the best results &mdash; nothing is generalized,
              because no two problems are the same. His care often includes specific, gentle
              adjustments, education on home care and lifestyle modifications, diet and supplement
              guidance, lab work review, and at-home exercises that enhance the stability of the
              spine, all with the goal of getting each person as healthy as possible for the long
              run.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Dr. Collin Redinger loves his practice and his patients and thoroughly enjoys his
              life&apos;s work; in his limited off time he enjoys working his small ranch with
              raising cows, horses and hay, doing never ending construction projects with his
              family, hunting, fishing, biking and spending time with his amazing wife and 4
              children.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <a href="tel:307-655-8775">Call 307.655.8775 to Schedule</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
