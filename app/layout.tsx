import type { Metadata, Viewport } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap"
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap"
});

export const metadata: Metadata = {
  title: "P&T Auto Limited — 1 Earle Street, Grand Falls-Windsor",
  description:
    "Family-run repair shop in Grand Falls-Windsor since 1969. Exhaust, brakes, suspension, tires, oil changes, diagnostics, AC and engine work. Call 709 489 2282.",
  metadataBase: new URL("https://ptautorepair.ca"),
  openGraph: {
    title: "P&T Auto Limited",
    description:
      "Repair shop in Grand Falls-Windsor since 1969. Call 709 489 2282.",
    url: "https://ptautorepair.ca",
    siteName: "P&T Auto Limited",
    locale: "en_CA",
    type: "website"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA" className={`${oswald.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
