import amenitiesBg from "@/assets/amenities-bg.jpg";
import { Reveal } from "@/components/Reveal";
import { useInView } from "@/hooks/use-in-view";

const stats = [
  { num: "7+", label: "Acres Campus" },
  { num: "200+", label: "Residential Units" },
  { num: "3", label: "Floor Clubhouse" },
  { num: "24/7", label: "Medical Support" },
];

const AboutSection = () => {
  const { ref: lineRef, isVisible: lineVisible } = useInView();

  return (
    <section id="about" className="py-20 md:py-22 px-6 overflow-hidden">
      <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left column */}
        <div>
          <Reveal animation="up">
            <p className="text-primary tracking-[0.2em] uppercase text-sm font-semibold mb-3">
              About the Project
            </p>
          </Reveal>

          <Reveal animation="up" delay={0.1}>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-3">
              A New Standard in Retirement Living
            </h2>
          </Reveal>

          {/* Animated accent line */}
          <div
            ref={lineRef}
            className={`section-line mb-6 ${lineVisible ? "is-visible" : ""}`}
          />

          <Reveal animation="up" delay={0.18}>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Swasti Sri Serenity is a thoughtfully designed assisted living community in Koheda,
              offering premium 1.5 BHK and 2.5 BHK residences with world-class amenities. Every
              detail is crafted to provide comfort, safety, and an enriching lifestyle for seniors.
            </p>
          </Reveal>

          <div className="grid grid-cols-2 gap-5">
            {stats.map((s, idx) => (
              <Reveal key={s.label} animation="scale" delay={0.1 + idx * 0.1}>
                <div className="card-lift text-center p-5 bg-gradient-to-br from-card to-card/50 rounded-xl shadow-sm border border-border hover:border-primary/30">
                  <p className="font-heading text-3xl font-bold text-shimmer">{s.num}</p>
                  <p className="text-muted-foreground text-sm mt-1 font-medium">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Right column — image clip-reveal */}
        <Reveal animation="right" delay={0.15} className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/20">
          <img
            src={amenitiesBg}
            alt="Community amenities"
            className="w-full h-[420px] object-cover transition-transform duration-700 hover:scale-105"
            loading="lazy"
            width={1280}
            height={720}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-400" />
        </Reveal>
      </div>
    </section>
  );
};

export default AboutSection;
