import { useState, useEffect } from "react";
import { X, Download, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

import BookingModal from "./BookingModal";
const WelcomeModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);

  useEffect(() => {
    let timer: number | undefined;

    // Auto-open schedule popup on homepage
    const isHomePage = window.location.pathname === "/";
    if (isHomePage) {
      timer = window.setTimeout(() => {
        setIsOpen(false);
        setShowBookingModal(true);
      }, 800);
    }

    // Listen for custom event to open welcome modal
    const handleOpenModal = () => {
      setIsOpen(true);
    };

    // Listen for custom event to open booking modal directly
    const handleOpenBookingModal = () => {
      setIsOpen(false);
      setShowBookingModal(true);
    };

    window.addEventListener("openWelcomeModal", handleOpenModal);
    window.addEventListener("openBookingModal", handleOpenBookingModal);

    return () => {
      if (timer) {
        window.clearTimeout(timer);
      }

      window.removeEventListener("openWelcomeModal", handleOpenModal);
      window.removeEventListener("openBookingModal", handleOpenBookingModal);
    };
  }, []);

  const handleDownloadBrochure = () => {
    // Create a dummy PDF download (in real scenario, link to actual brochure)
    const link = document.createElement("a");
    link.href = "/brochure.pdf"; // Update with actual brochure path
    link.download = "Swasti-Sri-Serenity-Brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!isOpen && !showBookingModal) return null;

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in"
            onClick={() => setIsOpen(false)}
          />

          {/* Modal */}
          <div
            className="relative w-full max-w-md bg-gradient-to-br from-white to-secondary rounded-2xl shadow-2xl p-8 animate-slide-up"
            style={{
              animation: "slideUp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
            }}
          >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-foreground/60 hover:text-foreground transition-colors p-2 hover:bg-gray-100 rounded-full"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        {/* Content */}
        <div className="text-center mb-8">
          {/* What's New Badge */}
          <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30 rounded-full">
            <span className="text-sm font-semibold text-primary">🎉 What's New</span>
          </div>

          <div className="inline-block mb-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center animate-bounce">
              <span className="text-2xl font-bold text-white">✨</span>
            </div>
          </div>

          <h2 className="font-heading text-sm tracking-[0.2em] uppercase text-primary font-semibold mb-2">
            Stunning Website Experience
          </h2>

          <h1 className="font-heading text-4xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-3">
            Swasti Sri Serenity
          </h1>

          <div className="space-y-3 mb-6">
            <p className="text-muted-foreground text-sm font-medium">✨ Smooth Animations & Popups</p>
            <p className="text-muted-foreground text-sm font-medium">📱 Fully Responsive Design</p>
            <p className="text-muted-foreground text-sm font-medium">🎨 Premium Color Scheme</p>
            <p className="text-muted-foreground text-sm font-medium">📥 Download Brochure Feature</p>
          </div>

          <p className="text-foreground text-base font-semibold mb-2">
            Welcome to your dream retirement home
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Experience a beautifully designed premium assisted living community in Koheda
          </p>
        </div>

        {/* Features - Website Highlights */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          {[
            { icon: "✨", label: "Smooth Animations" },
            { icon: "🎨", label: "Stunning Colors" },
            { icon: "📥", label: "Brochure Download" },
            { icon: "🏠", label: "Premium Spaces" },
          ].map((feature) => (
            <div
              key={feature.label}
              className="p-4 bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-lg text-center hover:border-primary/50 hover:bg-primary/15 transition-all cursor-default"
            >
              <span className="text-2xl mb-2 block">{feature.icon}</span>
              <p className="text-xs font-semibold text-foreground tracking-wide uppercase">{feature.label}</p>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="space-y-3 mb-8">
          <button
            onClick={handleDownloadBrochure}
            className="w-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group"
          >
            <Download size={20} className="group-hover:animate-bounce" />
            Download Brochure
          </button>
          <button
            onClick={() => {
              setIsOpen(false);
              setShowBookingModal(true);
            }}
            className="w-full bg-card border-2 border-primary text-primary py-3 px-6 rounded-lg font-semibold hover:bg-primary/5 transition-all hover:scale-105 active:scale-95"
          >
            Schedule Site Visit
          </button>
        </div>

        {/* Social Media */}
        <div className="border-t border-border pt-6">
          <p className="text-center text-muted-foreground text-sm mb-4">Connect With Us</p>
          <div className="flex justify-center gap-4">
            {[
              { icon: Facebook, label: "Facebook", href: "https://facebook.com" },
              { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
              { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
              { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
            ].map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-secondary hover:bg-primary hover:text-primary-foreground rounded-full transition-all hover:scale-110 active:scale-95"
                aria-label={label}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
      </div>
      )}

      <BookingModal isOpen={showBookingModal} onClose={() => setShowBookingModal(false)} />

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default WelcomeModal;
