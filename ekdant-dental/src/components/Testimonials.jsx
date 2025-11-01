export default function Testimonials() {
  const reviews = [
    { name: "Priya K.", text: "Professional and caring staff! My smile looks great now." },
    { name: "Rahul D.", text: "Best dental experience ever. Highly recommend Ekdant!" },
  ];

  return (
    <section className="py-16 bg-sky-50 text-center">
      <h2 className="text-3xl font-semibold text-sky-700 mb-8">
        What Our Patients Say
      </h2>
      <div className="flex flex-wrap justify-center gap-6 px-4">
        {reviews.map((r) => (
          <div key={r.name} className="max-w-sm bg-white p-6 rounded-2xl shadow">
            <p className="italic text-gray-700 mb-3">"{r.text}"</p>
            <p className="font-semibold text-sky-700">— {r.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
