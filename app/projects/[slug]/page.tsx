import Link from "next/link";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <main className="min-h-screen max-w-4xl mx-auto px-6 py-24 md:py-32">
      <div className="space-y-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-mono text-paper-dim hover:text-paper transition-colors"
        >
          &larr; Back to home
        </Link>
        <div className="space-y-4 pb-8 border-b border-border">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-paper capitalize">
            {slug.replace(/-/g, " ")}
          </h1>
          <p className="text-base font-mono text-accent font-medium">
            Project Case Study
          </p>
        </div>
        <div className="prose prose-invert max-w-none text-paper-dim font-normal leading-relaxed">
          <p>
            Detailed breakdown and architecture of the {slug} project will be displayed here.
          </p>
        </div>
      </div>
    </main>
  );
}
