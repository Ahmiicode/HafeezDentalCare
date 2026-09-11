export default function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-200 bg-white py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-3">

          {/* Brand */}
          <div>
            <div className="text-xl font-bold text-[#07152d]">
              Hafeez Dental Care
            </div>

            <p className="mt-3 max-w-sm leading-7 text-slate-500">
              Modern dental care by Dr. Shahrukh Hafeez in Rahim Yar Khan.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-[#07152d]">
              Contact
            </h3>

            <div className="mt-4 space-y-3 text-slate-500">
              <p>12/B New Officer Colony, RYK</p>

              <a
                href="tel:03005880654"
                className="block transition hover:text-blue-600"
              >
                0300-5880654
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-[#07152d]">
              Quick Links
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-slate-500">
              <a
                href="#about"
                className="transition hover:text-blue-600"
              >
                About
              </a>

              <a
                href="#services"
                className="transition hover:text-blue-600"
              >
                Services
              </a>

              <a
                href="#results"
                className="transition hover:text-blue-600"
              >
                Results
              </a>

              <a
                href="#appointment"
                className="transition hover:text-blue-600"
              >
                Appointment
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-3 border-t border-slate-200 pt-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Hafeez Dental Care. All rights reserved.
          </p>

          <p className="text-slate-400">
            Quality dental care in Rahim Yar Khan
          </p>
        </div>
      </div>
    </footer>
  );
}