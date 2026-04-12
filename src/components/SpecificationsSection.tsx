import {
  Building2,
  DoorOpen,
  Palette,
  Lamp,
  Layers,
  Grid2X2,
  UtensilsCrossed,
  Bath,
  Zap,
  Wind,
  Phone,
  Radio,
  Wifi,
  ArrowUp,
  Droplets,
  Shield,
  Flame,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type SpecSection = {
  title: string;
  icon: React.ReactNode;
  items: string[];
};

const specSections: SpecSection[] = [
  {
    title: "Super Structure",
    icon: <Building2 size={24} />,
    items: [
      "R.C.C. framed structure to withstand wind and seismic (Zone II) loads.",
      "Walls: reinforced shear walls and/or cement concrete blocks.",
    ],
  },
  {
    title: "Doors and Windows",
    icon: <DoorOpen size={24} />,
    items: [
      "Main door: teak wood frame with veneered flush shutter, melamine polish, and reputed hardware.",
      "Internal doors: hard wood frame with veneered flush shutter, melamine polish, and reputed hardware.",
      "Toilet/utility doors: granite frame with veneered/laminate flush shutter, melamine polish, and reputed hardware.",
      "Sliding door: UPVC/bronze anodised aluminium alloy frame with clear float glass panelled sliding shutters and reputed hardware.",
      "Windows: UPVC/bronze anodised aluminium alloy window system with clear float glass, suitable finishes as per design, and mosquito mesh track.",
      "Grills: aesthetically designed mild steel (MS) grills with enamel paint finish.",
    ],
  },
  {
    title: "Wall Finishes",
    icon: <Palette size={24} />,
    items: [
      "External: textured/smooth finish with two coats of exterior emulsion paint of reputed make.",
      "Internal: smooth putty finish with two coats of premium acrylic emulsion paint over a coat of primer.",
    ],
  },
  {
    title: "Ceiling Finishes",
    icon: <Lamp size={24} />,
    items: [
      "Drawing, dining, living, bedrooms, and kitchen: plain gypsum board false ceiling.",
      "Toilet/utility: grid ceiling to cover service lines.",
    ],
  },
  {
    title: "Flooring",
    icon: <Layers size={24} />,
    items: [
      "Blocks B to F - drawing, living, and dining: imported marble flooring.",
      "Blocks B to F - bedrooms, multipurpose room, and kitchen: 1200 x 600 mm polished glazed vitrified tiles of reputed make.",
      "Blocks G to K - drawing, living, dining, bedrooms, multipurpose room, and kitchen: imported marble flooring.",
      "Bathrooms: glazed vitrified tiles of reputed make.",
      "Staircases: natural stone.",
      "Corridors: glazed vitrified tiles of reputed make.",
      "Balconies: glazed vitrified tiles of reputed make (wood finish).",
      "Utilities: ceramic/vitrified tiles of reputed make.",
    ],
  },
  {
    title: "Tile Cladding / Dadoing",
    icon: <Grid2X2 size={24} />,
    items: [
      "Kitchen: polished glazed vitrified tiles (PGVT) up to 2 ft height above the kitchen platform.",
      "Bathrooms: dado up to lintel height using glazed ceramic/vitrified tiles of reputed make.",
      "Utilities: ceramic tile dado up to 5 ft height.",
    ],
  },
  {
    title: "Kitchen",
    icon: <UtensilsCrossed size={24} />,
    items: [
      "Granite platform with stainless steel sink.",
      "Piped LPG gas connection with gas meter.",
      "Provision for water purifier.",
    ],
  },
  {
    title: "Bathrooms",
    icon: <Bath size={24} />,
    items: [
      "Countertop vanity wash basin with single-lever mixer.",
      "EWC with flush valve of Villeroy and Boch.",
      "Single-lever wall mixer with bath spout and shower of premium brand.",
      "Provision for geyser in all bathrooms.",
      "Chrome-plated faucets of premium brand.",
    ],
  },
  {
    title: "Electrical",
    icon: <Zap size={24} />,
    items: [
      "Concealed copper wiring of premium brand.",
      "Power outlets for geysers in all bathrooms.",
      "Kitchen power plugs for cooking range and appliances (chimney, refrigerator, microwave oven, mixer/grinder, geyser, and water purifier).",
      "Power outlets for washing machine and dishwasher in utility area.",
      "Three-phase supply for each unit with individual prepaid meter.",
      "Miniature circuit breakers (MCB) of premium brand for distribution boards.",
      "Modular switches of reputed make.",
      "Power backup: 100% DG set backup with acoustic enclosure and AMF.",
    ],
  },
  {
    title: "Centralised Air Conditioning",
    icon: <Wind size={24} />,
    items: [
      "Centralised air conditioning with water-cooled chillers of reputed make.",
      "FCU/cassette units in each room with individual remotes.",
      "Prepaid BTU meters for each unit for individual consumption metering.",
      "Two-hour power backup for air conditioning through thermal storage.",
    ],
  },
  {
    title: "Telecom",
    icon: <Phone size={24} />,
    items: [
      "Telephone points in drawing room and master bedroom.",
      "Intercom facility for all apartments.",
    ],
  },
  {
    title: "Cable TV",
    icon: <Radio size={24} />,
    items: [
      "Provision for cable TV connection in drawing room, living room, and all bedrooms.",
    ],
  },
  {
    title: "Internet",
    icon: <Wifi size={24} />,
    items: [
      "Wi-Fi internet provision for all apartments.",
    ],
  },
  {
    title: "Lifts",
    icon: <ArrowUp size={24} />,
    items: [
      "High-speed automatic passenger lifts with rescue device and V3F for energy efficiency.",
      "Granite/marble cladding at lift entrance.",
      "One service lift with V3F for energy efficiency for each tower.",
    ],
  },
  {
    title: "WTP and STP",
    icon: <Droplets size={24} />,
    items: [
      "Treated water through an exclusive water softening and purification plant (for bore water), with water meters for each unit.",
      "Sewage treatment plant of adequate capacity as per norms; treated water reused for landscaping, flushing, and cooling towers.",
    ],
  },
  {
    title: "Security and BMS",
    icon: <Shield size={24} />,
    items: [
      "Round-the-clock security system.",
      "Panic button and intercom facility in lifts connected to security.",
      "Comprehensive security system with cameras at required locations.",
      "Intelligently designed parking management with signage and equipment at strategic locations.",
    ],
  },
  {
    title: "Fire and Safety",
    icon: <Flame size={24} />,
    items: [
      "Fire hydrant and fire sprinkler system on all floors and in basements.",
      "Fire alarms and smoke detectors in all apartments.",
      "Public address system on all floors and parking areas (basements), with control panel at main security.",
    ],
  },
];

const SpecificationsSection = () => {
  return (
    <section id="specifications" className="py-20 md:py-22 px-6 bg-[#fbf7f0]">
      <div className="container mx-auto">
        <div className="text-center mb-14">
          <p className="text-primary tracking-[0.2em] uppercase text-sm font-semibold mb-3">Model House</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Specifications
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Premium materials, dependable engineering, and thoughtful systems designed for long-term comfort and safety.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-3">
            {specSections.map((section, index) => (
              <AccordionItem
                key={index}
                value={`spec-${index}`}
                className="rounded-xl border border-border bg-background px-6 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="flex items-center gap-4 py-4 hover:text-primary transition-colors">
                  <div className="flex items-center gap-4 flex-1 text-left">
                    <div className="text-primary flex-shrink-0">{section.icon}</div>
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      {section.title}
                    </h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-2 pb-4">
                  <ul className="space-y-2 text-muted-foreground leading-relaxed ml-10">
                    {section.items.map((item, idx) => (
                      <li key={idx} className="flex gap-3">
                        <span className="text-primary flex-shrink-0 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default SpecificationsSection;