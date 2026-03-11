"use client";

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#fdf8f3] text-[#1a0f00] font-['DM_Sans',sans-serif]">

      {/* ── NAV ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#fdf8f3]/90 backdrop-blur-sm border-b border-[#1a0f00]/10">
        <div className="flex items-center justify-between px-5 py-4">
          <a href="#" className="font-['Playfair_Display',serif] text-xl font-bold tracking-tight">
            Brand<span className="text-[#f55d0e]">.</span>
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="flex flex-col gap-1.5 p-2 -mr-2"
          >
            <span className={`block w-6 h-0.5 bg-[#1a0f00] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[#1a0f00] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[#1a0f00] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        {/* Mobile menu dropdown */}
        <div className={`overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-64" : "max-h-0"}`}>
          <nav className="flex flex-col px-5 pb-5 gap-4 text-lg font-medium border-t border-[#1a0f00]/10 pt-4">
            {["Home", "About", "Services", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="hover:text-[#f55d0e] transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* ── HERO ── */}
      <section id="home" className="relative min-h-screen flex flex-col justify-center px-5 pt-24 pb-16 overflow-hidden">
        {/* Background decorative blob */}
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[#f55d0e]/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 -left-16 w-56 h-56 rounded-full bg-[#ffa05e]/15 blur-2xl pointer-events-none" />

        <div className="relative z-10 max-w-lg">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[#f55d0e] mb-4">
            Est. 2025
          </span>
          <h1 className="font-['Playfair_Display',serif] text-5xl font-black leading-[1.1] mb-6">
            Something
            <br />
            <em className="not-italic text-[#f55d0e]">great</em> is
            <br />
            coming.
          </h1>
          <p className="text-[#1a0f00]/60 text-lg leading-relaxed mb-10">
            We're building something worth your time. Stay tuned and be the first to know when we launch.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-[#f55d0e] text-white font-semibold px-7 py-4 rounded-2xl text-base active:scale-95 transition-transform"
            >
              Get in touch
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center border-2 border-[#1a0f00]/20 text-[#1a0f00] font-semibold px-7 py-4 rounded-2xl text-base active:scale-95 transition-transform"
            >
              Learn more
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-[#1a0f00] animate-pulse" />
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="px-5 py-20 bg-[#1a0f00] text-[#fdf8f3]">
        <div className="max-w-lg mx-auto">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[#f55d0e] mb-4">
            About us
          </span>
          <h2 className="font-['Playfair_Display',serif] text-4xl font-bold leading-tight mb-6">
            Who we are
          </h2>
          <p className="text-[#fdf8f3]/70 text-base leading-relaxed mb-6">
            We're a passionate team dedicated to delivering exceptional value to our customers. Our mission is simple: do great work, treat people well, and build something lasting.
          </p>
          <p className="text-[#fdf8f3]/70 text-base leading-relaxed">
            Every decision we make is guided by our core belief that quality and care should never be compromised.
          </p>

          <div className="grid grid-cols-2 gap-5 mt-12">
            {[
              { value: "100+", label: "Happy Clients" },
              { value: "5★", label: "Average Rating" },
              { value: "3+", label: "Years Active" },
              { value: "24/7", label: "Support" },
            ].map(({ value, label }) => (
              <div key={label} className="bg-[#fdf8f3]/5 rounded-2xl p-5">
                <div className="font-['Playfair_Display',serif] text-3xl font-black text-[#f55d0e]">{value}</div>
                <div className="text-sm text-[#fdf8f3]/60 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="px-5 py-20">
        <div className="max-w-lg mx-auto">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[#f55d0e] mb-4">
            What we offer
          </span>
          <h2 className="font-['Playfair_Display',serif] text-4xl font-bold leading-tight mb-10">
            Our services
          </h2>
          <div className="flex flex-col gap-4">
            {[
              { icon: "✦", title: "Service One", desc: "A short description of what this service entails and the value it brings." },
              { icon: "◈", title: "Service Two", desc: "A short description of what this service entails and the value it brings." },
              { icon: "⬡", title: "Service Three", desc: "A short description of what this service entails and the value it brings." },
            ].map(({ icon, title, desc }) => (
              <div
                key={title}
                className="group border border-[#1a0f00]/10 rounded-2xl p-6 hover:border-[#f55d0e]/40 hover:bg-[#f55d0e]/5 transition-all"
              >
                <div className="text-2xl text-[#f55d0e] mb-3">{icon}</div>
                <h3 className="font-semibold text-lg mb-2">{title}</h3>
                <p className="text-[#1a0f00]/60 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="px-5 py-20 bg-[#fff8f1]">
        <div className="max-w-lg mx-auto">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[#f55d0e] mb-4">
            Reach out
          </span>
          <h2 className="font-['Playfair_Display',serif] text-4xl font-bold leading-tight mb-4">
            Let's talk
          </h2>
          <p className="text-[#1a0f00]/60 mb-10">
            Have a question or want to work together? Drop us a message.
          </p>
          <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Your name"
              className="w-full bg-white border border-[#1a0f00]/15 rounded-xl px-4 py-4 text-base outline-none focus:border-[#f55d0e] transition-colors"
            />
            <input
              type="email"
              placeholder="Email address"
              className="w-full bg-white border border-[#1a0f00]/15 rounded-xl px-4 py-4 text-base outline-none focus:border-[#f55d0e] transition-colors"
            />
            <textarea
              placeholder="Your message"
              rows={4}
              className="w-full bg-white border border-[#1a0f00]/15 rounded-xl px-4 py-4 text-base outline-none focus:border-[#f55d0e] transition-colors resize-none"
            />
            <button
              type="submit"
              className="w-full bg-[#f55d0e] text-white font-semibold py-4 rounded-xl text-base active:scale-95 transition-transform mt-2"
            >
              Send message
            </button>
          </form>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="px-5 py-8 bg-[#1a0f00] text-[#fdf8f3]/40 text-sm text-center">
        <p className="font-['Playfair_Display',serif] text-[#fdf8f3] text-lg font-bold mb-2">
          Brand<span className="text-[#f55d0e]">.</span>
        </p>
        <p>© {new Date().getFullYear()} — All rights reserved.</p>
      </footer>
    </div>
  );
}
