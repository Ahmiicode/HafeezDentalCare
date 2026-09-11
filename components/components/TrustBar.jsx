export default function TrustBar() {
  const items = [
    {
      number: "01",
      title: "Experienced Care",
      text: "Professional dental treatment",
    },
    {
      number: "02",
      title: "Modern Approach",
      text: "Precise and comfortable care",
    },
    {
      number: "03",
      title: "Personalized Treatment",
      text: "Care designed around you",
    },
    {
      number: "04",
      title: "Patient First",
      text: "Your comfort comes first",
    },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 border-y border-slate-200 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, index) => (
          <div
            key={item.number}
            className={`group flex items-center gap-4 bg-white px-6 py-7 transition-all duration-300 hover:bg-white sm:px-7 ${
              index !== items.length - 1
                ? "border-b border-slate-200 lg:border-b-0 lg:border-r"
                : ""
            }`}
          >
            {/* Number */}
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-xs font-bold text-blue-600 transition-all duration-300 group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white">
              {item.number}
            </div>

            {/* Content */}
            <div>
              <h3 className="text-sm font-semibold text-[#07152d]">
                {item.title}
              </h3>

              <p className="mt-1 text-xs leading-5 text-slate-500">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}