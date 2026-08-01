import BackButton from "@/components/BackButton";

export default function Contact() {
  return (
    <main className="flex-1 px-6">
      <div className="max-w-3xl mx-auto w-full py-24">
        <BackButton />

        <h1 className="text-3xl md:text-5xl font-semibold text-foreground mb-6">
          Contact
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-2xl">
          Placeholder: a short line inviting recruiters or engineers to reach out.
        </p>

        <div className="space-y-4">
          <a href="mailto:reignofayush@gmail.com" className="flex items-center gap-3 rounded-lg border border-foreground p-5 hover:border-accent transition-colors">
            <span className="font-mono text-lg text-foreground font-medium">Email:</span>
            <span className="text-foreground text-lg">reignofayush@gmail.com</span>
          </a>

          <a className="flex items-center gap-3 rounded-lg border border-foreground p-5 hover:border-accent transition-colors">
            <span className="font-mono text-lg text-foreground font-medium">Phone No.:</span>
            <span className="text-foreground text-lg">+91 8585064238</span>
          </a>

          <a href="https://www.linkedin.com/in/ayush-saxena-01084318a/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-lg border border-foreground p-5 hover:border-accent transition-colors">
            <span className="font-mono text-lg text-foreground font-medium">LinkedIn:</span>
            <span className="text-foreground text-lg">Ayush Saxena</span>
          </a>

          <a href="https://github.com/DRIFT-619" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-lg border border-foreground p-5 hover:border-accent transition-colors">
            <span className="font-mono text-lg text-foreground font-medium">GitHub:</span>
            <span className="text-foreground text-lg">DRIFT-619</span>
          </a>
        </div>
      </div>
    </main>
  );
}