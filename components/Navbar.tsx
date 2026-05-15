"use client";

import { useEffect, useRef, useState } from "react";

const NAV_LINKS = [
  { label: "Proyek",    href: "#work" },
  { label: "Tentang",   href: "#about" },
  { label: "Keahlian",  href: "#skills" },
  { label: "Layanan",   href: "#services" },
  { label: "Kontak",    href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled]         = useState(false);
  const [drawerOpen, setDrawerOpen]     = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const navRef = useRef<HTMLElement>(null);

  /* ── Scroll: bg + active section ── */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);

      const ids = NAV_LINKS.map((l) => l.href.slice(1));
      let current = "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) current = id;
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // run once on mount
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Close drawer on outside click ── */
  useEffect(() => {
    if (!drawerOpen) return;
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setDrawerOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [drawerOpen]);

  /* ── Lock body scroll when drawer open ── */
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  const handleNavClick = (href: string) => {
    setDrawerOpen(false);
    const id = href.slice(1);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      ref={navRef}
      className={[
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-(--color-base) border-b border-(--color-border)"
          : "bg-transparent border-b border-transparent",
      ].join(" ")}
    >
      <nav
        className="max-w-[1280px] mx-auto px-6 md:px-12 h-16 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="font-display text-[20px] font-normal text-(--color-text-primary) tracking-tight leading-none"
          aria-label="Revano Athalla — kembali ke atas"
        >
          RRAK.
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-10" role="list">
          {NAV_LINKS.map(({ label, href }) => {
            const id = href.slice(1);
            const isActive = activeSection === id;
            return (
              <li key={href}>
                <a
                  href={href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
                  className={[
                    "nav-link-underline",
                    "font-sans text-[12px] tracking-[0.12em] uppercase",
                    "transition-colors duration-200",
                    isActive
                      ? "active text-(--color-text-primary)"
                      : "text-(--color-text-muted) hover:text-(--color-text-primary)",
                  ].join(" ")}
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Hamburger — 20px wide, 1.5px stroke */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-[5px] w-10 h-10 -mr-2"
          onClick={() => setDrawerOpen((v) => !v)}
          aria-label={drawerOpen ? "Close menu" : "Open menu"}
          aria-expanded={drawerOpen}
          aria-controls="mobile-drawer"
        >
          <span
            className={[
              "block w-5 bg-(--color-text-primary) transition-all duration-300 origin-center",
              "h-[1.5px]",
              drawerOpen ? "rotate-45 translate-y-[6.5px]" : "",
            ].join(" ")}
          />
          <span
            className={[
              "block w-5 bg-(--color-text-primary) transition-all duration-300",
              "h-[1.5px]",
              drawerOpen ? "opacity-0 scale-x-0" : "",
            ].join(" ")}
          />
          <span
            className={[
              "block w-5 bg-(--color-text-primary) transition-all duration-300 origin-center",
              "h-[1.5px]",
              drawerOpen ? "-rotate-45 -translate-y-[6.5px]" : "",
            ].join(" ")}
          />
        </button>
      </nav>

      {/* ── Mobile drawer ── */}
      <div
        id="mobile-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={[
          "md:hidden fixed top-0 right-0 h-screen w-[75vw] max-w-[320px]",
          "bg-(--color-base) border-l border-(--color-border)",
          "flex flex-col justify-center px-8 gap-2",
          "transition-transform duration-300 ease-in-out",
          drawerOpen ? "translate-x-0 drawer-open" : "translate-x-full",
        ].join(" ")}
      >
        {NAV_LINKS.map(({ label, href }, i) => {
          const id = href.slice(1);
          const isActive = activeSection === id;
          return (
            <a
              key={href}
              href={href}
              onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
              style={{ transitionDelay: drawerOpen ? `${i * 0.08}s` : "0s" }}
              className={[
                "drawer-link",
                "font-display text-[28px] font-normal py-3",
                "border-b border-(--color-border) last:border-b-0",
                isActive
                  ? "text-(--color-text-primary)"
                  : "text-(--color-text-muted) hover:text-(--color-text-primary)",
              ].join(" ")}
            >
              {label}
            </a>
          );
        })}
      </div>

      {/* Backdrop */}
      <div
        className={[
          "md:hidden fixed inset-0 bg-(--color-text-primary)/20",
          "transition-opacity duration-300",
          drawerOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        ].join(" ")}
        onClick={() => setDrawerOpen(false)}
        aria-hidden="true"
      />
    </header>
  );
}
