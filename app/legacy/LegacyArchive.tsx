"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const archiveItems = [
  {
    className: "archive__wide",
    imageClassName: "archive__wideImg",
    src: "/assets/photos/archive-deals-on-wheels-used-cars.png",
    alt: "Full-page Deals on Wheels newspaper ad listing 1967-1971 used vehicles for sale at P&T Auto Limited, Lincoln Road, Grand Falls.",
    sizes: "100vw",
    caption: (
      <>
        <em>Deals on Wheels</em> &mdash; a used-vehicle page the shop ran in
        the early 1970s, with Orv Penney&apos;s name on the bottom. A 1968
        Pontiac Station Wagon went for $1,450.
      </>
    )
  },
  {
    className: "clipping clipping--tall",
    imageClassName: "clipping__img",
    src: "/assets/photos/archive-penney-thistle-amc-renault-ad.png",
    alt: "Penney & Thistle Auto Limited advertisement for American Motors and Renault sales behind Foodland on Lincoln Road.",
    sizes: "(max-width: 900px) 100vw, 33vw",
    caption: (
      <>
        <strong>1969.</strong> The original name on the door, before the
        partnership wound down.
      </>
    )
  },
  {
    className: "clipping clipping--tall",
    imageClassName: "clipping__img",
    src: "/assets/photos/archive-orv-penney-javelin-ad.png",
    alt: "Orv Penney joins American Motors Winning Team advertisement featuring the AMC Javelin.",
    sizes: "(max-width: 900px) 100vw, 33vw",
    caption: (
      <>
        <strong>The Javelin years.</strong> AMC ran this when Orv signed on.
      </>
    )
  },
  {
    className: "clipping clipping--wide",
    imageClassName: "clipping__img",
    src: "/assets/photos/archive-windsor-move-article.png",
    alt: "Newspaper article announcing P&T Auto's move to the Windsor commercial-industrial area.",
    sizes: "(max-width: 900px) 100vw, 33vw",
    caption: (
      <>
        <strong>The move to Windsor.</strong> Crossing the river into the
        commercial-industrial area.
      </>
    )
  },
  {
    className: "clipping clipping--wide",
    imageClassName: "clipping__img",
    src: "/assets/photos/archive-bellevue-camper-trailer-ad.png",
    alt: "P&T Auto Limited trailer advertisement.",
    sizes: "(max-width: 900px) 100vw, 33vw",
    caption: (
      <>
        <strong>Bellevue camper trailers.</strong> The Bay promoted trailers
        on display at P&amp;T Auto&apos;s Cromer Avenue location.
      </>
    )
  },
  {
    className: "clipping clipping--wide",
    imageClassName: "clipping__img",
    src: "/assets/photos/archive-front-end-service-lionel-wheeler.png",
    alt: "P&T Auto advertisement for used cars and front end alignment service with Lionel Wheeler.",
    sizes: "(max-width: 900px) 100vw, 33vw",
    caption: (
      <>
        <strong>Front end service.</strong> Used cars, alignments, and Lionel
        Wheeler on the same P&amp;T Auto ad.
      </>
    )
  },
  {
    className: "clipping clipping--tall",
    imageClassName: "clipping__img",
    src: "/assets/photos/archive-vandalism-article.png",
    alt: "Newspaper article reporting vandalism damage at P&T Auto.",
    sizes: "(max-width: 900px) 100vw, 33vw",
    caption: (
      <>
        <strong>Vandalism article.</strong> A newspaper clipping from another
        chapter in the shop&apos;s history.
      </>
    )
  }
];

export function LegacyArchive() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeItem = activeIndex === null ? null : archiveItems[activeIndex];

  useEffect(() => {
    if (activeItem === null) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }
    };

    document.body.classList.add("lightbox-open");
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.classList.remove("lightbox-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeItem]);

  return (
    <>
      <section
        className="archive archive--page"
        aria-labelledby="archive-title"
      >
        <h2 className="sr" id="archive-title">
          P&T Auto archive
        </h2>

        <ArchiveFigure
          item={archiveItems[0]}
          priority
          onOpen={() => setActiveIndex(0)}
        />

        <div className="wrap archive__row">
          {archiveItems.slice(1).map((item, index) => (
            <ArchiveFigure
              item={item}
              key={item.src}
              onOpen={() => setActiveIndex(index + 1)}
            />
          ))}
        </div>
      </section>

      {activeItem && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Expanded archive image"
        >
          <button
            className="lightbox__backdrop"
            type="button"
            aria-label="Close expanded image"
            onClick={() => setActiveIndex(null)}
          />
          <div className="lightbox__panel">
            <button
              className="lightbox__close"
              type="button"
              onClick={() => setActiveIndex(null)}
            >
              Close
            </button>
            <div className="lightbox__image">
              <Image
                src={activeItem.src}
                alt={activeItem.alt}
                fill
                quality={85}
                sizes="100vw"
              />
            </div>
            <div className="lightbox__caption">{activeItem.caption}</div>
          </div>
        </div>
      )}
    </>
  );
}

function ArchiveFigure({
  item,
  onOpen,
  priority = false
}: {
  item: (typeof archiveItems)[number];
  onOpen: () => void;
  priority?: boolean;
}) {
  return (
    <figure className={item.className}>
      <button
        className="archive__button"
        type="button"
        onClick={onOpen}
        aria-label="Expand archive image"
      >
        <div className={item.imageClassName}>
          <Image
            src={item.src}
            alt={item.alt}
            fill
            priority={priority}
            quality={75}
            sizes={item.sizes}
          />
        </div>
      </button>
      <figcaption>{item.caption}</figcaption>
    </figure>
  );
}
