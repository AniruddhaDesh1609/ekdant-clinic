import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BookAppointment() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbx2FvAbxXiQ6SGgXO9oAUNfej-4TkAi-P23WdIzKYsunZbn-z08c7fBzIESH8B2G409CQ/exec";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });

      setStatus("✅ Appointment submitted successfully!");
      setFormData({ name: "", email: "", phone: "", date: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("❌ Network error. Try again later.");
    }
  };

  return (
    <div
      className="container text-center"
      style={{
        paddingTop: "120px", // shifts everything down from the top
        paddingBottom: "60px",
      }}
    >
      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        className="btn mb-4"
        style={{
          backgroundColor: "#f4c542",
          color: "#000",
          fontWeight: "600",
          border: "none",
          borderRadius: "8px",
          padding: "8px 16px",
          transition: "background-color 0.3s",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#e0b93d")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#f4c542")}
      >
        ← Back to Home
      </button>

      {/* Title */}
      <h2
        className="mb-4"
        style={{
          color: "#f4c542",
          textShadow: "2px 2px 6px rgba(0,0,0,0.5)",
          fontWeight: "700",
        }}
      >
        Book an Appointment
      </h2>

      {/* Form */}
      <form
        className="mx-auto text-start border rounded p-4 shadow-sm bg-light"
        style={{
          width: "500px", // fixed width, unchanged from your original
          background: "rgba(255,255,255,0.95)",
          backdropFilter: "blur(6px)",
        }}
        onSubmit={handleSubmit}
      >
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            name="name"
            type="text"
            className="form-control"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            name="email"
            type="email"
            className="form-control"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Phone Number</label>
          <input
            name="phone"
            type="tel"
            className="form-control"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Preferred Date</label>
          <input
            name="date"
            type="date"
            className="form-control"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea
            name="message"
            className="form-control"
            rows="3"
            placeholder="Any specific concern?"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Submit
        </button>
      </form>

      {status && (
        <p
          className={`mt-3 ${
            status.includes("✅")
              ? "text-success"
              : status.includes("❌")
              ? "text-danger"
              : "text-muted"
          }`}
        >
          {status}
        </p>
      )}
    </div>
  );
}
