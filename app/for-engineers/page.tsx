import ApproachSection from "@/components/ApproachSection";
import BackButton from "@/components/BackButton";

export default function ForEngineers() {
  return (
    <main className="flex-1 px-6">
      <div className="max-w-6xl mx-auto w-full py-12">

        <BackButton />

        <h2 className="text-3xl font-semibold text-foreground mb-8">
          What to expect from this page?
        </h2>

        <p className="font-mono text-muted-foreground leading-relaxed mb-10 text-justify max-w-3xl">
          Hi, before you evaluate, here&apos;s what this page is about. <br/> Its
          purpose is to build trust and remove doubts from a technical
          perspective, and to give you insight into how I actually think
          when I&apos;m handed a new problem.
        </p>

        <h2 className="text-3xl font-semibold text-foreground mb-8">
          How is the above expectation fulfilled?
        </h2>

        <p className="font-mono text-muted-foreground leading-relaxed mb-10 text-justify max-w-3xl">
          To fulfill the expectation, the content of this page is presented in a way that resolves 
          the underlying doubt: "will this guy be able to tackle a real world problem he has never 
          seen before?". <br/> <br/>

          A knowledge quiz wouldn't work here, questions like "what is encapsulation?" or "when would 
          you use a t-test over a z-test?" can't capture real thinking, and a resume line like "I know 
          Data Science" proves even less, since without a real test, anyone can claim anything. <br/> <br/>

          So instead, this page uses the work I have already done as proof, and walks through my actual 
          thought process when I'm handed a new problem with an example. AI has made syntax cheap. The way 
          we write code today can be replaced. Clear, innovative thinking can't. <br/> <br/>

          What follows should give you enough to decide whether I'm worth a technical interview, one where 
          you can see how deeply I actually understand the stacks I've worked with, and whether I'd be a 
          good technical fit for your team.
        </p>
        
        {/* <h1 className="text-3xl md:text-5xl font-semibold leading-tight mb-8 text-foreground">
          True understanding always beats Past knowledge.
        </h1> */}
        
        <ApproachSection />
          
        <h2 className="text-3xl font-semibold text-foreground mb-10">
          What you can expect from working with me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="rounded-lg border border-muted-foreground p-6">
            <p className="font-mono text-lg text-foreground mb-3">Adaptability</p>
            <p className="text-foreground font-medium mb-2">
              I pick up unfamiliar stacks fast.
            </p>
            <p className="text-sm text-muted-foreground text-justify leading-relaxed">
              This site is proof. I did not know Next.js, TypeScript, or
              Tailwind a few weeks ago. It is built, deployed, and you are
              looking at it right now.
            </p>
          </div>

          <div className="rounded-lg border border-muted-foreground p-6">
            <p className="font-mono text-lg text-foreground mb-3">Honesty</p>
            <p className="text-foreground font-medium mb-2">
              I am upfront about how I work, including the tools I use.
            </p>
            <p className="text-sm text-muted-foreground text-justify leading-relaxed">
              I used AI as a tool while building this site, the same way I
              would use a Stack Overflow or documentation. Every architectural
              decision, every line of content, and every design choice on
              this site is one I made and can defend.
            </p>
          </div>

          <div className="rounded-lg border border-muted-foreground p-6">
            <p className="font-mono text-lg text-foreground mb-3">Pragmatism</p>
            <p className="text-foreground font-medium mb-2">
              I use whatever is the right tool, not the popular one.
            </p>
            <p className="text-sm text-muted-foreground text-justify leading-relaxed">
              On a retail demand forecasting pipeline, a Random Forest model
              beat complex neural networks like LSTM and GRU by 60% on time
              series data. I documented that without hesitation.
            </p>
          </div>

          <div className="rounded-lg border border-muted-foreground p-6">
            <p className="font-mono text-lg text-foreground mb-3">Curiosity</p>
            <p className="text-foreground font-medium mb-2">
              I do not stop at what works. I want to know why.
            </p>
            <p className="text-sm text-muted-foreground text-justify leading-relaxed">
              When Random Forest outperformed LSTM, a model known for
              handling sequential data well, I analysed the data itself and
              found it held no long-term dependency for LSTM to exploit.
              Model selection should be driven by the nature of the data, not
              by a model&apos;s reputation in a given domain. That reputation
              is a reason to test a model, it is not a reason to skip testing
              the others.
            </p>
          </div>

          <div className="rounded-lg border border-muted-foreground p-6">
            <p className="font-mono text-lg text-foreground mb-3">First-principles thinking</p>
            <p className="text-foreground font-medium mb-2">
              I try to understand the concept underneath the technique.
            </p>
            <p className="text-sm text-muted-foreground text-justify leading-relaxed">
              A paper encoded time using sine and cosine transformations for
              a train delay model. Instead of copying it, I worked out why:
              a clock is not a straight number line. On a number line, 6 is
              closer to 2 than 11 is. On a clock, 11 is closer to 2 than 6
              is, because of its cyclical nature.
            </p>
          </div>

          <div className="rounded-lg border border-muted-foreground p-6">
            <p className="font-mono text-lg text-foreground mb-3">Accountability</p>
            <p className="text-foreground font-medium mb-2">
              I take full responsibility for my mistakes and fix them.
            </p>
            <p className="text-sm text-muted-foreground text-justify leading-relaxed">
              On a train delay prediction model, naive outlier removal looked
              reasonable but increased error by 129%. I caught it, reported
              it plainly, reassessed the preprocessing strategy, and rebuilt
              it properly.
            </p>
          </div>

          <div className="rounded-lg border border-muted-foreground p-6">
            <p className="font-mono text-lg text-foreground mb-3">Problem solving</p>
            <p className="text-foreground font-medium mb-2">
              I bring solutions, not just effort.
            </p>
            <p className="text-sm text-muted-foreground text-justify leading-relaxed">
              I ranked 1st and 2nd in two machine learning challenges during
              my master&apos;s at the University of Nottingham, and finished
              runner-up at a C programming bootcamp during my bachelor&apos;s.
            </p>
          </div>

          <div className="rounded-lg border border-muted-foreground p-6">
            <p className="font-mono text-lg text-foreground mb-3">Maturity</p>
            <p className="text-foreground font-medium mb-2">
              You can trust me with your codebase
            </p>
            <p className="text-sm text-muted-foreground text-justify leading-relaxed">
              Every experiment I run is tracked, not just remembered. On the demand
              forecasting and bankruptcy projects, every model, parameter, and metric
              was logged through MLflow before anything was called final, so a change
              that helps or hurts is provable, not a guess. Deployments run through
              Docker and CI/CD rather than manual pushes, so what gets tested is
              exactly what gets shipped. Small changes get committed to GitHub and reviewed
              step by step, not bundled into one large, unreviewable difference.
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-semibold text-foreground mb-8">
          Case studies
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          <a href="/work/financial-risk-analyst" className="rounded-lg border border-muted-foreground p-6 hover:border-accent transition-colors">
            <p className="text-foreground text-lg font-medium mb-2">AI Financial Risk Analyst</p>
            <p className="text-m text-muted-foreground">Multi-agent hybrid RAG system, 49% relevance gain, 62.5% latency reduction</p>
          </a>

          <a href="/work/demand-forecasting" className="rounded-lg border border-muted-foreground p-6 hover:border-accent transition-colors">
            <p className="text-foreground text-lg font-medium mb-2">Retail Demand Forecasting Pipeline</p>
            <p className="text-m text-muted-foreground">Random Forest beat LSTM by 60%, deployed on AWS with CI/CD</p>
          </a>

          <a href="/work/bankruptcy-prediction" className="rounded-lg border border-muted-foreground p-6 hover:border-accent transition-colors">
            <p className="text-foreground text-lg font-medium mb-2">Bankruptcy Risk Prediction</p>
            <p className="text-m text-muted-foreground">XGBoost, ROC-AUC 0.96, SHAP-driven explainability and a hyperparameter tune that made things worse</p>
          </a>

          <a href="/work/train-delay-prediction" className="rounded-lg border border-muted-foreground p-6 hover:border-accent transition-colors">
            <p className="text-foreground text-lg font-medium mb-2">Train Delay Prediction</p>
            <p className="text-m text-muted-foreground">Caught and reversed a preprocessing mistake mid-project</p>
          </a>
        </div>

        <div className="text-center mb-8">
          <p className="text-muted-foreground text-lg mb-3">
            Wanna explore more of my work?
          </p>
          <a href="/work" className="font-mono text-m text-white hover:opacity-80 transition-opacity">
            Click here
          </a>
        </div>

        <div className="text-center mb-8">
          <p className="text-muted-foreground text-lg mb-3">
            Want to look at the actual code?
          </p>
          <a href="https://github.com/DRIFT-619" className="font-mono text-m text-white hover:opacity-80 transition-opacity">
            View my GitHub repo
          </a>
        </div>
          
        <p className="text-lg text-justify text-muted-foreground mb-2">
          <span className="underline text-foreground">Note:</span> Curious about my formal qualifications, 
          achievements, the full technical stack
          I have worked with, or the type of roles I am targeting? <br/> 
        </p>
          
        <p className="text-lg text-justify text-muted-foreground mb-12">
          Find that on the{" "}
          <a href="/about" className="text-foreground hover:opacity-80 transition-opacity">
            About
          </a>{" "}
          page.
        </p>

        <h2 className="text-3xl font-semibold text-foreground mb-4">
          What I am building / learning right now
        </h2>

        <p className="text-muted-foreground text-justify text-lg leading-relaxed max-w-6xl mb-6">
          A real-time e-commerce analytics and recommendation engine. Kafka for
          event streaming, Spark Structured Streaming for real-time aggregation,
          Snowflake and dbt for the warehouse, Airflow for orchestration, Redis and
          FastAPI for serving, Prometheus and Grafana for observability. My other
          projects prove I can build and evaluate models. This one is about proving
          I can operate a full data platform end to end, the kind of system a data
          engineering or ML platform team actually runs in production.
        </p>

        <p className="text-muted-foreground text-justify text-lg leading-relaxed max-w-6xl mb-6">
          Alongside that, I am picking up JavaScript for backend development, and
          low-level design (LLD) is next on the list.
        </p>

        <p className="font-mono text-m text-muted-foreground mb-10">
          In progress
        </p>

        <div className="border-t border-foreground pt-10 max-w-36l">
          <h2 className="text-3xl font-semibold text-foreground mb-4">
            Didn't get your question answered?
          </h2>
          <p className="text-lg text-muted-foreground mb-2">
            If something here did not add up, or you have a technical question I haven't covered then
          </p>
          <a href="/contact" className="font-sans text-2xl text-foreground hover:opacity-80 transition-opacity">
            here's how to reach me →
          </a>
        </div>
      </div>
    </main>
  );
}