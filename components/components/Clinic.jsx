import Image from "next/image";

export default function Clinic() {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      {/* Background Glow */}
      <div className="pointer-events-none absolute right-[-150px] top-1/3 h-80 w-80 rounded-full bg-blue-500/[0.04] blur-[90px] lg:h-96 lg:w-96 lg:blur-[110px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-14 lg:gap-20">

          {/* LEFT CONTENT */}
          <div>
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-blue-600 sm:text-sm sm:tracking-[0.25em]">
              <span className="h-px w-7 bg-blue-600 sm:w-8" />
              Our Clinic
            </p>

            <h2 className="mt-5 max-w-xl text-4xl font-bold leading-[1.08] tracking-tight text-[#07152d] sm:text-[2.7rem] md:text-5xl">
              Modern surroundings.
              <span className="mt-1 block text-blue-600">
                Comfortable care.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-[15px] leading-7 text-slate-600 sm:text-base sm:leading-8">
              A clean, welcoming environment equipped to provide modern dental
              treatments with patient comfort in mind.
            </p>

            {/* Features */}
            <div className="mt-8 flex flex-wrap gap-2.5 sm:mt-10 sm:gap-3">
              <span className="rounded-full border border-slate-200 bg-white px-3.5 py-2 text-[11px] font-medium text-slate-600 sm:px-4 sm:text-xs">
                Modern Equipment
              </span>

              <span className="rounded-full border border-slate-200 bg-white px-3.5 py-2 text-[11px] font-medium text-slate-600 sm:px-4 sm:text-xs">
                Hygienic Environment
              </span>

              <span className="rounded-full border border-slate-200 bg-white px-3.5 py-2 text-[11px] font-medium text-slate-600 sm:px-4 sm:text-xs">
                Patient Comfort
              </span>
            </div>
          </div>

          {/* IMAGE GALLERY */}
          <div className="relative w-full">

            {/* MOBILE / DESKTOP MAIN IMAGE */}
            <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-[1.75rem] shadow-[0_20px_55px_rgba(15,23,42,0.12)] sm:rounded-[2rem] md:aspect-[5/4]">
              <Image
                src="/images/img1.jpeg"
                alt="Hafeez Dental Care clinic"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                priority
                quality={95}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#07152d]/30 via-transparent to-transparent" />

              {/* Badge */}
              <div className="absolute bottom-4 left-4 rounded-xl border border-white/30 bg-white/90 px-4 py-3 shadow-lg backdrop-blur-md sm:bottom-5 sm:left-5">
                <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-slate-400">
                  Hafeez Dental Care
                </p>

                <p className="mt-1 text-xs font-bold text-[#07152d] sm:text-sm">
                  Modern dental care
                </p>
              </div>
            </div>

            {/* SMALL IMAGES */}
            <div className="mt-3 grid grid-cols-2 gap-3 sm:mt-4 sm:gap-4">

              <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-[0_12px_35px_rgba(15,23,42,0.08)] sm:rounded-[1.5rem]">
                <Image
                  src="/images/img2.jpeg"
                  alt="Hafeez Dental Care treatment room"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  quality={95}
                />
              </div>

              <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-[0_12px_35px_rgba(15,23,42,0.08)] sm:rounded-[1.5rem]">
                <Image
                  src="/images/img3.jpeg"
                  alt="Hafeez Dental Care interior"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  quality={95}
                />
              </div>
            </div>

            {/* FOURTH IMAGE — DESKTOP ONLY */}
            <div className="absolute -bottom-7 -right-6 hidden h-28 w-32 overflow-hidden rounded-2xl border-[6px] border-white shadow-xl lg:block">
              <Image
                src="/images/img4.jpeg"
                alt="Modern dental equipment"
                fill
                sizes="130px"
                className="object-cover"
                quality={95}
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}