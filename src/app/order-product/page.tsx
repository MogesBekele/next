"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function OrderProduct() {
  const router = useRouter();
  const [shouldThrow, setShouldThrow] = useState(false);

  const handleClick = () => {
    alert("send susseccfully");
    router.push("/");
  };

  if (shouldThrow) {
    // Simulate an error
    throw new Error("Test error: Something went wrong!");
  }

  return (
    <>
      <h1>order product</h1>
      <button onClick={handleClick}>place order</button>
      <button
        style={{
          marginLeft: "1rem",
          background: "#f87171",
          color: "#fff",
          padding: "0.5rem 1rem",
          borderRadius: "4px",
        }}
        onClick={() => setShouldThrow(true)}
      >
        Trigger Error
      </button>
    </>
  );
}
