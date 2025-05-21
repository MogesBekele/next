import { Cart } from "@/components/card";
import Link from "next/link";

export default function Notifications() {
  return (
    <Cart>
      <h1>Notifications</h1>
      <div>
        <Link href="/complex-dashboard/archived">Archived</Link>
        <br />
    
      </div>
    </Cart>
  );
}
