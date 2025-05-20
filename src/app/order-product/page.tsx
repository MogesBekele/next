// app/page.tsx (or app/home/page.tsx)
import Link from "next/link";

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function Home() {
  // This delays rendering by 2 seconds
  await delay(2000);

  return (
    <>
      <h1>Welcome to home page</h1>

      <Link href="/blog/first">Blog</Link>
      <br />
      <Link href="/products">Product</Link>
      <br />
      <Link href="/article/breaking-news-123?lang=en">Read in English</Link>
      <br />
      <Link href="/article/breaking-news-123?lang=fr">Read in French</Link>
    </>
  );
}
