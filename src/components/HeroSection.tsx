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
    <div className="relative z-10 text-center px-6 max-w-3xl animate-fade-up">
      <p className="text-primary-foreground/80 tracking-[0.3em] uppercase text-sm mb-4 font-body">
        Assisted Living Retirement Homes
      </p>
      <h1 className="font-heading text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
        Swasti Sri<br />Serenity
      </h1>
      <p className="text-primary-foreground/80 text-lg md:text-xl mb-10 font-light max-w-xl mx-auto">
        Premium 1.5 & 2.5 BHK retirement homes nestled in Koheda, designed for
        comfort, care, and community.
      </p>
      <a
        href="#contact"
        className="inline-block bg-primary text-primary-foreground px-10 py-4 rounded text-lg font-semibold hover:opacity-90 transition-opacity"
      >
        Book a Visit
      </a>
    </div>
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center pt-2">
        <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full" />
      </div>
    </div>
  </section>
);

export default HeroSection;
