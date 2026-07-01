import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="pt-24 pb-16 border-t border-border mt-20 animate-fade-up">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        <div className="space-y-4 max-w-2xl">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-paper leading-tight">
            Let&apos;s talk.
          </h2>
          <p className="text-lg sm:text-xl text-paper-dim font-normal leading-relaxed">
            Open to remote internships and freelance work. I usually reply within a day.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
          <a
            href="mailto:mayanksaraswal@gmail.com"
            className="border border-border bg-white/[0.02] text-paper px-5 py-3 text-sm font-medium hover:border-paper-dim hover:bg-white/[0.05] transition-all inline-flex items-center gap-2 rounded-[1px]"
          >
            Email
          </a>
          <a
            href="https://github.com/Mayank-saraswal"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-border bg-white/[0.02] text-paper px-5 py-3 text-sm font-medium hover:border-paper-dim hover:bg-white/[0.05] transition-all inline-flex items-center gap-2 rounded-[1px]"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/mayank-saini-728080308"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-border bg-white/[0.02] text-paper px-5 py-3 text-sm font-medium hover:border-paper-dim hover:bg-white/[0.05] transition-all inline-flex items-center gap-2 rounded-[1px]"
          >
            LinkedIn
          </a>
          <a
            href="https://x.com/mayanksaraswal"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-border bg-white/[0.02] text-paper px-5 py-3 text-sm font-medium hover:border-paper-dim hover:bg-white/[0.05] transition-all inline-flex items-center gap-2 rounded-[1px]"
          >
            X
          </a>
          <Link
            href="/resume"
            className="bg-accent text-white px-5 py-3 text-sm font-medium hover:opacity-90 transition-opacity inline-flex items-center gap-2 rounded-[1px]"
          >
            View Resume &rarr;
          </Link>
        </div>

        <div className="pt-12 border-t border-border/50 flex items-center justify-between">
          <p className="font-mono text-xs text-paper-dim">
            &copy; 2026 Mayank Saini
          </p>
          <p className="font-mono text-xs text-paper-dim">
            Built with Next.js &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
