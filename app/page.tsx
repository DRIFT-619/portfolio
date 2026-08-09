export default function Home() {
  return (
    <main className="flex-1 flex flex-col justify-center px-6">
      <div className="max-w-6xl mx-auto w-full py-11">
        <p className="font-mono text-m text-muted-foreground mb-4 tracking-wide">
          Ayush Saxena - Data Scientist / ML / AI Engineer
        </p>

        <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-4">
          <span className="text-foreground">I prefer Calculation.</span>
          <br />
          <span className="text-muted-foreground">
            Not Reaction.
          </span>
        </h1>

        <p className="text-muted-foreground text-lg text-justify leading-relaxed mb-4 max-w-6xl">
          Hi, I'm <span className="text-foreground">Ayush</span> -- and before you go further, here's what this site actually is. <br/>
          This website is <span className="text-foreground">not</span> an engineering or philosophy blog. <br/>
          <span className="text-foreground">Nor</span> is this an <span className="text-foreground">autobiography</span> about my life and my work. <br/>
          This website aims to dive deeper and answer the questions an HR professional or a Technical Lead might have before deciding whether to <span className="text-foreground">hire me.</span>
        </p>

        <p className="text-muted-foreground text-lg text-justify leading-relaxed mb-4 max-w-6xl">
          This site is built to be read, <span className="text-foreground">not skimmed.</span> Give it a few minutes and it will answer questions your usual resume <span className="text-foreground">can't.</span> <br/>
        </p>

        <p className="text-muted-foreground text-lg text-justify leading-relaxed mb-4 max-w-6xl">
          Considering there might be audiences from different backgrounds with different intentions I have divided this website into <span className="text-foreground">2 different paths.</span> <br/>
          The following question will help you choose the <span className="text-foreground">right path.</span>
        </p>

        <p className="font-mono text-xl md:text-2xl text-foreground font-medium mb-2 text-center">
          Why are you here today?
        </p>

        <svg
          className="w-full h-16"
          viewBox="0 0 400 60"
          preserveAspectRatio="none"
        >
          <path
            d="M 200 0 L 200 20 L 100 20 L 100 60"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M 200 0 L 200 20 L 300 20 L 300 60"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
        </svg>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a href="/for-recruiters" className="group rounded-lg border-2 border-foreground p-5 hover:border-muted-foreground transition-colors text-center">
            <p className="font-mono text-sm text-white mb-3">Path 01</p>
            <p className="text-2xl font-medium text-foreground mb-2">I want to understand the Engineer</p>
            <p className="text-lg text-muted-foreground"><i>To understand how he thinks</i> <br/> (Philosophy, mindset, communication, collaboration, growth)</p>
          </a>

          <a href="/for-engineers" className="group rounded-lg border-2 border-foreground p-5 hover:border-muted-foreground transition-colors text-center">
            <p className="font-mono text-sm text-white mb-3">Path 02</p>
            <p className="text-2xl font-medium text-foreground mb-2">I want to evaluate the Engineering</p>
            <p className="text-lg text-muted-foreground"><i>To understand how he codes</i> <br/> (Architecture, projects, code, technical decisions, trade-offs)</p>
          </a>
        </div>
      </div>
    </main>
  );
}