import BackButton from "@/components/BackButton";

export default function About() {
  return (
    <main className="flex-1 px-6">
      <div className="max-w-3xl mx-auto w-full py-12">

        <BackButton />

        {/* ===== ZONE 1: NARRATIVE ===== */}

        <h1 className="text-3xl md:text-5xl text-justify font-semibold text-foreground mb-8">
          About
        </h1>

        {/* ===== DIVIDER ===== */}
        <div className="border-t border-foreground mb-8" />

        <section className="mb-10">
          <h2 className="font-sans text-2xl text-foreground mb-3">Education</h2>
          <div className="space-y-4">
            <div>
              <p className="text-foreground text-lg font-lg">MSc Data Science</p>
              <p className="text-m text-muted-foreground">University of Nottingham, UK</p>
              <p className="text-m text-muted-foreground">Sep 2024 - Dec 2025</p>
            </div>
            <div>
              <p className="text-foreground text-lg font-lg">B.E. Computer Science</p>
              <p className="text-m text-muted-foreground">Cambridge Institute of Technology, India</p>
              <p className="text-m text-muted-foreground">May 2020 - May 2024</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-sans text-2xl text-foreground mb-3">Experience</h2>
          <div className="space-y-4">
            <div>
              <p className="text-foreground text-lg">Backend AI Engineering, FlyRank AI</p>
              <p className="text-m text-muted-foreground">Jul 2026 - Sep 2026</p>
              <p className="text-m text-muted-foreground">Remote</p>
            </div>
            <div>
              <p className="text-foreground text-lg">Machine Learning Intern, Shaivi Systems</p>
              <p className="text-m text-muted-foreground">Nov 2023 - Dec 2023</p>
              <p className="text-m text-muted-foreground">Pune, India</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-sans text-2xl text-foreground mb-3">Achievements</h2>
          <ul className="space-y-2 text-m font-medium text-muted-foreground">
            <li>Ranked 1st, Train Delay Prediction ML challenge, University of Nottingham, 2025</li>
            <li>Ranked 2nd, ECG Signal Processing ML challenge, University of Nottingham, 2025</li>
            <li>Runner-up, Programming Tenacity Boot Camp (C), Cambridge Institute of Technology, 2022</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="font-sans text-2xl text-foreground mb-3">Outside of work</h2>
          <p className="font-medium text-m text-muted-foreground text-m text-justify leading-relaxed mb-4">
            I have competed professionally in Karate, Skating, and Swimming, and I
            still play Football, Basketball, and Table Tennis for fun. Right now,
            the sport I take most seriously is Chess, I am rated 1500 rapid on
            Chess.com and working toward 2500.
          </p>

          <p className="font-medium text-m text-muted-foreground text-m text-justify leading-relaxed mb-4">
            I am not going to tell you what these say about my character, that is
            not something I can prove on a webpage. I would rather just tell you
            what I actually do, and let you draw your own conclusions.
          </p>
        </section>

        {/* ===== DIVIDER ===== */}
        <div className="border-t border-foreground mb-8" />

        {/* ===== ZONE 2: QUICK TECHNICAL FACTS ===== */}

        <h2 className="text-3xl font-semibold text-foreground mb-10">
          The quick facts
        </h2>

        <section className="mb-8">
          <p className="font-mono text-2xl text-foreground mb-4">What I build with</p>
          <div className="flex flex-wrap gap-x-4 gap-y-3 items-baseline">
            <span className="text-muted-foreground text-lg font-medium">Python</span>
            <span className="text-muted-foreground text-lg font-medium">SQL</span>
            <span className="text-muted-foreground text-base">C++</span>
            <span className="text-muted-foreground text-sm">R</span>
          </div>
        </section>

        <section className="mb-8">
          <p className="font-mono text-2xl text-foreground mb-4">What I use for GenAI and LLM systems</p>
          <div className="flex flex-wrap gap-x-4 gap-y-3 items-baseline">
            <span className="text-muted-foreground text-lg font-medium">RAG</span>
            <span className="text-muted-foreground text-lg font-medium">LangGraph</span>
            <span className="text-muted-foreground text-lg font-medium">LangChain</span>
            <span className="text-muted-foreground text-base">Multi-Agent Systems</span>
            <span className="text-muted-foreground text-base">LangSmith</span>
            <span className="text-muted-foreground text-base">Knowledge Graphs</span>
            <span className="text-muted-foreground text-base">Hybrid Retrieval</span>
            <span className="text-muted-foreground text-sm">Prompt Engineering</span>
            <span className="text-muted-foreground text-sm">Text Embeddings</span>
            <span className="text-muted-foreground text-sm">Semantic Search</span>
            <span className="text-muted-foreground text-sm">Sentence Transformers</span>
            <span className="text-muted-foreground text-sm">Hugging Face Transformers</span>
            <span className="text-muted-foreground text-sm">Ollama (Llama 3)</span>
          </div>
        </section>

        <section className="mb-8">
          <p className="font-mono text-2xl text-foreground mb-4">What I train and evaluate models with</p>
          <div className="flex flex-wrap gap-x-4 gap-y-3 items-baseline">
            <span className="text-muted-foreground text-lg font-medium">XGBoost</span>
            <span className="text-muted-foreground text-lg font-medium">PyTorch</span>
            <span className="text-muted-foreground text-base">TensorFlow</span>
            <span className="text-muted-foreground text-base">Keras</span>
            <span className="text-muted-foreground text-base">SHAP</span>
            <span className="text-muted-foreground text-sm">LSTM / GRU</span>
            <span className="text-muted-foreground text-sm">Ensemble Methods</span>
            <span className="text-muted-foreground text-sm">Hyperparameter Tuning</span>
            <span className="text-muted-foreground text-sm">Bias-Variance Analysis</span>
          </div>
        </section>

        <section className="mb-8">
          <p className="font-mono text-2xl text-foreground mb-4">What I use for data work</p>
          <div className="flex flex-wrap gap-x-4 gap-y-3 items-baseline">
            <span className="text-muted-foreground text-lg font-medium">Pandas</span>
            <span className="text-muted-foreground text-lg font-medium">NumPy</span>
            <span className="text-muted-foreground text-base">PostgreSQL</span>
            <span className="text-muted-foreground text-base">Neo4j (AuraDB)</span>
            <span className="text-muted-foreground text-base">ChromaDB</span>
            <span className="text-muted-foreground text-sm">Feature Engineering</span>
            <span className="text-muted-foreground text-sm">EDA</span>
            <span className="text-muted-foreground text-sm">PCA</span>
          </div>
        </section>

        <section className="mb-8">
          <p className="font-mono text-2xl text-foreground mb-4">What I ship and orchestrate with</p>
          <div className="flex flex-wrap gap-x-4 gap-y-3 items-baseline">
            <span className="text-muted-foreground text-lg font-medium">FastAPI</span>
            <span className="text-muted-foreground text-lg font-medium">Docker</span>
            <span className="text-muted-foreground text-base">MLflow</span>
            <span className="text-muted-foreground text-base">GitHub Actions CI/CD</span>
            <span className="text-muted-foreground text-base">AWS EC2</span>
            <span className="text-muted-foreground text-base">Github</span>
            <span className="text-muted-foreground text-sm">Streamlit</span>
            <span className="text-muted-foreground text-sm">Render</span>
            <span className="text-muted-foreground text-sm">Vercel</span>
          </div>
        </section>

        <section className="mb-8">
          <p className="font-mono text-2xl text-foreground mb-4">Concepts I am familiar with</p>
          <div className="flex flex-wrap gap-x-4 gap-y-3 items-baseline">
            <span className="text-muted-foreground text-lg font-medium">Version Control (Git)</span>
            <span className="text-muted-foreground text-lg font-medium">DSA</span>
            <span className="text-muted-foreground text-lg font-medium">Time & Space Complexity</span>
            <span className="text-muted-foreground text-base font-medium">OOPs</span>
            <span className="text-muted-foreground text-base font-medium">REST API Design</span>
            <span className="text-muted-foreground text-base font-medium">System Design (HLD)</span>
            <span className="text-muted-foreground text-base font-medium">Distributed Systems Basic</span>
            <span className="text-muted-foreground text-base font-sm">Async Processing</span>
            <span className="text-muted-foreground text-base font-sm">CAP Theorem</span>
          </div>
        </section>

        <section className="mb-10">
          <p className="font-mono text-2xl text-foreground mb-4">What I am learning right now</p>
          <div className="flex flex-wrap gap-x-4 gap-y-3 items-baseline">
            <span className="text-muted-foreground text-lg font-medium">Kafka</span>
            <span className="text-muted-foreground text-lg font-medium">Spark Structured Streaming</span>
            <span className="text-muted-foreground text-base">Snowflake</span>
            <span className="text-muted-foreground text-base">dbt</span>
            <span className="text-muted-foreground text-base">Airflow</span>
            <span className="text-muted-foreground text-sm">Next.js</span>
            <span className="text-muted-foreground text-sm">TypeScript</span>
            <span className="text-muted-foreground text-sm">LLD</span>
          </div>
        </section>

        <div className="border-t border-foreground pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <section className="mb-8">
            <p className="font-mono text-2xl text-foreground mb-4">Roles I am targeting</p>
            <div className="mb-4">
              <p className="text-foreground text-lg font-medium mb-1">
                Data Scientist &middot; ML Engineer &middot; AI Engineer &middot; GenAI Engineer &middot; Applied Scientist &middot; Software Engineer &middot; Backend Engineer
              </p>
              <p className="text-m text-muted-foreground">Primary focus</p>
            </div>
            <div>
              <p className="text-foreground text-lg font-medium mb-1">MLOps &middot; Data Engineer &middot; Full Stack Engineer &middot; Data Analyst</p>
              <p className="text-m text-muted-foreground">Also open to these</p>
            </div>
          </section>
        </div>

        <div className="border-t border-foreground pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <section className="mb-8">
            <p className="font-mono text-2xl text-foreground mb-4">Type of Work I am open to</p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <p className="text-foreground text-lg font-medium mb-1">Employment type</p>
                <p className="text-m text-muted-foreground">
                  Full-time, internship, or apprenticeship
                </p>
              </div>

              <div>
                <p className="text-foreground text-lg font-medium mb-1">Work mode</p>
                <p className="text-m text-muted-foreground">
                  Remote, hybrid, or in-office
                </p>
              </div>

              <div>
                <p className="text-foreground text-lg font-medium mb-1">Authorization</p>
                <p className="text-m text-muted-foreground">
                  Legally authorized to work anywhere in India
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* ===== RESUME + CLOSING ===== */}

        <div className="border-t border-foreground pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p className="text-lg font-medium text-foreground mb-8">
            Want the formal version of all this?
          </p>
          <div className="flex gap-4 mb-8">
            
              
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="rounded-md bg-foreground text-background px-5 py-2.5 font-medium hover:opacity-90 transition-opacity">
              Download Resume
            </a>
            
            < a href="/for-engineers" className="rounded-md border border-foreground px-5 py-2.5 font-medium text-foreground hover:border-muted-foreground hover:text-muted-foreground transition-colors">
              See the work
            </a>
          </div>
        </div>

        <div className="border-t border-foreground pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p className="text-lg text-foreground mb-2">
            Liked my profile?
          </p>
          <a href="/contact" className="rounded-md border border-foreground px-5 py-2.5 font-medium text-foreground hover:border-muted-foreground hover:text-muted-foreground transition-colors">
            Head over to the contact page
          </a>
        </div>

      </div>
    </main>
  );
}