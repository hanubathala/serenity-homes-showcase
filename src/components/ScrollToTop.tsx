import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all grid place-items-center animate-fade-in"
    >
      <ArrowUp size={20} />
    </button>
  );
};

export default ScrollToTop;
