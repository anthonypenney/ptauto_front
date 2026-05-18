import type { Metadata } from "next";
import Image from "next/image";
import { Topbar } from "../Topbar";
import { LegacyArchive } from "./LegacyArchive";

const address = "1 Earle Street, Grand Falls-Windsor, NL A2A 2J9";

export const metadata: Metadata = {
  title: "Legacy | P&T Auto Limited",
  description:
    "Old ads and clippings from P&T Auto Limited in Grand Falls-Windsor."
};

export default function LegacyPage() {
  const year = new Date().getFullYear();

  return (
    <main className="legacyPage">
      <header className="legacyPage__hero">
        <Topbar solid />

        <div className="wrap legacyPage__intro">
          <p className="kicker">Old ads and clippings</p>
          <h1>Part of the legacy.</h1>
          <p>
            The dealership chapter is closed, but the newspaper ads, articles,
            and clippings still tell the story of where the shop came from.
          </p>
        </div>
      </header>

      <LegacyArchive />

      <footer className="foot">
        <div className="wrap foot__inner">
          <Image
            src="/assets/logos/ptautowhite.png"
            alt="P&T Auto Limited"
            width={280}
            height={76}
            quality={85}
          />
          <div className="foot__copy">
            <p>{address}</p>
            <p className="muted">
              &copy; {year}{" "}P&amp;T Auto Limited. Established in 1969,
              incorporated in 1971.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
