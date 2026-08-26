export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="border-b border-border bg-secondary/40">
      <div className="shell py-16 text-center md:py-24">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mx-auto mt-4 max-w-3xl text-4xl leading-[1.08] text-ink md:text-6xl">
          {title}
        </h1>
        {intro && (
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}
