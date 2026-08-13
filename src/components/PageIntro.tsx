export function PageIntro({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <header className="mb-12 space-y-3">
      <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
      <p className="max-w-xl text-lg leading-relaxed text-muted">{description}</p>
    </header>
  );
}
