import type { Metadata, Viewport } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FAFAF7",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://vanoathalla.dev"),
  title: "Revano Athalla — Mahasiswa Teknik Informatika",
  description:
    "Portfolio Raden Revano Athalla Kartika — mahasiswa Teknik Informatika UPN Veteran Yogyakarta, terorganisir, dapat diandalkan, dan siap berkontribusi.",
  openGraph: {
    title: "Revano Athalla — Mahasiswa Teknik Informatika",
    description:
      "Portfolio Raden Revano Athalla Kartika — mahasiswa Teknik Informatika UPN Veteran Yogyakarta.",
    url: "https://vanoathalla.dev",
    siteName: "Revano Athalla",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Revano Athalla — Mahasiswa Teknik Informatika",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Revano Athalla — Mahasiswa Teknik Informatika",
    description:
      "Portfolio Raden Revano Athalla Kartika — mahasiswa Teknik Informatika UPN Veteran Yogyakarta.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="id"
      className={`${playfair.variable} ${dmSans.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
