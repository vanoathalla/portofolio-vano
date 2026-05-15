"use client";

import { useEffect, useRef } from "react";

export default function Contact() {
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
      id="contact"
      ref={sectionRef}
      className="bg-(--color-base) px-6 md:px-12 lg:px-24 py-[120px] max-md:py-16"
      aria-label="Kontak"
    >
      <div className="max-w-[600px] mx-auto text-center">
        <p className="fade-up font-sans text-[11px] tracking-[0.15em] uppercase text-(--color-text-muted) mb-5">
          Hubungi Saya
        </p>

        <h2 className="fade-up font-display font-normal text-[clamp(2.2rem,5vw,56px)] leading-[1.1] text-(--color-text-primary) mb-10">
          Mari berkolaborasi
          <br />
          dan berkarya bersama.
        </h2>

        {/* Email — underline animasi dari kiri */}
        <div className="fade-up mb-10">
          <a
            href="mailto:revanoathalla31@gmail.com"
            className="group relative inline-block font-sans text-[18px] text-(--color-text-primary)"
          >
            revanoathalla31@gmail.com
            <span
              className="absolute bottom-0 left-0 h-px bg-(--color-accent)
                w-0 group-hover:w-full transition-[width] duration-300 ease-out"
              aria-hidden="true"
            />
          </a>
        </div>

        {/* Nomor HP */}
        <div className="fade-up mb-10">
          <a
            href="tel:088232850046"
            className="group relative inline-block font-sans text-[15px] text-(--color-text-muted)"
          >
            088232850046
            <span
              className="absolute bottom-0 left-0 h-px bg-(--color-accent)
                w-0 group-hover:w-full transition-[width] duration-300 ease-out"
              aria-hidden="true"
            />
          </a>
        </div>

        {/* Social links */}
        <div className="fade-up flex items-center justify-center gap-3 flex-wrap">
          {[
            { label: "GitHub",    href: "https://github.com/vanoathalla?tab=repositories" },
            { label: "LinkedIn",  href: "https://www.linkedin.com/in/revano-athalla-357483392/" },
            { label: "Instagram", href: "https://instagram.com/vanoathalla_" },
          ].map(({ label, href }, i, arr) => (
            <span key={label} className="flex items-center gap-3">
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-[13px] text-(--color-text-muted)
                  hover:text-(--color-accent) transition-colors duration-200"
              >
                {label}
              </a>
              {i < arr.length - 1 && (
                <span className="text-(--color-accent) text-[10px]" aria-hidden="true">·</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
