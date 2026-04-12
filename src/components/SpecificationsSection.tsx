import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Bath,
  BedDouble,
  Building2,
  CookingPot,
  DoorOpen,
  Droplets,
  Flame,
  Home,
  Paintbrush,
  Sofa,
  Sparkles,
  Wrench,
  type LucideIcon,
} from "lucide-react";

type SpecSection = {
  title: string;
  icon: LucideIcon;
  items: string[];
};

const specSections: SpecSection[] = [
  {
    title: "Structure",
    icon: Building2,
    items: [
      "Super Structure: RCC shear wall structure system, engineered for wind and seismic loads as per relevant IS codes.",
      "RCC non-structural walls/block masonry as per design.",
      "Floor Height: 3.60 m (from FFL to FFL).",
    ],
  },
  {
    title: "Joinery",
    icon: DoorOpen,
    items: [
      "Main door: teak wood frame with veneered flush shutter, melamine polish, and reputed hardware.",
      "Internal doors: hard wood frame with veneered flush shutter, melamine polish, and reputed hardware.",
      "Windows and sliding doors: UPVC/aluminium systems with clear float glass and mosquito mesh track.",
    ],
  },
  {
    title: "Master Bedroom & Closet",
    icon: BedDouble,
    items: [
      "Imported marble/vitrified flooring as per tower design intent.",
      "Smooth putty-finished walls with premium acrylic emulsion over primer.",
      "Provision for AC unit and bedroom lighting controls.",
    ],
  },
  {
    title: "Master Toilet",
    icon: Bath,
    items: [
      "Countertop vanity wash basin with single-lever mixer.",
      "EWC with premium flush valve and CP fittings.",
      "Provision for geyser and shower mixer.",
    ],
  },
  {
    title: "Bedrooms Toilet",
    icon: Droplets,
    items: [
      "Glazed vitrified/ceramic tile dado up to lintel height.",
      "EWC and basin of reputed make with chrome-plated fittings.",
      "Provision for hot and cold water line connectivity.",
    ],
  },
  {
    title: "Balcony & Sitouts",
    icon: Home,
    items: [
      "Anti-skid vitrified/ceramic tile finish with weather-resistant skirting.",
      "Drainage slopes and rainwater detailing as per design.",
      "Provision for outdoor lighting points.",
    ],
  },
  {
    title: "Other Bedrooms",
    icon: BedDouble,
    items: [
      "Vitrified/marble flooring as per unit layout.",
      "Painted walls and gypsum-finished ceiling.",
      "TV/data and AC provision points in selected bedrooms.",
    ],
  },
  {
    title: "Powder Room",
    icon: Sparkles,
    items: [
      "Premium wash basin and CP fittings with mirror provision.",
      "Designer wall finish and coordinated sanitary fixtures.",
      "Exhaust and lighting provision integrated with common controls.",
    ],
  },
  {
    title: "Dry Kitchen",
    icon: CookingPot,
    items: [
      "Granite counter with stainless steel sink and tile backsplash.",
      "Provision for water purifier, refrigerator, and chimney.",
      "Piped LPG connection with meter and safety points.",
    ],
  },
  {
    title: "Wet Kitchen",
    icon: Flame,
    items: [
      "Utility-driven kitchen layout with heavy-duty plumbing and drain lines.",
      "Dedicated points for hob/chimney and high-load appliances.",
      "Durable wall and floor finishes suitable for frequent use.",
    ],
  },
  {
    title: "Utility",
    icon: Wrench,
    items: [
      "Provision for washing machine, dishwasher, and service sink.",
      "Ceramic/vitrified flooring and tile dado in utility zone.",
      "Exhaust and electrical points for service equipment.",
    ],
  },
  {
    title: "MEP Provisions & Amenities (Site / Common Areas)",
    icon: Paintbrush,
    items: [
      "High-speed passenger lifts with rescue device and service lift in each tower.",
      "Fire safety systems, hydrants, sprinklers, and smoke detectors as per norms.",
      "Round-the-clock security, CCTV, intercom, and parking management systems.",
      "High-speed automatic passenger lifts with rescue device and V3F for energy efficiency.",
      "WTP/STP systems and treated water reuse for landscaping and flushing.",
    ],
  },
  {
    title: "Drawing / Living / Dining / TV Lounge / Pooja",
    icon: Sofa,
    items: [
      "Imported marble/vitrified flooring with elegant skirting and thresholds.",
      "Gypsum false ceiling with lighting and fan point provisions.",
      "TV, data, and modular electrical points positioned for flexible furniture layouts.",
    ],
  },
];

const SpecificationsSection = () => {
  return (
    <section
      id="specifications"
      className="relative overflow-hidden bg-[#0b0f17] px-6 py-14 md:py-18"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(1200px 600px at 15% -10%, rgba(229,192,106,0.14) 0%, rgba(11,15,23,0) 60%), radial-gradient(900px 520px at 90% 0%, rgba(255,255,255,0.08) 0%, rgba(11,15,23,0) 58%)",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-48"
        style={{
          background:
            "linear-gradient(180deg, rgba(11,15,23,0) 0%, rgba(0,0,0,0.5) 100%)",
        }}
      />

      <div className="container relative mx-auto">
        <div className="mb-8 text-center md:mb-10">
          <h2 className="font-body text-3xl font-medium uppercase tracking-[0.08em] text-[#e5c06a] md:text-4xl">
            Specification
          </h2>
        </div>

        <div className="relative rounded-2xl border border-[#d9b96a33] bg-[#0f141f]/75 p-4 backdrop-blur-sm md:p-6">
          <div className="absolute -left-6 top-7 hidden h-12 w-1 bg-[#cf2d2d] lg:block" />

          <Accordion
            type="single"
            collapsible
            defaultValue="spec-0"
            className="grid w-full grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3"
          >
            {specSections.map((section, index) => {
              const Icon = section.icon;

              return (
                <AccordionItem
                  key={index}
                  value={`spec-${index}`}
                  className="animate-fade-up overflow-hidden rounded-[8px] border-none bg-transparent"
                  style={{ animationDelay: `${index * 45}ms` }}
                >
                  <AccordionTrigger className="h-auto bg-[#ddb760] px-5 py-4 text-left font-body text-[15px] font-medium uppercase leading-snug tracking-[0.01em] text-[#1f1f1f] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e7c472] hover:shadow-[0_8px_28px_rgba(229,192,106,0.25)] hover:no-underline md:min-h-[66px] md:text-[16px] [&>svg]:h-4 [&>svg]:w-4 [&>svg]:text-[#1f1f1f]">
                    <div className="flex items-center gap-3 pr-3">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#1f1f1f1a]">
                        <Icon className="h-4 w-4" />
                      </span>
                      <span>{section.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="bg-[#efefef] px-5 pb-5 pt-3">
                    <div className="space-y-2 text-sm leading-relaxed text-[#252525] md:text-[15px]">
                      {section.items.map((item, idx) => (
                        <p key={idx}>
                          {item.split(":").length > 1 ? (
                            <>
                              <span className="font-semibold">{item.split(":")[0]}:</span>
                              {item.substring(item.indexOf(":") + 1)}
                            </>
                          ) : (
                            item
                          )}
                        </p>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default SpecificationsSection;