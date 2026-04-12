import { MapPin, Clock, Train, Building } from "lucide-react";

const highlights = [
  { icon: MapPin, text: "Koheda, Hyderabad" },
  { icon: Clock, text: "30 min from Secunderabad" },
  { icon: Train, text: "Near upcoming Metro line" },
  { icon: Building, text: "Close to hospitals & malls" },
];

const LocationSection = () => (
  <section id="location" className="py-24 px-6" style={{ background: "var(--section-gradient)" }}>
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

      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div>
          <div className="grid grid-cols-2 gap-4 mb-8">
            {highlights.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-3 p-4 bg-card rounded-lg shadow-sm">
                <Icon className="text-primary shrink-0" size={22} />
                <span className="text-sm font-medium text-foreground">{text}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-lg h-[400px]">
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
      </div>
    </div>
  </section>
);

export default LocationSection;
