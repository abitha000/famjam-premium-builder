import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import WelcomeAnimation from "@/components/site/WelcomeAnimation";
import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import Categories from "@/components/site/Categories";
import Features from "@/components/site/Features";
import HamperBuilder from "@/components/site/HamperBuilder";
import InstagramSection from "@/components/site/InstagramSection";
import Testimonials from "@/components/site/Testimonials";
import About from "@/components/site/About";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";
import { WHATSAPP } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FamJam Essentials — Premium Customized Gifting" },
      { name: "description", content: "Customized hampers, jewellery, toys, accessories & return gifts. Premium gifting for every occasion, shipped pan India. Order on WhatsApp." },
      { property: "og:title", content: "FamJam Essentials — Premium Customized Gifting" },
      { property: "og:description", content: "Customized hampers, jewellery, toys, accessories & return gifts. Premium gifting for every occasion, shipped pan India." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <WelcomeAnimation />
      <Header />
      <main>
        <Hero />
        <Categories />
        <Features />
        <HamperBuilder />
        <InstagramSection />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-40 grid size-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-card transition-transform hover:scale-110"
      >
        <MessageCircle className="size-7" />
      </a>
    </div>
  );
}
