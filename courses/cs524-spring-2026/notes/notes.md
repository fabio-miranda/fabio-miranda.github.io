
### CS524 - Big Data Visualization and Analytics (Spring 2026) - Class Notes

Note: This is a living document and will be updated throughout the semester to reflect what we discuss in class.

<details>
<summary>Session 1: Introduction to the course & big data visual analytics</summary>

## Session 1: Introduction to the course & big data visual analytics

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

</details>

<details>
<summary>Week 2</summary>

Coming during week 2

</details>