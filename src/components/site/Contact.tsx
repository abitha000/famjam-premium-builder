import { Phone, MessageCircle, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP, INSTAGRAM, PHONE } from "@/lib/site-data";
import { Reveal } from "./Section";

export default function Contact() {
  return (
    <section id="contact" className="px-5 py-24">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <div className="overflow-hidden rounded-[2.5rem] bg-dark px-6 py-14 text-center text-primary-foreground sm:px-12">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-foreground/60">Get in touch</span>
            <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">Ready to gift something special?</h2>
            <p className="mx-auto mt-4 max-w-md text-primary-foreground/70">
              Message us your idea and we'll craft the perfect hamper. Wholesale & retail orders welcome.
            </p>
            <p className="mt-6 font-display text-2xl font-bold">+91 {PHONE}</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                <a href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle className="size-4" /> WhatsApp</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10">
                <a href={INSTAGRAM} target="_blank" rel="noreferrer"><Instagram className="size-4" /> Instagram</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10">
                <a href={`tel:+91${PHONE}`}><Phone className="size-4" /> Call Now</a>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}