import Image from "next/image";
import Link from "next/link";

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
  "Tires",
  "Oil changes",
  "Diagnostics",
  "Air conditioning",
  "Engine repair"
];

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <main>
      <header className="hero">
        <div className="hero__bg" aria-hidden="true">
          <Image
            src="/assets/photos/image.png"
            alt=""
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="hero__veil" aria-hidden="true" />
        <div className="hero__stripe" aria-hidden="true" />

        <nav className="topbar" aria-label="Primary">
          <a className="brand" href="#top" aria-label="P&T Auto Limited">
            <Image
              src="/assets/logos/ptautowhite.png"
              alt="P&T Auto Limited"
              width={420}
              height={114}
              priority
            />
          </a>
          <div className="topbar__nav">
            <a href="#services">Services</a>
            <Link href="/legacy">Legacy</Link>
            <a href="#visit">Visit</a>
          </div>
          <a className="topbar__call" href={phoneHref}>
            <span>Call the shop</span>
            <strong>{phoneDisplay}</strong>
          </a>
        </nav>

        <div className="hero__inner" id="top">
          <p className="hero__eyebrow">
            <span>Grand Falls-Windsor</span>
            <i aria-hidden="true" />
            <span>Since 1969</span>
          </p>
          <h1>
            Ran by the same<br />
            family for three<br />
            generations.
          </h1>
          <p className="hero__lede">
            1 Earle Street. Monday - Saturday, year-round. Same phone number
            since 1971.
          </p>

          <dl className="hero__facts">
            <div>
              <dt>Phone</dt>
              <dd>
                <a href={phoneHref}>{phoneDisplay}</a>
              </dd>
            </div>
            <div>
              <dt>Hours</dt>
              <dd>Mon&ndash;Fri 9&ndash;5 &middot; Sat 9&ndash;flex</dd>
            </div>
            <div>
              <dt>Where</dt>
              <dd>
                <a href={mapsHref}>1 Earle St, Grand Falls-Windsor</a>
              </dd>
            </div>
          </dl>
        </div>
      </header>

      <section className="work" id="services" aria-labelledby="work-title">
        <div className="wrap work__grid">
          <div className="work__lead">
            <p className="kicker">What comes through the bay</p>
            <h2 id="work-title">
              The kind of work most cars need, done by people who&apos;ve been
              doing it a long time.
            </h2>
            <p>
              Cars, trucks, the occasional classic that turns heads on the
              way out. If it&apos;s on the road in central Newfoundland,
              there&apos;s a fair chance we&apos;ve had it on the lift at
              some point.
            </p>
            <p className="muted">
              Pull up, drop off the keys, we&apos;ll call when it&apos;s
              ready.
            </p>
          </div>
          <ol className="services" aria-label="Services">
            {services.map((service, i) => (
              <li key={service}>
                <span className="services__num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="services__name">{service}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="baystrip" aria-hidden="true">
        <Image
          src="/assets/photos/image copy.png"
          alt=""
          fill
          sizes="100vw"
        />
        <div className="baystrip__veil" />
        <p className="baystrip__caption">
          Bay 2, looking out toward Earle Street.
        </p>
      </section>

      <section className="story" id="legacy" aria-labelledby="story-title">
        <div className="wrap story__grid">
          <figure className="story__portrait">
            <div className="story__portraitImg">
              <Image
                src="/assets/photos/image copy 5.png"
                alt="Orville Penney at the P&T Auto parts counter"
                fill
                sizes="(max-width: 900px) 100vw, 46vw"
              />
            </div>
            <figcaption>
              <strong>Orville Penney</strong>, 86, at the counter. He opened
              the shop when he was 30.
            </figcaption>
          </figure>

          <div className="story__body">
            <p className="kicker">The long version</p>
            <h2 id="story-title">
              The shop is older than most of the cars in it.
            </h2>

            <p>
              In 1969, Orville Penney and a partner opened{" "}
              <em>Penney &amp; Thistle Auto Limited</em> behind the Foodland
              on Lincoln Road. They sold American Motors and Renault, did
              alignments out the back, and ran ads in <em>The Advertiser</em>{" "}
              with the same phone number we still pick up today.
            </p>

            <figure className="story__clip">
              <Image
                src="/assets/photos/image copy 11.png"
                alt="1970s advertisement: 'To have your car aligned and balanced see Lionel Wheeler at P&T Auto Ltd., Rear of Foodland, Lincoln Rd., Grand Falls. Phone 489-2282.'"
                width={300}
                height={580}
                sizes="(max-width: 900px) 60vw, 260px"
              />
              <figcaption>
                Lionel Wheeler on alignments. Same number on the bottom of
                the ad &mdash; <strong>489&#8209;2282</strong>.
              </figcaption>
            </figure>

            <p>
              The name shortened to P&amp;T Auto Limited in 1971, when the
              business incorporated. The dealership signs came down years
              ago. Today the work is repair and service: brakes, exhaust,
              tires, diagnostics, the things that keep a car on the road
              through a Newfoundland winter.
            </p>

            <p>
              What didn&apos;t change was the family running it. Three
              generations now, in a shop that still has the red stripe
              painted across the cinder block at chest height &mdash; same as
              it was when Orville opened the door.
            </p>
            <Link className="story__link" href="/legacy">
              View old ads and clippings
            </Link>
          </div>
        </div>
      </section>

      <section className="today" aria-labelledby="today-title">
        <div className="wrap today__head">
          <p className="kicker">In the bay this week</p>
          <h2 id="today-title">What it looks like now.</h2>
        </div>
        <div className="today__grid">
          <figure className="today__a">
            <Image
              src="/assets/photos/image copy 2.png"
              alt="A red Jaguar XK convertible between the lifts."
              fill
              loading="eager"
              sizes="(max-width: 900px) 100vw, 55vw"
            />
          </figure>
          <figure className="today__b">
            <Image
              src="/assets/photos/image copy 4.png"
              alt="A late-1950s Ford Thunderbird up on the lift."
              fill
              loading="eager"
              sizes="(max-width: 900px) 100vw, 45vw"
            />
          </figure>
          <figure className="today__c">
            <Image
              src="/assets/photos/image copy 3.png"
              alt="The chrome tail section of a Thunderbird under the lift lights."
              fill
              loading="eager"
              sizes="(max-width: 900px) 100vw, 45vw"
            />
          </figure>
        </div>
      </section>

      <section className="visit" id="visit" aria-labelledby="visit-title">
        <div className="wrap visit__grid">
          <figure className="visit__photo">
            <Image
              src="/assets/photos/image copy 6.png"
              alt="P&T Auto Limited storefront on Earle Street with cars parked out front."
              fill
              loading="eager"
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </figure>
          <div className="visit__copy">
            <p className="kicker">Drop in</p>
            <h2 id="visit-title">
              1 Earle Street.<br />
              Grand Falls-Windsor.
            </h2>
            <p className="muted">
              Or call, either way we are happy to help.
            </p>

            <div className="visit__lines">
              <a className="visit__phone" href={phoneHref}>
                {phoneDisplay}
              </a>
              <a href={`mailto:${email}`}>{email}</a>
              <a href={mapsHref}>Get directions &rarr;</a>
            </div>

            <table className="hours">
              <caption className="sr">Shop hours</caption>
              <tbody>
                <tr>
                  <th scope="row">Mon &ndash; Fri</th>
                  <td>9:00 &ndash; 5:00</td>
                </tr>
                <tr>
                  <th scope="row">Saturday</th>
                  <td>9:00 &ndash; flexible</td>
                </tr>
                <tr>
                  <th scope="row">Sunday</th>
                  <td>Closed</td>
                </tr>
              </tbody>
            </table>
          </div>
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
