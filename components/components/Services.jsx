"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    title: "Dental Implants",
    description:
      "A reliable solution for replacing missing teeth and restoring a natural-looking smile.",
    href: "/services/dental-implants",
  },
  {
    title: "Root Canal Treatment",
    description:
      "Professional treatment to help save damaged or infected teeth and protect your natural smile.",
    href: "/services/root-canal",
  },
  {
    title: "Teeth Whitening",
    description:
      "Brighten your smile with professional teeth whitening designed for a cleaner, more confident look.",
    href: "/services/teeth-whitening",
  },
  {
    title: "Dental Crowns",
    description:
      "Restore damaged or weakened teeth with durable dental crowns designed for function and appearance.",
    href: "/services/dental-crowns",
  },
  {
    title: "Orthodontics",
    description:
      "Improve tooth alignment and create a healthier, more balanced smile with orthodontic care.",
    href: "/services/orthodontics",
  },
  {
    title: "Clear Aligners",
    description:
      "Straighten your teeth with a discreet and comfortable alternative to traditional braces.",
    href: "/services/aligners",
  },
  {
    title: "Surgical Extraction",
    description:
      "Professional tooth extraction performed with careful planning and a focus on patient comfort.",
    href: "/services/surgical-extraction",
  },
  {
    title: "Dental Filling",
    description:
      "Repair cavities and damaged teeth with dental fillings that restore strength and function.",
    href: "/services/dental-filling",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-white py-24 md:py-32"
    >
      {/* Background Glow */}
      <div className="absolute -left-40 top-1/4 h-[400px] w-[400px] rounded-full bg-blue-500/[0.06] blur-[120px]" />

      <div className="absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-cyan-400/[0.05] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-blue-600"
          >
            Our Services
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl font-bold tracking-tight text-[#081B4B] md:text-5xl"
          >
            Complete dental care for{" "}
            <span className="text-blue-600">your smile</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 md:text-lg"
          >
            From restorative treatments to cosmetic and preventive care,
            Hafeez Dental Care provides professional dental solutions in
            Rahim Yar Khan.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.06,
              }}
              className="group"
            >
              <Link
                href={service.href}
                className="relative flex min-h-[260px] flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_10px_40px_rgba(8,27,75,0.05)] transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_20px_50px_rgba(33,71,255,0.12)]"
              >
                {/* Number */}
                <div className="mb-7 flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-sm font-bold text-blue-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-2xl text-blue-600/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-blue-600">
                    →
                  </span>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold text-[#081B4B]">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {service.description}
                  </p>
                </div>

                {/* Learn More */}
                <div className="mt-auto pt-7 text-sm font-semibold text-blue-600">
                  Learn more
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>

                {/* Hover Glow */}
                <div className="pointer-events-none absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-blue-500/[0.07] blur-2xl transition-all duration-300 group-hover:bg-blue-500/[0.12]" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <p className="mb-5 text-sm text-slate-500">
            Not sure which treatment is right for you?
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#081B4B] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-600/20"
          >
            Book a Consultation
            <span>→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}