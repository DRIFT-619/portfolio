export default function Home() {
  return (
    <main className="flex-1 flex flex-col justify-center px-6">
      <div className="max-w-6xl mx-auto w-full py-12">
        <p className="font-mono text-m text-muted-foreground mb-6">
          Ayush Saxena - Data Scientist / ML / AI Engineer
        </p>

        <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-4">
          <span className="text-foreground">Good engineering isn't about writing more code.</span>
          <br />
          <span className="text-muted-foreground">
            It's about making better decisions.
          </span>
        </h1>

        <p className="text-white md:text-1xl mb-16 leading-relaxed">
          To me, engineering is the art of making thoughtful decisions under real-world constraints.<br/>
          Every system is a series of trade-offs between simplicity and complexity, speed and reliability, innovation and practicality.<br/>
          That's the part of engineering I enjoy most.
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
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M 200 0 L 200 20 L 300 20 L 300 60"
            stroke="white"
            strokeWidth="1"
            fill="none"
          />
        </svg>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a href="/for-recruiters" className="group rounded-lg border border-border p-6 hover:border-accent transition-colors text-center">
            <p className="font-mono text-sm text-white mb-3">Path 01</p>
            <p className="text-2xl font-medium text-foreground mb-2">I want to understand the Engineer</p>
            <p className="text-lg text-muted-foreground"><i>To understand how he thinks</i> <br/> (Philosophy, mindset, communication, collaboration, growth)</p>
          </a>

          <a href="/for-engineers" className="group rounded-lg border border-border p-6 hover:border-accent transition-colors text-center">
            <p className="font-mono text-sm text-white mb-3">Path 02</p>
            <p className="text-2xl font-medium text-foreground mb-2">I want to evaluate the Engineering</p>
            <p className="text-lg text-muted-foreground"><i>To understand how he codes</i> <br/> (Architecture, projects, code, technical decisions, trade-offs)</p>
          </a>
        </div>
      </div>
    </main>
  );
}