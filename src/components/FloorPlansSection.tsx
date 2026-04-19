import { useState } from "react";
import fp1 from "@/assets/floorplan-option1.png";
import fp2 from "@/assets/floorplan-units1.png";
import fp3 from "@/assets/floorplan-option2.png";
import fp4 from "@/assets/floorplan-units2.png";
import LightBox from "./LightBox";
import { Reveal } from "@/components/Reveal";

const plans = [
  { label: "Site Plan - Option 1", img: fp1 },
  { label: "Unit Plans - Option 1", img: fp2 },
  { label: "Site Plan - Option 2", img: fp3 },
  { label: "Unit Plans - Option 2", img: fp4 },
];

const FloorPlansSection = () => {
  const [active, setActive] = useState(0);
  const [lightBoxOpen, setLightBoxOpen] = useState(false);

  const handleNextImage = () => {
    setActive((prev) => (prev + 1) % plans.length);
  };

  const handlePrevImage = () => {
    setActive((prev) => (prev - 1 + plans.length) % plans.length);
  };

  return (
    <>
      <section id="floorplans" className="py-20 md:py-22 px-6 overflow-hidden" style={{ background: "var(--section-gradient)" }}>
        <div className="container mx-auto text-center">
          <Reveal animation="up">
            <p className="text-primary tracking-[0.2em] uppercase text-sm font-semibold mb-3">Floor Plans</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Thoughtfully Designed Spaces
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
              Choose from 1.5 BHK and 2.5 BHK configurations, available in multiple layout options.
            </p>
          </Reveal>

          <Reveal animation="up" delay={0.15}>
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {plans.map((p, i) => (
                <button
                  key={p.label}
                  onClick={() => setActive(i)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                    active === i
                      ? "bg-primary text-primary-foreground"
                      : "bg-card text-foreground border border-border hover:border-primary"
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </Reveal>

          <Reveal animation="scale" delay={0.25}>
            <div
              className="bg-card rounded-2xl shadow-lg p-4 max-w-4xl mx-auto cursor-zoom-in hover:shadow-2xl transition-shadow duration-500"
              onClick={() => setLightBoxOpen(true)}
            >
              <img
                src={plans[active].img}
                alt={plans[active].label}
                className="w-full rounded-lg transition-transform duration-500 hover:scale-[1.01]"
                loading="lazy"
              />
              <p className="text-sm text-muted-foreground mt-3">Click design to open popup with zoom controls</p>
            </div>
          </Reveal>
        </div>
      </section>

      <LightBox
        isOpen={lightBoxOpen}
        images={plans.map((plan) => plan.img)}
        currentIndex={active}
        onClose={() => setLightBoxOpen(false)}
        onNext={handleNextImage}
        onPrev={handlePrevImage}
      />
    </>
  );
};

export default FloorPlansSection;
