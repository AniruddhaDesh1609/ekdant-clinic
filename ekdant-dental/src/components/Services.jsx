export default function Services() {
  const list = [
    { name: "Cosmetic Dentistry", desc: "Smile design and whitening" },
    { name: "Dental Implants", desc: "Permanent replacement solutions" },
    { name: "Orthodontics", desc: "Braces and aligners" },
    { name: "Root Canal Treatment", desc: "Pain-free RCT procedures" },
  ];

  return (
    <section className="py-14 px-8 bg-white">
      <h2 className="text-3xl font-semibold text-center text-sky-700 mb-10">
        Our Services
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {list.map((s) => (
          <div key={s.name} className="p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-medium text-sky-700">{s.name}</h3>
            <p className="text-gray-600 mt-2">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
