export default function ForEngineers() {
  return (
    <main className="flex-1 px-6">
      <div className="max-w-6xl mx-auto w-full py-12">

        <p className="font-mono text-sm text-white mb-6">For Engineers</p>
        <h1 className="text-3xl md:text-5xl font-semibold leading-tight mb-6 text-foreground">
          I build systems, not just models.
        </h1>
        <p className="text-muted-foreground text-lg mb-12 leading-relaxed max-w-3xl">
          Every project below ships with an API, a container, and a tracked
          experiment, not just a notebook with a good accuracy score.
        </p>

        <h2 className="text-2xl font-semibold text-foreground mb-10">
          How I approach a new problem
        </h2>

        <div className="space-y-8 mb-12 max-w-3xl">
          <div className="flex gap-5">
            <p className="font-mono text-sm text-white shrink-0">01</p>
            <div>
              <p className="text-foreground font-medium mb-1">
                Understand what is actually being asked before touching data
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Placeholder: what this looks like in practice, e.g. clarifying
                the real business question behind a metric before picking a
                model.
              </p>
            </div>
          </div>

          <div className="flex gap-5">
            <p className="font-mono text-sm text-white shrink-0">02</p>
            <div>
              <p className="text-foreground font-medium mb-1">
                Establish a simple baseline first
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Placeholder: why a baseline comes before any complex approach,
                and what it protects against.
              </p>
            </div>
          </div>

          <div className="flex gap-5">
            <p className="font-mono text-sm text-white shrink-0">03</p>
            <div>
              <p className="text-foreground font-medium mb-1">
                Iterate with a justification for every change
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Placeholder: how you decide what to try next, and how you
                avoid change for its own sake.
              </p>
            </div>
          </div>

          <div className="flex gap-5">
            <p className="font-mono text-sm text-white shrink-0">04</p>
            <div>
              <p className="text-foreground font-medium mb-1">
                Validate before calling it done
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Placeholder: what validation actually means to you beyond a
                single accuracy number.
              </p>
            </div>
          </div>

          <div className="flex gap-5">
            <p className="font-mono text-sm text-white shrink-0">05</p>
            <div>
              <p className="text-foreground font-medium mb-1">
                Ship it, do not leave it in a notebook
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Placeholder: your instinct to wrap things in an API or
                container even for personal projects, and why.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-foreground mb-10">
          How I think
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="rounded-lg border border-border p-6">
            <p className="font-mono text-xs text-white mb-3">On being wrong</p>
            <p className="text-foreground font-medium mb-2">
              I catch my own mistakes and reverse course.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              On a train delay prediction model, naive outlier removal looked
              reasonable and increased error by 129%. I caught it, reassessed
              the preprocessing strategy, and rebuilt it properly.
            </p>
          </div>

          <div className="rounded-lg border border-border p-6">
            <p className="font-mono text-xs text-white mb-3">On trusting results</p>
            <p className="text-foreground font-medium mb-2">
              I ship what works, not what looks impressive.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              On a retail demand forecasting pipeline, a Random Forest model
              beat LSTM and GRU by 60%. I shipped the Random Forest.
            </p>
          </div>

          <div className="rounded-lg border border-border p-6">
            <p className="font-mono text-xs text-white mb-3">On new ecosystems</p>
            <p className="text-foreground font-medium mb-2">
              I pick up unfamiliar stacks fast.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              This site is proof. I did not know Next.js, TypeScript, or
              Tailwind a few weeks ago. It is built, deployed, and you are
              looking at it right now.
            </p>
          </div>

          <div className="rounded-lg border border-border p-6">
            <p className="font-mono text-xs text-white mb-3">On what &quot;done&quot; means</p>
            <p className="text-foreground font-medium mb-2">
              Done means shipped and monitored.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Every project below has a FastAPI backend, a Docker container,
              and either CI/CD or experiment tracking through MLflow. Not
              just a metric in a notebook.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-foreground mb-10">
          Case studies
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          <a href="/work/financial-risk-analyst" className="rounded-lg border border-border p-6 hover:border-accent transition-colors">
            <p className="text-foreground font-medium mb-2">AI Financial Risk Analyst</p>
            <p className="text-sm text-muted-foreground">Multi-agent hybrid RAG system, 49% relevance gain, 62.5% latency reduction</p>
          </a>

          <a href="/work/demand-forecasting" className="rounded-lg border border-border p-6 hover:border-accent transition-colors">
            <p className="text-foreground font-medium mb-2">Retail Demand Forecasting Pipeline</p>
            <p className="text-sm text-muted-foreground">Random Forest beat LSTM by 60%, deployed on AWS with CI/CD</p>
          </a>

          <a href="/work/bankruptcy-prediction" className="rounded-lg border border-border p-6 hover:border-accent transition-colors">
            <p className="text-foreground font-medium mb-2">Bankruptcy Risk Prediction</p>
            <p className="text-sm text-muted-foreground">XGBoost, ROC-AUC 0.96, SHAP-driven explainability</p>
          </a>

          <a href="/work/train-delay-prediction" className="rounded-lg border border-border p-6 hover:border-accent transition-colors">
            <p className="text-foreground font-medium mb-2">Train Delay Prediction</p>
            <p className="text-sm text-muted-foreground">Caught and reversed a preprocessing mistake mid-project</p>
          </a>
        </div>

        <div className="text-center mb-12">
          <p className="text-muted-foreground mb-3">
            Wanna explore more of my work?
          </p>
          <a href="/work" className="font-mono text-sm text-white hover:opacity-80 transition-opacity">
            Click here
          </a>
        </div>

        <h2 className="text-2xl font-semibold text-foreground mb-4">
          What I am building right now
        </h2>
        <p className="text-muted-foreground leading-relaxed max-w-6xl mb-6">
          A real-time e-commerce analytics and recommendation engine. Kafka
          for event streaming, Spark Structured Streaming for real-time
          aggregation, Snowflake and dbt for the warehouse, Airflow for
          orchestration, Redis and FastAPI for serving, Prometheus and
          Grafana for observability. My other projects prove I can build and
          evaluate models. This one is about proving I can operate a full
          data platform end to end, the kind of system a data engineering or
          ML platform team actually runs in production.
        </p>
        <p className="font-mono text-xs text-muted-foreground">
          In progress
        </p>

      </div>
    </main>
  );
}