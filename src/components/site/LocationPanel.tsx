import { Link } from "@tanstack/react-router";
import { Clock, MapPin, Phone } from "lucide-react";
import type { Location } from "@/data/salon";

export function LocationPanel({ location }: { location: Location }) {
  return (
    <div className="grid gap-12 lg:grid-cols-[1.05fr_1fr]">
      <div>
        <img
          src={location.image}
          alt={`Inside the ${location.name} nail studio`}
          width={1200}
          height={900}
          loading="lazy"
          className="aspect-[4/3] w-full rounded-sm object-cover"
        />
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div>
            <p className="eyebrow flex items-center gap-2">
              <MapPin className="size-3.5" /> Find us
            </p>
            <address className="mt-3 text-sm not-italic leading-relaxed text-muted-foreground">
              {location.address}
              <br />
              {location.city}
            </address>
            <p className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
              <Phone className="size-3.5" />
              <a className="hover:text-foreground" href={`tel:${location.phone.replace(/\s/g, "")}`}>
                {location.phone}
              </a>
            </p>
            <a
              href={location.mapUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-block border-b border-gold pb-0.5 text-xs font-semibold uppercase tracking-[0.16em]"
            >
              Open in maps
            </a>
          </div>
          <div>
            <p className="eyebrow flex items-center gap-2">
              <Clock className="size-3.5" /> Studio hours
            </p>
            <dl className="mt-3 space-y-1.5 text-sm">
              {location.hours.map((h) => (
                <div key={h.day} className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">{h.day}</dt>
                  <dd className="font-semibold text-foreground">{h.open}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <div>
        <p className="eyebrow">{location.tagline}</p>
        <h2 className="mt-3 text-3xl text-ink md:text-4xl">{location.name}</h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">{location.blurb}</p>

        <h3 className="mt-10 text-lg text-foreground">Services at this studio</h3>
        <ul className="mt-4 divide-y divide-border border-y border-border">
          {location.services.map((s) => (
            <li key={s.id} className="flex items-baseline justify-between gap-6 py-3.5">
              <div>
                <p className="text-sm font-semibold text-foreground">{s.name}</p>
                <p className="text-xs text-muted-foreground">
                  {s.description} · {s.duration} min
                </p>
              </div>
              <span className="font-display text-lg text-ink">${s.price}</span>
            </li>
          ))}
        </ul>

        <h3 className="mt-10 text-lg text-foreground">Team on site</h3>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {location.staff.map((p) => (
            <li key={p.id} className="flex items-center gap-3 rounded-sm border border-border bg-card p-3">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-sugar font-display text-sm text-sugar-foreground">
                {p.initials}
              </span>
              <span>
                <span className="block text-sm font-semibold text-foreground">{p.name}</span>
                <span className="block text-xs text-muted-foreground">{p.role}</span>
              </span>
            </li>
          ))}
        </ul>

        <Link
          to="/booking"
          search={{ location: location.slug }}
          className="mt-8 inline-block rounded-sm bg-primary px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground transition-opacity hover:opacity-90"
        >
          Book at {location.name}
        </Link>
      </div>
    </div>
  );
}
