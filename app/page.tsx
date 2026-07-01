import Nav from "@/components/Nav";
import Link from "next/link";
import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/Footer";

export default function HomePage() {
  const featuredProjects = projects.filter((project) => project.featured);
  const moreProjects = projects.filter((project) => !project.featured);

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

        {/* 1. More Projects Section */}
        <section id="more-projects" className="pt-24 pb-16 border-t border-border">
          <div className="space-y-2 mb-10">
            <h2 className="font-mono text-xs sm:text-sm text-paper tracking-widest uppercase font-medium">
              MORE PROJECTS
            </h2>
            <p className="text-paper-dim text-base sm:text-lg font-normal leading-relaxed">
              Other tools, experiments, and applications I&apos;ve built.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {moreProjects.map((project) => (
              <div
                key={project.slug}
                className="border border-border p-6 sm:p-8 flex flex-col justify-between space-y-6 hover:border-border transition-colors bg-white/[0.01]"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-xl font-semibold text-paper tracking-tight">
                      {project.name}
                    </h3>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono text-paper-dim hover:text-accent transition-colors inline-flex items-center gap-1"
                      >
                        GitHub &rarr;
                      </a>
                    )}
                  </div>
                  <p className="text-paper-dim text-sm sm:text-base leading-relaxed font-normal">
                    {project.tagline}
                  </p>
                </div>
                {project.stack && project.stack.length > 0 && (
                  <div className="flex flex-wrap items-center gap-2 pt-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[12px] text-paper-dim bg-white/[0.05] px-2.5 py-1 rounded-sm border border-border/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* 2. About Section */}
        <section id="about" className="pt-24 pb-16 border-t border-border">
          <div className="space-y-2 mb-10">
            <h2 className="font-mono text-xs sm:text-sm text-paper tracking-widest uppercase font-medium">
              ABOUT
            </h2>
          </div>
          <div className="max-w-[650px] space-y-6 text-paper-dim text-base sm:text-lg font-normal leading-relaxed">
            <p>
              I&apos;m Mayank, a B.Tech CSE student at Global Institute of Technology, Jaipur, graduating 2028. I build full-stack, AI-powered SaaS products end to end — frontend, backend, database schema, background jobs, and AI integration — usually alone.
            </p>
            <p>
              Hedwigs is a multi-tenant AI inbox with pgvector-based RAG and enterprise SSO. NodeBase is a workflow automation platform with 48 native integrations and Redis-backed idempotency. WanderPlan is a real-time collaborative planner built on Convex&apos;s reactive subscriptions. Moris IDE runs a full Node.js environment inside the browser via WebContainers.
            </p>
            <p>
              My stack is Next.js, TypeScript, tRPC, Prisma, PostgreSQL, Inngest, Supabase, and the Vercel AI SDK. I&apos;m based in Rajasthan, India, and I&apos;m currently looking for a remote internship where I can keep shipping production software.
            </p>
          </div>
        </section>

        {/* 3. Now Section */}
        <section id="now" className="pt-24 pb-16 border-t border-border">
          <div className="space-y-2 mb-8">
            <h2 className="font-mono text-xs sm:text-sm text-paper tracking-widest uppercase font-medium">
              NOW
            </h2>
          </div>
          <div className="max-w-[650px] space-y-8">
            <p className="text-paper-dim text-base sm:text-lg font-normal leading-relaxed">
              Applying to remote startup internships. Currently deepening my understanding of distributed systems and AI agent architecture.
            </p>
            <div>
              <Link
                href="#contact"
                className="bg-accent text-ink px-6 py-3.5 text-sm font-medium hover:opacity-90 transition-opacity inline-flex items-center justify-center"
              >
                Open to remote internships
              </Link>
            </div>
          </div>
        </section>

        {/* 4. Stack Section */}
        <section id="stack" className="pt-24 pb-16 border-t border-border">
          <div className="space-y-2 mb-10">
            <h2 className="font-mono text-xs sm:text-sm text-paper tracking-widest uppercase font-medium">
              STACK
            </h2>
            <p className="text-paper-dim text-base sm:text-lg font-normal leading-relaxed">
              Technologies and tools I work with daily.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="font-mono text-xs text-paper uppercase tracking-wider font-medium">
                Frontend
              </h3>
              <ul className="space-y-2.5 font-mono text-sm text-paper-dim font-normal">
                <li>Next.js</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>React</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-mono text-xs text-paper uppercase tracking-wider font-medium">
                Backend
              </h3>
              <ul className="space-y-2.5 font-mono text-sm text-paper-dim font-normal">
                <li>tRPC</li>
                <li>Prisma</li>
                <li>PostgreSQL</li>
                <li>Node.js</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-mono text-xs text-paper uppercase tracking-wider font-medium">
                Infra/AI
              </h3>
              <ul className="space-y-2.5 font-mono text-sm text-paper-dim font-normal">
                <li>Inngest</li>
                <li>Supabase</li>
                <li>Vercel AI SDK</li>
                <li>OpenRouter</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-mono text-xs text-paper uppercase tracking-wider font-medium">
                Tools
              </h3>
              <ul className="space-y-2.5 font-mono text-sm text-paper-dim font-normal">
                <li>Git</li>
                <li>Vercel</li>
                <li>Docker</li>
              </ul>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
