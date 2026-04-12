import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Phone,
  Mail,
  Download,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  ChevronDown,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Amenities", href: "#amenities" },
  { label: "Floor Plans", href: "#floorplans" },
  { label: "Residences", href: "#residences" },
  { label: "Specifications", href: "#specifications" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
];

const moreLinks = [
  { label: "Showcase", href: "#showcase" },
  { label: "Model House", href: "#modelhouse" },
  { label: "Gallery", href: "#gallery" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const handleDownloadBrochure = () => {
    const link = document.createElement("a");
    link.href = "/brochure.pdf";
    link.download = "Swasti-Sri-Serenity-Brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div
        className={`transition-all duration-300 border-b ${
          scrolled
            ? "bg-slate-900/95 backdrop-blur-md border-white/10"
            : "bg-slate-950/70 backdrop-blur-sm border-white/10"
        }`}
      >
        <div className="container mx-auto px-6 py-2 hidden md:flex items-center justify-between gap-4">
          <div className="flex items-center gap-5 text-xs text-white/90">
            <a href="tel:+919999999999" className="inline-flex items-center gap-2 hover:text-primary transition-colors">
              <Phone size={14} />
              +91 99999 99999
            </a>
            <a href="mailto:sales@swastisriserenity.com" className="inline-flex items-center gap-2 hover:text-primary transition-colors">
              <Mail size={14} />
              sales@swastisriserenity.com
            </a>
          </div>

          <div className="flex items-center gap-2">
            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, index) => (
              <a
                key={index}
                href="#"
                aria-label="Social media"
                className="w-8 h-8 rounded-full border border-white/20 text-white/90 inline-flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
              >
                <Icon size={14} />
              </a>
            ))}

            <button
              onClick={handleDownloadBrochure}
              className="ml-2 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground text-xs font-semibold hover:shadow-lg transition-all"
            >
              <Download size={14} />
              Download Brochure
            </button>
          </div>
        </div>
      </div>

      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-card/95 backdrop-blur-md shadow-md py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-6">
        <a href="#" className={`font-heading text-xl font-bold tracking-wide transition-colors ${scrolled ? "text-foreground" : "text-primary-foreground"}`}>
          SWASTI SRI SERENITY
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium tracking-wide transition-colors hover:text-primary ${
                scrolled ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              {l.label}
            </a>
          ))}

          <DropdownMenu>
            <DropdownMenuTrigger
              className={`inline-flex items-center gap-1 text-sm font-medium tracking-wide transition-colors hover:text-primary focus:outline-none ${
                scrolled ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              More
              <ChevronDown size={16} />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="min-w-44 rounded-xl border-border/80 bg-card/95 backdrop-blur-md p-2">
              {moreLinks.map((link) => (
                <DropdownMenuItem key={link.href} asChild className="rounded-lg px-3 py-2.5 cursor-pointer">
                  <a href={link.href}>{link.label}</a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <button
            onClick={() => window.dispatchEvent(new Event("openBookingModal"))}
            className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-6 py-2.5 rounded-lg text-sm font-semibold hover:shadow-lg transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            Schedule Site Visit
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className={`md:hidden ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-card/95 backdrop-blur-md px-6 pb-6 pt-2 animate-fade-in">
          <div className="py-3 border-b border-border mb-2 space-y-2">
            <a href="tel:+919999999999" className="flex items-center gap-2 text-sm text-foreground/90">
              <Phone size={14} />
              +91 99999 99999
            </a>
            <a href="mailto:sales@swastisriserenity.com" className="flex items-center gap-2 text-sm text-foreground/90">
              <Mail size={14} />
              sales@swastisriserenity.com
            </a>
            <div className="flex items-center gap-2 pt-1">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  aria-label="Social media"
                  className="w-8 h-8 rounded-full border border-border text-foreground/80 inline-flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
            <button
              onClick={handleDownloadBrochure}
              className="mt-2 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground text-xs font-semibold"
            >
              <Download size={14} />
              Download Brochure
            </button>
          </div>

          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-foreground font-medium border-b border-border"
            >
              {l.label}
            </a>
          ))}
          {moreLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-foreground font-medium border-b border-border"
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={() => {
              setOpen(false);
              window.dispatchEvent(new Event("openBookingModal"));
            }}
            className="block mt-4 w-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground text-center px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all cursor-pointer"
          >
            Schedule Site Visit
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
