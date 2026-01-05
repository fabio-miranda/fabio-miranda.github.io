Here are **10 “new” weeks** that feel very current (and still on-theme for *big data visualization*), each with **a clean one-week arc** and **recent papers** you can anchor on.

I’m biasing toward topics that (a) weren’t already in your 424 buckets, and (b) have *systems / scalability* DNA.

---

## 1) Database-backed visualization systems (the “modern replacement” for MapReduce-era thinking)

**Why it fits:** Big-data vis bottlenecks are now *query latency, interaction loops, and system architecture* more than batch compute.

**Lecture arc:** vis grammars → query compilation → client/server + in-browser DB → caching/materialization.

**Readings (recent-first):**

* *Mosaic: An Architecture for Scalable & Interoperable Data Views* (Heer et al., TVCG/VIS). ([UW Interactive Data Lab][1])
* *Mosaic Selections* (pairs nicely with Week 2). ([arXiv][2])

---

## 2) Interaction at scale: selections, crossfilter, and “latency engineering”

**Why it fits:** Selection/linked brushing is where many systems fall over at millions–billions of rows.

**Lecture arc:** selection semantics → predicate management → optimization opportunities (pre-agg, selection-aware indexes) → benchmarking.

**Readings:**

* *Mosaic Selections: Managing and Optimizing User Selections for Scalable Data Visualization Systems* (Heer, Moritz, Pechuk; arXiv 2025 / Proc. VIS in TVCG). ([arXiv][2])

---

## 3) Benchmarking & evaluation for scalable visual analytics systems

**Why it fits:** “It feels fast” isn’t a result. This week gives students language + methodology for *performance claims* in big-data vis.

**Lecture arc:** workloads for dashboards → interaction traces → goal-driven simulation → reproducibility.

**Readings:**

* *SIMBA: An Adaptive Benchmark for Modeling User Exploration of Large Datasets* (Purich, Wise, Battle; SIGMOD/PACMMOD 2025). ([SIGMOD 2025][3])
* *ReVISit 2: A Full Experiment Life Cycle User Study Framework* (VIS 2025). ([IEEE VIS][4])

---

## 4) Streaming + online transformation pipelines (time series & event sequences)

**Why it fits:** “Big data” is often *arriving continuously*. This week is a natural complement to your progressive/uncertainty material, but with **systems + algorithms** emphasis.

**Lecture arc:** incremental computation → progressive transforms → streaming UI contracts → backpressure.

**Readings:**

* *Visualization-Oriented Progressive Time Series Transformation* (PACMMOD 2025). ([CoLab][5])
* *Managing Data for Scalable and Interactive Event Sequence Visualization* (LDAV 2025). ([LDAV][6])

---

## 5) In situ / in transit visualization (HPC-scale “big data”)

**Why it fits:** This is where “can’t load it” is literal—data volumes are too large to write to disk.

**Lecture arc:** in situ architecture patterns → staging/in-transit → scheduling + contention → fidelity vs cost.

**Readings:**

* *Free Lunch in In Situ Visualization: Leveraging Idle CPU Resources to Mitigate GPU Contention* (LDAV 2025). ([LDAV][6])
* LDAV 2025 keynote framing on **AI-assisted reduction + visualization** (good discussion starter). ([LDAV][6])

---

## 6) Out-of-core rendering + compression for massive volumes / imagery

**Why it fits:** This is the “visualization systems” version of external memory algorithms—very aligned with *big data*.

**Lecture arc:** multiresolution + paging → compression-aware rendering → error-bounded compositing → quality metrics.

**Readings:**

* *Lossy Parallel Visualization of Large-Scale Volume Data with Error-Bounded Image Compositing* (LDAV 2025). ([LDAV][6])
* *Interactive Isosurface Visualization in Memory Constrained …* (TVCG 2025). ([computer.org][7])
* *Out of Core and Adaptive Image Blending Approach for Large Scale Image Mosaics* (LDAV 2025). ([LDAV][6])

---

## 7) Web-first big-data visualization: WebGPU/WebAssembly + deployment reality

**Why it fits:** A lot of “big data visualization” is now delivered through browsers, notebooks, and lightweight cloud apps.

**Lecture arc:** what *actually* runs where → browser GPU compute limits → client/server partitioning → reproducible deployment patterns.

**Readings:**

* *Trame: Platform Ubiquitous, Scalable Integration Framework for Visual Analytics* (CG&A 2025). ([vip.ieeevis.org][8])
* *A Reality Check of Browser-Based GPU Acceleration* (ACM 2025; WebGPU performance). ([ACM Digital Library][9])
* Example WebGPU scientific vis implementation paper (volume rendering in the browser). ([MDPI][10])

---

## 8) Privacy-preserving visualization (differential privacy moves from theory to practice)

**Why it fits:** Big-data viz increasingly means *sensitive* data; privacy impacts the visual encodings themselves.

**Lecture arc:** DP basics (just enough) → how noise manifests visually → utility metrics → design guidance.

**Readings:**

* *Illuminating the Landscape of Differential Privacy* (TVCG 2025). ([computer.org][11])
* *Investigating the Visual Utility of Differentially Private …* (2024). ([PMC][12])
* Visual analysis for designing DP schemes / simulating attacks (2024). ([ScienceDirect][13])

---

## 9) Scalable graph visual analytics + visual graph querying

**Why it fits:** Graphs are a classic “big data” pain point (layout, interaction, query semantics).

**Lecture arc:** graph query primitives → “visual query” languages → scalability strategies (sampling, aggregation, multiscale).

