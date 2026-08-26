import { useMemo, useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Check, ChevronRight } from "lucide-react";
import { locations } from "@/data/salon";
import { cn } from "@/lib/utils";

const schema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(60),
  lastName: z.string().trim().min(1, "Last name is required").max(60),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(30),
  notes: z.string().trim().max(500).optional(),
  locationSlug: z.string().min(1, "Choose a studio"),
  serviceId: z.string().min(1, "Choose a service"),
  staffId: z.string().min(1, "Choose a technician"),
  date: z.string().min(1, "Choose a date"),
  time: z.string().min(1, "Choose a time"),
});

const field =
  "w-full rounded-sm border border-input bg-card px-3.5 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-ring";

const today = () => new Date().toISOString().slice(0, 10);

export function BookingForm({ initialLocation }: { initialLocation?: string }) {
  const [locationSlug, setLocationSlug] = useState(initialLocation ?? "");
  const [serviceId, setServiceId] = useState("");
  const [staffId, setStaffId] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const location = useMemo(
    () => locations.find((l) => l.slug === locationSlug),
    [locationSlug],
  );
  const service = location?.services.find((s) => s.id === serviceId);

  const pickLocation = (slug: string) => {
    setLocationSlug(slug);
    setServiceId("");
    setStaffId("");
    setTime("");
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const parsed = schema.safeParse({
      firstName: String(form.get("firstName") ?? ""),
      lastName: String(form.get("lastName") ?? ""),
      email: String(form.get("email") ?? ""),
      phone: String(form.get("phone") ?? ""),
      notes: String(form.get("notes") ?? ""),
      locationSlug,
      serviceId,
      staffId,
      date,
      time,
    });

    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      toast.error("Please complete the highlighted fields.");
      return;
    }

    setErrors({});
    toast.success(
      `Request sent — ${location?.name} on ${parsed.data.date} at ${parsed.data.time}. We'll confirm by text within the hour.`,
    );
    event.currentTarget.reset();
  };

  const Err = ({ name }: { name: string }) =>
    errors[name] ? <p className="mt-1.5 text-xs text-destructive">{errors[name]}</p> : null;

  return (
    <form onSubmit={onSubmit} className="space-y-10" noValidate>
      <fieldset>
        <legend className="eyebrow">Step 01 — Choose your studio</legend>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {locations.map((loc) => {
            const active = loc.slug === locationSlug;
            return (
              <button
                key={loc.slug}
                type="button"
                onClick={() => pickLocation(loc.slug)}
                className={cn(
                  "rounded-sm border p-4 text-left transition-colors",
                  active
                    ? "border-primary bg-sugar/40"
                    : "border-border bg-card hover:border-ring",
                )}
              >
                <span className="flex items-center justify-between">
                  <span className="font-display text-lg text-ink">{loc.name}</span>
                  {active && <Check className="size-4 text-primary" />}
                </span>
                <span className="mt-1 block text-xs text-muted-foreground">{loc.city}</span>
              </button>
            );
          })}
        </div>
        <Err name="locationSlug" />
      </fieldset>

      <fieldset disabled={!location} className={cn(!location && "opacity-45")}>
        <legend className="eyebrow">Step 02 — Service &amp; technician</legend>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-xs font-semibold text-foreground" htmlFor="service">
              Service
            </label>
            <select
              id="service"
              className={field}
              value={serviceId}
              onChange={(e) => setServiceId(e.target.value)}
            >
              <option value="">Select a service</option>
              {location?.services.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name} — ${s.price} · {s.duration} min
                </option>
              ))}
            </select>
            <Err name="serviceId" />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-semibold text-foreground" htmlFor="staff">
              Technician
            </label>
            <select
              id="staff"
              className={field}
              value={staffId}
              onChange={(e) => setStaffId(e.target.value)}
            >
              <option value="">Select a technician</option>
              {location?.staff.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name} — {s.role}
                </option>
              ))}
            </select>
            <Err name="staffId" />
          </div>
        </div>
      </fieldset>

      <fieldset disabled={!location} className={cn(!location && "opacity-45")}>
        <legend className="eyebrow">Step 03 — Date &amp; time</legend>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-xs font-semibold text-foreground" htmlFor="date">
              Preferred date
            </label>
            <input
              id="date"
              type="date"
              min={today()}
              className={field}
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <Err name="date" />
          </div>
          <div>
            <span className="mb-1.5 block text-xs font-semibold text-foreground">
              Available times{location ? ` at ${location.name}` : ""}
            </span>
            <div className="flex flex-wrap gap-2">
              {(location?.slots ?? []).map((slot) => (
                <button
                  key={slot}
                  type="button"
                  onClick={() => setTime(slot)}
                  className={cn(
                    "rounded-sm border px-3 py-2 text-xs font-semibold transition-colors",
                    slot === time
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-card text-foreground hover:border-ring",
                  )}
                >
                  {slot}
                </button>
              ))}
            </div>
            <Err name="time" />
          </div>
        </div>
      </fieldset>

      <fieldset>
        <legend className="eyebrow">Step 04 — Your details</legend>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div>
            <input name="firstName" className={field} placeholder="First name" maxLength={60} />
            <Err name="firstName" />
          </div>
          <div>
            <input name="lastName" className={field} placeholder="Last name" maxLength={60} />
            <Err name="lastName" />
          </div>
          <div>
            <input name="email" type="email" className={field} placeholder="Email address" maxLength={255} />
            <Err name="email" />
          </div>
          <div>
            <input name="phone" className={field} placeholder="Phone number" maxLength={30} />
            <Err name="phone" />
          </div>
          <div className="sm:col-span-2">
            <textarea
              name="notes"
              rows={3}
              maxLength={500}
              className={field}
              placeholder="Anything we should know? Inspiration, allergies, nail history…"
            />
            <Err name="notes" />
          </div>
        </div>
      </fieldset>

      <div className="flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">
          {location && service
            ? `${service.name} with ${location.staff.find((s) => s.id === staffId)?.name ?? "any technician"} · ${service.duration} min · $${service.price}`
            : "Select a studio to see live availability."}
        </p>
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground transition-opacity hover:opacity-90"
        >
          Request appointment <ChevronRight className="size-4" />
        </button>
      </div>
    </form>
  );
}
