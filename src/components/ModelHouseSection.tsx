import { useState } from "react";
import LightBox from "./LightBox";
import { Reveal } from "@/components/Reveal";
import hero from "@/assets/hero-bg.jpg";
import living from "@/assets/gallery-1.jpg";
import bedroom from "@/assets/gallery-2.jpg";
import kitchen from "@/assets/gallery-3.jpg";

interface PlotDetail {
  label: string;
  value: string;
}

interface PlotCard {
  src: string;
  title: string;
  price: string;
  priceNote: string;
  status: string;
  details: PlotDetail[];
  alt: string;
}

const plotCards: PlotCard[] = [
  {
    src: hero,
    title: "Sea Breezes",
    price: "$12,200.00",
    priceNote: "/ start from",
    status: "Sold",
    details: [
      { label: "Beds", value: "2" },
      { label: "Baths", value: "1" },
      { label: "Balcony", value: "1" },
      { label: "Area", value: "120m2" },
    ],
    alt: "Sea Breezes plot interior",
  },
  {
    src: living,
    title: "Palm Haven",
    price: "$13,850.00",
    priceNote: "/ start from",
    status: "Available",
    details: [
      { label: "Beds", value: "3" },
      { label: "Baths", value: "2" },
      { label: "Balcony", value: "2" },
      { label: "Area", value: "156m2" },
    ],
    alt: "Palm Haven plot interior",
  },
  {
    src: bedroom,
    title: "Oak Residency",
    price: "$10,990.00",
    priceNote: "/ start from",
    status: "Available",
    details: [
      { label: "Beds", value: "2" },
      { label: "Baths", value: "2" },
      { label: "Balcony", value: "1" },
      { label: "Area", value: "132m2" },
    ],
    alt: "Oak Residency plot bedroom",
  },
  {
    src: kitchen,
    title: "Lakeview Court",
    price: "$16,450.00",
    priceNote: "/ start from",
    status: "Booked",
    details: [
      { label: "Beds", value: "4" },
      { label: "Baths", value: "3" },
      { label: "Balcony", value: "2" },
      { label: "Area", value: "201m2" },
    ],
    alt: "Lakeview Court plot kitchen and lounge",
  },
  {
    src: hero,
    title: "Cedar Heights",
    price: "$14,420.00",
    priceNote: "/ start from",
    status: "Available",
    details: [
      { label: "Beds", value: "3" },
      { label: "Baths", value: "2" },
      { label: "Balcony", value: "2" },
      { label: "Area", value: "168m2" },
    ],
    alt: "Cedar Heights plot exterior",
  },
  {
    src: living,
    title: "Skyline Grove",
    price: "$11,760.00",
    priceNote: "/ start from",
    status: "Sold",
    details: [
      { label: "Beds", value: "2" },
      { label: "Baths", value: "1" },
      { label: "Balcony", value: "1" },
      { label: "Area", value: "118m2" },
    ],
    alt: "Skyline Grove plot interior",
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
    setCurrentImageIndex((prev) => (prev + 1) % plotCards.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + plotCards.length) % plotCards.length);
  };

  return (
    <>
      <section id="modelhouse" className="py-20 md:py-22 px-6 overflow-hidden">
        <div className="container mx-auto">
          <div className="text-center mb-14">
            <Reveal animation="up">
              <p className="text-primary tracking-[0.2em] uppercase text-sm font-semibold mb-3">Project Features</p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
                Featured Plot Details
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Compare each plot with complete details including configuration, area, and starting price.
              </p>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {plotCards.map((plot, index) => (
              <Reveal
                key={index}
                animation="scale"
                delay={index * 0.08}
                className="group rounded-2xl overflow-hidden border border-white/15 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
                as="div"
              >
              <article className="relative h-full overflow-hidden rounded-2xl bg-[#3f4348] text-white">
                <div onClick={() => handleImageClick(index)} className="relative h-[355px] cursor-pointer overflow-hidden bg-gray-200">
                  <img
                    src={plot.src}
                    alt={plot.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent transition-opacity duration-500 group-hover:from-black/85" />

                  <span className={`absolute top-4 left-4 text-white text-xs font-bold uppercase tracking-[0.03em] px-3 py-1.5 rounded-md transition-transform duration-500 group-hover:-translate-y-0.5 ${
                    plot.status === "Sold"
                      ? "bg-[#ff2f3c]"
                      : plot.status === "Booked"
                        ? "bg-[#f59e0b]"
                        : "bg-emerald-600"
                  }`}>
                    {plot.status}
                  </span>

                  <div className="absolute left-4 right-4 md:left-5 md:right-5 bottom-4 md:bottom-5 flex flex-col md:flex-row md:items-end md:justify-between gap-3 transition-transform duration-500 group-hover:-translate-y-20 md:group-hover:-translate-y-16">
                    <div className="max-w-[15rem] md:max-w-[12.5rem]">
                      <h3 className="font-body text-[1.25rem] md:text-[1.25rem] font-extrabold leading-[0.95] mb-1 transition-transform duration-500 group-hover:-translate-y-0.5 break-words">{plot.title}</h3>
                    </div>
                    <button
                      type="button"
                      onClick={(event) => event.stopPropagation()}
                      className="self-start md:self-auto shrink-0 h-8 px-3.5 rounded-lg bg-[#3f57e2] text-white text-sm font-semibold hover:brightness-110 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:shadow-[#3f57e2]/35"
                    >
                      Details
                    </button>
                  </div>
                </div>

                <div className="absolute left-0 right-0 bottom-0 grid grid-cols-4 border-t border-white/10 bg-[#43484d]/95 backdrop-blur-sm translate-y-full opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {plot.details.map((item) => (
                    <div key={`${plot.title}-${item.label}`} className="px-4 py-4 border-r border-white/10 last:border-r-0">
                      <p className="text-white/80 text-sm md:text-base leading-none mb-1">{item.label}</p>
                      <p style={{fontSize: '0.90rem'}} className="font-body text-lg md:text-xl leading-none font-semibold break-words">{item.value}</p>
                    </div>
                  ))}
                </div>
              </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <LightBox
        isOpen={lightBoxOpen}
        images={plotCards.map((img) => img.src)}
        currentIndex={currentImageIndex}
        onClose={() => setLightBoxOpen(false)}
        onNext={handleNextImage}
        onPrev={handlePrevImage}
      />
    </>
  );
};

export default ModelHouseSection;
