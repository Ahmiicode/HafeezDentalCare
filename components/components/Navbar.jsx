"use client";

import Image from "next/image";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Results", href: "#results" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 md:px-6">
      {/* Navbar */}
      <nav className="mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-full border border-slate-200/80 bg-white/95 px-4 py-3 shadow-lg shadow-slate-200/30 backdrop-blur-xl md:px-6">
        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="flex items-center gap-2.5 sm:gap-3"
        >
          <Image
            src="/images/logo.png"
            alt="Hafeez Dental Care"
            width={48}
            height={48}
            sizes="48px"
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
          {navItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm transition-colors duration-200 hover:text-blue-600 ${
                index === 0
                  ? "font-semibold text-[#07152d]"
                  : "font-medium text-slate-600"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#appointment"
          className="hidden rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-colors duration-200 hover:bg-blue-700 md:block"
        >
          Book Appointment
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-[#07152d] transition-colors duration-200 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 md:hidden"
          aria-label="Open menu"
          aria-expanded={open}
        >
          <svg
            width="21"
            height="21"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="M4 7h16" />
            <path d="M4 12h16" />
            <path d="M4 17h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Overlay + Bottom Drawer */}
      <div
        className={`fixed inset-0 z-50 md:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        {/* Dark overlay */}
        <button
          type="button"
          onClick={closeMenu}
          aria-label="Close menu"
          className={`absolute inset-0 h-full w-full bg-[#07152d]/30 backdrop-blur-[2px] transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Bottom Drawer */}
        <div
          className={`absolute bottom-0 left-0 right-0 rounded-t-[2rem] border-t border-slate-200 bg-white px-5 pb-7 pt-4 shadow-[0_-15px_50px_rgba(15,23,42,0.15)] transition-transform duration-300 ease-out ${
            open ? "translate-y-0" : "translate-y-full"
          }`}
        >
          {/* Drag Handle */}
          <div className="mx-auto mb-5 h-1.5 w-12 rounded-full bg-slate-200" />

          {/* Drawer Header */}
          <div className="mb-3 flex items-center justify-between px-2">
            <div>
              <p className="text-sm font-bold text-[#07152d]">
                Hafeez Dental Care
              </p>
              <p className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.16em] text-blue-600">
                Dental & Implant Center
              </p>
            </div>

            <button
              type="button"
              onClick={closeMenu}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors duration-200 hover:bg-slate-200"
              aria-label="Close menu"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M6 6l12 12" />
                <path d="M18 6L6 18" />
              </svg>
            </button>
          </div>

          {/* Navigation */}
          <div className="mt-3 space-y-1">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className={`flex items-center justify-between rounded-2xl px-4 py-3.5 transition-colors duration-200 ${
                  index === 0
                    ? "bg-blue-50 font-semibold text-blue-600"
                    : "font-medium text-slate-600 hover:bg-slate-50 hover:text-blue-600"
                }`}
              >
                <span>{item.label}</span>
                <span className="text-slate-300">→</span>
              </a>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#appointment"
            onClick={closeMenu}
            className="mt-4 flex items-center justify-center rounded-full bg-blue-600 px-5 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-colors duration-200 hover:bg-blue-700"
          >
            Book an Appointment
            <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </header>
  );
}