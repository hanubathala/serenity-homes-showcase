import { useState } from "react";
import LightBox from "./LightBox";
import { Reveal } from "@/components/Reveal";
import hero from "@/assets/hero-bg.jpg";
import living from "@/assets/gallery-1.jpg";
import bedroom from "@/assets/gallery-2.jpg";
import kitchen from "@/assets/gallery-3.jpg";

interface ModelHouseImage {
  src: string;
  title: string;
  description: string;
  alt: string;
}

const modelHouseImages: ModelHouseImage[] = [
  {
    src: hero,
    title: "Exterior View",
    description: "Grand model house facade with elegant architecture and curated landscape.",
    alt: "Model house exterior view",
  },
  {
    src: living,
    title: "Living Area",
    description: "Spacious and naturally lit living room designed for everyday comfort.",
    alt: "Model house living area",
  },
  {
    src: bedroom,
    title: "Master Bedroom",
    description: "Calm and private master bedroom with warm finishes and smart layout.",
    alt: "Model house master bedroom",
  },
  {
    src: kitchen,
    title: "Kitchen",
    description: "Modern functional kitchen with premium fittings and efficient work zones.",
    alt: "Model house kitchen",
  },
];

const ModelHouseSection = () => {
  const [lightBoxOpen, setLightBoxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index);
    setLightBoxOpen(true);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % modelHouseImages.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + modelHouseImages.length) % modelHouseImages.length);
  };

  return (
    <>
      <section id="modelhouse" className="py-20 md:py-22 px-6 overflow-hidden">
        <div className="container mx-auto">
          <div className="text-center mb-14">
            <Reveal animation="up">
              <p className="text-primary tracking-[0.2em] uppercase text-sm font-semibold mb-3">Project Features</p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
                Model House & Project Status
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Explore our premium model units and see the construction progress across phases.
              </p>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {modelHouseImages.map((image, index) => (
              <Reveal
                key={index}
                animation="scale"
                delay={index * 0.1}
                className="group cursor-pointer rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow card-lift"
                as="div"
              >
              <div onClick={() => handleImageClick(index)} className="h-full">
                <div className="relative h-64 overflow-hidden bg-gray-200">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <p className="text-white text-sm font-semibold">Click to Enlarge</p>
                  </div>
                </div>
                <div className="p-4 bg-background">
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-1">{image.title}</h3>
                  <p className="text-sm text-muted-foreground">{image.description}</p>
                </div>
              </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <LightBox
        isOpen={lightBoxOpen}
        images={modelHouseImages.map((img) => img.src)}
        currentIndex={currentImageIndex}
        onClose={() => setLightBoxOpen(false)}
        onNext={handleNextImage}
        onPrev={handlePrevImage}
      />
    </>
  );
};

export default ModelHouseSection;
