import React from "react";

export default function Contact() {
  return (
    <div className="container my-5 pt-4 text-center">
      {/* Header */}
      <h2
        className="fw-bold mb-3"
        style={{
          color: "#f4c542",
          textShadow: "2px 2px 5px rgba(0,0,0,0.3)",
        }}
      >
        Get in Touch with Our Dental Team
      </h2>

      <p
        className="mb-5"
        style={{
          color: "white",
          maxWidth: "800px",
          margin: "0 auto",
          fontSize: "1rem",
          lineHeight: "1.7",
        }}
      >
        Ready to flash your most radiant smile yet? Our expert dental team is
        just one click away. We’re eager to answer your queries, schedule
        appointments, or simply chat about how we can make your dental health
        journey a smooth one. Reach out to us and let’s start your journey
        towards a healthier, happier smile together!
      </p>

      {/* Contact Info Cards */}
      <div className="row g-4 justify-content-center">
        {/* Card Template */}
        {[
          {
            icon: "bi-telephone-fill",
            title: "Call Us",
            info: "+91 97634 18382",
          },
          {
            icon: "bi-envelope-fill",
            title: "Mail Us",
            info: "ekdantdental0@gmail.com",
          },
          {
            icon: "bi-geo-alt-fill",
            title: "Locate Us",
            info: (
              <>
                Shop 05, NK-Vithika Apartment,
                <br />
                Shanipar Chowk, Sadashiv Peth,
                <br />
                Pune, Maharashtra 411030
              </>
            ),
          },
          {
            icon: "bi-clock-fill",
            title: "Opening Hours",
            info: (
              <>
                Mon–Sun: 10 AM – 2 PM, 5 PM – 9 PM
                <br />
                Wednesday Off
              </>
            ),
          },
        ].map((card, i) => (
          <div className="col-md-3 d-flex" key={i}>
            <div
              className="card flex-fill d-flex flex-column align-items-center justify-content-center p-4 border-0 rounded-4 shadow-sm"
              style={{
                background: "rgba(255, 255, 255, 0.75)",
                backdropFilter: "blur(6px)",
                minHeight: "200px",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
              <div
                className="d-flex align-items-center justify-content-center rounded-circle mb-3"
                style={{
                  backgroundColor: "#f4c542",
                  width: "55px",
                  height: "55px",
                }}
              >
                <i className={`bi ${card.icon} fs-4 text-white`}></i>
              </div>
              <h5 className="fw-bold mb-2">{card.title}</h5>
              <p className="text-muted small mb-0">{card.info}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Map Section */}
      <div className="mt-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.3440782230664!2d73.85126271169068!3d18.513347069320403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1004d21c9a9%3A0x791f36f5fc49cd14!2sEKDANT%20MULTI-SPECIALITY%20DENTAL%20CLINIC!5e0!3m2!1sen!2sin!4v1762025743392!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0, borderRadius: "10px" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ekdant Dental Clinic Location"
        ></iframe>
      </div>
    </div>
  );
}
