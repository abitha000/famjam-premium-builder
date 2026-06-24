import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP } from "@/lib/site-data";

const links = [
  { label: "Home", href: "#home" },
  { label: "Shop", href: "#categories" },
  { label: "Builder", href: "#builder" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-soft" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <a href="#home" className="font-display text-xl font-extrabold tracking-tight text-primary">
          FAMJAM<span className="text-foreground">.</span>
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden md:block">
          <Button asChild>
            <a href={WHATSAPP} target="_blank" rel="noreferrer">
              <MessageCircle className="size-4" /> Order Now
            </a>
          </Button>
        </div>
        <button className="md:hidden" onClick={() => setOpen((o) => !o)} aria-label="Menu">
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>
      {open && (
        <div className="glass border-t border-border md:hidden">
          <ul className="flex flex-col px-5 py-2">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-sm font-medium text-foreground/80"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="py-3">
              <Button asChild className="w-full">
                <a href={WHATSAPP} target="_blank" rel="noreferrer">
                  <MessageCircle className="size-4" /> Order on WhatsApp
                </a>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}