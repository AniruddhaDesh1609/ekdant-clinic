import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        backgroundImage: "url('/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.4)",
          backdropFilter: "blur(2px)",
          zIndex: 0,
        }}
      ></div>

      {/* Page content */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar />
        <div style={{ marginTop: "90px" }}>
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}
