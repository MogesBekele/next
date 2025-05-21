import { Cart } from "@/components/card";
import Link from "next/link";

export default function ArchivedNotifications() {
  return (
    <Cart>
      <h1>Archived Notifications</h1>
      <div>
        <Link href="/complex-dashboard/archived">Default</Link>
        <br />
    
      </div>
    </Cart>
  );
}
