import { projects } from "@/lib/projects";
import { notFound } from "next/navigation";
import BackButton from "@/components/BackButton";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function CaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="flex-1 px-6">
      <div className="max-w-3xl mx-auto w-full py-24">
        <BackButton />

        <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
          {project.title}
        </h1>

        <div className="flex flex-wrap gap-2 mb-12">
          {project.stack.map((tech) => (
            <span key={tech} className="font-mono text-s text-muted-foreground border border-border rounded px-2 py-1">
              {tech}
            </span>
          ))}
        </div>

        <section className="mb-12">
          <h2 className="font-mono text-lg text-foreground mb-3">The problem</h2>
          <p className="text-muted-foreground text-justify leading-relaxed">{project.problem}</p>
        </section>

        <section className="mb-12">
          <h2 className="font-mono text-lg text-foreground mb-3">My approach</h2>
          <ul className="space-y-3">
            {project.approach.map((point, i) => {
              const [label, ...rest] = point.split(": ");
              const restText = rest.join(": ");
              return (
                <li key={i} className="text-muted-foreground leading-relaxed">
                  {restText ? (
                    <>
                      <span className="text-foreground text-m">{label}:</span> {restText}
                    </>
                  ) : (
                    point
                  )}
                </li>
              );
            })}
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="font-mono text-lg text-foreground mb-3">Results</h2>
          <ul className="space-y-3">
            {project.results.map((point, i) => (
              <li key={i} className="text-muted-foreground text-justify leading-relaxed">
                {point}
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="font-mono text-lg text-foreground mb-3">What I would do differently</h2>
          <p className="text-muted-foreground text-justify leading-relaxed">{project.whatIdDoDifferently}</p>
        </section>
      </div>
    </main>
  );
}