import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { locations } from "@/data/salon";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/locations/")({
  head: () => ({
    meta: [
      { title: "Our Studios — Lumi Sugar Nails Los Angeles" },
      {
        name: "description",
        content:
          "Downtown Atelier, Riverside Lounge and Hillcrest Studio — addresses, opening hours and booking for every Lumi Sugar Nails location.",
      },
      { property: "og:title", content: "Our Studios — Lumi Sugar Nails" },
      {
        property: "og:description",
        content: "Addresses, hours and booking for all three Lumi Sugar Nails studios in LA.",
      },
    ],
  }),
  component: LocationsIndex,
});

function LocationsIndex() {
  return (
    <>
      <PageHeader
        eyebrow="Our locations"
        title="Where to find us"
        intro="Each studio keeps its own team, service menu and hours. Choose the one that fits your day."
      />
      <div className="shell grid gap-6 py-16 md:grid-cols-3 md:py-24">
        {locations.map((loc) => (
          <article key={loc.slug} className="overflow-hidden rounded-sm border border-border bg-card">
            <img
              src={loc.image}
              alt={`${loc.name} interior`}
              width={1200}
              height={900}
              loading="lazy"
              className="aspect-[16/10] w-full object-cover"
            />
            <div className="p-6">
              <p className="eyebrow">{loc.tagline}</p>
              <h2 className="mt-2 text-2xl text-ink">{loc.name}</h2>
              <address className="mt-3 text-sm not-italic text-muted-foreground">
                {loc.address}
                <br />
                {loc.city}
              </address>
              <dl className="mt-4 space-y-1 text-sm">
                {loc.hours.map((h) => (
                  <div key={h.day} className="flex justify-between gap-3">
                    <dt className="text-muted-foreground">{h.day}</dt>
                    <dd className="font-semibold">{h.open}</dd>
                  </div>
                ))}
              </dl>
              <Link
                to="/locations/$slug"
                params={{ slug: loc.slug }}
                className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary"
              >
                Studio details <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
