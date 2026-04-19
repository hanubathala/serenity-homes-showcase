import { useState } from "react";
import fp1 from "@/assets/floorplan-option1.png";
import LightBox from "./LightBox";
import { Reveal } from "@/components/Reveal";

const MediaShowcaseSection = () => {
  const [lightBoxOpen, setLightBoxOpen] = useState(false);

  return (
    <>
      <section id="showcase" className="py-20 md:py-22 px-6 overflow-hidden" style={{ background: "var(--section-gradient)" }}>
        <div className="container mx-auto">
      <div className="text-center mb-14">
        <Reveal animation="up">
          <p className="text-primary tracking-[0.2em] uppercase text-sm font-semibold mb-3">Project Showcase</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Master Plan and Video Tour
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Explore the full community layout and preview the project through a guided video walkthrough.
          </p>
        </Reveal>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-stretch">
        <Reveal animation="left" delay={0.1} as="article" className="rounded-2xl bg-card border border-border shadow-sm overflow-hidden">
          <div className="p-6 border-b border-border">
            <h3 className="font-heading text-3xl text-foreground">Master Plan View</h3>
            <p className="text-muted-foreground mt-2">
              Bird&apos;s-eye site layout showing tower positions, central facilities, and entry flow.
            </p>
          </div>
          <img
            src={fp1}
            alt="Master plan overview"
            className="w-full h-[320px] md:h-[420px] object-cover cursor-zoom-in"
            loading="lazy"
            onClick={() => setLightBoxOpen(true)}
          />
        </Reveal>

        <Reveal animation="right" delay={0.15} as="article" className="rounded-2xl bg-card border border-border shadow-sm overflow-hidden">
          <div className="p-6 border-b border-border">
            <h3 className="font-heading text-3xl text-foreground">Video Walkthrough</h3>
            <p className="text-muted-foreground mt-2">
              A quick visual tour of architecture, amenities, and lifestyle experience.
            </p>
          </div>
          <div className="aspect-video bg-black/90">
            <video
              className="w-full h-full"
              controls
              preload="metadata"
              poster={fp1}
            >
              <source src="/project-walkthrough.mp4" type="video/mp4" />
              Your browser does not support embedded videos.
            </video>
          </div>
        </Reveal>
      </div>
        </div>
      </section>

      <LightBox
        isOpen={lightBoxOpen}
        images={[fp1]}
        currentIndex={0}
        onClose={() => setLightBoxOpen(false)}
        onNext={() => undefined}
        onPrev={() => undefined}
      />
    </>
  );
};

export default MediaShowcaseSection;