"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
        isScrolled
          ? "bg-ink border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Left: Wordmark */}
        <Link
          href="/"
          className="font-mono text-sm tracking-widest uppercase font-medium text-paper hover:text-accent transition-colors"
        >
          Mayank Saini
        </Link>

        {/* Right: Desktop Links & Button */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="#work"
            className="text-sm font-normal text-paper-dim hover:text-paper transition-colors"
          >
            Work
          </Link>
          <Link
            href="#about"
            className="text-sm font-normal text-paper-dim hover:text-paper transition-colors"
          >
            About
          </Link>
          <Link
            href="#contact"
            className="text-sm font-normal text-paper-dim hover:text-paper transition-colors"
          >
            Contact
          </Link>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-ink px-4 py-2 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Resume
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          aria-label="Toggle Navigation Menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-paper hover:text-accent transition-colors focus:outline-none"
        >
          {mobileMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-ink border-b border-border px-6 py-6 space-y-4">
          <div className="flex flex-col gap-4">
            <Link
              href="#work"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-normal text-paper-dim hover:text-paper transition-colors"
            >
              Work
            </Link>
            <Link
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-normal text-paper-dim hover:text-paper transition-colors"
            >
              About
            </Link>
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-normal text-paper-dim hover:text-paper transition-colors"
            >
              Contact
            </Link>
            <div className="pt-2">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-block bg-accent text-ink px-5 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
