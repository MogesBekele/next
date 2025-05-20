import Link from "next/link";

export default function Home() {
  return (
  <>

  <h1>wellcome to home page</h1>
  <Link href="/blog/first">blog</Link>
  <Link href='/products'>product</Link>
  <Link href='articles/breaking-news-123?lang=en'>read in english</Link>
   <Link href='articles/breaking-news-123?lang=en
   fr'>read in french</Link>



  
  </>
  );
}
