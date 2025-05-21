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
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <div style={{ marginBottom: "1rem" }}>{children}</div>
      <div style={{ display: "flex", flex: 1 }}>
        <section
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            minWidth: 0,
          }}
        >
          <div>{users}</div>
          <div>{revenue}</div>
        </section>
        <aside
          style={{
            flex: 1,
            marginLeft: "2rem",
            background: "#f9fafb",
            padding: "1.5rem",
            borderRadius: "8px",
            minWidth: 0,
            boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
            color: "#1e293b", // dark text for visibility
            height: "100%", // fill vertical space
            alignSelf: "stretch", // stretch to match section height
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          {notifications}
        </aside>
      </div>
    </div>
  );
}
