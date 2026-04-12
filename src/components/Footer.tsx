import { Facebook, Instagram, Twitter, Linkedin, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground">
    {/* Main Footer Content */}
    <div className="py-16 px-6">
      <div className="container mx-auto grid md:grid-cols-4 gap-8 mb-8">
        {/* Brand */}
        <div>
          <h3 className="font-heading text-2xl font-bold mb-4">SWASTI SRI</h3>
          <p className="text-primary-foreground/70 text-sm leading-relaxed">
            Premium assisted living retirement community in Koheda, Hyderabad.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {["About Us", "Amenities", "Floor Plans", "Gallery", "Contact"].map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase().replace(" ", "")}`}
                  className="text-primary-foreground/70 hover:text-primary transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-heading text-lg font-semibold mb-4">Contact</h4>
          <div className="space-y-3 text-sm">
            <a
              href="tel:+917660005500"
              className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary transition-colors"
            >
              <Phone size={18} />
              +91-7660005500
            </a>
            <a
              href="mailto:sales@rajapushpa.in"
              className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary transition-colors"
            >
              <Mail size={18} />
              sales@rajapushpa.in
            </a>
            <div className="flex items-center gap-2 text-primary-foreground/70">
              <MapPin size={18} />
              Koheda, Hyderabad
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="font-heading text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex gap-3">
            {[
              { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
              { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
              { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
              { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/20 hover:bg-primary text-primary-foreground rounded-full flex items-center justify-center transition-all hover:scale-110 active:scale-95"
                aria-label={label}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-primary-foreground/20" />
    </div>

    {/* Bottom Footer */}
    <div className="py-6 px-6 bg-black/20">
      <div className="container mx-auto text-center">
        <p className="text-primary-foreground/70 text-sm">
          © {new Date().getFullYear()} Swasti Sri Serenity. All rights reserved. |{" "}
          <a href="#" className="hover:text-primary transition-colors">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="#" className="hover:text-primary transition-colors">
            Terms & Conditions
          </a>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
