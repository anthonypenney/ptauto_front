import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const phoneDisplay = "709 489 2282";
const phoneHref = "tel:+17094892282";
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
        <nav className="topbar topbar--solid" aria-label="Primary">
          <Link className="brand" href="/" aria-label="P&T Auto Limited home">
            <Image
              src="/assets/logos/ptautowhite.png"
              alt="P&T Auto Limited"
              width={420}
              height={114}
              priority
            />
          </Link>
          <div className="topbar__nav">
            <Link href="/#services">Services</Link>
            <Link href="/legacy">Legacy</Link>
            <Link href="/#visit">Visit</Link>
          </div>
          <a className="topbar__call" href={phoneHref}>
            <span>Call the shop</span>
            <strong>{phoneDisplay}</strong>
          </a>
        </nav>

        <div className="wrap legacyPage__intro">
          <p className="kicker">Old ads and clippings</p>
          <h1>Part of the legacy.</h1>
          <p>
            The dealership chapter is closed, but the newspaper ads, articles,
            and clippings still tell the story of where the shop came from.
          </p>
        </div>
      </header>

      <section
        className="archive archive--page"
        aria-labelledby="archive-title"
      >
        <h2 className="sr" id="archive-title">
          P&T Auto archive
        </h2>

        <figure className="archive__wide">
          <div className="archive__wideImg">
            <Image
              src="/assets/photos/image copy 7.png"
              alt="Full-page Deals on Wheels newspaper ad listing 1967-1971 used vehicles for sale at P&T Auto Limited, Lincoln Road, Grand Falls."
              fill
              priority
              sizes="100vw"
            />
          </div>
          <figcaption>
            <em>Deals on Wheels</em> &mdash; a used-vehicle page the shop
            ran in the early 1970s, with Orv Penney&apos;s name on the
            bottom. A 1968 Pontiac Station Wagon went for $1,450.
          </figcaption>
        </figure>

        <div className="wrap archive__row">
          <figure className="clipping clipping--tall">
            <div className="clipping__img">
              <Image
                src="/assets/photos/image copy 12.png"
                alt="Penney & Thistle Auto Limited advertisement for American Motors and Renault sales behind Foodland on Lincoln Road."
                fill
                loading="eager"
                sizes="(max-width: 900px) 100vw, 33vw"
              />
            </div>
            <figcaption>
              <strong>1969.</strong> The original name on the door, before
              the partnership wound down.
            </figcaption>
          </figure>
          <figure className="clipping clipping--tall">
            <div className="clipping__img">
              <Image
                src="/assets/photos/image copy 8.png"
                alt="Orv Penney joins American Motors Winning Team advertisement featuring the AMC Javelin."
                fill
                loading="eager"
                sizes="(max-width: 900px) 100vw, 33vw"
              />
            </div>
            <figcaption>
              <strong>The Javelin years.</strong> AMC ran this when Orv
              signed on.
            </figcaption>
          </figure>
          <figure className="clipping clipping--wide">
            <div className="clipping__img">
              <Image
                src="/assets/photos/image copy 10.png"
                alt="Newspaper article announcing P&T Auto's move to the Windsor commercial-industrial area."
                fill
                loading="eager"
                sizes="(max-width: 900px) 100vw, 33vw"
              />
            </div>
            <figcaption>
              <strong>The move to Windsor.</strong> Crossing the river into
              the commercial-industrial area.
            </figcaption>
          </figure>
        </div>
      </section>

      <footer className="foot">
        <div className="wrap foot__inner">
          <Image
            src="/assets/logos/ptautowhite.png"
            alt="P&T Auto Limited"
            width={280}
            height={76}
          />
          <div className="foot__copy">
            <p>{address}</p>
            <p className="muted">
              &copy; {year} P&amp;T Auto Limited. In Grand Falls since 1969.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
