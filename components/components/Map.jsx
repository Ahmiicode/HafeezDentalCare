const Map = () => {
  const address =
    "Hafeez Eye Hospital, 12/B New Officer Colony, Rahim Yar Khan, Pakistan";

  return (
    <section id="location" className="relative overflow-hidden bg-white py-24">
      {/* Background Glow */}
      <div className="pointer-events-none absolute right-[-150px] top-20 h-96 w-96 rounded-full bg-blue-500/[0.05] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-10 max-w-2xl">
          <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
            <span className="h-px w-8 bg-blue-600" />
            Find Us
          </p>

          <h2 className="text-4xl font-semibold tracking-tight text-[#07152d] md:text-5xl">
            Visit our
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              dental clinic.
            </span>
          </h2>

          <p className="mt-5 text-[17px] leading-8 text-slate-600">
            Conveniently located in New Officer Colony, Rahim Yar Khan.
            We’re here to make quality dental care easier to reach.
          </p>
        </div>

        {/* Map + Details */}
        <div className="grid overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.06)] lg:grid-cols-[1.5fr_0.5fr]">

          {/* Google Map */}
          <div className="min-h-[450px] lg:min-h-[550px]">
            <iframe
              title="Hafeez Dental Care Location"
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                address
              )}&output=embed`}
              className="h-full min-h-[450px] w-full border-0 grayscale-[10%] lg:min-h-[550px]"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Clinic Details */}
          <div className="flex flex-col justify-between border-t border-slate-200 bg-slate-50 p-7 lg:border-l lg:border-t-0 lg:p-8">

            <div>
              {/* Location Icon */}
              <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-xl text-blue-600">
                📍
              </div>

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                Clinic Location
              </p>

              <h3 className="mt-3 text-xl font-semibold text-[#07152d]">
                Hafeez Dental Care
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                Hafeez Eye Hospital
                <br />
                12/B New Officer Colony
                <br />
                Rahim Yar Khan, Pakistan
              </p>

              <div className="my-7 h-px bg-slate-200" />

              {/* Phone */}
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Reception
              </p>

              <a
                href="tel:03005880654"
                className="mt-2 block text-lg font-semibold text-[#07152d] transition hover:text-blue-600"
              >
                0300-5880654
              </a>

              <div className="my-7 h-px bg-slate-200" />

              {/* Timing */}
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Clinic Hours
              </p>

              <div className="mt-4 space-y-3 text-sm text-slate-500">
                <div className="flex justify-between gap-4">
                  <span>Regular</span>

                  <span className="text-right font-medium text-[#07152d]">
                    10:30 AM – 02:30 PM
                    <br />
                    06:00 PM – 09:00 PM
                  </span>
                </div>

                <div className="flex justify-between gap-4">
                  <span>Friday</span>

                  <span className="font-medium text-[#07152d]">
                    03:00 PM – 09:00 PM
                  </span>
                </div>
              </div>
            </div>

            {/* Directions */}
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                address
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-10 inline-flex items-center justify-center gap-3 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-blue-700"
            >
              Get Directions

              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;