
### CS524 - Big Data Visualization and Analytics (Spring 2026) - Class Notes

Note: This is a living document and will be updated throughout the semester to reflect what we discuss in class.

<details>
<summary>Session 1: Introduction to the course & big data visual analytics</summary>

### Session 1: Introduction to the course & big data visual analytics

### Class 1 notes

#### What counts as "Big Data" in this course?

Classic framing (3Vs): Big data is not only "large." It can be large volume, high velocity (arriving/updated in real time), and/or high variety (heterogeneous / unstructured).

Course framing (expanded ontology): The course uses an expanded "dimensions" view (building on volume/velocity/variety and adding dimensions like veracity and value, among others). Working definition for CS 524: Any dataset that fits at least one of these dimensions counts as "big data" for the class. See Kitchin and McArdle, 2016.

Examples: "Big data" can include things like collaborative mapping / OpenStreetMap-style datasets (human-contributed global geographic data). It can also include LiDAR point clouds (e.g., dense 3D scans of a city).

#### What "Visualization & Visual Analytics" means here (and what it's not)

Not "just making charts." At the 500-level, visualization/visual analytics should be treated as a research field, not just chart-making. 

#### Field context (history + community)

- Visualization grew historically out of computer graphics (SIGGRAPH, then visualization spun off into its own conference lineage).
- The modern VIS community reflects multiple roots (InfoVis, SciVis, VAST). 

#### What "Big Data Visualization & Analytics" is (the intersection)

This course is framed as analyzing/visualizing datasets and models that are so massive, fast-moving, or complex that traditional database + visualization tools fail. 

A key mantra: problems should sit at the intersection of:
- Large-scale computing
- Human perception / interaction
- Data science / analytics

If a problem can be solved purely by one of these alone, it's not the target of this course's "big data vis & analytics" focus.

#### Why "big data" creates challenges for visualization systems

Using the 5 dimensions (volume, velocity, variety, veracity, value), each dimension introduces challenges. 

Interactivity is non-negotiable (latency affects reasoning):
- A key point: visual analytics is built around interactivity, but large data can make computation the bottleneck; when computation stalls, interactivity collapses. 
- Increased latency reduces how quickly users make observations, draw generalizations, and generate hypotheses (Liu and Heer, 2024).
- Systems should aim for low-latency interaction to support reasoning. 

#### Eras of scientific discovery

- Data-driven science is the fourth paradigm of scientific discovery: using large-scale data to drive discovery across domains (science, industry, government).
  - Discovery is increasingly driven by collecting, managing, and analyzing large-scale datasets across domains.
  - The "fourth era" follows empirical science (experiments), theoretical science (models), and computational science (simulation), and becomes more important as data volumes/streams make discovery "data-first."
  - Big data visualization & analytics sits directly inside this era: its job is to turn massive/complex data into actionable insight while keeping analysis interactive and human-centered.

- Beyond the "data-driven science" era, we are now (post-2025) approaching a fifth era driven by AI/ML/LLMs (Miolane, 2025).
  - Breakthroughs will need to come from human expertise guiding AI + AI augmenting human expertise.
  - Without expert guidance, AI can be harmful ("set the lab on fire" vs advancing science).
  - Experts must tailor algorithms and data practices to domain realities (rather than waiting for AI to "handle" noisy/specialized data).
  - Big data visualization & analytics also sits directly inside the fifth era, but unlike the fourth era (where the main challenge is turning data into insight), the fifth era adds a new core job: making AI/ML/LLM reasoning inspectable, steerable, and safe. That means helping experts interrogate model outputs, surface uncertainty / failure modes, connect outputs back to evidence & provenance, and support human-in-the-loop oversight so domain experts can guide the system instead of blindly trusting it.


#### "Dashboard" vs "Visual Analytics system"

The course explicitly sets a bar: the goal is not a simple dashboard; you should understand the difference between a dashboard and a visual analytics system.

A concrete success metric stated:
- If you end up "closer to a dashboard," you're not very successful in this class.
- If you end up "closer to" an interactive, research-grade VA system idea, you are successful. 

#### Course structure: themes + sessions

Three big themes:
- Data-to-Visualization systems (foundations) 
- Building and evaluating systems in the age of AI 
- Pipelines and representations for exploration 

These are broken into 10 sessions, each driven by a set of research papers. 

#### Expectations + grading + logistics

No weekly essays; instead, you're expected (as a graduate class) to keep up with required readings and at least skim papers weekly to engage with discussions and classmates' presentations.

Research paper presentations: You give two presentations. Pick a topic + paper set; explain key ideas, strengths/limits, and lead discussion.

Project: Two valid "paths" to a strong project:
1. Research path: scope an interesting research problem and contribute toward a solution; deliverable emphasizes a narrative of your journey (what worked, what didn't, what you'd do with more time). 
2. Practical path: build a functional, "high-impact" (context-dependent) method/tool that provides immediate utility (even if it doesn't look like a traditional research paper). 

Scoping + instructor interaction is part of the project:
- Scoping matters: too trivial or too hard hurts outcomes; you're expected to interact with the instructor to converge on a well-defined project. 
- Strong projects often have synergy: something that motivates you and is interesting to the instructor (so you get more guidance and momentum). 

Quick "To Do" checklist for students:
- Pick (or brainstorm) candidate datasets that satisfy ≥ 1 big-data dimension. 
- Start scanning the reading list each week; come prepared to discuss papers. 
- Start forming a project direction before Week 5 and use office hours to scope it well. 
- Aim beyond a dashboard: define the "technique/methodology/system contribution" you want to deliver. 

***

### Class 2 notes

#### Visual analytics process

- The visual analytics process is an iterative, human-in-the-loop loop where people steer computation and visualizations. Keim et al., 2008 describe visual analytics as a loop rather than a one-pass pipeline: start with an initial representation, then interactively manipulate the data and the view to gain insights.
- Visual analytics mantra: Analyze first, show the important, zoom/filter and analyze further, details on demand.

#### Dashboards vs. VA systems: the "cube" spectrum

- A VA system is a combination of:
  - Data management (backend / wrangling),
  - Analytics (models/algorithms),
  - Visualization (interactive views),
- A VA system should support "discovery of the unexpected."

- Conrow et al., 2022 place dashboards vs VA systems along three dimensions:
  - Input data complexity
    - Dashboards: typically rely on standardized / already-prepared data.
    - VA systems: include data handling + wrangling as part of the workflow.
  - User interaction
    - Dashboards: repeatable tasks (monitoring, selection/filtering/comparison).
    - VA systems: open-ended, exploratory workflows.
  - Analytical complexity
    - Dashboards: primarily informational display and predefined outputs.
    - VA systems: iterative, loop-based hypothesis testing with richer analysis.
  
- Mislabeling a VA contribution as a dashboard signals misunderstanding of the spectrum.

#### Practical challenges in big-data VA systems (the "top-right corner of the cube" problems)

- Several obstacles to moving toward high analytical complexity + high interaction + complex data:
  - Unstructured & heterogeneous data:
    - Real-world data is messy; VA systems must wrangle and align multimodal inputs so exploration and comparison are even possible.
    - Challenge: making messy, multimodal, real-world data "line up" so interaction + comparison is possible.
    - Example you discussed: Miranda et al., 2020 supporting street-level image exploration, where users drill into images, select architectural façade features, and compare results across space and time, which only works if the data is aligned consistently.
  - Advanced visualizations & interactions:
    - Complex phenomena often require new encodings and interactions beyond standard charts to reveal patterns.
    - Challenge: standard charts often aren't enough; complex phenomena and data need new encodings.
    - Example: Mota et al., 2026 contribute a novel façade "sunlight access" visualization that shows multiple time steps to enable comparisons across time.
  - Customizable visualizations:
    - Users need to iterate over a visualization design space to match tasks, data, and hypotheses.
    - Challenge: different users/tasks need different visual forms; the system should support rapid iteration in a design space. Visualization grammars are a mechanism to support "small changes → big shifts" (e.g., bar chart → scatterplot), but this gets harder with big/complex data.
    - Example: Moreira et al., 2023 propose a grammar designed for visualizations in urban environments.
  - Real-time & interactive queries (latency):
    - Low latency is essential; as latency rises, the number of hypotheses a user can test collapses.
    - Challenge: latency directly limits hypothesis generation; high latency reduces how many questions users can ask.
    - Example: Wang et al., 2021 accelerate interactive querying via a learned / ML-based structure rather than a purely database-style execution path.
  - Analytical integration (models/ML inside the loop):
    - Embedding models/ML means surfacing parameters, assumptions, and failure cases with explainable controls, not just running code.
    - Challenge: integrating analytics isn't just "call a model"; it introduces parameters, assumptions, and failure cases that must be surfaced with explainable controls.
    - Example: Doraiswamy et al., 2015 contribute a system for exploring a building design space with many competing objectives/parameters (e.g., views toward parks/landmarks).
  - Multi-resolution reasoning:
    - Systems must support scale shifts (space/time hierarchies) without breaking the user's analytical flow.
    - Challenge: supporting fluid transitions across spatial/temporal scales (city → neighborhood → street; year → minute) without breaking analytical flow.
    - Example: Miranda et al., 2019 contribute a system for sunlight-access that supports neighborhood-level views and drill-down behavior.

- Landmark paper:
  - "Visual Exploration of Big Data: A Study of New York City Taxi Trips" (2013) is a foundational paper for the area, supporting a wide range of spatiotemporal queries, and received a Test of Time Award (2023).

***

### Class 3 notes

#### TaxiVis
- Why TaxiVis matters: cornerstone of big-data visual analytics and received a Test of Time Award in 2023 (10-year impact window).
- The committee highlighted it as a landmark in urban data visualization, with strong contributions in query language and real-world large-scale data querying, with impact inside and outside VIS.
- Core idea: "taxi as a sensor for city life." Taxi pickups/drop-offs can be treated as signals to detect events and anomalies in the city (e.g., unusual drops in activity; blocked streets during a parade).
- Scale challenge (why systems design is required): ~500,000 trips/day, plus multiple attributes beyond location, even simple aggregation creates too many slices (e.g., 365×24 hourly slices/year), so the system must guide users toward interesting slices rather than expecting manual browsing.
- VA system operationalizes the "data → insight" framing, with explicit emphasis on hypothesis generation and exploration.
- Visual query model ("what / where / when"): TaxiVis emphasizes a visual query model where users can visually specify what, where, and when as part of query formulation. It also includes a custom database engine to keep those queries real-time.
- High-level contributions highlighted: multi-dimensional exploration, coordinated views over spatiotemporal slices, interactive query refinement, parameter sweeps, and adaptive level-of-detail rendering for clutter-free views.

</details>

<details>
<summary>Session 2: Web-first big-data visualization</summary>

### Session 2: Web-first big-data visualization

### Class 4 notes

#### Shifting the VA system center of gravity:
- A visual analytics system is often split into front-end (visualization/interaction) and back-end (data management + heavy analytics), with communication via HTTP requests.
- Trending away from the classic "server does the work, browser only displays" model, toward low-latency computation inside the browser when possible.
- Key motivation: simpler development/deployment (fewer moving parts than a full client+server stack) and lower interaction latency (less reliance on round trips).
- Most real systems mix multiple components. The core system-design skill: making intentional choices about what runs where, based on latency needs, scalability, and flexibility.
- Interactive big data VA is largely a problem of latency engineering and placing computation intelligently.
- A "real" VA system is a stack of technologies (not a single one): e.g., mixing database tech, indexing, WebGL/WebGPU, and possibly WebAssembly depending on the design.

#### Back-end approaches: Databases vs Data Cubes
- Database-backed querying (Postgres/MySQL/PostGIS, etc.)
  - You store raw data in a DBMS and execute queries on demand.
  - More flexible than cubes, but can struggle to hit cube-like latency without careful indexing/caching/GPU acceleration.
  - Strength: flexibility (new columns, new indices, evolving schemas, many query types).
  - Cost: queries can be slow in worst cases (especially without the "right" indices), because computation may require scanning many rows.
- Data cube / OLAP-style precomputation
  - You preprocess raw data into a multidimensional structure that stores precomputed aggregates for a known query family.
  - Strength: extremely fast lookup of precomputed results.
  - Costs: Storage can grow quickly (many combinations of dimensions); Rigidity: if you add a new dimension or need new query support, you often must rebuild / recompute the cube.
  - Nanocubes (2013): Introduced as a data-cube approach tailored to real-time exploration of spatiotemporal datasets. Supports interactive queries over datasets up to ~billions of points with sub-0.1s latency (contrasted with much slower latencies in traditional DB setups for similar workloads).
  - Uses a tree-like cube/index structure to support fast, interactive aggregation queries.
  - Memory can trend toward a bounded/plateau behavior: the structure can share links/nodes rather than duplicating everything as dimensionality grows.
  - Strengths: very fast interactive aggregations once built.
  - Limitations:
    - Works best when data maps cleanly to a tabular / attribute model.
    - Schema evolution is painful: adding a new column/dimension often implies rebuilding the cube/tree.
    - Building cubes over very large datasets can be expensive, even if query time is great.
- Database vs data cube is a fundamental design choice: flexibility vs speed (plus storage/rigidity tradeoffs).

#### Front-end approaches
- WebGL:
  - Web-facing version of OpenGL-style rendering.
  - Primarily designed around a rendering pipeline.
- WebGPU:
  - Modern web API modeled after low-level GPU APIs (e.g., DirectX 12 / Vulkan / Metal families). Supports compute pipelines.
- WebAssembly
  - Enables compiling C/C++/Rust into a browser-executable format.
  - Part of the toolkit for pushing more computation client-side.

***

### Class 5 notes

#### GPU acceleration beyond rendering (query processing)
- Raster Join for speeding up spatial join queries by leveraging GPU-style processing.
  - Spatial join: match spatial objects/points by spatial relationship (intersection/containment/etc.).
- Historical constraint that GPU compute used to need to be "embarrassingly parallel" (minimal inter-thread communication).
- Modern GPU programming increasingly relies on primitives like atomic operations.
- Older technique using a per-pixel linked list (order-independent transparency) as a conceptual building block for handling many fragments per pixel. Useful as a mental model for "GPU-side data structures," with its own performance caveats.

#### WebGL vs WebGPU: what changes for VA systems
- WebGL
  - Essentially brings OpenGL-style rendering to the browser.
  - Good for graphics, but constrained for general compute-heavy pipelines.
  - Mental model: you write shaders and feed geometry/data, GPU rasterizes, pixels on screen.
  - Limitation framing: WebGL is mainly built around rendering (vertex/fragment shaders), not general computing.
- WebGPU
  - A more modern web API inspired by explicit graphics APIs (e.g., Vulkan/Metal/DX12 style).
  - Key conceptual shift: less "global state machine," more explicit pipelines/resources/commands.
  - Not limited to just vertex + fragment shader stages.
  - Opens the door to tighter compute + rendering integration (important for interactive VA workflows that want GPU-accelerated analytics).

</details>

<details>
<summary>Session 3: Database-backed visualization systems</summary>


### Class 6 notes

#### WebAssembly (Wasm): bringing "native-ish" CPU compute to the browser
- WebAssembly compiles languages like C/C++/Rust into a browser-executable bytecode.
- Typical architecture:
  - JavaScript handles UI + events + glue code.
  - Wasm module does heavy computation (called from JS).
- Can get close to native for many compute workloads.
- It's not always "compile and done", dependencies matter (native libs need to be compatible/portable).
- Data/memory exchange requires attention (typed arrays, memory layout, copying overhead, etc.).

- The bigger point: moving computation to the client reduces latency.
- Framing of a classic tradeoff:
  - Server-side: high efficiency, but potentially high latency (network + backend query round-trips).
  - Old browser-only: low latency, but often low efficiency (JS limits).
- New reality (with WebGPU + Wasm):
  - You can often get low latency + high efficiency by doing more locally in the browser.

- Examples:
  - Running segmentation / ML workloads in-browser (WebGPU).
  - Running pieces of LLMs or other models client-side (WebGPU/Wasm).

#### DuckDB-Wasm
- DuckDB-Wasm: port a full columnar analytics database to the browser using Wasm.
- DuckDB's key execution idea:
  - Vectorized / chunk-at-a-time processing (vs row-at-a-time).
  - Enables many CPU/cache-friendly optimizations.
- Columnar storage benefits:
  - Better for analytics queries that touch a subset of columns.
- Apache Arrow:
  - Shared columnar memory format used across tools (Spark/Pandas/etc.).
  - Helps interoperability and efficient data exchange between systems.

#### Latency in interactive visualization
- Liu and Heer, 2014: Empirical result showing that adding ~500ms latency measurably harms exploration:
  - People interact less, cover less of the space, generate fewer observations/generalizations/hypotheses.
  - This finding pushed the field towards systems and data structures that minimize latency.

#### Datacube lineage:
- Motivation for datacubes:
  - Precompute / index enough aggregates so interactive queries are fast.
  - These are systems and data structures built to avoid expensive per-interaction recomputation by using pre-aggregation, indexing, or approximation.
    - Example: Top-K Interactive queries (TopKube):
      - Strategy: keep summaries of ranked lists, and answer interactive queries by merging those ranked lists.
      - Key algorithmic idea: useThreshold Algorithm (TA): don’t fully merge everything; focus on the items likely to make the top-K, and allow controlled approximation (e.g., "95% correct").
  - But cubes have real issues, such as hard to change schema, precomputation costs.
- Mosaic: "new wave" (2024-era) architecture:
  - Adds a layer between the application and the database.
  - Core idea:
    - Interactive dashboards have multiple coordinated views issuing related queries.
    - Instead of issuing many separate queries, Mosaic can merge/consolidate queries and reduce redundant work.

### Class 7 notes

- Mosaic: a middle tier that coordinates views and databases
  - Typical interactive interfaces have multiple coordinated views; naively, each view fires its own queries.
  - Mosaic inserts a Coordinator layer between the UI components ("clients") and the database:
    - Clients publish declarative queries (their data needs).
    - The Coordinator manages these queries, handles linked interaction state, and applies optimizations before hitting the data source.
- Mosaic Selections: optimizing selection-dependent query workloads
  - A follow-on direction discussed was Mosaic Selections, which goes deeper into how linked selections / predicates across views should be represented and optimized.
  - Pixel constraint as a first-class driver:
    - Selections/aggregations can be optimized by binning at the resolution implied by the number of pixels, because you never need more bins than the display can show.
- Big picture takeaways
  - Latency changes cognition. Even “small” delays can reduce hypothesis generation and dataset coverage.
  - Interactivity at scale is a systems problem, not just a visualization problem:
    - multi-view coordination,
    - workload-aware optimization,
    - caching/prefetching,
    - and selective pre-aggregation are all part of the same loop.
  - Hybrid approaches: databases for generality + automatic cube/index building for interaction paths.
 

</details>

<details>
<summary>Session 4: Benchmarking & evaluating systems</summary>


### Class 8 notes

#### Why evaluation is the recurring pain point in VA systems
- VA systems are often complex end-to-end pipelines (data → transforms → models → visuals → interaction → decisions), so it’s hard to isolate what "worked" and why.
- A common critique in visualization/VA is that system papers can feel like:
  - Anecdotal ("we built it and someone liked it")
  - Hard to generalize (great in one domain, unclear transfer)
  - Under-instrumented (insufficient evidence that the system improves outcomes)
 
#### What the literature criticizes (and why it matters)
- Many VA papers rely heavily on summative evaluation (end-of-project reflection / scenarios / demonstrations) and sometimes without human-subject studies, which weakens claims about usability, insight, or decision support.
- The field keeps asking:
  - What generalizable knowledge did we learn beyond a one-off tool?
  - What is the evidence that the system improves analysis or decisions?
 
#### Summative evaluation for VA systems
- Different approaches:
  - Theoretical methods
  - Quantitative user testing
  - Quantitative user opinion
  - Quantitative automation testing
  - Insight-based evaluations
  - Case studies
  - Inspection methods
- Khayat et al., 2020 provide a survey, taxonomy and risk-based breakdown and analysis of evaluation methods used in summative evaluation of VA solutions.

#### An ontology for improving VA systems
- Chen and Ebert, 2019 propose the IVAS ontology (Improving Visual Analytics Systems)
- An ontology that records symptoms → causes → remedies → side-effects and supports abstract reasoning over a small set of abstract entities built from stats, algorithms, vis, and interaction.
- Designing a VA workflow is viewed as an optimization of the cost-benefit ratio.
- The ontology’s core entities (medical-style reasoning):
  - Symptoms: what goes wrong / what users experience (e.g., confusion, slow analysis, interaction friction, lack of trust)
  - Causes: why it happens (e.g., too much information loss, poor encoding, workflow mismatch, high interaction cost)
  - Remedies: what you change in the system (e.g., redesign interaction, add provenance, change aggregation, restructure workflow)
  - Side effects: what you might break by applying a remedy (e.g., added complexity, slower runtime, increased cognitive load)
- This structure is meant to support systematic critique and more generalizable design knowledge.
- Modeling the VA pipeline as "processes" with information trade-offs:
  - Each process is characterized by trade-offs among:
    - Alphabet compression: How much entropy / uncertainty is reduced by the process.
    - Potential distortion: Error introduced due to information loss or imperfect modeling.
    - Cost: Computational cost, interaction cost, cognitive cost, time cost
- VA workflow design can be framed as optimizing a cost–benefit ratio, where "benefit" relates to useful compression (reducing uncertainty) while controlling distortion, under acceptable cost.
- Instead of evaluating “the whole system” in a vague way, the framework suggests:
  - Identify a symptom (e.g., "interaction feels slow")
  - Hypothesize causes using the trade-off language
  - Propose a remedy and predict side effects
- This ontology can be operationalizable:
  - As a checklist for system iteration ("what symptom are we fixing?")
  - As a structured evaluation plan ("what measure reflects cost vs distortion vs benefit?")
  - As a way to produce generalizable claims (mapping design decisions to reusable reasoning patterns)

#### Takeaways
- VA evaluation isn’t "one study", it’s layered evidence across components + system outcomes.
- The information trade-off lens (compression / distortion / cost) gives a common vocabulary to justify design decisions and structure evaluation beyond anecdotes.


</details>
