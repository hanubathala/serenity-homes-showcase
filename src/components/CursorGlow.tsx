import { useEffect, useRef, useState } from "react";

const CursorGlow = () => {
  const glowRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [hoveringInteractive, setHoveringInteractive] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Disable on touch / coarse pointer devices
    const isFine = window.matchMedia("(pointer: fine)").matches;
    if (!isFine) return;
    setEnabled(true);

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let glowX = mouseX;
    let glowY = mouseY;
    let rafId = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }
      const t = e.target as HTMLElement | null;
      const interactive =
        !!t && !!t.closest('a, button, [role="button"], input, textarea, select, label');
      setHoveringInteractive(interactive);
    };

    const animate = () => {
      // Smooth lag for the big glow
      glowX += (mouseX - glowX) * 0.12;
      glowY += (mouseY - glowY) * 0.12;
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${glowX}px, ${glowY}px, 0) translate(-50%, -50%)`;
      }
      rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);

    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      {/* Large soft gradient glow that lags behind */}
      <div
        ref={glowRef}
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[60] w-[420px] h-[420px] rounded-full mix-blend-screen opacity-70 transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--primary) / 0.22) 0%, hsl(var(--primary) / 0.08) 35%, transparent 70%)",
          filter: "blur(20px)",
        }}
      />
      {/* Crisp dot that follows the cursor exactly */}
      <div
        ref={dotRef}
        aria-hidden
        className={`pointer-events-none fixed top-0 left-0 z-[61] rounded-full border-2 border-primary transition-[width,height,background-color,opacity] duration-200 ease-out ${
          hoveringInteractive
            ? "w-10 h-10 bg-primary/20 opacity-100"
            : "w-3 h-3 bg-primary opacity-90"
        }`}
      />
    </>
  );
};

export default CursorGlow;
