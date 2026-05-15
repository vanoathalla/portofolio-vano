"use client";

import { useEffect, useRef } from "react";

const projects = [
  {
    index: "01",
    title: "SIP-MAGANG",
    category: "Web Application",
    description:
      "Geofencing-based attendance system for Disdikpora DIY. Built with Next.js, Prisma, and PostgreSQL — handling real-time location validation for hundreds of interns.",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Geofencing"],
    year: "2024",
    link: "#",
  },
  {
    index: "02",
    title: "Futsal FTI Branding",
    category: "Brand Identity",
    description:
      "Complete visual identity system for the FTI university futsal team — logo, kit design, social media templates, and motion assets.",
    tags: ["Branding", "Figma", "Motion"],
    year: "2023",
    link: "#",
  },
  {
    index: "03",
    title: "Campus Portal Redesign",
    category: "UI/UX Design",
    description:
      "End-to-end redesign of a university student portal. Conducted user research, built a design system, and delivered a high-fidelity prototype.",
    tags: ["Figma", "User Research", "Design System"],
    year: "2023",
    link: "#",
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll<HTMLElement>(".fade-up").forEach((node, i) => {
              setTimeout(() => node.classList.add("visible"), i * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="px-6 md:px-12 lg:px-24 py-[120px] max-md:py-16"
      aria-label="Selected work"
    >
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="fade-up flex items-end justify-between mb-16 border-b border-(--color-border) pb-8">
          <div>
            <p className="font-sans text-[11px] tracking-[0.18em] uppercase text-(--color-accent) mb-3">
              Selected Work
            </p>
            <h2 className="font-display font-normal text-[clamp(2rem,4vw,3.5rem)] leading-[1.15] text-(--color-text-primary)">
              Projects I&apos;m proud of.
            </h2>
          </div>
          <span className="hidden md:block font-sans text-[11px] tracking-[0.12em] uppercase text-(--color-text-muted)">
            {projects.length} projects
          </span>
        </div>

        {/* Project list */}
        <div className="divide-y divide-(--color-border)">
          {projects.map((project) => (
            <article
              key={project.index}
              className="fade-up group grid grid-cols-1 md:grid-cols-[80px_1fr_auto] gap-6 py-10 items-start"
            >
              {/* Index */}
              <span className="font-sans text-[11px] tracking-[0.12em] text-(--color-text-muted) pt-1">
                {project.index}
              </span>

              {/* Content */}
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h3 className="font-display font-normal text-2xl md:text-3xl text-(--color-text-primary) group-hover:text-(--color-accent) transition-colors duration-200">
                    {project.title}
                  </h3>
                  <span className="font-sans text-[10px] tracking-[0.12em] uppercase text-(--color-text-muted) border border-(--color-border) px-2 py-0.5">
                    {project.category}
                  </span>
                </div>
                <p className="font-sans font-light text-(--color-text-muted) text-sm leading-relaxed max-w-xl mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-sans text-[10px] tracking-widest uppercase text-(--color-text-muted) bg-(--color-surface) px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Year + link */}
              <div className="flex md:flex-col items-center md:items-end gap-4 md:gap-3 pt-1">
                <span className="font-sans text-[11px] text-(--color-text-muted)">
                  {project.year}
                </span>
                <a
                  href={project.link}
                  className="inline-flex items-center gap-1.5 font-sans text-[11px] tracking-widest uppercase
                    text-(--color-text-muted) hover:text-(--color-accent) transition-colors duration-200"
                  aria-label={`View ${project.title}`}
                >
                  View
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
