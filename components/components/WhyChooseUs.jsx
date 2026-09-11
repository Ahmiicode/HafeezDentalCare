const reasons = [
  "Personalized treatment plans",
  "Modern dental techniques",
  "Comfort-focused environment",
  "Clear treatment guidance",
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-28">
      {/* Background Glow */}
      <div className="pointer-events-none absolute right-[-180px] top-1/3 h-96 w-96 rounded-full bg-blue-500/[0.05] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-14 lg:grid-cols-2">

          {/* Left Content */}
          <div>
            <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
              <span className="h-px w-8 bg-blue-600" />
              Why Hafeez Dental Care
            </p>

            <h2 className="mt-5 max-w-xl text-4xl font-bold leading-tight tracking-tight text-[#07152d] md:text-5xl">
              Dental care you can{" "}
              <span className="text-blue-600">trust.</span>
            </h2>

            <p className="mt-5 max-w-lg leading-7 text-slate-500">
              We focus on providing thoughtful, comfortable and
              personalized dental care for every patient.
            </p>
          </div>

          {/* Reasons */}
          <div className="divide-y divide-slate-200 rounded-3xl border border-slate-200 bg-white px-6 shadow-[0_15px_50px_rgba(15,23,42,0.04)]">
            {reasons.map((reason, index) => (
              <div
                key={reason}
                className="group flex items-center justify-between py-6"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-xs font-semibold text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                    ✓
                  </span>

                  <span className="text-base font-medium text-[#07152d] transition-colors duration-300 group-hover:text-blue-600 md:text-lg">
                    {reason}
                  </span>
                </div>

                <span className="text-xs font-semibold tracking-[0.15em] text-slate-300">
                  0{index + 1}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}