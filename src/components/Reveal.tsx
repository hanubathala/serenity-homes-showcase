import { ElementType, ReactNode, CSSProperties } from "react";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";

type RevealAnimation = "up" | "down" | "left" | "right" | "scale" | "fade" | "clip" | "blur";

interface RevealProps {
  children: ReactNode;
  animation?: RevealAnimation;
  delay?: number;
  duration?: number;
  className?: string;
  as?: ElementType;
  threshold?: number;
  style?: CSSProperties;
}

export function Reveal({
  children,
  animation = "up",
  delay = 0,
  duration,
  className,
  as: Tag = "div",
  threshold,
  style,
}: RevealProps) {
  const { ref, isVisible } = useInView<HTMLDivElement>({ threshold });

  return (
    <Tag
      ref={ref}
      className={cn(
        "reveal",
        `reveal-${animation}`,
        isVisible && "is-visible",
        className
      )}
      style={{
        transitionDelay: delay ? `${delay}s` : undefined,
        transitionDuration: duration ? `${duration}s` : undefined,
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}

/** Convenience wrapper that stagger-animates direct children */
interface RevealGroupProps {
  children: ReactNode[];
  animation?: RevealAnimation;
  stagger?: number;
  baseDelay?: number;
  className?: string;
  itemClassName?: string;
  as?: ElementType;
  itemAs?: ElementType;
}

export function RevealGroup({
  children,
  animation = "up",
  stagger = 0.1,
  baseDelay = 0,
  className,
  itemClassName,
  as: Tag = "div",
  itemAs = "div",
}: RevealGroupProps) {
  const { ref, isVisible } = useInView<HTMLDivElement>({ threshold: 0.08 });

  return (
    <Tag ref={ref} className={className}>
      {children.map((child, i) => (
        <itemAs
          key={i}
          className={cn(
            "reveal",
            `reveal-${animation}`,
            isVisible && "is-visible",
            itemClassName
          )}
          style={{ transitionDelay: isVisible ? `${baseDelay + i * stagger}s` : "0s" }}
        >
          {child}
        </itemAs>
      ))}
    </Tag>
  );
}
