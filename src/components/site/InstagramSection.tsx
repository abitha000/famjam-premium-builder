import { motion } from "framer-motion";
import { Instagram, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { INSTAGRAM } from "@/lib/site-data";
import { SectionHeading } from "./Section";
import h from "@/assets/cat-hampers.jpg";
import b from "@/assets/cat-bouquets.jpg";
import f from "@/assets/cat-festival.jpg";
import r from "@/assets/cat-returngifts.jpg";
import t from "@/assets/cat-toys.jpg";
import j from "@/assets/cat-jewellery.jpg";

const posts = [
  { img: h, caption: "POV: you found your new favorite gifting store ❤️" },
  { img: f, caption: "Festive hampers that steal the show ✨" },
  { img: b, caption: "Fresh blooms, beautifully tied 💐" },
  { img: r, caption: "Return gifts everyone remembers 🎁" },
  { img: t, caption: "Cuddly companions for the little ones 🧸" },
  { img: j, caption: "Dainty pieces, big love 💖" },
];

export default function InstagramSection() {
  return (
    <section className="bg-secondary px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="@famjam.in_" title="Loved by Our Customers" subtitle="Real reels, real reviews, real gifting moments from our community." />
        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5">
          {posts.map((p, i) => (
            <motion.a
              key={i}
              href={INSTAGRAM}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group relative aspect-square overflow-hidden rounded-2xl"
            >
              <img src={p.img} alt={p.caption} width={800} height={800} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <span className="absolute right-3 top-3 grid size-8 place-items-center rounded-full bg-card/80 text-primary backdrop-blur">
                <Play className="size-4 fill-current" />
              </span>
              <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-dark/90 to-transparent p-4 transition-transform duration-300 group-hover:translate-y-0">
                <p className="text-xs font-medium text-primary-foreground">{p.caption}</p>
              </div>
            </motion.a>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="outline" size="lg">
            <a href={INSTAGRAM} target="_blank" rel="noreferrer">
              <Instagram className="size-4" /> Follow @famjam.in_
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}