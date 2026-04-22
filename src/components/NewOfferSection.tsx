import { House, Search } from "lucide-react";
import heroBg from "@/assets/gallery-1.jpg";
import { Reveal } from "@/components/Reveal";

const offers = [
  {
    title: "Looking for the new home?",
    description: "10 new offers every day. 350 offers on site, trusted by a community of thousands of users.",
    Icon: Search,
  },
  {
    title: "Are you looking for home?",
    description: "350 offers on site, trusted by a community of thousands of users. 10 new offers every day.",
    Icon: House,
  },
];

const NewOfferSection = () => {
  return (
    <section id="offers" className="relative font-body py-14 md:py-16 px-4 md:px-6 overflow-hidden">
      <img
        src={heroBg}
        alt="Luxury living room"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <Reveal animation="up">
          <div className="text-center mb-8 md:mb-10">
            <span  className="inline-flex items-center rounded-md bg-[#eea434] text-white text-xs md:text-sm font-semibold px-5 py-2.5 shadow-lg">
              New Offer
            </span>
            <h2 className="font-body text-3xl md:text-4xl font-extrabold text-white mt-5" style={{ fontSize: '1.25rem' }}>Our New Offer</h2>
            <div className="w-44 h-[2px] bg-white/80 mx-auto mt-4" />
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-5 md:gap-7">
          {offers.map(({ title, description, Icon }, index) => (
            <Reveal key={title} animation={index === 0 ? "left" : "right"} delay={index * 0.1} as="article">
              <div className="h-full rounded-2xl border border-white/15 bg-black/35 backdrop-blur-md px-7 py-6 md:px-9 md:py-7 transition-all duration-300 hover:bg-black/45 hover:border-white/25">
                <div className="flex items-start gap-6">
                  <div className="shrink-0 w-20 h-20 rounded-full bg-white/12 border border-white/20 grid place-items-center">
                    <Icon size={38} className="text-white" />
                  </div>
                  <div>
                    <p className="inline-block bg-white/12 px-4 py-1.5 text-xs md:text-sm font-semibold tracking-[0.28em] text-white uppercase mb-3">
                      SHELTOS
                    </p>
                    <h3 className="font-body text-[1.25rem] md:text-[1.25rem] leading-[1.05] font-extrabold text-white mb-3" >
                      {title}
                    </h3>
                    <p className="font-body text-white/90 text-base md:text-[1.05rem] leading-relaxed max-w-xl">{description}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewOfferSection;