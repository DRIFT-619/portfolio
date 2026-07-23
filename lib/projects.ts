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
    problem: "Placeholder: what business problem this system solves and why a simple RAG setup was not enough.",
    approach: [
      "Placeholder: why hybrid RAG (vector plus graph) over plain vector search.",
      "Placeholder: why LangGraph and multi-agent routing instead of a single chain.",
    ],
    results: [
      "Improved answer relevance by 49% and groundedness by 5.4% over baseline RAG.",
      "Reduced response latency by 62.5%, from 80s to 30s.",
    ],
    whatIdDoDifferently: "Placeholder: honest reflection on a limitation or tradeoff in this system.",
  },
  {
    slug: "demand-forecasting",
    title: "Retail Demand Forecasting Pipeline",
    oneLiner: "Random Forest beat LSTM by 60%, deployed on AWS with CI/CD",
    featured: true,
    stack: ["PyTorch", "TensorFlow", "MLflow", "FastAPI", "Docker", "AWS EC2", "PostgreSQL"],
    problem: "Placeholder: the forecasting problem and why it matters for retail operations.",
    approach: [
      "Placeholder: why deep learning was tried first, and how the Random Forest baseline came about.",
      "Placeholder: how the deployment pipeline was designed (Docker, CI/CD, EC2).",
    ],
    results: [
      "Random Forest reduced error to MSE of 897, a 60% improvement over the best LSTM model.",
      "Deployed as a live REST API on AWS EC2 with automated CI/CD via GitHub Actions.",
    ],
    whatIdDoDifferently: "Placeholder: what you'd reconsider, e.g. earlier baseline testing before investing in deep learning.",
  },
  {
    slug: "bankruptcy-prediction",
    title: "Bankruptcy Risk Prediction",
    oneLiner: "XGBoost, ROC-AUC 0.96, SHAP-driven explainability",
    featured: true,
    stack: ["Python", "XGBoost", "SHAP", "Scikit-learn"],
    problem: "Placeholder: why early bankruptcy detection matters and what made this dataset hard (imbalance, 94 features).",
    approach: [
      "Placeholder: feature reduction from 94 to 58, class balancing choices.",
      "Placeholder: why threshold tuning by F2 score instead of default 0.5 threshold.",
    ],
    results: [
      "Achieved ROC-AUC of 0.96 and 73% recall for identifying distressed firms.",
      "Used SHAP to translate model outputs into risk-management recommendations.",
    ],
    whatIdDoDifferently: "Placeholder: a tradeoff you'd revisit, e.g. precision-recall balance in a real deployment context.",
  },
  {
    slug: "train-delay-prediction",
    title: "Train Delay Prediction",
    oneLiner: "Caught and reversed a preprocessing mistake mid-project",
    featured: true,
    stack: ["R", "RStudio", "XGBoost"],
    problem: "Placeholder: the operational prediction problem on 1,100 real-world records.",
    approach: [
      "Placeholder: the initial approach, including the outlier removal mistake and how it was caught.",
      "Placeholder: cyclical sine-cosine encoding for time features and why it helped.",
    ],
    results: [
      "Naive outlier removal increased MSE by 129%, caught and reversed.",
      "Achieved best performance among three competing groups, final MSE of 29,222.",
    ],
    whatIdDoDifferently: "Placeholder: honest note on what you'd validate earlier next time.",
  },
  {
    slug: "house-price-prediction",
    title: "House Price Prediction",
    oneLiner: "Feature ablation proved which variable actually mattered",
    featured: false,
    stack: ["XGBoost", "Lasso", "Streamlit", "Docker"],
    problem: "",
    approach: [],
    results: ["Removing the Neighborhood feature increased RMSE by over 7% in XGBoost."],
    whatIdDoDifferently: "",
  },
  {
    slug: "ecg-signal-classification",
    title: "ECG Signal Classification",
    oneLiner: "Structured iteration under severe data scarcity (105 samples)",
    featured: false,
    stack: ["R", "XGBoost", "Signal Processing"],
    problem: "",
    approach: [],
    results: ["Improved accuracy from a 42% baseline to 64%, a 52% relative improvement."],
    whatIdDoDifferently: "",
  },
  {
    slug: "big-data-clustering",
    title: "Big Data Processing & Distributed Clustering",
    oneLiner: "Distributed DBSCAN clustering on a 23M+ row geospatial dataset",
    featured: false,
    stack: ["Apache Spark", "Databricks"],
    problem: "",
    approach: [],
    results: ["Evaluated partitioning tradeoffs using Silhouette Score and noise analysis."],
    whatIdDoDifferently: "",
  },
  {
    slug: "combinatorial-flips",
    title: "Algorithmic Verification of Combinatorial Flips",
    oneLiner: "Custom C++ verification engine, O(n log n + n² log M) complexity",
    featured: false,
    stack: ["C++", "Complexity Analysis"],
    problem: "",
    approach: [],
    results: ["Built a modular verification pipeline using Euclidean GCD, combinatorial backtracking, and custom QuickSort."],
    whatIdDoDifferently: "",
  },
  {
    slug: "huffman-coding",
    title: "Huffman Coding",
    oneLiner: "Built entirely from first principles, no libraries",
    featured: false,
    stack: ["C++"],
    problem: "",
    approach: [],
    results: ["Full encoding pipeline built from scratch with no external libraries or AI assistance."],
    whatIdDoDifferently: "",
  },
];
