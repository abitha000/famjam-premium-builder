import { useMemo, useState } from "react";
import { Check, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { WHATSAPP } from "@/lib/site-data";
import { Reveal, SectionHeading } from "./Section";

const boxes = [
  { name: "Signature Box", price: 299 },
  { name: "Luxury Box", price: 499 },
  { name: "Grand Hamper", price: 799 },
];

const items = [
  { name: "Dainty Jewellery", price: 349 },
  { name: "Plush Teddy", price: 299 },
  { name: "Scented Candle", price: 199 },
  { name: "Chocolates", price: 249 },
  { name: "Fresh Bouquet", price: 399 },
  { name: "Accessory Set", price: 229 },
];

export default function HamperBuilder() {
  const [box, setBox] = useState(boxes[1]);
  const [picked, setPicked] = useState<string[]>(["Dainty Jewellery", "Chocolates"]);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");

  const total = useMemo(() => {
    const itemsTotal = items.filter((i) => picked.includes(i.name)).reduce((s, i) => s + i.price, 0);
    return box.price + itemsTotal;
  }, [box, picked]);

  const toggle = (n: string) =>
    setPicked((p) => (p.includes(n) ? p.filter((x) => x !== n) : [...p, n]));

  const order = () => {
    const text = `Hi FamJam! I'd like a custom hamper:%0A📦 Box: ${box.name}%0A🎁 Items: ${
      picked.join(", ") || "none"
    }%0A💬 Message: ${message || "-"}%0A🙋 For: ${name || "-"}%0A💰 Approx total: ₹${total}`;
    window.open(`${WHATSAPP}?text=${text}`, "_blank");
  };

  return (
    <section id="builder" className="px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Build Your Own"
          title="Custom Hamper Builder"
          subtitle="Pick your box, choose your products, add a personal touch — see the price update live."
        />
        <Reveal>
          <div className="mt-14 grid gap-8 rounded-[2rem] bg-card p-6 shadow-card lg:grid-cols-[1fr_320px] lg:p-10">
            <div className="space-y-8">
              <div>
                <Label className="text-sm font-semibold">1. Select gift box</Label>
                <div className="mt-3 grid grid-cols-3 gap-3">
                  {boxes.map((b) => (
                    <button
                      key={b.name}
                      onClick={() => setBox(b)}
                      className={`rounded-2xl border p-4 text-left transition-all ${
                        box.name === b.name ? "border-primary bg-accent" : "border-border hover:border-primary/40"
                      }`}
                    >
                      <p className="text-sm font-semibold">{b.name}</p>
                      <p className="text-xs text-muted-foreground">₹{b.price}</p>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <Label className="text-sm font-semibold">2. Add products</Label>
                <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {items.map((it) => {
                    const on = picked.includes(it.name);
                    return (
                      <button
                        key={it.name}
                        onClick={() => toggle(it.name)}
                        className={`flex items-center justify-between rounded-2xl border p-3 text-left transition-all ${
                          on ? "border-primary bg-accent" : "border-border hover:border-primary/40"
                        }`}
                      >
                        <span>
                          <span className="block text-xs font-semibold">{it.name}</span>
                          <span className="block text-xs text-muted-foreground">₹{it.price}</span>
                        </span>
                        {on && (
                          <span className="grid size-5 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                            <Check className="size-3" />
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="for" className="text-sm font-semibold">For whom?</Label>
                  <Input id="for" value={name} onChange={(e) => setName(e.target.value)} placeholder="Recipient name" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="msg" className="text-sm font-semibold">Custom message</Label>
                  <Textarea id="msg" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Happy Birthday! ❤️" className="mt-2 min-h-10" rows={1} />
                </div>
              </div>
            </div>

            <div className="flex flex-col rounded-3xl bg-dark p-6 text-primary-foreground">
              <p className="text-sm uppercase tracking-widest text-primary-foreground/60">Your hamper</p>
              <p className="mt-2 font-display text-lg font-bold">{box.name}</p>
              <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
                {picked.length === 0 && <li>No items added yet</li>}
                {picked.map((p) => (
                  <li key={p} className="flex justify-between">
                    <span>{p}</span>
                    <span>₹{items.find((i) => i.name === p)?.price}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-6">
                <div className="flex items-end justify-between border-t border-primary-foreground/15 pt-4">
                  <span className="text-sm text-primary-foreground/70">Total</span>
                  <span className="font-display text-3xl font-extrabold">₹{total}</span>
                </div>
                <Button onClick={order} size="lg" className="mt-4 w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                  <MessageCircle className="size-4" /> Order on WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}