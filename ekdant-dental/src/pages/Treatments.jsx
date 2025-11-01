import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Treatments() {
  const treatments = [
    {
      title: "Dental Implants",
      image: "/treatments/implants.jpg",
      description:
        "Dental implants are artificial tooth roots inserted into the jawbone to support a replacement tooth or bridge. They provide a durable, natural-looking solution for missing teeth.",
    },
    {
      title: "Braces",
      image: "/treatments/braces.jpg",
      description:
        "Braces gently align your teeth and correct bite issues, improving both function and aesthetics. They are ideal for achieving a perfectly aligned smile.",
    },
    {
      title: "Aligners",
      image: "/treatments/aligners.jpg",
      description:
        "Clear aligners are transparent, removable trays designed to gradually straighten your teeth without the discomfort or visibility of traditional braces.",
    },
    {
      title: "Digital RCT",
      image: "/treatments/rct.jpg",
      description:
        "Digital Root Canal Treatment uses advanced technology for precision and comfort, ensuring a painless and efficient procedure with faster recovery.",
    },
    {
      title: "Smile Designing",
      image: "/treatments/smile-design.jpg",
      description:
        "Smile designing combines artistry and modern dental techniques to craft a radiant, confident smile personalized for you.",
    },
    {
      title: "Cosmetic Filling",
      image: "/treatments/filling.jpg",
      description:
        "Cosmetic fillings restore decayed or chipped teeth using tooth-colored materials that blend seamlessly with your natural teeth.",
    },
    {
      title: "Gum Surgeries",
      image: "/treatments/gum-surgery.jpg",
      description:
        "Gum treatments target infections, reshape gum lines, and restore oral health for a balanced and healthy smile.",
    },
    {
      title: "Fixed Teeth",
      image: "/treatments/fixed-teeth.jpg",
      description:
        "Fixed teeth solutions like bridges or implant-supported crowns ensure stable, long-term tooth replacement with a natural look and feel.",
    },
    {
      title: "Kids Dental Treatment",
      image: "/treatments/kids-dental.jpg",
      description:
        "Gentle pediatric dental care designed for young smiles — from preventive check-ups to cavity treatments in a fun, friendly environment.",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="container my-5 pt-5">
        <h2
          className="fw-bold text-center mb-4"
          style={{ color: "#f4c542", textShadow: "2px 2px 6px rgba(0,0,0,0.5)" }}
        >
          Discover Our Comprehensive Dental Treatments
        </h2>
        <p
          className="text-center mb-5"
          style={{ color: "#ffffff", textShadow: "1px 1px 5px rgba(0,0,0,0.6)" }}
        >
          We offer advanced, comfortable, and personalized dental care tailored to your needs — 
          combining technology, precision, and expertise to craft beautiful smiles.
        </p>

        <div className="row g-4">
          {treatments.map((treatment, index) => (
            <div
              className={`col-md-6 d-flex align-items-stretch ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
              key={index}
            >
              <div className="card shadow-sm border-0 rounded-4 flex-fill overflow-hidden">
                <div className="row g-0 align-items-stretch h-100">
                  <div className="col-md-6 h-100">
                    <img
                      src={treatment.image}
                      alt={treatment.title}
                      className="w-100 h-100 object-fit-cover"
                      style={{ objectPosition: "center", display: "block" }}
                    />
                  </div>
                  <div className="col-md-6 p-4 d-flex flex-column justify-content-center">
                    <h5 className="fw-bold text-primary mb-3">{treatment.title}</h5>
                    <p className="text-muted small mb-0">{treatment.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
