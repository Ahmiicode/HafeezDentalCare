"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

export default function DentalFillingPage() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <main className="overflow-hidden bg-white text-[#081B4B]">

      {/* ================= HERO ================= */}
      <section className="relative pt-32 pb-20 lg:pt-40">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[-180px] top-[-120px] h-[420px] w-[420px] rounded-full bg-blue-500/[0.08] blur-[120px]" />
          <div className="absolute right-[-160px] top-[20%] h-[420px] w-[420px] rounded-full bg-cyan-400/[0.08] blur-[130px]" />
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:px-8">

          {/* Left */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <div className="mb-6 inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
              Dental Filling · Rahim Yar Khan
            </div>

            <h1 className="max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Treat tooth decay.
              <span className="block text-blue-600">
                Protect your smile.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
              Dental fillings can help restore teeth affected by decay or
              minor damage. Our team provides careful evaluation and
              professional treatment focused on preserving your natural tooth.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-[#081B4B] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-900/10 transition hover:-translate-y-0.5 hover:bg-blue-700"
              >
                Book an Appointment
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-[#081B4B] transition hover:border-blue-200 hover:bg-blue-50"
              >
                Explore Services
              </Link>
            </div>

            {/* Trust Stats */}
            <div className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-slate-200 pt-7">
              <div>
                <p className="text-2xl font-bold">500+</p>
                <p className="mt-1 text-sm text-slate-500">Patients</p>
              </div>

              <div>
                <p className="text-2xl font-bold">100+</p>
                <p className="mt-1 text-sm text-slate-500">Treatments</p>
              </div>

              <div>
                <p className="text-2xl font-bold">5.0</p>
                <p className="mt-1 text-sm text-slate-500">Patient Rating</p>
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                opacity: 0,
                scale: shouldReduceMotion ? 1 : 0.96,
              },
              visible: {
                opacity: 1,
                scale: 1,
                transition: {
                  duration: 0.7,
                  ease: "easeOut",
                },
              },
            }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 shadow-2xl shadow-blue-950/10">
              <div className="relative aspect-[4/4.5]">
                <Image
                  src="/images/services/dental-filling.jpg"
                  alt="Dental filling treatment at Hafeez Dental Care"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-5 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-xl shadow-slate-900/10 sm:-left-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Focused on
              </p>

              <p className="mt-1 text-sm font-bold text-[#081B4B]">
                Your Natural Tooth
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="border-t border-slate-100 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-8">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
              Dental Fillings
            </p>

            <h2 className="max-w-xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Restore teeth affected by decay or minor damage.
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="space-y-5 text-base leading-8 text-slate-600"
          >
            <p>
              Tooth decay can gradually damage the structure of a tooth.
              A dental filling can restore the affected area and help
              return the tooth to normal function.
            </p>

            <p>
              At Hafeez Dental Care, we first assess the condition of the
              tooth before recommending the appropriate treatment. The
              treatment approach is planned according to your individual
              dental needs.
            </p>
          </motion.div>

        </div>
      </section>

      {/* ================= BENEFITS ================= */}
      <section className="bg-slate-50/60 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="max-w-2xl"
          >
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
              Why Consider a Filling
            </p>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Simple restorative care for damaged teeth.
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Treating a cavity early can help prevent the problem from
              progressing and may help preserve more of the natural tooth.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {[
              {
                title: "Restore Tooth Structure",
                text: "A filling can restore an area of the tooth affected by decay.",
              },
              {
                title: "Support Normal Function",
                text: "Restorative treatment can help the tooth function normally again.",
              },
              {
                title: "Preserve Natural Teeth",
                text: "Appropriate treatment may help preserve the remaining healthy tooth structure.",
              },
              {
                title: "Professional Care",
                text: "Your treatment is planned after evaluating the condition of your tooth.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: shouldReduceMotion ? 0 : 20,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5,
                      delay: shouldReduceMotion ? 0 : index * 0.08,
                    },
                  },
                }}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-sm font-bold text-blue-600">
                  0{index + 1}
                </div>

                <h3 className="text-lg font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {item.text}
                </p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="max-w-2xl"
          >
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
              Your Treatment Journey
            </p>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              A straightforward approach to dental restoration.
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            {[
              {
                number: "01",
                title: "Dental Examination",
                text: "We examine the tooth and identify the extent of decay or damage.",
              },
              {
                number: "02",
                title: "Treatment Planning",
                text: "The appropriate restorative option is discussed based on the condition of your tooth.",
              },
              {
                number: "03",
                title: "Tooth Restoration",
                text: "The affected area is treated and the tooth is restored according to the planned procedure.",
              },
            ].map((item) => (
              <motion.div
                key={item.number}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={fadeUp}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <span className="text-sm font-bold text-blue-600">
                  {item.number}
                </span>

                <h3 className="mt-5 text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.text}
                </p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= WHEN TO CONSIDER ================= */}
      <section className="bg-slate-50/60 py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:px-8">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
              Signs You May Need a Filling
            </p>

            <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Don’t ignore signs of tooth decay.
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-slate-600">
              If you notice changes in a tooth, a dental examination can
              help determine the cause and the appropriate treatment.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="grid gap-4 sm:grid-cols-2"
          >
            {[
              "Tooth sensitivity",
              "Pain when eating or drinking",
              "Visible cavity or hole",
              "Dark spot on a tooth",
              "Food repeatedly getting stuck",
              "Minor tooth damage",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-50 text-sm font-bold text-blue-600">
                  ✓
                </span>

                <span className="text-sm font-semibold leading-6 text-[#081B4B]">
                  {item}
                </span>
              </div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="relative overflow-hidden rounded-[2rem] bg-[#081B4B] px-7 py-14 text-white sm:px-12 lg:px-16"
          >
            <div className="absolute right-[-100px] top-[-120px] h-[300px] w-[300px] rounded-full bg-blue-500/20 blur-[100px]" />
            <div className="absolute bottom-[-120px] left-[-100px] h-[300px] w-[300px] rounded-full bg-cyan-400/10 blur-[100px]" />

            <div className="relative max-w-3xl">

              <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-blue-300">
                Protect Your Smile
              </p>

              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Noticed a cavity or tooth sensitivity?
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-blue-100/80">
                Schedule a dental consultation at Hafeez Dental Care and
                find out what treatment may be right for your tooth.
              </p>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#081B4B] transition hover:-translate-y-0.5 hover:bg-blue-50"
                >
                  Book an Appointment
                </Link>
              </div>

            </div>
          </motion.div>

        </div>
      </section>

    </main>
  );
}