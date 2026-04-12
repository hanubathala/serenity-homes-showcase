const Footer = () => (
  <footer className="bg-foreground py-10 px-6">
    <div className="container mx-auto text-center">
      <p className="font-heading text-xl font-bold text-primary-foreground mb-2">
        SWASTI SRI SERENITY
      </p>
      <p className="text-primary-foreground/60 text-sm">
        © {new Date().getFullYear()} Swasti Sri Serenity. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
