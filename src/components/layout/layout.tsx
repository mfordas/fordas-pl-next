import { Header } from "../Header/header";
import { Footer } from "../Footer/footer";

export const Layout = ({ children }) => {
  return (
    <div
      style={{
        minHeight: "100vh",
        maxWidth: "100vw",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <Header />
      <div
        style={{
          width: "100vw",
          display: "flex",
          flexGrow: 1,
        }}
      >
        <main
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
};
