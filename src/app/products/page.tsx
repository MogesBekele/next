import Link from "next/link";
export default function ProductComponent() {
  return (
    <div>
      <Link href="/"> Home</Link>

      <Link href="/products/1"> product 1</Link>
      <Link href="/products/2"> product 2</Link>
      <Link href="/products/3"> product 3</Link>
      <Link href="/products/4"> product 4</Link>
    </div>
  );
}
