import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-ink text-paper selection:bg-accent selection:text-ink">
      <Nav />
      <main className="flex-1 flex flex-col items-center justify-center text-center px-6 py-24 max-w-2xl mx-auto animate-fade-up space-y-8">
        <div className="space-y-4">
          <p className="font-mono text-sm text-accent tracking-widest uppercase">
            Error 404
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-paper leading-tight">
            404 &mdash; Page not found.
          </h1>
          <p className="text-lg text-paper-dim font-normal leading-relaxed">
            The page you are looking for doesn&apos;t exist or has been moved.
          </p>
        </div>
        <div>
          <Link
            href="/"
            className="bg-accent text-white px-6 py-3.5 text-sm font-medium hover:opacity-90 transition-opacity inline-flex items-center gap-2 rounded-[1px]"
          >
            &larr; Back to home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
