import amenitiesBg from "@/assets/amenities-bg.jpg";

const AboutSection = () => (
  <section id="about" className="py-24 px-6" style={{ background: "var(--section-gradient)" }}>
    <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center">
      <div>
        <p className="text-primary tracking-[0.2em] uppercase text-sm font-semibold mb-3">About the Project</p>
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
          A New Standard in Retirement Living
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
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
          ].map((s) => (
            <div key={s.label} className="text-center p-4 bg-card rounded-lg shadow-sm">
              <p className="font-heading text-3xl font-bold text-primary">{s.num}</p>
              <p className="text-muted-foreground text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative rounded-2xl overflow-hidden shadow-xl">
        <img
          src={amenitiesBg}
          alt="Community amenities"
          className="w-full h-[400px] object-cover"
          loading="lazy"
          width={1280}
          height={720}
        />
      </div>
    </div>
  </section>
);

export default AboutSection;
