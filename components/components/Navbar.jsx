"use client";

import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 md:px-6">
      <nav className="mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-full border border-slate-200/80 bg-white/95 px-4 py-3 shadow-lg shadow-slate-200/30 backdrop-blur-xl md:px-6">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5 sm:gap-3">
          <Image
            src="/images/logo.png"
            alt="Hafeez Dental Care"
            width={48}
            height={48}
            className="h-10 w-10 object-contain sm:h-11 sm:w-11 md:h-12 md:w-12"
            priority
          />

          <div>
            <p className="text-xs font-bold tracking-wide text-[#07152d] sm:text-sm">
              Hafeez Dental Care
            </p>

            <p className="mt-0.5 text-[7px] font-medium tracking-[0.14em] text-blue-600 sm:text-[9px] sm:tracking-[0.18em]">
              DENTAL & IMPLANT CENTER
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#home"
            className="text-sm font-semibold text-[#07152d] transition hover:text-blue-600"
          >
            Home
          </a>

          <a
            href="#about"
            className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
          >
            About
          </a>

          <a
            href="#services"
            className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
          >
            Services
          </a>

          <a
            href="#results"
            className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
          >
            Results
          </a>

          <a
            href="#contact"
            className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
          >
            Contact
          </a>
        </div>

        {/* Desktop CTA */}
        <a
          href="#appointment"
          className="hidden rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition duration-300 hover:bg-blue-700 hover:shadow-blue-500/30 md:block"
        >
          Book Appointment
        </a>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-[#07152d] transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? (
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M6 6l12 12" />
              <path d="M18 6L6 18" />
            </svg>
          ) : (
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 7h16" />
              <path d="M4 12h16" />
              <path d="M4 17h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="mx-1 mt-2 overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/40 md:hidden">
          <div className="flex flex-col gap-1">
            <a
              href="#home"
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-semibold text-[#07152d] transition hover:bg-blue-50 hover:text-blue-600"
            >
              Home
            </a>

            <a
              href="#about"
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-blue-50 hover:text-blue-600"
            >
              About
            </a>

            <a
              href="#services"
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-blue-50 hover:text-blue-600"
            >
              Services
            </a>

            <a
              href="#results"
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-blue-50 hover:text-blue-600"
            >
              Results
            </a>

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-blue-50 hover:text-blue-600"
            >
              Contact
            </a>

            <div className="my-3 h-px bg-slate-100" />

            <a
              href="#appointment"
              onClick={() => setOpen(false)}
              className="rounded-full bg-blue-600 px-5 py-3.5 text-center text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-700"
            >
              Book Appointment
            </a>
          </div>
        </div>
      )}
    </header>
  );
}