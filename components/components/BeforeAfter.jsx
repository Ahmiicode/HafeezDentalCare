export default function BeforeAfter() {
  return (
    <section
      id="results"
      className="relative overflow-hidden bg-white py-24 md:py-32"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-500/[0.04] blur-[90px] md:h-72 md:w-72 md:blur-[110px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-blue-600" />
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
                Patient Results
              </p>
            </div>

            <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-[#07152d] md:text-5xl lg:text-6xl">
              Real care.
              <br />
              <span className="text-blue-600">Real results.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-slate-600 md:text-base">
            Explore selected dental cases and transformations from Hafeez
            Dental Care.
          </p>
        </div>

        {/* Results Grid (no images, simple cards) */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Professional Cleaning & Smile Improvement",
              description:
                "A noticeable improvement in dental cleanliness and overall smile appearance.",
            },
            {
              title: "Dental Cleaning & Stain Removal",
              description:
                "A visible transformation following professional dental cleaning and care.",
            },
            {
              title: "Healthy, Confident Smiles",
              description:
                "Consistent, high-quality dental care resulting in long-term oral health.",
            },
          ].map((item, index) => (
            <article
              key={item.title}
              className="group rounded-[28px] border border-slate-200 bg-white p-8 shadow-[0_12px_40px_rgba(15,23,42,0.05)] transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="rounded-full border border-white/60 bg-blue-50 px-4 py-2 text-[11px] font-semibold tracking-[0.2em] text-blue-600">
                  CASE {String(index + 1).padStart(2, "0")}
                </div>

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-blue-100 bg-blue-50 text-blue-600 transition-transform duration-300 group-hover:translate-x-1">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14" />
                    <path d="m13 6 6 6-6 6" />
                  </svg>
                </div>
              </div>

              <h3 className="text-xl font-semibold leading-snug text-[#07152d] transition-colors duration-300 group-hover:text-blue-600 md:text-2xl">
                {item.title}
              </h3>

              <p className="mt-3 max-w-lg text-sm leading-6 text-slate-500">
                {item.description}
              </p>

              <div className="mt-6 flex items-center gap-2 border-t border-slate-100 pt-5">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-600">
                  Before & After Result
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mx-auto mt-10 max-w-3xl text-center">
          <p className="text-xs leading-6 text-slate-400">
            Results may vary depending on individual dental conditions and
            treatment plans.
          </p>
        </div>
      </div>
    </section>
  );
}