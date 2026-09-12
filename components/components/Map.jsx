"use client";

import { useState } from "react";

const Map = () => {
  const [showMap, setShowMap] = useState(false);

  const address =
    "Hafeez Eye Hospital, 12/B New Officer Colony, Rahim Yar Khan, Pakistan";

  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    address
  )}&output=embed`;

  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address
  )}`;

  return (
    <section id="location" className="relative overflow-hidden bg-white py-24">
      {/* Lightweight Background Glow */}
      <div className="pointer-events-none absolute right-[-150px] top-20 h-80 w-80 rounded-full bg-blue-500/[0.04] blur-[90px] lg:h-96 lg:w-96 lg:blur-[110px]" />

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
        <div className="grid overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_15px_45px_rgba(15,23,42,0.05)] lg:grid-cols-[1.5fr_0.5fr]">
          {/* Map */}
          <div className="relative min-h-[400px] bg-slate-100 lg:min-h-[550px]">
            {!showMap ? (
              <div className="absolute inset-0 flex items-center justify-center p-6">
                <div className="max-w-sm text-center">
                  {/* Map Icon */}
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-100 bg-white text-2xl shadow-sm">
                    📍
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-[#07152d]">
                    Hafeez Dental Care
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Hafeez Eye Hospital
                    <br />
                    12/B New Officer Colony
                    <br />
                    Rahim Yar Khan, Pakistan
                  </p>

                  <button
                    type="button"
                    onClick={() => setShowMap(true)}
                    className="mt-6 inline-flex items-center justify-center gap-3 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-blue-700"
                  >
                    Load Map
                    <span>→</span>
                  </button>
                </div>
              </div>
            ) : (
              <iframe
                title="Hafeez Dental Care Location"
                src={mapUrl}
                className="h-full min-h-[400px] w-full border-0 lg:min-h-[550px]"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            )}
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
                className="mt-2 block text-lg font-semibold text-[#07152d] transition-colors duration-300 hover:text-blue-600"
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

                  <span className="text-right font-medium text-[#07152d]">
                    03:00 PM – 09:00 PM
                  </span>
                </div>
              </div>
            </div>

            {/* Directions */}
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-10 inline-flex items-center justify-center gap-3 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-blue-700"
            >
              Get Directions

              <span className="transition-transform duration-300 group-hover:translate-x-1">
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