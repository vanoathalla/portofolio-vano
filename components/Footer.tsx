export default function Footer() {
  return (
    <footer
      className="border-t border-(--color-border) bg-(--color-base) px-6 md:px-12 lg:px-24 py-6"
      aria-label="Footer"
    >
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-0 items-center">
        {/* Logo */}
        <span className="font-display text-[20px] font-normal text-(--color-text-primary) text-center md:text-left">
          RRAK.
        </span>

        {/* Tagline */}
        <p className="font-sans text-[11px] tracking-[0.12em] uppercase text-(--color-text-muted) text-center">
          Dibuat dengan dedikasi · Yogyakarta, Indonesia
        </p>

        {/* Copyright */}
        <p className="font-sans text-[11px] text-(--color-text-muted) text-center md:text-right">
          © 2025 Raden Revano Athalla Kartika
        </p>
      </div>
    </footer>
  );
}
