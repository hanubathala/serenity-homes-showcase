import { ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section className="relative h-screen flex items-center justify-center overflow-hidden">
    <img
      src={heroBg}
      alt="Swasti Sri Serenity luxury apartments"
      className="absolute inset-0 w-full h-full object-cover"
      width={1920}
      height={1080}
    />
    <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
    <div className="relative z-10 text-center px-6 max-w-3xl">
      <p className="text-primary-foreground/80 tracking-[0.3em] uppercase text-sm mb-4 font-body animate-fade-up" style={{ animationDelay: "0.2s" }}>
        Assisted Living Retirement Homes
      </p>
      <h1 className="font-heading text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight animate-fade-up" style={{ animationDelay: "0.4s" }}>
        Swasti Sri<br />Serenity
      </h1>
      <p className="text-primary-foreground/80 text-lg md:text-xl mb-10 font-light max-w-xl mx-auto animate-fade-up" style={{ animationDelay: "0.6s" }}>
        Premium 1.5 & 2.5 BHK retirement homes nestled in Koheda, designed for
        comfort, care, and community.
      </p>
      <a
        onClick={(e) => {
          e.preventDefault();
          window.dispatchEvent(new Event("openBookingModal"));
        }}
        href="#"
        className="inline-block bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-10 py-4 rounded text-lg font-semibold hover:shadow-2xl transition-all hover:scale-105 active:scale-95 animate-fade-up cursor-pointer"
        style={{ animationDelay: "0.8s" }}
      >
        Schedule Site Visit
      </a>
    </div>
    
    {/* Animated Scroll Indicator */}
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center pt-2 animate-pulse">
        <ChevronDown size={20} className="text-primary-foreground/50 animate-bounce" />
      </div>
    </div>
  </section>
);

export default HeroSection;
