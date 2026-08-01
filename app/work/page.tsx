import { projects } from "@/lib/projects";
import BackButton from "@/components/BackButton";

export default function Work() {
  const others = projects.filter((p) => !p.featured);

  return (
    <main className="flex-1 px-6">
      <div className="max-w-6xl mx-auto w-full py-24">

        <BackButton />

        <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-16">
          More of my work
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {others.map((project) => (
            <a key={project.slug} href={`/work/${project.slug}`} className="rounded-lg border border-border p-6 hover:border-accent transition-colors">
              <p className="text-foreground text-lg font-medium mb-2">{project.title}</p>
              <p className="text-m text-muted-foreground">{project.oneLiner}</p>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}