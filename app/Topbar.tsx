"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const phoneDisplay = "709 489 2282";
const phoneHref = "tel:+17094892282";

const navLinks: { href: string; label: string }[] = [
  { href: "/", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/#visit", label: "Visit" },
  { href: "/legacy", label: "Legacy" }
];

export function Topbar({ solid = false }: { solid?: boolean }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.body.classList.add("lightbox-open");
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.classList.remove("lightbox-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <>
      <nav
        className={`topbar${solid ? " topbar--solid" : ""}`}
        aria-label="Primary"
      >
        <Link className="brand" href="/" aria-label="P&T Auto Limited">
          <Image
            src="/assets/logos/ptautowhite.png"
            alt="P&T Auto Limited"
            width={420}
            height={114}
            priority
            quality={85}
          />
        </Link>
        <div className="topbar__nav">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
        <a className="topbar__call" href={phoneHref}>
          <span>Call the shop</span>
          <strong>{phoneDisplay}</strong>
        </a>
        <button
          className="topbar__menu"
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-drawer"
          onClick={() => setOpen(true)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </nav>

      {open && (
        <div
          id="mobile-drawer"
          className="drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
        >
          <button
            className="drawer__backdrop"
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          />
          <div className="drawer__panel">
            <button
              className="drawer__close"
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              Close
            </button>
            <ul className="drawer__nav">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} onClick={() => setOpen(false)}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              className="drawer__call"
              href={phoneHref}
              onClick={() => setOpen(false)}
            >
              <span>Call the shop</span>
              <strong>{phoneDisplay}</strong>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
