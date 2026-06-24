import { Truck, Sparkles, Package, ShieldCheck, Zap, Gift } from "lucide-react";
import { features } from "@/lib/site-data";
import { Reveal, SectionHeading } from "./Section";

const icons = [Truck, Sparkles, Package, ShieldCheck, Zap, Gift];

export default function Features() {
  return (
    <section className="bg-secondary px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Why FamJam" title="Gifting made effortless & premium" />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={f.title} delay={(i % 3) * 0.08}>
                <div className="h-full rounded-3xl bg-card p-7 shadow-soft transition-shadow hover:shadow-card">
                  <span className="grid size-12 place-items-center rounded-2xl bg-accent text-primary">
                    <Icon className="size-6" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold">{f.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}