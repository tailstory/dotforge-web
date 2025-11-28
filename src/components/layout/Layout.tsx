import TopBar from "./TopBar";

export default function Layout({ children }: { children: any }) {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <TopBar />
      {children}
    </div>
  );
}
