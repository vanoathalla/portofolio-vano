"use client";

import { useEffect, useRef } from "react";

const skillGroups = [
  {
    category: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "HTML & CSS"],
  },
  {
    category: "Backend & Database",
    items: ["Node.js", "Prisma ORM", "PostgreSQL", "REST API", "PHP"],
  },
  {
    category: "Tools & Workflow",
    items: ["Git & GitHub", "Figma", "Canva", "Microsoft Office", "VS Code"],
  },
  {
    category: "Soft Skills",
    items: ["Leadership", "Team Work", "Manajemen Waktu", "Tanggung Jawab", "Kemauan Belajar"],
  },
];

const experiences = [
  {
    role: "Ketua Pelaksana",
    org: "IF CUP",
    period: "Agu – Nov 2024",
  },
  {
    role: "Staff Divisi Acara",
    org: "IF Corner",
    period: "Agu – Nov 2024",
  },
  {
    role: "Staff Seni & Olahraga",
    org: "HIMATIF UPNVY",
    period: "Mar 2024 – Mar 2025",
  },
  {
    role: "Staff Divisi Sepak Bola",
    org: "UKM Sepak Bola UPNVY",
    period: "Jan 2024 – Feb 2025",
  },
  {
    role: "Sekretaris",
    org: "Remaja Masjid Babul Choir",
    period: "Sep 2024 – Sekarang",
  },
];

export default function Skills() {
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
                setTimeout(() => node.classList.add("visible"), i * 80);
              });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="bg-(--color-surface) px-6 md:px-12 lg:px-24 py-[120px] max-md:py-16"
      aria-label="Keterampilan dan pengalaman organisasi"
    >
      <div className="max-w-[1280px] mx-auto">

        {/* Header */}
        <div className="fade-up mb-16">
          <p className="font-sans text-[11px] tracking-[0.15em] uppercase text-(--color-text-muted) mb-4">
            Keterampilan
          </p>
          <h2 className="font-display font-normal text-[clamp(2rem,4vw,42px)] leading-[1.15] text-(--color-text-primary)">
            Yang saya bawa ke meja.
          </h2>
        </div>

        {/* Grid skill */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-(--color-border) mb-16">
          {skillGroups.map(({ category, items }) => (
            <div
              key={category}
              className="fade-up bg-(--color-surface) p-8 hover:bg-(--color-base) transition-colors duration-300"
            >
              <p className="font-sans text-[11px] tracking-[0.14em] uppercase text-(--color-accent) mb-6">
                {category}
              </p>
              <ul className="space-y-3" role="list">
                {items.map((item) => (
                  <li
                    key={item}
                    className="font-sans font-light text-(--color-text-primary) text-sm flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-(--color-accent) shrink-0" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Pengalaman Organisasi */}
        <div className="fade-up">
          <p className="font-sans text-[11px] tracking-[0.15em] uppercase text-(--color-text-muted) mb-8">
            Pengalaman Organisasi &amp; Kepanitiaan
          </p>
          <div className="divide-y divide-(--color-border)">
            {experiences.map(({ role, org, period }) => (
              <div
                key={`${role}-${org}`}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 py-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                  <span className="font-sans font-normal text-[15px] text-(--color-text-primary)">
                    {role}
                  </span>
                  <span className="hidden sm:block text-(--color-border) text-[10px]">·</span>
                  <span className="font-sans font-light text-sm text-(--color-text-muted)">
                    {org}
                  </span>
                </div>
                <span className="font-sans text-[12px] text-(--color-text-muted) shrink-0">
                  {period}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
