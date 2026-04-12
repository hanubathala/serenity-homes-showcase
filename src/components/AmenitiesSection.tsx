import {
  Dumbbell, Waves, Building2, TreePine, ShieldCheck, Stethoscope,
  UtensilsCrossed, BookOpen, Car, Wifi, Sun, Heart,
} from "lucide-react";

const amenities = [
  { icon: Waves, label: "Swimming Pool" },
  { icon: Dumbbell, label: "Fitness Center" },
  { icon: Building2, label: "Clubhouse" },
  { icon: TreePine, label: "Landscaped Gardens" },
  { icon: Stethoscope, label: "Medical Center" },
  { icon: ShieldCheck, label: "24/7 Security" },
  { icon: UtensilsCrossed, label: "Dining Hall" },
  { icon: BookOpen, label: "Library" },
  { icon: Car, label: "Covered Parking" },
  { icon: Wifi, label: "High-Speed WiFi" },
  { icon: Sun, label: "Yoga & Meditation" },
  { icon: Heart, label: "Wellness Programs" },
];

const AmenitiesSection = () => (
  <section id="amenities" className="py-24 px-6 bg-card">
    <div className="container mx-auto text-center">
      <p className="text-primary tracking-[0.2em] uppercase text-sm font-semibold mb-3">Amenities</p>
      <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
        Everything You Need
      </h2>
      <p className="text-muted-foreground max-w-2xl mx-auto mb-16">
        World-class facilities designed to enhance every aspect of senior living.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {amenities.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="group p-6 rounded-xl bg-background hover:shadow-lg transition-shadow duration-300 border border-border"
          >
            <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/10 transition-colors">
              <Icon className="text-primary" size={26} />
            </div>
            <p className="font-medium text-foreground">{label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AmenitiesSection;
