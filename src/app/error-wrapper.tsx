"use client";

import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    // console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-red-50">
      <div className="text-5xl mb-4 text-red-500">😢</div>
      <h1 className="text-2xl font-bold text-red-700 mb-2">Something went wrong!</h1>
      <p className="text-gray-700 mb-6">{error?.message || "An unexpected error occurred."}</p>
      <button
        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
        onClick={() => reset()}
      >
        Try Again
      </button>
    </div>
  );
}