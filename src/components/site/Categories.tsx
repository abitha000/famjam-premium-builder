import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { categories, WHATSAPP } from "@/lib/site-data";
import { SectionHeading } from "./Section";

export default function Categories() {
  return (
    <section id="categories" className="px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Shop by Category"
          title="Gifts for every occasion"
          subtitle="From customized hampers to festive collections — beautifully curated, thoughtfully packed."
        />
        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {categories.map((c, i) => (
            <motion.a
              key={c.title}
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl bg-card shadow-card"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={c.image}
                  alt={c.title}
                  width={800}
                  height={800}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="flex items-center justify-between p-4">
                <div>
                  <h3 className="font-display text-sm font-bold sm:text-base">{c.title}</h3>
                  <p className="text-xs text-muted-foreground">{c.desc}</p>
                </div>
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <ArrowUpRight className="size-4" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}