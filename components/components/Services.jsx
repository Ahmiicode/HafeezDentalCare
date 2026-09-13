
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Dental Implants",
    slug: "dental-implants",
    text: "Natural-looking tooth replacement designed for strength, function, and confidence.",
  },
  {
    number: "02",
    title: "Root Canal",
    slug: "root-canal",
    text: "Comfort-focused treatment to protect your natural tooth and restore its function.",
  },
  {
    number: "03",
    title: "Teeth Whitening",
    slug: "teeth-whitening",
    text: "Professional whitening care to help you achieve a brighter, cleaner-looking smile.",
  },
  {
    number: "04",
    title: "Dental Crowns",
    slug: "dental-crowns",
    text: "Strong, aesthetic crowns that help restore damaged or weakened teeth.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-white py-28"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute right-[-160px] top-1/4 h-[360px] w-[360px] rounded-full bg-blue-500/[0.04] blur-[100px] lg:h-[450px] lg:w-[450px] lg:blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">

          <div className="max-w-2xl">
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
              <span className="h-px w-8 bg-blue-600" />
              Our Services
            </p>

            <h2 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-[-0.035em] text-[#07152d] md:text-5xl lg:text-6xl">
              Complete care for
              <span className="mt-2 block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                your smile.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-[16px] leading-7 text-slate-600">
            From preventive care to restorative and cosmetic treatments,
            our dental services are designed around your comfort and
            long-term oral health.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-14 grid overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_15px_45px_rgba(15,23,42,0.04)] md:grid-cols-2">

          {services.map((service, index) => (
            <Link
              key={service.number}
              href={`/services/${service.slug}`}
              className={`group relative min-h-[260px] bg-white p-8 transition-colors duration-300 hover:bg-slate-50 md:min-h-[300px] ${
                index < 2 ? "border-b border-slate-200" : ""
              } ${
                index % 2 === 0
                  ? "md:border-r md:border-slate-200"
                  : ""
              }`}
            >

              {/* Number + Arrow */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold tracking-[0.2em] text-blue-600">
                  {service.number}
                </span>

                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-sm text-slate-400 transition-colors duration-300 group-hover:border-blue-200 group-hover:bg-blue-50 group-hover:text-blue-600">
                  ↗
                </span>
              </div>

              {/* Title */}
              <h3 className="mt-10 text-2xl font-semibold tracking-tight text-[#07152d] transition-colors duration-300 group-hover:text-blue-600 sm:mt-12">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mt-4 max-w-sm text-[15px] leading-7 text-slate-500">
                {service.text}
              </p>

              {/* Learn More */}
              <div
                className="
                  mt-6
                  flex items-center gap-2
                  text-sm font-medium text-blue-600
                  md:absolute md:bottom-8 md:left-8 md:mt-0
                "
              >
                <span>Learn more</span>

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </div>

              {/* Hover line */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-blue-600 transition-[width] duration-300 group-hover:w-full" />

            </Link>
          ))}

        </div>

        {/* Bottom CTA */}
        <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:flex-row sm:items-center">

          <div>
            <p className="font-semibold text-[#07152d]">
              Not sure which treatment you need?
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Schedule a consultation and discuss your dental needs.
            </p>
          </div>

          <a
            href="#appointment"
            className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-blue-700"
          >
            Book Consultation

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>

        </div>

      </div>
    </section>
  );
}

