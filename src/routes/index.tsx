import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import ctaImg from "@/assets/cta.jpg";
import { locations, testimonials } from "@/data/salon";
import { LocationPanel } from "@/components/site/LocationPanel";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lumi Sugar Nails — Three LA Nail Studios, One Standard" },
      {
        name: "description",
        content:
          "Choose your Lumi Sugar Nails studio — Downtown, Riverside or Hillcrest — and book manicures, pedicures, extensions and nail art with the team you love.",
      },
      { property: "og:title", content: "Lumi Sugar Nails — Three LA Nail Studios" },
      {
        property: "og:description",
        content: "Pick your studio and book manicures, pedicures, extensions and bespoke nail art.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const [active, setActive] = useState(locations[0].slug);
  const location = locations.find((l) => l.slug === active)!;

  return (
    <>
      <section className="border-b border-border bg-secondary/40">
        <div className="shell grid items-center gap-12 py-16 lg:grid-cols-[1fr_1.05fr] lg:py-24">
          <div>
            <p className="eyebrow flex items-center gap-2">
              <Sparkles className="size-3.5 text-gold" /> Los Angeles · Three studios
            </p>
            <h1 className="mt-5 text-5xl leading-[1.03] text-ink md:text-7xl">
              Nails with a
              <span className="block italic text-primary">sugar-soft</span>
              finish.
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              Lumi Sugar Nails is three neighbourhood studios, each with its own team, menu and
              rhythm. Start by choosing where you'd like to be seen.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/booking"
                className="rounded-sm bg-primary px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground transition-opacity hover:opacity-90"
              >
                Book an appointment
              </Link>
              <Link
                to="/services"
                className="rounded-sm border border-input px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-foreground transition-colors hover:bg-card"
              >
                See the menu
              </Link>
            </div>
          </div>
          <img
            src={heroImg}
            alt="Hands with a glossy soft-pink almond manicure resting on cream silk"
            width={1600}
            height={1200}
            fetchPriority="high"
            className="aspect-[4/3] w-full rounded-sm object-cover"
          />
        </div>
      </section>

      <section id="locations" className="shell py-16 md:py-24">
        <div className="max-w-2xl">
          <p className="eyebrow">Choose your studio</p>
          <h2 className="mt-3 text-3xl text-ink md:text-5xl">Three studios, three moods</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Select a location to see its services, team, hours and live booking availability.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {locations.map((loc) => {
            const isActive = loc.slug === active;
            return (
              <button
                key={loc.slug}
                type="button"
                onClick={() => setActive(loc.slug)}
                aria-pressed={isActive}
                className={cn(
                  "group overflow-hidden rounded-sm border text-left transition-all",
                  isActive
                    ? "border-primary shadow-[0_18px_40px_-28px_oklch(0.46_0.088_32_/_0.7)]"
                    : "border-border hover:border-ring",
                )}
              >
                <img
                  src={loc.image}
                  alt={`${loc.name} interior`}
                  width={1200}
                  height={900}
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <span className="block bg-card p-5">
                  <span className="eyebrow">{loc.tagline}</span>
                  <span className="mt-2 block font-display text-2xl text-ink">{loc.name}</span>
                  <span className="mt-1 block text-sm text-muted-foreground">{loc.city}</span>
                  <span className="mt-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                    {isActive ? "Showing below" : "View studio"} <ArrowRight className="size-3.5" />
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-16 border-t border-border pt-14">
          <LocationPanel location={location} />
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40 py-16 md:py-24">
        <div className="shell">
          <p className="eyebrow text-center">Testimonials</p>
          <h2 className="mt-3 text-center text-3xl text-ink md:text-5xl">What people are saying</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {testimonials.map((t) => (
              <blockquote key={t.name} className="border-t border-gold pt-6">
                <p className="text-base leading-relaxed text-foreground">"{t.quote}"</p>
                <footer className="mt-4 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  {t.name} · {t.place}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="shell py-16 md:py-24">
        <div className="grid items-center gap-10 rounded-sm bg-sugar/50 p-8 md:grid-cols-2 md:p-14">
          <div>
            <p className="eyebrow">Gift cards &amp; memberships</p>
            <h2 className="mt-3 text-3xl text-ink md:text-4xl">
              Give the glossiest hour of someone's month
            </h2>
            <p className="mt-4 leading-relaxed text-sugar-foreground/80">
              Digital gift cards work across all three studios, and our monthly maintenance
              membership saves 15% on every visit.
            </p>
            <Link
              to="/contact"
              className="mt-7 inline-block rounded-sm bg-primary px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground"
            >
              Enquire now
            </Link>
          </div>
          <img
            src={ctaImg}
            alt="Blush and caramel nail polish bottles on a cream plinth"
            width={1600}
            height={912}
            loading="lazy"
            className="aspect-[16/9] w-full rounded-sm object-cover"
          />
        </div>
      </section>
    </>
  );
}
