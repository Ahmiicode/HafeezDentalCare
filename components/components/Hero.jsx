"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-white text-[#081B4B]"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(37,99,235,0.06),transparent_32%),radial-gradient(circle_at_90%_70%,rgba(6,182,212,0.05),transparent_30%)]" />

      <div className="absolute left-[-140px] top-32 h-[420px] w-[420px] rounded-full bg-blue-500/[0.05] blur-[130px]" />

      <div className="absolute bottom-[-160px] right-[-80px] h-[450px] w-[450px] rounded-full bg-cyan-400/[0.05] blur-[140px]" />

      <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-16 px-6 pb-16 pt-32 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          {/* Badge */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-[#2147FF]">
            <span className="h-2 w-2 rounded-full bg-[#2147FF]" />
            Advanced Dental Care · Rahim Yar Khan
          </div>

          {/* Heading */}
          <h1 className="text-[clamp(3.2rem,6vw,5.8rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-[#081B4B]">
            A healthier smile.
            <span className="mt-2 block bg-gradient-to-r from-[#2147FF] via-cyan-500 to-[#2147FF] bg-clip-text text-transparent">
              A more confident you.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-xl text-[17px] leading-8 text-slate-500 md:text-lg">
            Personalized dental care focused on comfort, precision, and
            long-term results — delivered by{" "}
            <span className="font-semibold text-[#081B4B]">
              Dr. Shahrukh Hafeez
            </span>
            .
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#appointment"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#2147FF] px-7 py-4 text-sm font-semibold text-white shadow-[0_12px_40px_rgba(37,99,235,0.20)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#081B4B]"
            >
              Book an Appointment
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-4 text-sm font-semibold text-[#081B4B] shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50"
            >
              Explore Our Services
            </a>
          </div>

          {/* Trust */}
          <div className="mt-12 flex flex-wrap items-center gap-x-9 gap-y-5 border-t border-slate-100 pt-7">
            <div>
              <p className="text-2xl font-semibold tracking-tight text-[#081B4B]">
                500+
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.15em] text-slate-400">
                Patients
              </p>
            </div>

            <div className="h-9 w-px bg-slate-200" />

            <div>
              <p className="text-2xl font-semibold tracking-tight text-[#081B4B]">
                10+
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.15em] text-slate-400">
                Treatments
              </p>
            </div>

            <div className="h-9 w-px bg-slate-200" />

            <div>
              <p className="text-2xl font-semibold tracking-tight text-[#081B4B]">
                5.0
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.15em] text-slate-400">
                Patient Rating
              </p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT ABSTRACT VISUAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="relative mx-auto flex min-h-[500px] w-full max-w-[520px] items-center justify-center"
        >
          {/* Glow */}
          <div className="absolute h-[340px] w-[340px] rounded-full bg-blue-500/[0.10] blur-[100px] sm:h-[450px] sm:w-[450px]" />

          {/* Main Orb */}
          <div className="relative flex h-[370px] w-[370px] items-center justify-center rounded-full border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-slate-50 shadow-[0_30px_100px_rgba(33,71,255,0.10)] sm:h-[480px] sm:w-[480px]">

            {/* Rings */}
            <div className="absolute h-[280px] w-[280px] rounded-full border border-blue-100 sm:h-[370px] sm:w-[370px]" />

            <div className="absolute h-[210px] w-[210px] rounded-full border border-blue-100/70 sm:h-[285px] sm:w-[285px]" />

            {/* Center */}
            <div className="relative z-10 flex h-32 w-32 items-center justify-center rounded-full bg-white shadow-[0_20px_60px_rgba(15,23,42,0.10)] sm:h-40 sm:w-40">
              <div className="text-center">
                <p className="text-3xl font-bold tracking-[-0.04em] text-[#081B4B] sm:text-4xl">
                  HDC
                </p>

                <div className="mx-auto mt-2 h-1 w-8 rounded-full bg-[#2147FF]" />

                <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Dental Care
                </p>
              </div>
            </div>

            {/* Orbit Line */}
            <div className="absolute h-[330px] w-[150px] rotate-[35deg] rounded-[50%] border border-blue-200/70 sm:h-[420px] sm:w-[190px]" />

            <div className="absolute h-[330px] w-[150px] rotate-[-35deg] rounded-[50%] border border-cyan-200/60 sm:h-[420px] sm:w-[190px]" />

            {/* Floating Circle */}
            <div className="absolute right-[-5px] top-12 flex h-16 w-16 items-center justify-center rounded-full border border-blue-100 bg-white shadow-xl sm:right-[-12px] sm:h-20 sm:w-20">
              <span className="text-xl font-semibold text-[#2147FF]">
                +
              </span>
            </div>

            {/* Floating Info */}
            <div className="absolute bottom-10 left-[-10px] rounded-2xl border border-slate-100 bg-white px-5 py-4 shadow-xl sm:left-[-25px]">
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

            {/* Small Dots */}
            <div className="absolute bottom-8 right-16 flex gap-1.5">
              <span className="h-2 w-2 rounded-full bg-[#2147FF]" />
              <span className="h-2 w-2 rounded-full bg-blue-200" />
              <span className="h-2 w-2 rounded-full bg-blue-100" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}