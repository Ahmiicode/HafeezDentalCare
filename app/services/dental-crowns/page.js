
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

export default function DentalCrownsPage() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-80px" },
        transition: { duration: 0.55, ease: "easeOut" },
      };

  return (
    <main className="overflow-hidden bg-white text-[#081B4B]">

      {/* HERO */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(37,99,235,0.05),transparent_32%),radial-gradient(circle_at_90%_70%,rgba(6,182,212,0.04),transparent_30%)]" />

        <div className="pointer-events-none absolute left-[-140px] top-40 h-[350px] w-[350px] rounded-full bg-blue-500/[0.04] blur-[100px]" />

        <div className="pointer-events-none absolute bottom-[-120px] right-[-80px] h-[400px] w-[400px] rounded-full bg-cyan-400/[0.04] blur-[110px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">

          {/* LEFT CONTENT */}
          <motion.div {...fadeUp} className="max-w-2xl">

            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-[#2147FF]">
              <span className="h-2 w-2 rounded-full bg-[#2147FF]" />
              Dental Crowns · Rahim Yar Khan
            </div>

            <h1 className="text-[clamp(3rem,6vw,5.5rem)] font-semibold leading-[0.98] tracking-[-0.045em]">
              Restore your tooth.
              <span className="mt-2 block bg-gradient-to-r from-[#2147FF] via-cyan-500 to-[#2147FF] bg-clip-text text-transparent">
                Renew your smile.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-[17px] leading-8 text-slate-500 md:text-lg">
              Dental crowns can help restore damaged or weakened teeth while
              improving their appearance, strength and everyday function.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#2147FF] px-7 py-4 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(37,99,235,0.16)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#081B4B]"
              >
                Book an Appointment
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-4 text-sm font-semibold text-[#081B4B] shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50"
              >
                Explore Services
              </Link>

            </div>

            {/* TRUST */}
            <div className="mt-12 flex flex-wrap gap-x-9 gap-y-5 border-t border-slate-100 pt-7">

              <div>
                <p className="text-2xl font-semibold">500+</p>
                <p className="mt-1 text-xs uppercase tracking-[0.15em] text-slate-400">
                  Patients
                </p>
              </div>

              <div className="h-9 w-px bg-slate-200" />

              <div>
                <p className="text-2xl font-semibold">100+</p>
                <p className="mt-1 text-xs uppercase tracking-[0.15em] text-slate-400">
                  Treatments
                </p>
              </div>

              <div className="h-9 w-px bg-slate-200" />

              <div>
                <p className="text-2xl font-semibold">5.0</p>
                <p className="mt-1 text-xs uppercase tracking-[0.15em] text-slate-400">
                  Patient Rating
                </p>
              </div>

            </div>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.96 }}
            animate={shouldReduceMotion ? {} : { opacity: 1, scale: 1 }}
            transition={
              shouldReduceMotion
                ? {}
                : { duration: 0.6, delay: 0.05, ease: "easeOut" }
            }
            className="relative mx-auto w-full max-w-[520px]"
          >

            <div className="pointer-events-none absolute inset-10 rounded-full bg-blue-500/[0.08] blur-[80px]" />

            <div className="relative overflow-hidden rounded-[2rem] border border-blue-100 bg-blue-50 p-3 shadow-[0_25px_80px_rgba(33,71,255,0.08)]">

              <div className="relative h-[430px] overflow-hidden rounded-[1.5rem] sm:h-[500px]">

                <Image
                  src="/images/services/dental-crowns.jpg"
                  alt="Dental crowns treatment at Hafeez Dental Care in Rahim Yar Khan"
                  fill
                  priority
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#081B4B]/30 via-transparent to-transparent" />

              </div>

              {/* Floating Card */}
              <div className="absolute bottom-8 left-8 rounded-2xl border border-white/70 bg-white/95 px-5 py-4 shadow-xl backdrop-blur">

                <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">
                  Focused on
                </p>

                <p className="mt-1 text-sm font-semibold text-[#081B4B]">
                  Your Smile
                </p>

                <div className="mt-2 flex gap-1">
                  <span className="h-1 w-6 rounded-full bg-[#2147FF]" />
                  <span className="h-1 w-3 rounded-full bg-blue-200" />
                  <span className="h-1 w-2 rounded-full bg-blue-100" />
                </div>

              </div>

            </div>
          </motion.div>

        </div>
      </section>

      {/* INTRO */}
      <motion.section
        {...fadeUp}
        className="border-t border-slate-100 py-24"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

            <div>

              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#2147FF]">
                Dental Crowns
              </p>

              <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
                Strengthen your tooth.
                <span className="block text-[#2147FF]">
                  Improve your smile.
                </span>
              </h2>

            </div>

            <div className="max-w-2xl">

              <p className="text-lg leading-8 text-slate-500">
                A dental crown is a custom-made restoration that covers and
                protects a damaged, weakened or heavily restored tooth.
              </p>

              <p className="mt-5 leading-8 text-slate-500">
                Depending on your dental needs, a crown can help restore the
                shape, appearance and function of a tooth while supporting
                your overall smile.
              </p>

            </div>

          </div>

        </div>
      </motion.section>

      {/* BENEFITS */}
      <section className="relative overflow-hidden bg-slate-50/60 py-24">

        <div className="pointer-events-none absolute right-[-180px] top-20 h-[400px] w-[400px] rounded-full bg-cyan-400/[0.04] blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

          <motion.div {...fadeUp} className="mx-auto max-w-3xl text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#2147FF]">
              Benefits
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-5xl">
              More than protection.
              <span className="block text-[#2147FF]">
                A restored smile.
              </span>
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-500">
              Dental crowns can provide support for damaged teeth while
              helping restore their appearance and everyday function.
            </p>

          </motion.div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            {[
              {
                number: "01",
                title: "Protect Damaged Teeth",
                text: "A crown can cover and protect a weakened or damaged tooth.",
              },
              {
                number: "02",
                title: "Restore Function",
                text: "A properly fitted crown can help restore normal everyday use of the tooth.",
              },
              {
                number: "03",
                title: "Improve Appearance",
                text: "Crowns can help improve the shape and appearance of a damaged tooth.",
              },
              {
                number: "04",
                title: "Natural-Looking Result",
                text: "Your dentist can choose a restoration designed to complement your smile.",
              },
            ].map((item) => (
              <motion.div
                key={item.number}
                {...fadeUp}
                className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_10px_40px_rgba(15,23,42,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-[0_20px_50px_rgba(33,71,255,0.08)]"
              >

                <div className="flex items-center justify-between">

                  <span className="text-sm font-semibold text-[#2147FF]">
                    {item.number}
                  </span>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-[#2147FF] transition duration-300 group-hover:bg-[#2147FF] group-hover:text-white">
                    →
                  </div>

                </div>

                <h3 className="mt-8 text-xl font-semibold text-[#081B4B]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {item.text}
                </p>

                <div className="mt-7 h-px w-full bg-slate-100">
                  <div className="h-px w-0 bg-[#2147FF] transition-all duration-500 group-hover:w-full" />
                </div>

              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <motion.div {...fadeUp} className="max-w-2xl">

            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#2147FF]">
              Treatment Process
            </p>

            <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
              A simple path to
              <span className="block text-[#2147FF]">
                a restored smile.
              </span>
            </h2>

          </motion.div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">

            {[
              {
                step: "01",
                title: "Dental Examination",
                text: "Your dentist examines the tooth and discusses your symptoms, dental needs and treatment options.",
              },
              {
                step: "02",
                title: "Tooth Preparation",
                text: "The tooth is prepared so the restoration can be properly fitted and placed.",
              },
              {
                step: "03",
                title: "Crown Placement",
                text: "The completed crown is fitted to the tooth and checked for comfort, appearance and function.",
              },
            ].map((item) => (
              <motion.div
                key={item.step}
                {...fadeUp}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_10px_40px_rgba(15,23,42,0.03)]"
              >

                <span className="text-5xl font-semibold tracking-tight text-blue-100">
                  {item.step}
                </span>

                <h3 className="mt-7 text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-500">
                  {item.text}
                </p>

              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* WHEN CROWNS MAY HELP */}
      <section className="bg-slate-50/60 py-24">

        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-8 lg:items-center">

          <motion.div {...fadeUp}>

            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#2147FF]">
              When Crowns May Help
            </p>

            <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
              When a tooth needs
              <span className="block text-[#2147FF]">
                extra protection.
              </span>
            </h2>

            <p className="mt-6 leading-8 text-slate-500">
              Dental crowns may be considered for teeth that are damaged,
              weakened, heavily restored or in need of additional support.
              Your dentist can assess your tooth and recommend the most
              suitable option.
            </p>

          </motion.div>

          <motion.div {...fadeUp} className="grid gap-4 sm:grid-cols-2">

            {[
              "Damaged or weakened teeth",
              "Teeth with large restorations",
              "Broken or worn teeth",
              "Teeth after root canal treatment",
              "Teeth needing additional support",
              "Cosmetic tooth concerns",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_8px_30px_rgba(15,23,42,0.03)]"
              >

                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-sm font-semibold text-[#2147FF]">
                  ✓
                </span>

                <span className="text-sm font-medium text-[#081B4B]">
                  {item}
                </span>

              </div>
            ))}

          </motion.div>

        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 lg:px-8">

        <motion.div
          {...fadeUp}
          className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#081B4B] px-7 py-16 text-center sm:px-12"
        >

          <div className="pointer-events-none absolute left-1/2 top-[-200px] h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[100px]" />

          <div className="relative">

            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-300">
              Restore Your Smile
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold text-white sm:text-5xl">
              Is a damaged tooth affecting your smile?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-blue-100/70">
              Schedule a consultation with Hafeez Dental Care and discuss
              whether a dental crown may be suitable for your tooth.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#081B4B] transition duration-300 hover:-translate-y-0.5 hover:bg-blue-50"
            >
              Book an Appointment
              <span>→</span>
            </Link>

          </div>

        </motion.div>

      </section>

    </main>
  );
}

