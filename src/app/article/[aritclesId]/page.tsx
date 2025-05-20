import Link from "next/link";
export default function Aritcles() {
  return (
    <div>
      <h1>news article id</h1>
      <h1>reading in language</h1>
      <div>
        <Link href="/articles/id?lang=en">English</Link>
        <Link href="articles/id?lang=spa">spanish</Link>
        <Link href="/articles/id/lang=fr">french</Link>
      </div>
    </div>
  );
}
