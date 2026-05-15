"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.querySelectorAll<HTMLElement>(".hero-line").forEach((node, i) => {
      setTimeout(() => node.classList.add("visible"), 100 + i * 150);
    });
    el.querySelectorAll<HTMLElement>(".fade-up").forEach((node, i) => {
      setTimeout(() => node.classList.add("visible"), 550 + i * 130);
    });
  }, []);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center px-6 md:px-12 lg:px-24"
      aria-label="Hero"
    >
      {/* Grid: teks kiri, foto kanan */}
      <div className="w-full max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 md:gap-16 items-center">

        {/* Kiri — teks */}
        <div className="max-w-[680px]">
          <h1
            className="font-display font-normal leading-[1.1] text-(--color-text-primary) text-[40px] md:text-[72px]"
            aria-label="Membangun pengalaman digital dengan presisi dan dedikasi."
          >
            <span className="hero-line block">Membangun</span>
            <span className="hero-line block">pengalaman digital</span>
            <span className="hero-line block">dengan presisi &amp; dedikasi.</span>
          </h1>

          <p className="fade-up font-sans font-light text-[16px] text-(--color-text-muted) mt-6 max-w-[480px] leading-relaxed">
            Mahasiswa Teknik Informatika yang terorganisir, dapat diandalkan, dan
            bersemangat membangun produk digital yang fungsional sekaligus estetis.
          </p>

          <div className="fade-up flex flex-wrap items-center gap-4 mt-10">
            <a
              href="#work"
              onClick={(e) => { e.preventDefault(); document.getElementById("work")?.scrollIntoView({ behavior: "smooth" }); }}
              className="inline-block font-sans text-[12px] tracking-[0.12em] uppercase border border-(--color-text-primary) text-(--color-text-primary) px-8 py-[14px] hover:bg-(--color-text-primary) hover:text-(--color-base) transition-colors duration-200"
            >
              Lihat Proyek
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
              className="inline-block font-sans text-[13px] text-(--color-accent) underline-offset-4 hover:underline transition-all duration-200"
            >
              Hubungi Saya →
            </a>
          </div>
        </div>

        {/* Kanan — foto (desktop only) */}
        <div className="fade-up hidden md:block shrink-0">
          <div className="w-[340px] lg:w-[420px] aspect-[3/4] overflow-hidden bg-(--color-surface-soft)">
            <img
              src="/foto-profil.jpg"
              alt="Raden Revano Athalla Kartika"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

      </div>

      {/* Teks vertikal kanan bawah */}
      <div className="fade-up hidden md:flex absolute bottom-10 right-10" aria-hidden="true">
        <span
          className="font-sans text-[11px] tracking-[0.15em] uppercase text-(--color-text-muted)"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          Teknik Informatika · UPN Veteran YK · 2025
        </span>
      </div>
    </section>
  );
}
