import { createFileRoute, notFound } from "@tanstack/react-router";
import { getLocation } from "@/data/salon";
import { LocationPanel } from "@/components/site/LocationPanel";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/locations/$slug")({
  loader: ({ params }) => {
    const location = getLocation(params.slug);
    if (!location) throw notFound();
    return { location };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Studio not found — Lumi Sugar Nails" }, { name: "robots", content: "noindex" }] };
    }
    const { location } = loaderData;
    const title = `${location.name} — Lumi Sugar Nails`;
    const description = `${location.blurb} Services, team and opening hours at ${location.address}, ${location.city}.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: LocationDetail,
});

function LocationDetail() {
  const { location } = Route.useLoaderData();

  return (
    <>
      <PageHeader eyebrow={location.tagline} title={location.name} intro={location.blurb} />
      <div className="shell py-16 md:py-24">
        <LocationPanel location={location} />
      </div>
    </>
  );
}
