import UsersAnalytics from "./@users/page";
import RevenueMatrics from "./@revenue/page";
import Notifications from "./@notifications/page";


export default function ComplexLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1>Complex Dashboard</h1>
      <p>This is a complex dashboard layout.</p>
      <div>{children}</div>
      <UsersAnalytics />
      <RevenueMatrics />
      <Notifications />
    </div>
  );
}