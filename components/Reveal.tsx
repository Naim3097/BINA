"use client";

import { useEffect, useRef } from "react";

type Props = {
  as?: "div" | "section" | "article" | "header" | "footer" | "aside";
  delay?: 1 | 2 | 3 | 4;
  className?: string;
  children: React.ReactNode;
};

export default function Reveal({
  as: Tag = "div",
  delay,
  className,
  children,
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      el.classList.add("is-visible");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const classes = ["reveal", className].filter(Boolean).join(" ");
  // Cast ref to satisfy each polymorphic Tag without per-tag typing gymnastics.
  return (
    <Tag
      ref={ref as React.RefObject<HTMLDivElement>}
      className={classes}
      {...(delay ? { "data-delay": String(delay) } : {})}
    >
      {children}
    </Tag>
  );
}
