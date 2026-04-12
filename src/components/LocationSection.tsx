import { MapPin, Clock, Train, Building, Plane, Navigation, Store, Hospital, School } from "lucide-react";

const highlights = [
  { icon: MapPin, text: "Koheda, Hyderabad" },
  { icon: Clock, text: "30 min from Secunderabad" },
  { icon: Train, text: "Near upcoming Metro line" },
  { icon: Building, text: "Close to hospitals & malls" },
];

const nearbyFeatures = [
  { icon: Navigation, title: "Outer Ring Road", distance: "Just 10 minutes" },
  { icon: Plane, title: "Rajiv Gandhi International Airport", distance: "35-40 km away" },
  { icon: Store, title: "Shopping Malls & Retail", distance: "5-10 km radius" },
  { icon: Hospital, title: "Multi-specialty Hospitals", distance: "3-7 km away" },
  { icon: School, title: "Educational Institutions", distance: "2-5 km away" },
  { icon: Train, title: "Railway Station", distance: "15-20 minutes" },
];

const LocationSection = () => (
  <section id="location" className="py-20 md:py-22 px-6" style={{ background: "var(--section-gradient)" }}>
    <div className="container mx-auto">
      <div className="text-center mb-14">
        <p className="text-primary tracking-[0.2em] uppercase text-sm font-semibold mb-3">Location</p>
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
          Prime Location
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Strategically situated in Koheda with excellent connectivity to Hyderabad's key landmarks.
        </p>
      </div>

      {/* Quick Highlights */}
      <div className="mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {highlights.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-3 p-4 bg-card rounded-lg shadow-sm border border-border">
              <Icon className="text-primary shrink-0" size={22} />
              <span className="text-sm font-medium text-foreground">{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Map and Nearby Features */}
      <div className="grid lg:grid-cols-3 gap-8 items-start mb-8">
        {/* Map */}
        <div className="lg:col-span-1 rounded-2xl overflow-hidden shadow-lg h-[400px]">
          <iframe
            title="Swasti Sri Serenity Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30437.38!2d78.63!3d17.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8e8a67e00001%3A0x1!2sKoheda%2C+Telangana!5e0!3m2!1sen!2sin!4v1"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Nearby Features Grid */}
        <div className="lg:col-span-2">
          <h3 className="font-heading text-2xl font-semibold text-foreground mb-6">Nearby Features</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {nearbyFeatures.map(({ icon: Icon, title, distance }) => (
              <div key={title} className="p-5 bg-card rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-primary/10 rounded-lg text-primary flex-shrink-0">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h4 className="font-heading text-base font-semibold text-foreground">{title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{distance}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default LocationSection;
