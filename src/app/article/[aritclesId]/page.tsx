import Link from "next/link";
export default async function Aritcles({
  params,
  searchParams,
}: {
  params: Promise<{ articlesId: string }>;
  searchParams: Promise<{ lang?: "en" | "es" | "fr" }>;
}) {
  const { articlesId } = await params;
  const { lang = "en" } = await searchParams;

  return (
    <div>
      <h1>news article {articlesId}</h1>
      <h1>reading in language</h1>
      <div className="flex gap-4">
        <Link href={`/articles/${articlesId}?lang=en`}>English</Link>
        <Link href={`/articles/${articlesId}?lang=es`}>spanish</Link>
        <Link href={`/articles/${articlesId}/lang=fr`}>french</Link>
      </div>
    </div>
  );
}
