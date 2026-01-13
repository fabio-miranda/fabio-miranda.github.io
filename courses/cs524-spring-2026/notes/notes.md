
### CS524 - Big Data Visualization and Analytics (Spring 2026) - Class Notes

Note: This is a living document and will be updated throughout the semester to reflect what we discuss in class.

<details>
<summary>Week 1</summary>

### Week 1

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

</details>

<details>
<summary>Week 2</summary>

Coming during week 2

</details>