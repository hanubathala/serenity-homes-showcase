import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [consent, setConsent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast.success("Thank you! We'll get back to you soon.", {
      description: "Your message has been received.",
    });
    setForm({ name: "", phone: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 md:py-22 px-6 bg-[#f2eadf] border-t border-[#e1d4c1]">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-10">
          <h2 className="font-heading text-5xl md:text-7xl font-bold text-[#173445] mb-4 leading-[0.95]">Let&apos;s Connect!</h2>
          <p className="text-[#6b7280] max-w-2xl mx-auto text-lg md:text-2xl leading-relaxed">
            Whether you need information, wish to connect, or want to explore possibilities, we&apos;re here to help.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-16">
          {[
            {
              icon: Phone,
              title: "+91 9289 21 21 21",
              description: "Call us for immediate assistance or to schedule a personalized consultation.",
              href: "tel:+919289212121",
              featured: false,
            },
            {
              icon: Mail,
              title: "sales@swastisriserenity.com",
              description: "Email us for inquiries, information, or to schedule a visit.",
              href: "mailto:sales@swastisriserenity.com",
              featured: true,
            },
            {
              icon: MapPin,
              title: "Corporate Office",
              description: "Swasti Sri Serenity, Koheda, Hyderabad, Telangana.",
              href: "#location",
              featured: false,
            },
          ].map(({ icon: Icon, title, description, href, featured }) => (
            <a
              key={title}
              href={href}
              className={`rounded-2xl p-6 text-center shadow-sm border transition-all hover:-translate-y-1 ${
                featured
                  ? "bg-[#1f4038] text-white border-[#1f4038]"
                  : "bg-white text-[#173445] border-[#e5ddd0]"
              }`}
            >
              <div className={`w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center ${featured ? "bg-white/10" : "bg-[#f4f7f8]"}`}>
                <Icon size={20} className={featured ? "text-white" : "text-[#173445]"} />
              </div>
              <p className="font-semibold text-sm md:text-base mb-2 break-words">{title}</p>
              <p className={`text-xs leading-relaxed ${featured ? "text-white/80" : "text-[#6b7280]"}`}>{description}</p>
            </a>
          ))}
        </div>

        <div className="text-center mb-8">
          <h3 className="font-heading text-3xl md:text-4xl font-bold text-[#173445] mb-3">Get in Touch</h3>
          <p className="text-[#6b7280] max-w-xl mx-auto text-sm md:text-base">
            Should you have any queries, we are here to guide you, offering clarity and support at every step of your journey.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white border border-[#eadfcd] rounded-2xl shadow-sm p-5 md:p-8 space-y-5">
          <div>
            <label className="block text-xs font-semibold text-[#7a5f35] uppercase tracking-[0.18em] mb-2">Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              required
              maxLength={100}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full h-12 px-4 rounded-md border border-[#d7dbe2] bg-white text-[#173445] placeholder:text-[#9aa4b2] focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-semibold text-[#7a5f35] uppercase tracking-[0.18em] mb-2">Email</label>
              <input
                type="email"
                placeholder="your@example.com"
                required
                maxLength={255}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full h-12 px-4 rounded-md border border-[#d7dbe2] bg-white text-[#173445] placeholder:text-[#9aa4b2] focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#7a5f35] uppercase tracking-[0.18em] mb-2">Phone Number</label>
              <input
                type="tel"
                placeholder="+91"
                required
                maxLength={15}
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full h-12 px-4 rounded-md border border-[#d7dbe2] bg-white text-[#173445] placeholder:text-[#9aa4b2] focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#7a5f35] uppercase tracking-[0.18em] mb-2">Message</label>
            <textarea
              placeholder="Your message..."
              rows={5}
              required
              maxLength={1000}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-md border border-[#d7dbe2] bg-white text-[#173445] placeholder:text-[#9aa4b2] focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
            />
          </div>

          <label className="flex items-start gap-3 text-xs text-[#6b7280] leading-relaxed">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-0.5 h-4 w-4 rounded border-[#c7ced8] text-primary focus:ring-primary/30"
            />
            <span>
              I authorize Swasti Sri Serenity and its representatives to call, SMS, email or WhatsApp me about updates and notifications. This consent overrides any registration for DND / NDNC.
            </span>
          </label>

          <div className="flex justify-center pt-2">
            <button
              type="submit"
              disabled={isSubmitting || !consent}
              className="min-w-44 bg-[#1f4038] text-white py-3 px-8 rounded-full font-semibold hover:bg-[#18332d] transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <Send size={18} className={isSubmitting ? "animate-spin" : "transition-transform"} />
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
