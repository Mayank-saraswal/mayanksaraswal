import Link from "next/link";
import { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="block w-full border border-border p-6 sm:p-8 hover:border-accent transition-colors duration-200 group"
    >
      <div className="flex flex-col gap-4">
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold text-paper tracking-tight group-hover:text-accent transition-colors duration-200">
            {project.name}
          </h3>
          <p className="text-paper-dim font-normal text-base sm:text-lg mt-2 leading-relaxed">
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
    </Link>
  );
}
