import { Reveal } from "./Section";
import hampers from "@/assets/cat-hampers.jpg";

export default function About() {
  return (
    <section id="about" className="bg-secondary px-5 py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <img src={hampers} alt="FamJam premium gift hamper" width={800} height={800} loading="lazy" className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-card" />
        </Reveal>
        <Reveal delay={0.1}>
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">About Us</span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Memorable gifting, beautifully done
            </h2>
            <p className="mt-6 text-muted-foreground">
              FamJam Essentials creates memorable gifting experiences through customized hampers, jewellery,
              toys, accessories and premium return gifts. We help customers celebrate every occasion with
              thoughtful and beautifully packaged gifts.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                ["137+", "Curated drops"],
                ["1000+", "Followers"],
                ["100%", "Made with love"],
              ].map(([n, l]) => (
                <div key={l}>
                  <p className="font-display text-2xl font-bold text-primary">{n}</p>
                  <p className="text-xs text-muted-foreground">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}