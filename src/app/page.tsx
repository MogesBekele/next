"use client";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const simulateLoad = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log("Simulated load complete after 2 seconds");
          resolve("done");
        }, 4000);
      });
    };

    simulateLoad();
  }, []);

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
