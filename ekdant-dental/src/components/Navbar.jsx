import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light shadow-sm py-3 fixed-top">
      <div className="container">
        <NavLink className="navbar-brand fw-bold text-primary" to="/">
          EKDANT MULTISPECIALITY DENTAL CLINIC
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link active-link fw-semibold" : "nav-link fw-semibold"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "nav-link active-link fw-semibold" : "nav-link fw-semibold"
                }
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/treatments"
                className={({ isActive }) =>
                  isActive ? "nav-link active-link fw-semibold" : "nav-link fw-semibold"
                }
              >
                Treatments
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/book"
                className={({ isActive }) =>
                  isActive ? "nav-link active-link fw-semibold" : "nav-link fw-semibold"
                }
              >
                Appointment
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "nav-link active-link fw-semibold" : "nav-link fw-semibold"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
