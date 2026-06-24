import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP } from "@/lib/site-data";
import hero from "@/assets/hero-gifts.jpg";
import catJewellery from "@/assets/cat-jewellery.jpg";
import catBouquets from "@/assets/cat-bouquets.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-5 pb-20 pt-32 sm:pt-40"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center rounded-full bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
            Premium Gifting Studio
          </span>
          <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Make Every Gift <span className="text-gradient">Memorable</span>
          </h1>
          <p className="mt-6 max-w-md text-lg text-muted-foreground">
            Customized Hampers, Jewellery, Toys, Accessories, Return Gifts & Special Occasion Collections.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-12 px-7 text-base">
              <a href="#categories">
                Shop Now <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 px-7 text-base">
              <a href={WHATSAPP} target="_blank" rel="noreferrer">
                <MessageCircle className="size-4" /> Custom Order
              </a>
            </Button>
          </div>
          <div className="mt-10 flex items-center gap-8">
            <div>
              <p className="font-display text-2xl font-bold">1000+</p>
              <p className="text-sm text-muted-foreground">Happy customers</p>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <p className="font-display text-2xl font-bold">Pan India</p>
              <p className="text-sm text-muted-foreground">Fast shipping</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto aspect-square w-full max-w-md"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src={hero}
            alt="Floating premium gift boxes with red ribbons"
            width={1200}
            height={1200}
            className="h-full w-full rounded-[2rem] object-cover shadow-card"
          />
          <motion.div
            className="absolute -left-6 top-12 hidden w-40 rounded-2xl bg-card p-3 shadow-card sm:block"
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <img src={catJewellery} alt="Jewellery" width={800} height={800} loading="lazy" className="h-24 w-full rounded-xl object-cover" />
            <p className="mt-2 text-xs font-semibold">Dainty Jewellery</p>
          </motion.div>
          <motion.div
            className="absolute -right-6 bottom-12 hidden w-40 rounded-2xl bg-card p-3 shadow-card sm:block"
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <img src={catBouquets} alt="Bouquets" width={800} height={800} loading="lazy" className="h-24 w-full rounded-xl object-cover" />
            <p className="mt-2 text-xs font-semibold">Fresh Bouquets</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}