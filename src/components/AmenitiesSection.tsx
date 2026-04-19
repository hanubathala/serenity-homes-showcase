import {
  Dumbbell,
  Waves,
  Building2,
  Stethoscope,
  UtensilsCrossed,
  BookOpen,
  Store,
  BedDouble,
  PartyPopper,
  Volleyball,
  Landmark,
  Baby,
  Flag,
  Coffee,
  Clapperboard,
  Gamepad2,
  BatteryCharging,
  Users,
  Soup,
  Scissors,
  Refrigerator,
  Shirt,
  Pickaxe,
  Trophy,
  LucideIcon,
} from "lucide-react";

type Amenity = {
  icon: LucideIcon;
  label: string;
};

const amenities: Amenity[] = [
  { icon: Building2, label: "Welcome Lounge" },
  { icon: Users, label: "Banquet Hall" },
  { icon: Pickaxe, label: "Badminton Court" },
  { icon: Waves, label: "Swimming Pool" },
  { icon: Gamepad2, label: "Indoor Games" },
  { icon: Clapperboard, label: "Theatre" },
  { icon: Dumbbell, label: "Gym" },
  { icon: Coffee, label: "Cafe" },
  { icon: BatteryCharging, label: "EV Charging" },
  { icon: Landmark, label: "Amphitheatre" },
  { icon: Baby, label: "Kid's Pool" },
  { icon: Building2, label: "Conference Room" },
  { icon: Refrigerator, label: "Pantry" },
  { icon: Scissors, label: "Salon" },
  { icon: Stethoscope, label: "Spa" },
  { icon: BedDouble, label: "Guest Rooms" },
  { icon: Stethoscope, label: "First Aid Consultancy" },
  { icon: Store, label: "Grocery Store" },
  { icon: Shirt, label: "Shower / Changing Rooms" },
  { icon: BookOpen, label: "Library" },
  { icon: Trophy, label: "Basketball Court" },
  { icon: Users, label: "Community Space" },
  { icon: PartyPopper, label: "Party Lawn" },
  { icon: Volleyball, label: "Volleyball Court" },
  { icon: Landmark, label: "Temple" },
  { icon: Baby, label: "Kid's Zone" },
  { icon: UtensilsCrossed, label: "Barbeque" },
  { icon: Flag, label: "Mini Golf Court" },
];

import { Reveal } from "@/components/Reveal";
import { useInView } from "@/hooks/use-in-view";

const AmenitiesSection = () => {
  const { ref: headingRef, isVisible: headingVisible } = useInView();

  return (
    <section
      id="amenities"
      className="relative py-20 md:py-22 px-6 overflow-hidden"
      style={{
        background:
          "radial-gradient(1200px 500px at 85% 20%, rgba(55,85,190,0.35), transparent 60%), radial-gradient(800px 400px at 20% 70%, rgba(40,65,165,0.25), transparent 60%), linear-gradient(180deg, #121b56 0%, #0c1448 48%, #0a123f 100%)",
      }}
    >
      {/* Decorative orbs */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-20 orb-float pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(226,180,122,0.4) 0%, transparent 70%)" }} />
      <div className="absolute -bottom-32 -left-20 w-80 h-80 rounded-full opacity-15 orb-float-slow pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(100,140,255,0.5) 0%, transparent 70%)" }} />

      <div className="absolute inset-0 pointer-events-none opacity-40"
        style={{ backgroundImage: "linear-gradient(120deg, rgba(255,255,255,0.04) 0%, transparent 32%, rgba(255,255,255,0.03) 65%, transparent 100%)" }} />

      <div className="relative container mx-auto max-w-6xl text-center">
        <Reveal animation="up">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-3">Amenities</h2>
        </Reveal>

        <div
          ref={headingRef}
          className={`w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full mb-14 transition-all duration-700 ${headingVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}`}
          style={{ transformOrigin: "center", transitionDelay: "0.2s" }}
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {amenities.map(({ icon: Icon, label }, idx) => (
            <Reveal
              key={label}
              animation="scale"
              delay={Math.min(idx * 0.04, 0.7)}
              className="group p-5 rounded-2xl bg-white/10 border border-white/15 shadow-lg hover:bg-white/15 hover:border-primary/45 transition-colors duration-300 card-lift"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/15 border border-primary/35 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-primary/25 transition-all duration-300">
                <Icon className="text-primary drop-shadow-[0_0_8px_rgba(226,180,122,0.35)]" size={24} />
              </div>
              <p className="font-body font-semibold text-sm text-white/95 leading-snug group-hover:text-primary transition-colors">
                {label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
