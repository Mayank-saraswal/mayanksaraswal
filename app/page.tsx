export default function HomePage() {
  return (
    <main className="min-h-screen max-w-4xl mx-auto px-6 py-24 md:py-32 flex flex-col justify-center">
      <div className="space-y-6">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-paper">
          Mayank Saraswal
        </h1>
        <p className="text-lg md:text-xl text-paper-dim max-w-2xl font-normal leading-relaxed">
          Developer portfolio. Building scalable web applications with clean architecture and modern design systems.
        </p>
        <div className="pt-8 border-t border-border flex items-center gap-4">
          <span className="text-sm font-mono text-accent uppercase tracking-wider font-medium">
            Portfolio Scaffolded
          </span>
        </div>
      </div>
    </main>
  );
}
