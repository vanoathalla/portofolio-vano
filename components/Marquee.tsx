"use client";

const TAGS = [
  "React",
  "TypeScript",
  "Next.js",
  "Tailwind CSS",
  "Vite",
  "Node.js",
  "REST APIs",
  "Git",
  "Figma",
  "Framer Motion",
  "CSS Animations",
  "Web Performance",
];

function TagList() {
  return (
    <>
      {TAGS.map((tag) => (
        <span key={tag} className="flex items-center gap-4 shrink-0">
          <span className="font-sans text-[12px] tracking-[0.1em] uppercase text-(--color-text-muted) whitespace-nowrap select-none">
            {tag}
          </span>
          <span className="text-(--color-accent) text-[10px] shrink-0 select-none" aria-hidden="true">
            ·
          </span>
        </span>
      ))}
    </>
  );
}

export default function Marquee() {
  return (
    <div
      className="marquee-wrapper bg-(--color-surface) h-12 overflow-hidden flex items-center border-y border-(--color-border)"
      aria-label="Technologies I work with"
      role="marquee"
    >
      <div className="marquee-track">
        <TagList />
        <TagList />
      </div>
    </div>
  );
}
