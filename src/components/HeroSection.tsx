import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import outerlook1 from "@/assets/outerlook1.jpeg";
import outerlook2 from "@/assets/outerlook2.jpeg";
import outerlook3 from "@/assets/outerlook3.jpeg";

type HeroSlide = {
  image: string;
  alt: string;
  eyebrow: string;
  title: string;
  description: string;
};

const AUTO_PLAY_MS = 5500;

const slides: HeroSlide[] = [
  {
    image: heroBg,
    alt: "Serenity living residential home exterior",
    eyebrow: "Assisted Living Residential Home",
    title: "Swasti Sri Serenity",
    description:
      "A thoughtfully crafted retirement community in Koheda where comfort, care, and connection come together.",
  },
  {
    image: outerlook1,
    alt: "Modern residential home boulevard view",
    eyebrow: "Elevated Living Experience",
    title: "Premium Lifestyle Spaces",
    description:
      "Spacious 1.5 and 2.5 BHK residences with elegant architecture, wide walkways, and serene green pockets.",
  },
  {
    image: outerlook2,
    alt: "Residential home facade with landscaped pathways",
    eyebrow: "Designed For Everyday Ease",
    title: "Comfort Meets Community",
    description:
      "Enjoy safe, social, and peaceful living with curated amenities and a warm neighborhood atmosphere.",
  },
  {
    image: outerlook3,
    alt: "Luxury retirement residences during golden hour",
    eyebrow: "Trusted Retirement Destination",
    title: "Live Beautifully, Age Gracefully",
    description:
      "A residential home environment that supports independent living with dignity, convenience, and joy.",
  },
];

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [transitionKey, setTransitionKey] = useState(0);
  const [isHoverPaused, setIsHoverPaused] = useState(false);
  const [isTabVisible, setIsTabVisible] = useState(true);
  const touchStartXRef = useRef<number | null>(null);
  const touchCurrentXRef = useRef<number | null>(null);
  const activeSlide = slides[activeIndex];

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
    setTransitionKey((prev) => prev + 1);
  }, []);

  const previousSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
    setTransitionKey((prev) => prev + 1);
  }, []);

  const goToSlide = (index: number) => {
    setActiveIndex(index);
    setTransitionKey((prev) => prev + 1);
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLElement>) => {
    touchStartXRef.current = event.touches[0]?.clientX ?? null;
    touchCurrentXRef.current = touchStartXRef.current;
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLElement>) => {
    touchCurrentXRef.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = () => {
    const startX = touchStartXRef.current;
    const endX = touchCurrentXRef.current;

    touchStartXRef.current = null;
    touchCurrentXRef.current = null;

    if (startX === null || endX === null) {
      return;
    }

    const swipeDistance = endX - startX;
    const SWIPE_THRESHOLD = 50;

    if (Math.abs(swipeDistance) < SWIPE_THRESHOLD) {
      return;
    }

    if (swipeDistance < 0) {
      nextSlide();
      return;
    }

    previousSlide();
  };

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsTabVisible(!document.hidden);
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    if (isHoverPaused || !isTabVisible) {
      return;
    }

    const timer = window.setInterval(nextSlide, AUTO_PLAY_MS);
    return () => window.clearInterval(timer);
  }, [isHoverPaused, isTabVisible, nextSlide]);

  return (
    <section
      className="relative h-screen min-h-[680px] flex items-center justify-center overflow-hidden"
      onMouseEnter={() => setIsHoverPaused(true)}
      onMouseLeave={() => setIsHoverPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {slides.map((slide, index) => (
        <img
          key={slide.image}
          src={slide.image}
          alt={slide.alt}
          className={`absolute inset-0 h-full w-full object-cover transition-all ease-out ${
            index === activeIndex
              ? "opacity-100 scale-105"
              : "opacity-0 scale-100 pointer-events-none"
          }`}
          style={{ transitionDuration: "1400ms" }}
          width={1920}
          height={1080}
          loading={index === 0 ? "eager" : "lazy"}
        />
      ))}

      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />

      <div key={transitionKey} className="relative z-10 text-center px-6 max-w-4xl">
        <p className="text-primary-foreground/80 tracking-[0.28em] uppercase text-xs md:text-sm mb-4 font-body animate-fade-up">
          {activeSlide.eyebrow}
        </p>
        <h1 className="font-heading text-5xl md:text-7xl font-semibold text-primary-foreground mb-6 leading-tight animate-fade-up [animation-delay:120ms]">
          {activeSlide.title}
        </h1>
        <p className="text-primary-foreground/85 text-lg md:text-xl mb-10 font-medium max-w-2xl mx-auto animate-fade-up [animation-delay:220ms]">
          {activeSlide.description}
        </p>
        <a
          onClick={(e) => {
            e.preventDefault();
            window.dispatchEvent(new Event("openBookingModal"));
          }}
          href="#"
          className="inline-block bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-10 py-4 rounded text-lg font-semibold hover:shadow-2xl transition-all hover:scale-105 active:scale-95 animate-fade-up [animation-delay:320ms] cursor-pointer"
        >
          Schedule Site Visit
        </a>
      </div>

      <div className="absolute z-20 inset-x-0 px-4 md:px-8 flex items-center justify-between top-1/2 -translate-y-1/2 pointer-events-none">
        <button
          type="button"
          onClick={previousSlide}
          className="pointer-events-auto h-11 w-11 md:h-12 md:w-12 rounded-full border border-white/30 bg-black/30 text-white backdrop-blur-sm hover:bg-black/55 transition"
          aria-label="Previous slide"
        >
          <ChevronLeft className="mx-auto" size={22} />
        </button>
        <button
          type="button"
          onClick={nextSlide}
          className="pointer-events-auto h-11 w-11 md:h-12 md:w-12 rounded-full border border-white/30 bg-black/30 text-white backdrop-blur-sm hover:bg-black/55 transition"
          aria-label="Next slide"
        >
          <ChevronRight className="mx-auto" size={22} />
        </button>
      </div>

      <div className="absolute z-20 bottom-24 left-1/2 -translate-x-1/2 flex gap-2.5">
        {slides.map((slide, index) => (
          <button
            key={slide.title}
            type="button"
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === activeIndex
                ? "w-8 bg-primary-foreground"
                : "w-2 bg-primary-foreground/45 hover:bg-primary-foreground/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === activeIndex}
          />
        ))}
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center pt-2 animate-pulse">
          <ChevronDown size={20} className="text-primary-foreground/50 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
