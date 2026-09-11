export default function Appointment() {
  return (
    <section
      id="appointment"
      className="relative overflow-hidden bg-white py-24 md:py-32"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute left-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-blue-500/[0.05] blur-[130px]" />
      <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-cyan-500/[0.04] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Main Card */}
        <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-slate-50 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">

          {/* Top Blue Line */}
          <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />

          <div className="grid lg:grid-cols-[1.15fr_0.85fr]">

            {/* Left Content */}
            <div className="relative p-8 sm:p-10 md:p-14 lg:p-16">

              {/* Badge */}
              <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-blue-100 bg-blue-50 px-4 py-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600" />
                </span>

                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                  Book Your Visit
                </span>
              </div>

              {/* Heading */}
              <h2 className="max-w-2xl text-4xl font-semibold leading-[1.08] tracking-tight text-[#07152d] sm:text-5xl md:text-6xl">
                Give your smile the
                <span className="block text-blue-600">
                  care it deserves.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 md:text-lg">
                Whether you need a routine check-up or advanced dental
                treatment, Dr. Shahrukh Hafeez is here to help you take
                the next step toward a healthier smile.
              </p>

              {/* Doctor */}
              <div className="mt-9 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-100 bg-blue-50 text-blue-600">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  >
                    <path d="M12 14c3.31 0 6-2.24 6-5s-2.69-5-6-5-6 2.24-6 5 2.69 5 6 5Z" />
                    <path d="M3 21c.8-3.2 3.8-5 9-5s8.2 1.8 9 5" />
                  </svg>
                </div>

                <div>
                  <p className="text-sm font-semibold text-[#07152d]">
                    Dr. Shahrukh Hafeez
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    B.D.S, R.D.S • Dental Surgeon
                  </p>
                </div>
              </div>

              {/* Trust Points */}
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="border-l border-blue-200 pl-4">
                  <p className="text-sm font-semibold text-[#07152d]">
                    Professional
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Dental care
                  </p>
                </div>

                <div className="border-l border-blue-200 pl-4">
                  <p className="text-sm font-semibold text-[#07152d]">
                    Personalized
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Treatment plans
                  </p>
                </div>

                <div className="border-l border-blue-200 pl-4">
                  <p className="text-sm font-semibold text-[#07152d]">
                    Convenient
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Appointment booking
                  </p>
                </div>
              </div>
            </div>

            {/* Right Appointment Card */}
            <div className="border-t border-slate-200 bg-white p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">

              <div className="h-full rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_10px_40px_rgba(15,23,42,0.04)] sm:p-7">

                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Contact Clinic
                </p>

                <h3 className="mt-3 text-2xl font-semibold text-[#07152d]">
                  Ready to book?
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Choose the easiest way to reach Hafeez Dental Care.
                </p>

                {/* Phone */}
                <a
                  href="tel:03005880654"
                  className="group mt-7 flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition-all duration-300 hover:border-blue-200 hover:bg-blue-50/50"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.08 5.18 2 2 0 0 1 5.06 3h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L9 10.73a16 16 0 0 0 4.27 4.27l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />
                    </svg>
                  </div>

                  <div className="flex-1">
                    <p className="text-xs text-slate-400">
                      Call the clinic
                    </p>

                    <p className="mt-1 text-sm font-semibold text-[#07152d]">
                      0300-5880654
                    </p>
                  </div>

                  <span className="text-slate-400 transition group-hover:translate-x-1 group-hover:text-blue-600">
                    →
                  </span>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/923005880654"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-3 flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition-all duration-300 hover:border-green-200 hover:bg-green-50/50"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-600">
                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.04 0C5.48 0 .14 5.34.14 11.9c0 2.1.55 4.15 1.6 5.95L.04 24l6.3-1.65a11.87 11.87 0 0 0 5.69 1.45h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.16-3.42-8.42ZM12.04 21.8h-.01a9.88 9.88 0 0 1-5.04-1.38l-.36-.21-3.74.98 1-3.65-.23-.38a9.87 9.87 0 0 1-1.52-5.26c0-5.45 4.44-9.88 9.9-9.88 2.64 0 5.12 1.03 6.99 2.9a9.84 9.84 0 0 1 2.89 7c0 5.45-4.44 9.88-9.88 9.88Zm5.42-7.4c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.5 1.71.64.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
                    </svg>
                  </div>

                  <div className="flex-1">
                    <p className="text-xs text-slate-400">
                      Message us
                    </p>

                    <p className="mt-1 text-sm font-semibold text-[#07152d]">
                      WhatsApp
                    </p>
                  </div>

                  <span className="text-slate-400 transition group-hover:translate-x-1 group-hover:text-green-600">
                    →
                  </span>
                </a>

                {/* Clinic Hours */}
                <div className="mt-7 border-t border-slate-200 pt-6">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
                      Clinic Hours
                    </p>

                    <span className="rounded-full bg-green-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-green-600">
                      Available
                    </span>
                  </div>

                  <div className="mt-4 space-y-3 text-sm">
                    <div className="flex justify-between gap-4">
                      <span className="text-slate-500">
                        Mon – Thu, Sat – Sun
                      </span>
                      <span className="text-slate-700">
                        10:30 AM – 2:30 PM
                      </span>
                    </div>

                    <div className="flex justify-between gap-4">
                      <span className="text-slate-500">
                        Evening
                      </span>
                      <span className="text-slate-700">
                        6:00 PM – 9:00 PM
                      </span>
                    </div>

                    <div className="flex justify-between gap-4">
                      <span className="text-slate-500">
                        Friday
                      </span>
                      <span className="text-slate-700">
                        3:00 PM – 9:00 PM
                      </span>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="mt-6 flex gap-3 border-t border-slate-200 pt-6">
                  <svg
                    className="mt-0.5 shrink-0 text-blue-600"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  >
                    <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>

                  <p className="text-xs leading-5 text-slate-500">
                    Hafeez Eye Hospital, 12/B New Officer Colony,
                    Rahim Yar Khan
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <p className="mt-7 text-center text-xs text-slate-400">
          Your first step toward better dental care starts with a
          conversation.
        </p>

      </div>
    </section>
  );
}