import { Link } from "@tanstack/react-router";
import { locations } from "@/data/salon";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/50">
      <div className="shell grid gap-10 py-16 md:grid-cols-4">
        <div>
          <span className="block font-display text-xl text-ink">Lumi Sugar</span>
          <span className="eyebrow block text-[0.6rem]">Nail Studios</span>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Three studios across Los Angeles, one standard of care. Sugar-soft finishes, structural
            work that lasts, and technicians who know your nails by name.
          </p>
        </div>

        {locations.map((loc) => (
          <div key={loc.slug}>
            <h3 className="text-base text-foreground">{loc.name}</h3>
            <address className="mt-3 space-y-1 text-sm not-italic text-muted-foreground">
              <p>{loc.address}</p>
              <p>{loc.city}</p>
              <p>
                <a className="hover:text-foreground" href={`tel:${loc.phone.replace(/\s/g, "")}`}>
                  {loc.phone}
                </a>
              </p>
              <p>
                <a className="hover:text-foreground" href={`mailto:${loc.email}`}>
                  {loc.email}
                </a>
              </p>
            </address>
            <Link
              to="/locations/$slug"
              params={{ slug: loc.slug }}
              className="mt-3 inline-block border-b border-gold pb-0.5 text-xs font-semibold uppercase tracking-[0.16em] text-foreground"
            >
              View studio
            </Link>
          </div>
        ))}
      </div>

      <div className="border-t border-border">
        <div className="shell flex flex-col gap-2 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Lumi Sugar Nails. All rights reserved.</p>
          <div className="flex gap-5">
            <Link to="/booking" className="hover:text-foreground">
              Book an appointment
            </Link>
            <Link to="/contact" className="hover:text-foreground">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
