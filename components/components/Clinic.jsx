export default function Clinic() {
  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-28">
      {/* Background Glow */}
      <div className="pointer-events-none absolute right-[-150px] top-1/3 h-96 w-96 rounded-full bg-blue-500/[0.05] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-6 md:grid-cols-3">

          {/* Main Clinic Card */}
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-[0_15px_50px_rgba(15,23,42,0.04)] md:col-span-2 md:min-h-[400px] md:p-10">

            <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
              <span className="h-px w-8 bg-blue-600" />
              Our Clinic
            </p>

            <h2 className="mt-5 max-w-xl text-4xl font-bold leading-tight tracking-tight text-[#07152d] md:text-5xl">
              Modern surroundings.
              <span className="block text-blue-600">
                Comfortable care.
              </span>
            </h2>

            <p className="mt-5 max-w-xl leading-8 text-slate-600">
              A clean, welcoming environment equipped to provide modern dental
              treatments with patient comfort in mind.
            </p>

            {/* Bottom Info */}
            <div className="mt-10 flex flex-wrap gap-3">
              <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-medium text-slate-600">
                Modern Equipment
              </span>

              <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-medium text-slate-600">
                Hygienic Environment
              </span>

              <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-medium text-slate-600">
                Patient Comfort
              </span>
            </div>
          </div>

          {/* Patient Experience Card */}
          <div className="group relative overflow-hidden rounded-3xl bg-blue-600 p-8 shadow-[0_20px_50px_rgba(37,99,235,0.18)] md:p-10">

            {/* Decorative Circle */}
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/[0.08] transition-transform duration-500 group-hover:scale-125" />

            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-3xl text-white backdrop-blur-sm">
                ✦
              </div>

              <h3 className="mt-16 text-2xl font-semibold leading-snug text-white">
                Patient-first experience
              </h3>

              <p className="mt-4 leading-7 text-blue-100">
                From consultation to treatment, every step is designed around
                your comfort.
              </p>

              <div className="mt-8 flex items-center gap-2 text-sm font-medium text-white">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                Care you can trust
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}