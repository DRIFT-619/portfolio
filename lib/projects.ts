export type Project = {
  slug: string;
  title: string;
  oneLiner: string;
  featured: boolean;
  stack: string[];
  problem: string;
  approach: string[];
  results: string[];
  whatIdDoDifferently: string;
};

export const projects: Project[] = [
  {
    slug: "financial-risk-analyst",
    title: "AI Financial Risk Analyst",
    oneLiner: "Multi-agent hybrid RAG system, 49% relevance gain, 62.5% latency reduction",
    featured: true,
    stack: ["Python", "LangGraph", "ChromaDB", "Neo4j", "FastAPI", "LangSmith"],
    problem:
      "A plain LLM asked about a company's risks and mitigations will hallucinate plausible-sounding answers, and a plain RAG system can retrieve the right text but cannot reliably connect a specific risk to its specific mitigation across a long document. The goal was a system that retrieves the right context, reasons over structured relationships between risks and mitigations, and says so honestly when a connection genuinely is not in the source material.",
    approach: [
      "Architecture: a planner agent decides per-question whether to route to RAG only, graph only, or both, rather than always running the full hybrid pipeline. Not every question needs a graph traversal, and running one anyway would add latency for no benefit.",
      "Technical decision: RAG started as a single-pass retrieve-and-answer pipeline, then moved to a map-reduce pattern. The open-source model used, flan-t5-base, has a 512-token limit and cannot reason well over several long retrieved chunks at once. Map-reduce summarizes each chunk individually first, then combines the summaries into a final answer, which works around the model's own context limitation instead of fighting it.",
      "Trade-off: entity extraction from unstructured filings is messy by nature. The same company came back from the LLM as 'GOOGL', 'Alphabet Inc.', and 'google (goog)' across different chunks. Left as-is, the knowledge graph would silently fragment into duplicate company nodes. A normalization map resolves these to one canonical node before insertion.",
      "Similar problem, risks and mitigations extracted as free text produce near-duplicate phrasings, 'cyber attack risk' and 'cybersecurity risk' read as different strings to a graph database. Sentence embeddings plus agglomerative clustering group these before they become separate nodes, so the graph reflects actual distinct risks rather than wording variance.",
      "Guardrails: prompts explicitly forbid inventing a mitigation that is not in the source, and define what to do when no direct mitigation is found, infer carefully from context and say so, rather than returning a dead-end 'not found' or fabricating one to sound complete.",
      "Observability: every agent decision, RAG call, and graph query is traced through LangSmith, so a wrong answer can be traced back to which agent and which retrieval step produced it, not just re-run and hoped to fix itself.",
    ],
    results: [
      "Answer relevance improved by 49% and groundedness by 5.4% over baseline RAG, while context relevance stayed constant since both systems share the same retrieval base, the gain came specifically from structured graph reasoning, not from retrieving different chunks.",
      "Reduced end-to-end response latency from roughly 80 seconds to 30 seconds, a 62.5% reduction, through reduced redundant LLM calls and more efficient pipeline orchestration.",
      "The largest real improvement was structural rather than metric-based: risks are explicitly categorized and linked to their mitigations, instead of producing a flatter, less explainable answer the way baseline RAG does.",
    ],
    whatIdDoDifferently:
      "The system currently runs on a local LLaMA 3 model through Ollama, which is not directly deployable to the cloud as-is. That was a reasonable choice for local development and keeping the project free to run, but it means the current version cannot be handed a public URL without first swapping in a hosted model. Next time, I would build the LLM call behind an interface from day one, so switching between a local and a hosted model is a config change, not a rewrite.",
  },
  {
    slug: "demand-forecasting",
    title: "Retail Demand Forecasting Pipeline",
    oneLiner: "Random Forest beat LSTM by 60%, deployed on AWS with CI/CD",
    featured: true,
    stack: ["PyTorch", "TensorFlow", "MLflow", "FastAPI", "Docker", "AWS EC2", "PostgreSQL"],
    problem:
      "Retail sales are shaped by overlapping factors, seasonality, promotions, competition, that do not move in one predictable pattern, and any model has to forecast using only information genuinely known in advance, not signals that quietly leak from the future. The real difficulty was not fitting a curve to historical sales, it was building something trustworthy enough to forecast a day it had never seen, and then actually serving that forecast through a live API instead of leaving it in a notebook.",
    approach: [
      "Architecture: started with a naive lag-1 baseline and Linear Regression before touching anything complex, so every later model had a real number to beat, not just an assumption that it would help.",
      "Data leakage caught: Random Forest's feature importance was dominated by the customers column. On a real prediction day, the number of customers who will show up is not known in advance, so training on it was leakage. It was dropped and the model retrained without it.",
      "Technical decision: the lag and rolling features engineered in SQL were deliberately excluded from the LSTM and GRU inputs. A sequence model's job is to learn temporal dependency on its own, feeding it pre-computed lag features would be redundant and would mask whether the model was actually learning anything.",
      "Thoroughness before concluding deep learning underperformed: tested four separate implementations, PyTorch with a manual training loop, PyTorch GRU, TensorFlow with a custom GradientTape loop, and Keras using model.fit with early stopping, rather than ruling out deep learning based on a single attempt.",
      "Trade-off: also tested a log transform on the right-skewed sales target for Random Forest, to check whether the skew itself was limiting performance before attributing the result purely to model choice.",
      "Deployment choice: Random Forest won on MSE, but the LSTM model was the one containerized and shipped, as a deliberate exercise in understanding what packaging a deep learning model into Docker actually costs. It took noticeably longer to build and produced a noticeably larger image than the classical model would have, a real, first-hand data point on the operational cost of shipping deep learning versus classical ML.",
      "MLOps: experiments tracked in MLflow, inference served through FastAPI, containerized with Docker, deployed to AWS EC2 with GitHub Actions CI/CD triggering on every push to main.",
    ],
    results: [
      "Random Forest on engineered features reached an MSE of 897, versus 2266 for the best LSTM configuration, a 60% improvement.",
      "The customers leakage fix changed which features the model could legitimately rely on before any performance comparison was considered valid.",
      "Full CI/CD pipeline deploys a Docker container to EC2 automatically on every push, with MLflow preserving every experiment run for comparison.",
    ],
    whatIdDoDifferently:
      "The training script currently loads data using a hardcoded local file path. It works fine on my machine, but it means the script cannot run as-is on anyone else's setup or in a CI pipeline without editing the code first. I would replace this with a relative path or an environment variable, so the same script runs identically whether it is on my laptop, a teammate's machine, or an automated pipeline.",
  },
  {
    slug: "bankruptcy-prediction",
    title: "Bankruptcy Risk Prediction",
    oneLiner: "XGBoost, ROC-AUC 0.96, and a hyperparameter tune that made things worse",
    featured: true,
    stack: ["Python", "XGBoost", "SHAP", "Scikit-learn"],
    problem:
      "Predict which companies are at risk of bankruptcy from a financial dataset of 6,819 samples and 94 features, with roughly 3% of firms actually bankrupt. Traditional ratio-based screening does not capture nonlinear risk patterns, and in this domain a missed bankruptcy is far more costly than a false alarm, so the model had to be built around that asymmetry from the start.",
    approach: [
      "Statistical validity check: with close to 6,800 rows, almost every feature comes back statistically significant by p-value alone, which makes p-value meaningless at this sample size. Effect size (Cohen's d) was used instead to judge which features actually mattered.",
      "Feature reduction: cut from 94 features to 58 using three separate techniques, manual removal of known-redundant financial ratios, algorithmic pruning of highly correlated pairs guided by effect size, and dropping near-zero-variance features, rather than one blunt cutoff.",
      "Deliberately no outlier removal. With a dataset this small, and no way to know whether a future test set would show the same extreme values, removing outliers risked deleting genuine cases of financial distress rather than noise. Doing nothing was the more defensible choice here, not the default one.",
      "Architecture: compared Logistic Regression against XGBoost rather than assuming a tree-based model was correct from the start. Class imbalance was handled with class weighting rather than synthetic oversampling.",
      "Trade-off and result: XGBoost was then hyperparameter-tuned with a full grid search. The tuned model performed worse than the untuned baseline XGBoost once both were evaluated with a properly tuned decision threshold. The baseline model was shipped instead of the tuned one.",
      "Technical decision: the final decision threshold was optimised using F2 score rather than the default 0.5, since F2 weights recall above precision. In this domain, missing a real bankruptcy is far costlier than flagging a healthy firm for review, so the threshold was chosen to reflect that cost, not to maximise a generic accuracy number.",
      "Validation: cross-checked feature importance using three independent methods, XGBoost's native importance, permutation importance, and SHAP. All three agreed on the same top 4 drivers, which is what confirmed the signal was real financial structure and not noise from a small dataset.",
    ],
    results: [
      "Final model, baseline XGBoost at a tuned threshold of 0.08, achieved ROC-AUC of 0.96 and 73% recall on bankrupt firms.",
      "Produced roughly half the false alarms of the Logistic Regression baseline, a 2x reduction, at a comparable recall level.",
      "The top 4 SHAP-confirmed risk drivers, poor earnings stability, weak liquidity, high leverage, and high interest burden, were translated into risk-tiered recommendations for high, medium, and low-risk firms.",
    ],
    whatIdDoDifferently:
      "The F2-weighted threshold was tuned as a general-purpose stand-in for the real cost of a missed bankruptcy versus a false alarm. I never had the actual cost figures from a real institution to tune against. Next time, I would push to get that cost ratio from a domain stakeholder first, so the threshold reflects the real cost function instead of a reasonable proxy for it.",
  },
  {
    slug: "train-delay-prediction",
    title: "Train Delay Prediction",
    oneLiner: "Caught and reversed a preprocessing mistake mid-project",
    featured: true,
    stack: ["R", "RStudio", "XGBoost"],
    problem:
      "Predict train delays from 1,100 real-world operational records. Small dataset, real operational noise, and a hard constraint: the model had to be built and iterated on over a structured multi-week cycle against two other competing teams working the same problem.",
    approach: [
      "Architecture: a single XGBoost regression model, kept deliberately simple given the dataset size. With only 1,100 records, a more complex model architecture would have meant fitting to noise rather than signal, so the design decision was to invest effort in feature engineering rather than model complexity.",
      "First pass: established a baseline XGBoost model with minimal preprocessing, MSE of 30,700. This baseline was the reference point every later change had to justify itself against.",
      "The mistake: naive outlier removal looked like a safe, standard step. It increased MSE by 129%. Investigating why revealed that what looked like outliers were often legitimate operational delays, real signal, not noise, and removing them stripped the model of exactly the variance it needed to learn from.",
      "The fix: reversed the outlier removal, and moved to selective feature handling instead, preserving meaningful variance rather than discarding anything that looked unusual.",
      "Technical decision: applied cyclical sine-cosine encoding to time-based features. A clock is not a straight number line, on a 24-hour scale, 11 and 1 are close together, but a model reading raw hour values as integers has no way to know that. Sine-cosine encoding gives the model that cyclical structure directly.",
      "Final iteration: feature interaction design, redundancy reduction, and hyperparameter tuning, each tested against the baseline before being kept.",
    ],
    results: [
      "Naive outlier removal increased MSE by 129%, caught and reversed before it became the shipped approach.",
      "Cyclical sine-cosine encoding reduced MSE to 29,816, a 2.9% improvement over baseline.",
      "Final model reached an MSE of 29,222, a 4.8% total improvement over baseline, and the best result among three competing teams.",
    ],
    whatIdDoDifferently:
      "The tradeoff worth naming: outlier removal is usually treated as a default preprocessing step, and I applied it that way initially instead of first asking whether this specific dataset's outliers were noise or signal. Next time, I would test that assumption in a small controlled experiment before applying any preprocessing step by default, rather than discovering the cost of the assumption after the fact.",
  },
  {
    slug: "house-price-prediction",
    title: "House Price Prediction",
    oneLiner: "Feature ablation proved which variable actually mattered",
    featured: false,
    stack: ["XGBoost", "Lasso", "Streamlit", "Docker"],
    problem:
      "Most feature importance analysis stops at ranking, a plot shows which features score highest and the analysis ends there. This project asked a sharper question, using a real academic study with two other researchers: does a feature's importance ranking actually reflect how much the model depends on it? Neighborhood was the test case, since it plausibly encodes location factors, school quality, amenities, that no other single column captures.",
    approach: [
      "Method: rather than reading feature importance plots at face value, features were removed one at a time and each model retrained from scratch, comparing performance with and without each feature to measure actual impact, not just importance score.",
      "Finding: in XGBoost, Neighborhood ranked only 5th by raw feature importance, behind OverallQual. But removing Neighborhood entirely hurt performance more than removing OverallQual did. A feature can matter more than its own importance ranking suggests, and the only way to know is to actually remove it and check.",
      "Cross-validation across model types: the same ablation was repeated with Lasso, a linear model with a completely different mechanism from XGBoost's trees. Removing Neighborhood collapsed Lasso's R² from 0.90 to 0.096, a far steeper drop than in XGBoost, confirming the effect was not an artifact of one model's quirks.",
      "Trade-off tested and reported honestly: PCA compressed the feature set down to 2 components capturing over 95% of total variance, and Neighborhood was confirmed as the dominant driver of the first component. But PCA-transformed models performed worse across the board, R² dropped from 0.90 to roughly 0.54, showing that capturing most of the variance is not the same as preserving what a model actually needs to predict well.",
      "Research-to-production trade-off: the coursework version used target encoding for Neighborhood's 25 categories, since it preserves more signal than one-hot encoding. The deployed production pipeline switched to one-hot encoding instead, specifically to avoid target leakage and to handle neighborhoods the model has never seen at inference time, prioritizing reliability over raw accuracy.",
      "Outlier handling: rather than dropping any row containing an outlier, removal was applied feature-by-feature and only where extreme values exceeded roughly 3% of that feature, preserving genuine rare high-value properties instead of treating them as noise.",
    ],
    results: [
      "Removing Neighborhood increased RMSE by over 7% in XGBoost, a larger drop than removing OverallQual, the model's top-ranked feature by raw importance.",
      "In Lasso, removing Neighborhood collapsed R² from 0.90 to 0.096, the single largest performance loss across every ablation tested.",
      "PCA-compressed features captured over 95% of variance but reduced R² to roughly 0.54 across both model types, confirming that variance captured and predictive power retained are not the same thing.",
    ],
    whatIdDoDifferently:
      "The deployed API accepts 8 user-facing inputs and silently fills the remaining features with fixed defaults drawn from typical training values. That is a reasonable simplification for a portfolio demo, but a property far outside those default assumptions, an unusually large basement or an uncommon exterior material, would get a prediction quietly built on defaults that do not describe it. A more honest version would expose which inputs are driving a given prediction versus which ones fell back to a default, rather than returning a single number with no indication of how much of the input was actually the user's.",
  },
  {
    slug: "ecg-signal-classification",
    title: "ECG Signal Classification",
    oneLiner: "Structured iteration under severe data scarcity (105 samples)",
    featured: false,
    stack: ["R", "XGBoost", "Signal Processing"],
    problem:
      "Classify patients as healthy or as having one of two heart conditions from raw ECG signal data, with only 115 patients split unevenly across three classes, 26 healthy, 80 with myocardial infarction, 9 with cardiomyopathy. The real difficulty was not the classification itself, it was that even a 95% accurate model can still feel insufficient here: a false negative means telling a sick patient they are healthy, and the raw signal itself is noisy with baseline drift and inconsistent between individuals before any modeling can begin.",
    approach: [
      "Architecture: rather than feeding the raw 30,000-point signal per patient directly into a model, with only 115 patients that would be far too high-dimensional to learn from, R-peaks were detected per heartbeat and used to derive clinically meaningful features, RR interval, heart rate variability, QRS duration, PR and QT intervals, alongside frequency-domain features from FFT, wavelet transforms, and power spectral density.",
      "Iteration: three different preprocessing workflows were tried, each ordering normalization and Butterworth high-pass filtering differently, and compared by checking whether known problem patients showed correct R-peaks afterward, rather than assuming one ordering would work and moving on.",
      "Trade-off: a single global amplitude threshold for R-peak detection did not work across all patients. A handful of patients needed a manually adjusted threshold, either because the default missed real peaks entirely or picked up noise as if it were a heartbeat. Rather than force one threshold on every signal, thresholds were tuned per patient where the data required it.",
      "Handling scarcity and imbalance: outlier removal was applied per class separately using z-scores, since the three classes had very different sizes and treating them identically risked stripping the minority classes of already-scarce data.",
      "Model choice: instead of picking a single best-performing model, k-NN and XGBoost predictions were combined into a weighted blend, XGBoost weighted higher since it performed better individually, since a single held-out test result on a dataset this small is not a fully reliable signal of which model actually generalizes best.",
    ],
    results: [
      "Improved from a 42% k-NN baseline to 64% accuracy using the blended k-NN and XGBoost model, a 52% relative improvement.",
      "Ranked second among competing groups on this challenge.",
      "Derived interpretable, clinically grounded features, RR interval, QRS duration, heart rate variability, rather than relying on opaque features from the raw signal.",
    ],
    whatIdDoDifferently:
      "The P, Q, S, and T wave distances from each R-peak were estimated from a single patient's reading and one reference diagram found online, then applied as fixed offsets to all 115 patients regardless of which class they belonged to or how their individual signal actually looked. That was a reasonable simplification given the time available, but real ECG morphology varies by individual and by condition. Next time, I would validate those offsets against a handful of patients from each class before applying them uniformly, rather than assuming one patient's anatomy generalizes to the full dataset.",
  },
  {
    slug: "big-data-clustering",
    title: "Big Data Processing & Distributed Clustering",
    oneLiner: "Distributed DBSCAN clustering on a 23M+ row geospatial dataset",
    featured: false,
    stack: ["Apache Spark", "Databricks"],
    problem:
      "DBSCAN finds arbitrarily shaped clusters and handles noise well, but its naive form has quadratic time complexity, making it unusable directly on 23 million GPS points. The real question was not whether Spark could distribute the workload, it was how to split millions of spatial points into partitions small enough to cluster without either destroying the spatial structure DBSCAN depends on or silently hiding the load-balancing problems that make distributed systems fail in practice.",
    approach: [
      "Diagnostic choice: outliers detected by the IQR method were capped and flagged rather than removed outright, specifically to test whether a partitioning strategy would naturally isolate them into sparser regions on its own, a more informative question than simply cleaning them out before any analysis.",
      "Trade-off, two partitioning strategies compared head to head. Grid partitioning assigned points to fixed-size cells in about 6 seconds, but split the data into 85,069 grids of which only 1,592 held enough points to cluster meaningfully, most cells were unusably sparse. KD-Tree partitioning took roughly 5 minutes, since a Decision Tree Classifier had to be trained just to assign all 23 million points to their correct partition, but it produced far more balanced partitions and noticeably better local cluster cohesion.",
      "A real dead end, caught and explained: batching large partitions by sorting on altitude and slicing into chunks produced a silhouette score of roughly -0.9, a strongly wrong clustering. The cause was diagnosed rather than just discarded, DBSCAN was treating each batch as its own isolated dataset instead of samples drawn from one continuous space, fracturing what should have been single clusters across batch boundaries.",
      "Fix: switching to KMeans-based batching, grouping each large partition into spatially coherent sub-batches before running DBSCAN, corrected this. Batching was still necessary given memory constraints, but batching by spatial coherence rather than by an arbitrary sort order preserved the structure DBSCAN needed to see.",
      "Hyperparameter strategy scaled to the problem size: small-sample experiments used a visual elbow method to pick eps and min_samples by eye, but that does not scale to hundreds of batches. For the full run, eps was instead set from the 90th percentile of k-nearest-neighbor distances per batch, and min_samples scaled logarithmically with batch size, a heuristic that adapts automatically instead of requiring a human to look at a plot for every batch.",
      "Honest limitation surfaced directly: KD-Tree's balanced partitions mix outliers in with dense regions by construction, since it does not segregate sparse areas the way Grid does. That meant DBSCAN itself had to identify noise within mixed partitions rather than starting from pre-isolated outliers, a real limitation of the approach rather than something worked around silently.",
    ],
    results: [
      "KD-Tree partitioning achieved a global silhouette score of -0.2658 versus -0.2884 for Grid, and a dramatically better local silhouette score of -0.3235 versus -0.7147, confirming that balanced partitions preserved cluster structure noticeably better at the local level.",
      "Grid partitioning also isolated more outliers before clustering even began (dropping ~6.7M flagged points to ~2.9M via sparse-cell removal), and DBSCAN itself went on to label fewer noise points under Grid than KD-Tree (2.5M vs. 3.5M) once clustering ran.",
      "Correcting the batching strategy from altitude-sorted to KMeans-based fixed a silhouette score of approximately -0.9 into a workable clustering result.",
    ],
    whatIdDoDifferently:
      "The altitude-based batching approach was a reasonable first attempt, but the failure mode, DBSCAN losing its sense of a single continuous dataset once split into arbitrarily ordered chunks, was foreseeable in hindsight. Next time, I would batch by spatial coherence from the very first attempt rather than by convenience of sort order, and reserve the naive approach for a quick sanity check rather than a real experimental run, since a wrong silhouette score on a 23M-row run is an expensive way to learn that lesson.",
  },
  {
    slug: "combinatorial-flips",
    title: "Algorithmic Verification of Combinatorial Flips",
    oneLiner: "Custom C++ verification engine, O(n² log M) complexity",
    featured: false,
    stack: ["C++", "Algorithm Design", "Complexity Analysis"],
    problem:
      "Flips are a concept from birational geometry used in the Minimal Model Program, and whether a given integer sequence represents a valid flip depends on three conditions grounded in group theory, ring theory, and modular arithmetic, not on anything directly computable by eye. The task was to translate genuinely abstract graduate-level algebra, coprimality of coordinate subsets, positivity constraints, and a modular sum inequality, into a program that could verify any sequence in three or higher dimensions and explain exactly which condition it failed, not just whether it passed.",
    approach: [
      "Architecture: three independent condition checks, each mapped directly to a distinct piece of theory, GCD-based coprimality across every (n-1)-sized subset, a simple positivity sum, and a modular inequality checked per positive coordinate. Keeping them as separate, independently testable functions made it possible to diagnose exactly which mathematical constraint a given sequence violated, rather than returning a single pass or fail.",
      "Technical decision: Condition 1's coprimality check generates every (n-1)-element subset via backtracking and computes each subset's GCD independently, giving O(n² log M) time. This was the direct, provably correct translation of the mathematical definition, prioritizing correctness first before optimizing.",
      "Validation methodology: rather than testing only clear pass or fail cases, nine test cases were deliberately constructed to isolate every combination of which conditions pass and fail, single failures, double failures, all three failing, and invalid input entirely, to confirm each condition was being checked independently and correctly rather than one condition's logic accidentally masking another's.",
      "Complexity analysis performed after implementation, not assumed beforehand: profiling the three conditions showed Condition 3's modular inequality, not the combinatorial subset generation in Condition 1, is the actual runtime bottleneck as the positive coordinates grow large, which matches the theoretical expectation that this condition represents the most delicate constraint in the geometry of flips.",
    ],
    results: [
      "Correctly classified all nine constructed test cases, including sequences designed to fail exactly one, two, or all three conditions, confirming each condition operates independently and correctly.",
      "Identified Condition 3's modular sum inequality as the true computational bottleneck at scale, consistent with the mathematical theory that this condition encodes the most delicate balance constraint on a flip.",
      "Delivered a full mathematical bridge from graduate algebra, group actions, ideals, quotient rings, to a working, testable computational verification tool.",
    ],
    whatIdDoDifferently:
      "Condition 1's coprimality check currently regenerates every (n-1)-sized subset from scratch and computes each one's GCD independently, an O(n squared log M) approach. My own complexity analysis identified a concrete fix I did not implement, precomputed prefix and suffix GCD arrays would let 'GCD of everything except index i' be answered in constant time per index, cutting the whole condition down to O(n log M). I prioritized proving correctness first and treated the optimization as a documented next step rather than something to build before the deadline, which was the right call for a dissertation, but it is the first thing I would implement given more time.",
  },
  {
  slug: "airline-yield-management",
  title: "Airline Seat Yield Management Optimization",
  oneLiner: "MILP model jointly optimizing pricing and aircraft assignment",
  featured: false,
  stack: ["Linear Programming", "MILP", "Excel Solver", "LP-Solve"],
  problem:
    "An airline sets ticket prices across multiple booking periods before final demand is known, and separately has to decide which aircraft configuration to assign to each flight, both under fixed seat capacity. By the third and final booking period, the pricing decisions for the first two periods are already locked in and executed, only the current period's pricing and the aircraft assignment remain open decisions, and both have to be optimized jointly since seat capacity links them together.",
  approach: [
    "Architecture: a Mixed Integer Linear Program with two coupled sets of binary decisions, one price option selected per fare class per period, and one seat arrangement selected out of 18 candidates per aircraft, alongside integer variables for how many seats to actually sell under the chosen price. The two are coupled through a shared capacity constraint, the seats sold across all classes cannot exceed what the selected arrangement can physically hold.",
    "Modeling the rolling decision structure: rather than treating all three periods as simultaneously open, Period 1 and 2 pricing decisions were fixed as equality constraints in the Period 3 model, since by that point they had already been decided and executed. Only Period 3 pricing and the aircraft arrangement remained genuine decision variables, matching how yield management actually works in practice, past commitments are not re-optimized.",
    "Validation: the model was built independently twice, once as an Excel Solver spreadsheet and once as an algebraic LP-Solve formulation, specifically to cross-check that both produced the same optimal solution. Two independent implementations catching the same answer is stronger evidence of correctness than trusting one model in isolation.",
    "Reflection built into the model itself: a separate scenario, kept in the LP-Solve file, reruns the full three-period pricing decision against the actual known demand observed at takeoff, to evaluate after the fact how good the original pricing predictions actually were, not just whether the model solved cleanly against assumed demand.",
  ],
  results: [
    "Produced a profit-maximizing joint solution for seat pricing and aircraft assignment, validated for consistency across two independently built model formulations.",
    "Awarded a Grade A, 78/100, with specific written feedback praising the correctness of the models and the depth of explanation of design decisions and trade-offs.",
  ],
  whatIdDoDifferently:
    "The graded feedback was specific and fair: the numeric models were correct, but the spreadsheet model lacked clear annotation connecting cells back to the algebraic formulation, and the LP-Solve file annotated its correspondence to the spreadsheet but not to the underlying algebra it was implementing. The model being right is not the same as the model being legible to someone else reading it cold. Next time, I would annotate every formulation against the compact algebraic model from the start, not just against whichever other artifact I happened to build alongside it.",
},
];
