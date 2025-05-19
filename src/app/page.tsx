import Link from "next/link";

export default function Home() {
  return (
  <>

  <h1>wellcome to home page</h1>
  <Link href="/blog/first">blog</Link>
  <Link href='/counter'>counter</Link>

  
  </>
  );
}
