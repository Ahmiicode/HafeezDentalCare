import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hafeez Dental Care | Dental Surgeon in Rahim Yar Khan",
  description:
    "Hafeez Dental Care provides professional dental care and treatment in Rahim Yar Khan.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">

        {children}

        {/* Floating Action Buttons */}
        <div className="fixed bottom-6 right-5 z-[999] flex flex-col items-center gap-3">

          {/* Appointment Button */}
          <a
            href="#appointment"
            aria-label="Book an Appointment"
            className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-xl shadow-blue-600/30 transition-all duration-300 hover:scale-110 hover:bg-blue-500"
          >
            {/* Tooltip */}
            <span className="pointer-events-none absolute right-[68px] whitespace-nowrap rounded-lg bg-[#07152d] px-3 py-2 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100">
              Book Appointment
            </span>

            {/* Calendar Icon */}
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="4" width="18" height="17" rx="3" />
              <path d="M16 2v4" />
              <path d="M8 2v4" />
              <path d="M3 10h18" />
              <path d="M8 14h.01" />
              <path d="M12 14h.01" />
              <path d="M16 14h.01" />
              <path d="M8 18h.01" />
              <path d="M12 18h.01" />
            </svg>
          </a>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/923005880654"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact Hafeez Dental Care on WhatsApp"
            className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-green-500/20 transition-all duration-300 hover:scale-110 hover:bg-[#20bd5a]"
          >
            {/* Tooltip */}
            <span className="pointer-events-none absolute right-[68px] whitespace-nowrap rounded-lg bg-[#07152d] px-3 py-2 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100">
              WhatsApp Us
            </span>

            {/* WhatsApp Icon */}
            <svg
              width="25"
              height="25"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M20.52 3.48A11.86 11.86 0 0 0 12.04 0C5.48 0 .14 5.34.14 11.9c0 2.1.55 4.15 1.6 5.95L.04 24l6.3-1.65a11.87 11.87 0 0 0 5.69 1.45h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.16-3.42-8.42ZM12.04 21.8h-.01a9.88 9.88 0 0 1-5.04-1.38l-.36-.21-3.74.98 1-3.65-.23-.38a9.87 9.87 0 0 1-1.52-5.26c0-5.45 4.44-9.88 9.9-9.88 2.64 0 5.12 1.03 6.99 2.9a9.84 9.84 0 0 1 2.89 7c0 5.45-4.44 9.88-9.88 9.88Zm5.42-7.4c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.5 1.71.64.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
            </svg>
          </a>

        </div>
      </body>
    </html>
  );
}