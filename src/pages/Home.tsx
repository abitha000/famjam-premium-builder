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

export default function Home() {
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
