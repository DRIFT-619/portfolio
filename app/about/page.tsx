export default function About() {
  return (
    <main className="flex-1 px-6">
      <div className="max-w-3xl mx-auto w-full py-24">
        <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
          About
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed mb-16 max-w-2xl">
          Placeholder: your personal story, how you got into ML/AI, and the
          throughline that connects your work.
        </p>

        <section className="mb-12">
          <h2 className="font-mono text-sm text-white mb-3">Education</h2>
          <div className="space-y-4">
            <div>
              <p className="text-foreground font-medium">MSc Data Science</p>
              <p className="text-sm text-muted-foreground">University of Nottingham, Sep 2024 - Dec 2025</p>
            </div>
            <div>
              <p className="text-foreground font-medium">B.E. Computer Science</p>
              <p className="text-sm text-muted-foreground">Cambridge Institute of Technology, May 2020 - May 2024</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="font-mono text-sm text-white mb-3">Experience</h2>
          <div className="space-y-4">
            <div>
              <p className="text-foreground font-medium">Machine Learning Intern, Shaivi Systems</p>
              <p className="text-sm text-muted-foreground">Nov 2023 - Dec 2023, Pune, India</p>
            </div>
            <div>
              <p className="text-foreground font-medium">Backend AI Engineering, FlyRank AI</p>
              <p className="text-sm text-muted-foreground">Jul 2026 - Sep 2026, Remote</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="font-mono text-sm text-white mb-3">Outside of work</h2>
          <p className="text-foreground leading-relaxed">
            Placeholder: chess (with the one real insight, not a cliché),
            plus other personality details you want to share.
          </p>
        </section>
      </div>
    </main>
  );
}