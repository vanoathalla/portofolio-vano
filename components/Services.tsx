"use client";

import { useEffect, useRef } from "react";

const services = [
  {
    title: "Pengembangan Web",
    body: "Membangun aplikasi web dari nol menggunakan teknologi modern seperti Next.js dan React — dari arsitektur hingga tampilan akhir yang rapi dan responsif.",
    icon: (
      <svg
        width="28" height="28" viewBox="0 0 28 28"
        fill="none" stroke="currentColor"
        strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"
        aria-hidden="true" focusable="false"
      >
        <polyline points="8 9 3 14 8 19" />
        <polyline points="20 9 25 14 20 19" />
        <line x1="16" y1="5" x2="12" y2="23" />
      </svg>
    ),
  },
  {
    title: "Desain UI & Implementasi",
    body: "Menerjemahkan desain Figma menjadi antarmuka yang hidup — dengan perhatian penuh pada spacing, tipografi, motion, dan edge case.",
    icon: (
      <svg
        width="28" height="28" viewBox="0 0 28 28"
        fill="none" stroke="currentColor"
        strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"
        aria-hidden="true" focusable="false"
      >
        <rect x="3" y="3" width="22" height="22" rx="1" />
        <rect x="7" y="7" width="14" height="14" rx="1" />
        <rect x="11" y="11" width="6" height="6" rx="1" />
      </svg>
    ),
  },
  {
    title: "Koordinasi & Manajemen",
    body: "Berpengalaman memimpin dan berkoordinasi lintas divisi dalam kepanitiaan berskala besar — terorganisir, bertanggung jawab, dan berorientasi pada hasil.",
    icon: (
      <svg
        width="28" height="28" viewBox="0 0 28 28"
        fill="none" stroke="currentColor"
        strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"
        aria-hidden="true" focusable="false"
      >
        <circle cx="14" cy="8" r="3" />
        <circle cx="6" cy="20" r="3" />
        <circle cx="22" cy="20" r="3" />
        <line x1="14" y1="11" x2="6" y2="17" />
        <line x1="14" y1="11" x2="22" y2="17" />
      </svg>
    ),
  },
];

export default function Services() {
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
      id="services"
      ref={sectionRef}
      className="bg-(--color-base) px-6 md:px-12 lg:px-24 py-[120px] max-md:py-16"
      aria-label="Layanan dan keahlian"
    >
      <div className="max-w-[1280px] mx-auto">
        <p className="fade-up font-sans text-[11px] tracking-[0.15em] uppercase text-(--color-text-muted) mb-4">
          Yang Bisa Saya Lakukan
        </p>
        <h2 className="fade-up font-display font-normal text-[clamp(2rem,3.5vw,42px)] leading-[1.15] text-(--color-text-primary) mb-16">
          Layanan &amp; Keahlian
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-(--color-border)">
          {services.map(({ title, body, icon }, i) => (
            <div
              key={title}
              className={[
                "fade-up group relative flex flex-col gap-6 p-8",
                i < services.length - 1 ? "md:border-r border-(--color-border)" : "",
                i > 0 ? "border-t md:border-t-0 border-(--color-border)" : "",
                "service-card",
              ].join(" ")}
            >
              <div className="flex flex-col gap-6 group-hover:translate-x-[6px] transition-transform duration-300">
                <span className="text-(--color-text-muted) group-hover:text-(--color-accent) transition-colors duration-200">
                  {icon}
                </span>
                <h3 className="font-display font-normal text-xl text-(--color-text-primary)">
                  {title}
                </h3>
                <p className="font-sans font-light text-sm text-(--color-text-muted) leading-relaxed">
                  {body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
