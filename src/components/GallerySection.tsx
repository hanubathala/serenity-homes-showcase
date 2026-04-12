import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import amenities from "@/assets/amenities-bg.jpg";
import hero from "@/assets/hero-bg.jpg";

const images = [
  { src: hero, alt: "Exterior view", span: "md:col-span-2" },
  { src: g1, alt: "Living room" },
  { src: g2, alt: "Bedroom" },
  { src: g3, alt: "Kitchen" },
  { src: g4, alt: "Clubhouse & gym" },
  { src: amenities, alt: "Pool area", span: "md:col-span-2" },
];

const GallerySection = () => (
  <section id="gallery" className="py-24 px-6 bg-card">
    <div className="container mx-auto text-center">
      <p className="text-primary tracking-[0.2em] uppercase text-sm font-semibold mb-3">Gallery</p>
      <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
        A Glimpse of Luxury
      </h2>
      <p className="text-muted-foreground max-w-2xl mx-auto mb-14">
        Experience the beauty and elegance of Swasti Sri Serenity.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <div
            key={i}
            className={`overflow-hidden rounded-xl group ${img.span || ""}`}
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full h-64 md:h-72 object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
