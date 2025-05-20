import Link from "next/link";


export default async function Home() {
  await new Promise(resolve=>{
    setTimeout(()=>{resolve('delay')},2000)
  })

  
  return (
    <>
      <h1>Welcome to home page</h1>

      <Link href="/blog/first">Blog</Link>
      <br />
      <Link href="/products">Product</Link>
      <br />
    <Link href='/article/breaking-news-123?lang=en'>read in English</Link>

      <br />
     <Link href='/article/breaking-news-123?lang=fr'>read in French</Link>

    </>
  );
}
