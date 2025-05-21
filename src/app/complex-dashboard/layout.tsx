export default function ComplexLayout({
  children,
  users,
  revenue,
  notifications,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
}) {
  return (
    <div>
      <h1>Complex Dashboard</h1>
      <p>This is a complex dashboard layout.</p>
      <div>{children}</div>
      <section>
        <h2>Users Analytics</h2>
        {users}
      </section>
      <section>
        <h2>Revenue Metrics</h2>
        {revenue}
      </section>
      <section>
        <h2>Notifications</h2>
        {notifications}
      </section>
    </div>
  );
}
