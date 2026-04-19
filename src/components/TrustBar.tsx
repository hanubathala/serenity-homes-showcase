import { ShieldCheck, Award, Building2, BadgeCheck, Leaf } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const items = [
  { icon: ShieldCheck, label: "RERA Approved", sub: "TS RERA Certified" },
  { icon: Award, label: "Award Winning", sub: "Best Senior Living 2024" },
  { icon: Building2, label: "Trusted Developer", sub: "20+ Years Legacy" },
  { icon: BadgeCheck, label: "Vastu Compliant", sub: "Premium Layouts" },
  { icon: Leaf, label: "Green Certified", sub: "IGBC Pre-Certified" },
];

const TrustBar = () => (
  <section className="border-y border-border/60 bg-card/70 backdrop-blur-sm py-6">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        {items.map((it, i) => (
          <Reveal key={it.label} animation="up" delay={i * 0.06}>
            <div className="flex items-center gap-3 group">
              <div className="shrink-0 w-11 h-11 rounded-full grid place-items-center bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <it.icon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground leading-tight">{it.label}</p>
                <p className="text-xs text-muted-foreground">{it.sub}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default TrustBar;
