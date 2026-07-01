import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { projects } from "@/lib/projects";
import Nav from "@/components/Nav";

export const dynamicParams = false;

export async function generateStaticParams() {
  const featuredProjects = projects.filter((project) => project.featured);
  return featuredProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project || !project.featured) {
    return {
      title: "Project Not Found | Mayank Saraswal",
    };
  }

  return {
    title: `${project.name} | Case Study`,
    description: project.tagline,
    openGraph: {
      title: `${project.name} — Mayank Saraswal`,
      description: project.tagline,
      url: `https://mayanksaraswal.com/projects/${project.slug}`,
      type: "article",
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project || !project.featured) {
    notFound();
  }

  const featuredProjects = projects.filter((p) => p.featured);
  const currentIndex = featuredProjects.findIndex((p) => p.slug === project.slug);
  const nextProject =
    featuredProjects[(currentIndex + 1) % featuredProjects.length];

  return (
    <div className="min-h-screen flex flex-col bg-ink text-paper">
      <Nav />
      <main className="flex-1 max-w-4xl w-full mx-auto px-6 py-16 sm:py-24 space-y-12 animate-fade-up">
        {/* 1. Back to work link */}
        <div>
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-sm font-mono text-paper-dim hover:text-paper transition-colors"
          >
            &larr; Back to work
          </Link>
        </div>

        {/* Header: Name & Tagline */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-paper leading-[1.1]">
            {project.name}
          </h1>
          <p className="text-lg sm:text-xl text-paper-dim font-normal leading-relaxed">
            {project.tagline}
          </p>

          {/* 4. Buttons */}
          {(project.liveUrl || project.githubUrl) && (
            <div className="flex flex-wrap items-center gap-4 pt-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent text-ink px-6 py-3.5 text-sm font-medium hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"
                >
                  Live site &rarr;
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-border text-paper px-6 py-3.5 text-sm font-medium hover:border-paper-dim transition-colors inline-flex items-center justify-center gap-2"
                >
                  View code &rarr;
                </a>
              )}
            </div>
          )}
        </div>

        {/* 5. Horizontal divider */}
        <hr className="border-border" />

        <div className="space-y-12">
          {/* 6. The problem */}
          {project.problem && (
            <section className="space-y-3">
              <h2 className="font-mono text-xs sm:text-sm text-paper tracking-widest uppercase font-medium">
                THE PROBLEM
              </h2>
              <p className="text-base sm:text-lg text-paper-dim font-normal leading-relaxed">
                {project.problem}
              </p>
            </section>
          )}

          {/* 7. What I built */}
          {project.highlights && project.highlights.length > 0 && (
            <section className="space-y-4">
              <h2 className="font-mono text-xs sm:text-sm text-paper tracking-widest uppercase font-medium">
                WHAT I BUILT
              </h2>
              <ul className="space-y-3.5">
                {project.highlights.map((highlight, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-base sm:text-lg text-paper-dim font-normal leading-relaxed"
                  >
                    <span className="text-accent mt-1 text-xs font-mono select-none">
                      ●
                    </span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* 8. Stack tags row */}
          {project.stack && project.stack.length > 0 && (
            <section className="space-y-3">
              <h2 className="font-mono text-xs sm:text-sm text-paper tracking-widest uppercase font-medium">
                TECHNOLOGY STACK
              </h2>
              <div className="flex flex-wrap items-center gap-2 pt-1">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[12px] text-paper-dim bg-white/[0.05] px-2.5 py-1 rounded-sm border border-border/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* 9. Technical highlight callout box */}
          {project.technicalHighlight && (
            <div className="border border-border bg-white/[0.03] p-6 sm:p-8 space-y-3 border-l-4 border-l-accent my-8">
              <div className="font-mono text-xs sm:text-sm text-accent tracking-widest uppercase font-medium">
                TECHNICAL HIGHLIGHT
              </div>
              <p className="text-base sm:text-lg text-paper font-normal leading-relaxed">
                {project.technicalHighlight}
              </p>
            </div>
          )}
        </div>

        {/* 10. Next project link */}
        <div className="pt-12 border-t border-border flex justify-end">
          <Link
            href={`/projects/${nextProject.slug}`}
            className="group inline-flex flex-col items-end gap-1.5 text-right"
          >
            <span className="font-mono text-xs text-paper-dim uppercase tracking-wider group-hover:text-accent transition-colors">
              Next Project &rarr;
            </span>
            <span className="text-xl sm:text-2xl font-semibold text-paper group-hover:text-accent transition-colors flex items-center gap-2">
              {nextProject.name}
            </span>
          </Link>
        </div>
      </main>
    </div>
  );
}
