import Link from "next/link";

export default async function Home() {
  // Simulate loading delay
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Welcome to the Home Page</h1>
      <nav aria-label="Main navigation">
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>
            <Link href="/blog/first">Blog</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
          <li>
            <Link href="/article/breaking-news-123?lang=en">
              Read in English
            </Link>
          </li>
          <li>
            <Link href="/article/breaking-news-123?lang=fr">
              Read in French
            </Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
