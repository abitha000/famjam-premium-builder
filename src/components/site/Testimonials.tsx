import { Star } from "lucide-react";
import { testimonials } from "@/lib/site-data";
import { Reveal, SectionHeading } from "./Section";

export default function Testimonials() {
  return (
    <section className="px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Testimonials" title="Words from our happy customers" />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={(i % 4) * 0.08}>
              <div className="flex h-full flex-col rounded-3xl bg-card p-6 shadow-soft">
                <div className="flex gap-0.5 text-primary">
                  {Array.from({ length: t.rating }).map((_, k) => (
                    <Star key={k} className="size-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 flex-1 text-sm text-muted-foreground">"{t.review}"</p>
                <div className="mt-5 flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-full bg-primary font-display font-bold text-primary-foreground">
                    {t.initial}
                  </span>
                  <span className="text-sm font-semibold">{t.name}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}