import Image from "next/image";

const phoneDisplay = "709 489 2282";
const phoneHref = "tel:+17094892282";
const email = "ptautoltd@gmail.com";
const address = "1 Earle Street, Grand Falls-Windsor, NL A2A 2J9";
const mapsHref =
  "https://www.google.com/maps/search/?api=1&query=1%20Earle%20Street%2C%20Grand%20Falls-Windsor%2C%20NL%20A2A%202J9";

const services = [
  "Exhaust",
  "Brakes",
  "Suspension",
  "Oil changes",
  "Tires",
  "Diagnostics",
  "Air conditioning",
  "Engine repair"
];

const shopPhotos = [
  {
    src: "/assets/photos/image.png",
    alt: "Current P&T Auto service bays with vehicles on lifts"
  },
  {
    src: "/assets/photos/image copy 2.png",
    alt: "Vehicle in a P&T Auto service bay"
  },
  {
    src: "/assets/photos/image copy 3.png",
    alt: "Classic car on a lift inside the P&T Auto shop"
  }
];

const archivePhotos = [
  {
    src: "/assets/photos/image copy 10.png",
    alt: "Archival newspaper clipping about P&T Auto opening in Windsor",
    caption: "The move into Windsor's commercial-industrial area."
  },
  {
    src: "/assets/photos/image copy 11.png",
    alt: "Archival P&T Auto advertisement for alignment and balancing",
    caption: "Early service advertising from the Lincoln Road years."
  },
  {
    src: "/assets/photos/image copy 8.png",
    alt: "Archival Orv Penney American Motors newspaper advertisement",
    caption: "Dealership-era history, preserved as part of the family story."
  }
];

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__media" aria-hidden="true">
          <Image
            src="/assets/photos/image copy 3.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="hero__image"
          />
          <div className="hero__overlay" />
        </div>

        <nav className="topbar" aria-label="Primary navigation">
          <a className="brand" href="#top" aria-label="P&T Auto Limited home">
            <Image
              src="/assets/logos/ptautowhite.png"
              alt="P&T Auto Limited"
              width={280}
              height={200}
              priority
            />
          </a>
          <div className="topbar__links">
            <a href="#services">Services</a>
            <a href="#legacy">Legacy</a>
            <a href="#visit">Visit</a>
          </div>
        </nav>

        <div className="hero__content" id="top">
          <p className="eyebrow">Family owned in Grand Falls-Windsor since 1969</p>
          <h1 id="hero-title">
            Modern auto repair, backed by decades of local trust.
          </h1>
          <p className="hero__lede">
            P&T Auto Limited keeps Grand Falls-Windsor moving with practical,
            capable repair work for exhaust, brakes, suspension, diagnostics,
            tires, AC, engine repair, and everyday maintenance.
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href={phoneHref}>
              Call {phoneDisplay}
            </a>
            <a className="button button--secondary" href={mapsHref}>
              Get directions
            </a>
          </div>
        </div>

        <div className="hero__facts" aria-label="Shop highlights">
          <div>
            <strong>1969</strong>
            <span>in operation</span>
          </div>
          <div>
            <strong>1971</strong>
            <span>incorporated</span>
          </div>
          <div>
            <strong>1 Earle St.</strong>
            <span>Grand Falls-Windsor</span>
          </div>
        </div>
      </section>

      <section className="section intro" aria-label="Shop introduction">
        <div className="section__inner intro__grid">
          <div>
            <p className="section-kicker">P&T Auto Limited</p>
            <h2>A working shop with a long memory.</h2>
          </div>
          <p>
            The business has changed with the vehicles, tools, and technology
            around it, but the core has stayed the same: honest local service,
            careful repair work, and a family name people recognize.
          </p>
        </div>
      </section>

      <section className="section services" id="services" aria-labelledby="services-title">
        <div className="section__inner">
          <div className="section-heading">
            <p className="section-kicker">Current repair services</p>
            <h2 id="services-title">Built for the vehicles people drive now.</h2>
            <p>
              P&T Auto is an auto repair shop today. Historic dealer material is
              part of the archive, while current work focuses on service and
              repair.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service}>
                <span aria-hidden="true" />
                <h3>{service}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section shop" aria-labelledby="shop-title">
        <div className="section__inner">
          <div className="section-heading section-heading--split">
            <div>
              <p className="section-kicker">Modern capability</p>
              <h2 id="shop-title">Real bays. Real tools. Real repair work.</h2>
            </div>
            <p>
              The site uses actual shop photography because this is not a stock
              image business. It is a practical service garage with the
              equipment, space, and experience to work on today&apos;s vehicles.
            </p>
          </div>

          <div className="photo-grid">
            {shopPhotos.map((photo) => (
              <figure className="photo-tile" key={photo.src}>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 780px) 100vw, 33vw"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section legacy" id="legacy" aria-labelledby="legacy-title">
        <div className="section__inner legacy__grid">
          <div className="legacy__portrait">
            <Image
              src="/assets/photos/image copy 5.png"
              alt="Orville Penney at the P&T Auto counter"
              fill
              sizes="(max-width: 900px) 100vw, 42vw"
            />
          </div>

          <div className="legacy__copy">
            <p className="section-kicker">The Penney legacy</p>
            <h2 id="legacy-title">A family shop shaped by Orville Penney.</h2>
            <p>
              P&T Auto&apos;s story reaches back to 1969 and the work of Orville
              Penney, whose name appears through decades of local automotive
              history. The archive is part of the identity here: not a claim
              that the shop is still a dealer, but proof that this business has
              grown up with the community it serves.
            </p>
            <p>
              Today, that legacy supports a modern repair shop focused on
              service, diagnostics, maintenance, and keeping customers safely on
              the road.
            </p>
          </div>
        </div>
      </section>

      <section className="section archive" aria-labelledby="archive-title">
        <div className="section__inner">
          <div className="section-heading">
            <p className="section-kicker">From the archive</p>
            <h2 id="archive-title">History kept visible.</h2>
            <p>
              These clippings are shown as archival material from earlier eras
              of the business. Current P&T Auto services are repair and
              maintenance, not vehicle dealership operations.
            </p>
          </div>

          <div className="archive-grid">
            {archivePhotos.map((photo) => (
              <figure className="archive-card" key={photo.src}>
                <div className="archive-card__image">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 780px) 100vw, 33vw"
                  />
                </div>
                <figcaption>{photo.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section visit" id="visit" aria-labelledby="visit-title">
        <div className="section__inner visit__grid">
          <div>
            <p className="section-kicker">Visit the shop</p>
            <h2 id="visit-title">P&T Auto Limited</h2>
            <address>
              <a href={mapsHref}>{address}</a>
            </address>
          </div>

          <div className="contact-panel" aria-label="Contact information">
            <a href={phoneHref}>{phoneDisplay}</a>
            <a href={`mailto:${email}`}>{email}</a>
          </div>

          <div className="hours-panel">
            <h3>Hours</h3>
            <dl>
              <div>
                <dt>Monday-Friday</dt>
                <dd>9:00 AM-5:00 PM</dd>
              </div>
              <div>
                <dt>Saturday</dt>
                <dd>9:00 AM-flexible</dd>
              </div>
              <div>
                <dt>Sunday</dt>
                <dd>Closed</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer__inner">
          <Image
            src="/assets/logos/ptautowhite.png"
            alt="P&T Auto Limited"
            width={210}
            height={150}
          />
          <p>
            Copyright {year} P&T Auto Limited. Family owned in
            Grand Falls-Windsor since 1969.
          </p>
        </div>
      </footer>
    </main>
  );
}
