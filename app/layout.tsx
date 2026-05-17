import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "P&T Auto Limited | Grand Falls-Windsor Auto Repair",
  description:
    "Family-owned auto repair in Grand Falls-Windsor since 1969. Exhaust, brakes, suspension, oil changes, tires, diagnostics, AC, and engine repair.",
  metadataBase: new URL("https://ptautorepair.ca"),
  openGraph: {
    title: "P&T Auto Limited",
    description:
      "Modern auto repair backed by decades of local trust in Grand Falls-Windsor.",
    url: "https://ptautorepair.ca",
    siteName: "P&T Auto Limited",
    locale: "en_CA",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA">
      <body>{children}</body>
    </html>
  );
}
