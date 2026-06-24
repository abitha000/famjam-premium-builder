import { Instagram, MessageCircle } from "lucide-react";
import { WHATSAPP, INSTAGRAM } from "@/lib/site-data";

const cols = [
  { title: "Explore", links: ["Home", "Shop", "Categories", "About", "Contact"] },
  { title: "Legal", links: ["Privacy Policy", "Terms"] },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card px-5 py-14">
      <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <p className="font-display text-2xl font-extrabold tracking-tight text-primary">
            FAMJAM<span className="text-foreground">.</span>
          </p>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            Premium customized gifting — hampers, jewellery, toys, accessories & return gifts. Made with love, shipped pan India.
          </p>
          <div className="mt-5 flex gap-3">
            <a href={INSTAGRAM} target="_blank" rel="noreferrer" aria-label="Instagram" className="grid size-10 place-items-center rounded-full bg-accent text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
              <Instagram className="size-5" />
            </a>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="grid size-10 place-items-center rounded-full bg-accent text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
              <MessageCircle className="size-5" />
            </a>
          </div>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <p className="font-display text-sm font-bold">{c.title}</p>
            <ul className="mt-4 space-y-2">
              {c.links.map((l) => (
                <li key={l}>
                  <a href="#home" className="text-sm text-muted-foreground transition-colors hover:text-primary">{l}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-12 max-w-7xl border-t border-border pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} FamJam Essentials™. All rights reserved.
      </div>
    </footer>
  );
}