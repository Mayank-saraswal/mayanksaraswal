import Nav from "@/components/Nav";
import Link from "next/link";
import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";

export default function HomePage() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <div className="min-h-screen flex flex-col bg-ink text-paper">
      <Nav />
      <main className="flex-1 flex flex-col justify-center max-w-6xl w-full mx-auto px-6 py-20 md:py-32">
        <section className="min-h-[75vh] flex flex-col justify-center animate-fade-up">
          <div className="space-y-8 max-w-4xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm text-paper-dim uppercase tracking-wider">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Open to remote internships</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-paper leading-[1.1]">
              Full-stack developer building production AI SaaS.
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-paper-dim max-w-[600px] font-normal leading-relaxed">
              B.Tech CSE student at Global Institute of Technology, Jaipur. I ship
              multi-tenant platforms with realtime sync, AI agents, and durable
              background jobs — solo, end to end.
            </p>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="#work"
                className="bg-accent text-ink px-6 py-3.5 text-sm font-medium hover:opacity-90 transition-opacity inline-flex items-center justify-center"
              >
                View my work
              </Link>
              <a
                href="https://github.com/Mayank-saraswal"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-border text-paper px-6 py-3.5 text-sm font-medium hover:border-paper-dim transition-colors inline-flex items-center justify-center"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>

        {/* Selected Work Section */}
        <section id="work" className="pt-24 pb-16 border-t border-border">
          <div className="space-y-2 mb-10">
            <h2 className="font-mono text-xs sm:text-sm text-paper tracking-widest uppercase font-medium">
              SELECTED WORK
            </h2>
            <p className="text-paper-dim text-base sm:text-lg font-normal leading-relaxed">
              Architecting production-grade multi-tenant AI platforms and distributed systems from scratch.
            </p>
          </div>
          <div className="flex flex-col space-y-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>

        {/* Placeholder About section anchor */}
        <section id="about" className="pt-24 pb-16 border-t border-border">
          <div className="font-mono text-sm text-accent tracking-widest uppercase mb-4">
            About
          </div>
          <p className="text-paper-dim">About section placeholder.</p>
        </section>

        {/* Placeholder Contact section anchor */}
        <section id="contact" className="pt-24 pb-16 border-t border-border">
          <div className="font-mono text-sm text-accent tracking-widest uppercase mb-4">
            Contact
          </div>
          <p className="text-paper-dim">Contact section placeholder.</p>
        </section>
      </main>
    </div>
  );
}
