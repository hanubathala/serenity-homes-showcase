import { useState } from "react";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import amenities from "@/assets/amenities-bg.jpg";
import hero from "@/assets/hero-bg.jpg";
import LightBox from "./LightBox";

const images = [
  { src: hero, alt: "Exterior view", label: "Grand Elevation", span: "md:col-span-2" },
  { src: g1, alt: "Living room", label: "Living Spaces" },
  { src: g2, alt: "Bedroom", label: "Bedroom Ambience" },
  { src: g3, alt: "Kitchen", label: "Functional Kitchen" },
  { src: g4, alt: "Clubhouse and gym", label: "Wellness Zone" },
  { src: amenities, alt: "Pool area", label: "Lifestyle Amenities", span: "md:col-span-2" },
];

const GallerySection = () => {
  const [lightBoxOpen, setLightBoxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index);
    setLightBoxOpen(true);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <section id="gallery" className="py-20 md:py-22 px-6 bg-[#f7f1e8]">
        <div className="container mx-auto text-center">
          <p className="text-primary tracking-[0.2em] uppercase text-sm font-semibold mb-3">Gallery</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            A Glimpse of Luxury
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-14">
            Experience the beauty and elegance of Swasti Sri Serenity. Click on any image to expand.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {images.map((img, i) => (
              <div
                key={i}
                onClick={() => handleImageClick(i)}
                className={`relative overflow-hidden rounded-2xl group border border-border/70 shadow-sm cursor-pointer ${img.span || ""}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-64 md:h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                <p className="absolute left-4 bottom-4 text-sm md:text-base text-white font-semibold tracking-wide">
                  {img.label}
                </p>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white text-sm font-semibold bg-black/50 px-4 py-2 rounded-full">
                    Click to Expand
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LightBox
        isOpen={lightBoxOpen}
        images={images.map((img) => img.src)}
        currentIndex={currentImageIndex}
        onClose={() => setLightBoxOpen(false)}
        onNext={handleNextImage}
        onPrev={handlePrevImage}
      />
    </>
  );
};

export default GallerySection;
