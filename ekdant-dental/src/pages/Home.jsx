import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="hero-section container-fluid">
        {/* Content */}
        <div className="row align-items-center justify-content-center hero-content">
          {/* LEFT: Text content */}
          <div className="col-md-6 text-center text-md-start mb-4 mb-md-0">
            <h1 className="fw-bold text-primary mb-3">
              “Creating Confident Smiles with Gentle Hands and Modern Care.”
            </h1>
            <p className="fs-5 text-light mb-4">
              Experience advanced dental treatment with a personal touch at
              Ekdant Multispeciality Dental Clinic.
            </p>
            <Link to="/book" className="btn btn-warning px-4 py-2 fw-semibold">
              Connect With Expert →
            </Link>
          </div>

          {/* RIGHT: Zig-Zag Image Grid */}
          <div className="col-md-5 image-grid">
            <div className="image-card img-top">
              <img src="/hm1.jpeg" alt="Doctor" />
            </div>
            <div className="image-card img-mid">
              <img src="/hm2.jpeg" alt="Clinic Desk" />
            </div>
            <div className="image-card img-bottom">
              <img src="/hm3.jpeg" alt="Clinic Board" />
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-5 pt-4 border-top text-muted small text-center bg-light py-3">
        © 2025 EKDANT Multispeciality Dental Clinic <br />
        Pune • +91 97634 18382 • ekdantdental0@gmail.com
      </footer>
    </>
  );
}
