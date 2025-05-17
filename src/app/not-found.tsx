// app/not-found.tsx (Next.js, simple Tailwind)
import Link from "next/link";
import React from "react";

const NotFound: React.FC = () => (
  <main className="min-h-screen flex flex-col items-center justify-center bg-sky-50 p-4 text-center">
    <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
    <p className="text-lg text-gray-600 mb-8 max-w-md">
      Sorry, the page you’re looking for can’t be found.
    </p>

    <Link
      href="/"
      className="inline-flex items-center px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-medium shadow-md transition-colors"
    >
      ← Back to home
    </Link>
  </main>
);

export default NotFound;


//you cam also make it spesfic routes
