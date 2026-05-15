"use client";

import { useEffect, useRef } from "react";

const testimonials = [
  {
    quote:
      "Arden delivered the most meticulous frontend work I've ever seen. Every interaction, every transition — it all felt intentional and refined.",
    name: "SARAH CHEN",
    role: "Product Lead, Luminary",
  },
  {
    quote:
      "Working with Arden felt like having a designer and an engineer in one. He caught UX issues we hadn't even thought of, then fixed them before we asked.",
    name: "MARCUS VEIL",
    role: "CTO, Aether SaaS",
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll<HTMLElement>(".fade-up")
              .forEach((node, i) => {
                setTimeout(() => node.classList.add("visible"), i * 100);
              });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="relative bg-(--color-surface) px-6 md:px-12 lg:px-24 py-[120px] max-md:py-16 overflow-hidden"
      aria-label="Testimonials"
    >
      {/* Large decorative quote mark */}
      <span
        className="font-display font-normal text-[120px] leading-none
          text-(--color-accent) opacity-30
          absolute top-8 left-6 md:left-12 lg:left-24
          select-none pointer-events-none"
        aria-hidden="true"
      >
        &ldquo;
      </span>

      <div className="max-w-[1280px] mx-auto">
        <p className="fade-up font-sans text-[11px] tracking-[0.15em] uppercase text-(--color-text-muted) mb-16">
          Kind Words
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {testimonials.map(({ quote, name, role }) => (
            <blockquote key={name} className="fade-up flex flex-col gap-8">
              <p className="font-display font-normal text-[clamp(1.1rem,2vw,1.35rem)] leading-[1.6] text-(--color-text-primary)">
                &ldquo;{quote}&rdquo;
              </p>
              <footer>
                <div className="w-8 h-px bg-(--color-accent) mb-4" aria-hidden="true" />
                <cite className="not-italic">
                  <p className="font-sans text-[12px] tracking-[0.1em] uppercase text-(--color-text-primary)">
                    {name}
                  </p>
                  <p className="font-sans text-[12px] text-(--color-text-muted) mt-0.5">
                    {role}
                  </p>
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
