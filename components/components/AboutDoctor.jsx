import Image from "next/image";

export default function AboutDoctor() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#F8FAFC] py-24 sm:py-28"
    >
      {/* Lightweight background glow */}
      <div className="pointer-events-none absolute left-[-160px] top-1/3 h-80 w-80 rounded-full bg-blue-500/[0.04] blur-[90px] lg:h-[420px] lg:w-[420px] lg:blur-[110px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-8">
        {/* ================= IMAGE ================= */}
        <div className="relative mx-auto w-full max-w-[500px]">
          {/* Lightweight Glow */}
          <div className="pointer-events-none absolute -inset-4 rounded-[3rem] bg-blue-500/[0.05] blur-2xl" />

          {/* Image Frame */}
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-2.5 shadow-[0_18px_55px_rgba(15,23,42,0.07)]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-slate-100">
              <Image
                src="/images/dr-shahrukh.png.png"
                alt="Dr. Shahrukh Hafeez - Dental Surgeon"
                fill
                priority={false}
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover object-top"
              />

              {/* Bottom Info */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="rounded-2xl border border-white/70 bg-white/95 p-5 shadow-lg">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#2147FF]">
                    Dental Specialist
                  </p>

                  <h3 className="mt-1.5 text-lg font-bold tracking-tight text-[#081B4B]">
                    Dr. Shahrukh Hafeez
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    B.D.S, R.D.S · D-Ortho · C-Implant
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Small floating badge */}
          <div className="absolute -right-3 top-10 hidden rounded-2xl border border-blue-100 bg-white px-4 py-3 shadow-lg sm:block">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">
              Care
            </p>

            <p className="mt-0.5 text-sm font-bold text-[#2147FF]">
              Patient First
            </p>
          </div>
        </div>

        {/* ================= CONTENT ================= */}
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-[#2147FF]">
            <span className="h-px w-8 bg-[#2147FF]" />
            Meet Your Dentist
          </p>

          {/* Heading */}
          <h2 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-[#081B4B] md:text-5xl lg:text-6xl">
            Dentistry built around
            <span className="mt-2 block text-[#2147FF]">
              your comfort.
            </span>
          </h2>

          {/* Description */}
          <p className="mt-7 max-w-xl text-[16px] leading-8 text-slate-600 md:text-[17px]">
            At Hafeez Dental Care, we believe exceptional dentistry starts
            with listening. Every treatment is planned around your needs,
            comfort, and long-term oral health.
          </p>

          <p className="mt-5 max-w-xl text-[16px] leading-8 text-slate-600 md:text-[17px]">
            Dr. Shahrukh Hafeez provides modern dental care with a
            patient-first approach, helping patients feel comfortable,
            informed, and confident throughout their treatment.
          </p>

          {/* Credentials */}
          <div className="mt-9 grid max-w-xl gap-4 sm:grid-cols-2">
            {/* Card 1 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-colors duration-200 hover:border-blue-100">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#2147FF]">
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </div>

              <h3 className="font-semibold text-[#081B4B]">
                Dental Surgeon
              </h3>

              <p className="mt-1.5 text-sm leading-6 text-slate-500">
                B.D.S, R.D.S qualified dental professional.
              </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-colors duration-200 hover:border-blue-100">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#2147FF]">
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 2v20" />
                  <path d="M2 12h20" />
                  <circle cx="12" cy="12" r="9" />
                </svg>
              </div>

              <h3 className="font-semibold text-[#081B4B]">
                Specialized Care
              </h3>

              <p className="mt-1.5 text-sm leading-6 text-slate-500">
                D-Ortho and C-Implant focused treatments.
              </p>
            </div>
          </div>

          {/* CTA */}
          <a
            href="#appointment"
            className="group mt-9 inline-flex items-center gap-3 rounded-full bg-[#2147FF] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-colors duration-200 hover:bg-[#081B4B]"
          >
            Book an Appointment

            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}