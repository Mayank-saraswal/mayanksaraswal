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
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between font-mono text-sm">
        {/* Left: Logo Icon + Links + Button */}
        <div className="flex items-center gap-3.5 flex-wrap">
          {/* Logo Icon */}
          <Link href="/" className="flex items-center gap-2 group focus:outline-none">
            <div className="w-6 h-6 rounded-full bg-[#e0e0e0] flex items-center justify-center overflow-hidden group-hover:bg-white transition-colors">
              <svg
                className="w-4 h-4 text-ink transform -rotate-12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="6" y1="18" x2="18" y2="6" />
                <line x1="6" y1="12" x2="18" y2="0" />
                <line x1="0" y1="18" x2="12" y2="6" />
              </svg>
            </div>
          </Link>

          {/* Separator */}
          <span className="text-border select-none hidden sm:inline">|</span>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-3.5">
            <Link
              href="#work"
              className="text-paper-dim hover:text-paper transition-colors inline-flex items-center gap-1"
            >
              Work <span className="text-[10px] opacity-70">&#9662;</span>
            </Link>
            <span className="text-border select-none">|</span>
            <Link
              href="#about"
              className="text-paper-dim hover:text-paper transition-colors inline-flex items-center gap-1"
            >
              About <span className="text-[10px] opacity-70">&#9662;</span>
            </Link>
            <span className="text-border select-none">|</span>
            <Link
              href="#stack"
              className="text-paper-dim hover:text-paper transition-colors"
            >
              Stack
            </Link>
            <span className="text-border select-none">|</span>
            <Link
              href="#contact"
              className="text-paper-dim hover:text-paper transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Separator before button */}
          <span className="text-border select-none hidden md:inline">|</span>

          {/* Orange Get in touch button */}
          <Link
            href="#contact"
            className="hidden sm:inline-block bg-accent text-white px-3 py-1 text-xs sm:text-sm font-medium hover:opacity-90 transition-opacity rounded-[1px] select-none shadow-none"
          >
            Get in touch
          </Link>
        </div>

        {/* Right: GitHub & Resume links */}
        <div className="hidden md:flex items-center gap-3.5">
          <a
            href="https://github.com/mayanksaraswal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-paper-dim hover:text-paper transition-colors"
          >
            GitHub
          </a>
          <span className="text-border select-none">|</span>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-paper-dim hover:text-paper transition-colors"
          >
            Resume
          </a>
        </div>

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
                strokeWidth={1.5}
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
                strokeWidth={1.5}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-ink border-b border-border px-6 py-6 space-y-4 font-mono text-sm">
          <div className="flex flex-col gap-3">
            <Link
              href="#work"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base text-paper-dim hover:text-paper transition-colors"
            >
              Work
            </Link>
            <Link
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base text-paper-dim hover:text-paper transition-colors"
            >
              About
            </Link>
            <Link
              href="#stack"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base text-paper-dim hover:text-paper transition-colors"
            >
              Stack
            </Link>
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base text-paper-dim hover:text-paper transition-colors"
            >
              Contact
            </Link>
            <div className="pt-3 flex flex-wrap items-center gap-3 border-t border-border/50">
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-accent text-white px-4 py-2 text-sm font-medium hover:opacity-90 transition-opacity rounded-[1px]"
              >
                Get in touch
              </Link>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="border border-border text-paper px-4 py-2 text-sm font-medium hover:border-paper-dim transition-colors rounded-[1px]"
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