**Readings:**

* *Envisage: Towards Expressive Visual Graph Querying* (VIS 2025). ([IEEE VIS][4])

(If you want a “systems angle” assignment: have them implement a tiny visual-query-to-graph-query translator for a constrained grammar.)

---

## 10) GenAI/LLMs & agents for visualization (but framed as *systems*, not “vis for ML”)

**Why it fits:** This is the biggest recent shift in how people *build* and *use* visualization tools—NL→vis, agentic dashboards, LLM-in-the-loop scientific vis.

**Lecture arc:** NL2Vis pipeline → reliability/debuggability → evaluation of generated charts → agentic workflows (multi-step reasoning + tools).

**Readings (mix VIS + NLP venues + surveys):**

* Survey: *Generative AI for visualization: State of the art and future opportunities* (2024). ([ScienceDirect][14])
* *WaitGPT: Monitoring and Steering Conversational LLM Agent in Data Analysis with On-the-Fly Code Visualization* (arXiv 2024). ([arXiv][15])
* VIS 2024: analytic specification generation for NL→vis debuggability. ([IEEE VIS][16])
* VIS 2025: *DataWink* and *DeepVIS* (two different takes on LLMs + vis examples/reasoning). ([IEEE VIS][4])
* LDAV 2025: *ChatVis: Large Language Model Agent for Generating Scientific Visualizations* (great for “big scientific data” angle). ([LDAV][6])
* NLP venue example: *NVAGENT* (ACL 2025) for NL2Vis automation workflows. ([ACL Anthology][17])
* If you want a fresh “2026 hook”: *Charts-of-Thought* on LLM visualization literacy. ([Stony Brook University Computer Science][18])

---

# 3 extra “swap-in” weeks if you want options

* **Query optimizer visualization / database internals via visual analytics** (nice bridge to your learned-index week). ([COMP Personal Webpage Server][19])
* **Immersive analytics for large data** (often optional, but VIS is clearly trending here). ([IEEE VIS][4])
* **Misleading charts + model robustness** (fresh twist: deception affects vision-language models). ([IEEE VIS][4])

---

If you tell me your target format (e.g., **13-week semester with 1 paper discussion + 1 lab per week** vs. **seminar-style reading course**), I can reorder these into a coherent arc and suggest **one lightweight assignment per week** that matches the readings.

[1]: https://idl.cs.washington.edu/files/2024-Mosaic-TVCG.pdf?utm_source=chatgpt.com "[PDF] Mosaic: An Architecture for Scalable & Interoperable Data Views"
[2]: https://www.arxiv.org/abs/2507.19690?utm_source=chatgpt.com "Mosaic Selections: Managing and Optimizing User ..."
[3]: https://2025.sigmod.org/toc-3-1.html "2025.sigmod.org"
[4]: https://ieeevis.org/year/2025/info/program/papers_list "Accepted Papers, sorted by Session"
[5]: https://colab.ws/articles/10.1145%2F3769841?utm_source=chatgpt.com "Visualization-Oriented Progressive Time Series Transformation ..."
[6]: https://ldav.io/2025/program.html "LDAV 2025 – Program"
[7]: https://www.computer.org/csdl/journal/tg/2025/02/10577555/1Y9g28FXtq8?utm_source=chatgpt.com "Interactive Isosurface Visualization in Memory Constrained ..."
[8]: https://vip.ieeevis.org/year/2025/program/paper_013c31af-6df4-4dea-b01c-3f4cd7af88df.html?utm_source=chatgpt.com "Trame: Platform Ubiquitous, Scalable Integration Framework for ..."
[9]: https://dl.acm.org/doi/10.1145/3730567.3764504?utm_source=chatgpt.com "A Reality Check of Browser-Based GPU Acceleration"
[10]: https://www.mdpi.com/2076-3417/15/5/2782?utm_source=chatgpt.com "The Implementation of a WebGPU-Based Volume ..."
[11]: https://www.computer.org/csdl/journal/tg/2025/09/10599095/1YBtryV1Pry?utm_source=chatgpt.com "Illuminating the Landscape of Differential Privacy"
[12]: https://pmc.ncbi.nlm.nih.gov/articles/PMC11296227/?utm_source=chatgpt.com "Investigating the Visual Utility of Differentially Private ..."
[13]: https://www.sciencedirect.com/science/article/pii/S2468502X24000433?utm_source=chatgpt.com "A visual analysis approach to risk-aware formulation of ..."
[14]: https://www.sciencedirect.com/science/article/pii/S2468502X24000160?utm_source=chatgpt.com "Generative AI for visualization: State of the art and future ..."
[15]: https://arxiv.org/abs/2408.01703?utm_source=chatgpt.com "Monitoring and Steering Conversational LLM Agent in Data ..."
[16]: https://ieeevis.org/year/2024/program/paper_w-nlviz-1011.html?utm_source=chatgpt.com "Generating Analytic Specifications for Data Visualization ..."
[17]: https://aclanthology.org/2025.acl-long.960.pdf?utm_source=chatgpt.com "NVAGENT: Automated Data Visualization from Natural ..."
[18]: https://www3.cs.stonybrook.edu/~mueller/papers/Charts%20of%20Thought%20TVCG.pdf?utm_source=chatgpt.com "Charts-of-Thought: Enhancing LLM Visualization Literacy ..."
[19]: https://www4.comp.polyu.edu.hk/~csmlyiu/conf/PVLDB25_QOVIS.pdf?utm_source=chatgpt.com "QOVIS: Understanding and Diagnosing Query Optimizer ..."
