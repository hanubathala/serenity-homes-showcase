import amenitiesBg from "@/assets/amenities-bg.jpg";

const AboutSection = () => (
  <section id="about" className="py-20 md:py-22 px-6" style={{ background: "var(--section-gradient)" }}>
    <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center">
      <div className="animate-slide-in-left">
        <p className="text-primary tracking-[0.2em] uppercase text-sm font-semibold mb-3 animate-fade-in">About the Project</p>
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          A New Standard in Retirement Living
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Swasti Sri Serenity is a thoughtfully designed assisted living community in Koheda, 
          offering premium 1.5 BHK and 2.5 BHK residences with world-class amenities. Every 
          detail is crafted to provide comfort, safety, and an enriching lifestyle for seniors.
        </p>
        <div className="grid grid-cols-2 gap-6">
          {[
            { num: "7+", label: "Acres Campus" },
            { num: "200+", label: "Residential Units" },
            { num: "3", label: "Floor Clubhouse" },
            { num: "24/7", label: "Medical Support" },
          ].map((s, idx) => (
            <div
              key={s.label}
              className="text-center p-4 bg-gradient-to-br from-card to-card/50 rounded-lg shadow-sm border border-border hover:border-primary/30 hover:shadow-md transition-all hover:scale-105 animate-fade-up"
              style={{ animationDelay: `${0.3 + idx * 0.1}s` }}
            >
              <p className="font-heading text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">{s.num}</p>
              <p className="text-muted-foreground text-sm mt-1 font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/20 animate-slide-in-right">
        <img
          src={amenitiesBg}
          alt="Community amenities"
          className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-500"
          loading="lazy"
          width={1280}
          height={720}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
      </div>
    </div>
  </section>
);

export default AboutSection;
