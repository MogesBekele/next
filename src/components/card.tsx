export const Cart = ({ children }: { children: React.ReactNode }) => {
  const cartStyle = {
    display: "flex",

    justifyContent: "center",
    alignItems: "center",
    padding: "100px",
    margin: "10px",
    backgroundColor: "#f8f8f8",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    border: "1px solid #ddd",
    color: "#000",
  };

  return <div style={cartStyle}>{children}</div>;
};
