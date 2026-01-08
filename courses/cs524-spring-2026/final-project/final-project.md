### CS524 Big Data Visualization and Analytics - Final Projects

#### Table of Contents
1. [General Information](#general-information)
2. [Submission of Deliverables](#submission-of-deliverables)
3. [Milestone 1: Project Proposal](#milestone-1-project-proposal)
4. [Milestone 2: Midterm Review](#milestone-2-midterm-review)
5. [Milestone 3: Final Report and Presentation](#milestone-3-final-project)
6. [Latex](#latex)
7. [Evaluation and Grading](#evaluation)

### General Information

The goal of the final project is to familiarize you with the core components of big data visual analytics systems. You will also demonstrate your research skills by identifying, defining, and tackling a research problem within a course-related topic. There will be three milestones for this project spread throughout the semester: [project proposal](#milestone-1-project-proposal), [midterm review](#milestone-2-midterm-review), and [final presentation and report](#milestone-3-final-report-and-presentation).

We will use GitHub to manage code and documentation. You should create a repository for your team on GitHub Classroom, and include **all** deliverables throughout the semester. Please note that GitHub is a version control platform, so simply pushing your final proposal document defeats the purpose of using a management system. The GitHub repository should be a good representation of the evolution of all artifacts of the project.


### Submission of Deliverables
You are expected to submit your deliverables using GitHub. You should create a repository for your team on GitHub Classroom. Make sure you organize the different deliverables, including code, in different folders. **The GitHub project should contain a well-written description of the project.**

---

### Milestone 1: Project Proposal

The first milestone for the final project is proposing what you and your team will work on. You should start by brainstorming ideas with your teammate, and then reaching out for feedback. Milestone 1 is where your team commits to a project direction that is feasible, data-backed, and technically meaningful. Think of this as a lightweight "engineering + research pitch": you should convince us you can build something non-trivial, evaluate it, and explain why it matters.

#### M1 Objectives

By the end of this milestone, your team should be able to answer:

**1. What are you building or investigating and why?** Define a concrete problem and who it helps (analyst, decision maker, developer, scientist, etc.).

**2. What data will we use and can we actually get it working?** Confirm you have access, permissions (if needed), and a plan for cleaning/processing at scale.

**3. What is the "technical contribution"?** Your proposal must go beyond a basic dashboard. Examples include: a scalable data pipeline, new interaction workflow, novel visual encoding for complex data, evaluation of tradeoffs, or an integrated analytics loop with ML.

**4. How will we measure success?** Include a practical evaluation plan: performance metrics, usability testing, case study, comparison to baselines, etc.

#### M1 Topic Scope

There are several topics that cover visualization, analytics, and data management of big data. You should frame your proposal in terms of how your contribution effectively tackles data problems from one (or more) of the angles covered in the course. For a concrete description of the types of contributions expected from a visualization researcher, read Lee et al.'s [Broadening Intellectual Diversity in Visualization Research Papers](https://cmci.colorado.edu/visualab/papers/19-CGA-ContributionTypes.pdf).

At the very least, you should articulate your proposal around *one* of the six visualization areas (defined [here](https://ieeevis.org/year/2024/info/call-participation/area-model#the-vis-area-model)), broadly reviewing limitations with current approaches and how your potential contributions will advance an area. Broadly speaking, your project should fit in one of the following areas:

- Systems & Rendering: Building a visual analytics system that handles large datasets (streaming, GPU, indexing, caching, progressive loading).
- Data Transformations: Designing efficient transformations (sampling, aggregation, dimensionality reduction, graph summarization) that enable interactive exploration.
- Representation & Interaction: Creating interaction techniques or visual encodings for challenging data (high-dimensional, temporal, geospatial, multimodal, graphs).
- Analytics & Decisions: Integrating ML/analytics into an end-to-end workflow (e.g., anomaly detection + explanation + interactive refinement).
- Applications: A domain-driven problem where you adapt general methods into a specialized solution and show why it works.

Please refer to the course schedule for required and optional readings that can give you a better idea for topics, as well as recent publications (see [here](../research-presentation/) for pointers, or [here](https://ieeevis.org/year/2025/info/call-participation/area-model) for examples).

#### M1 Data Selection

Pick a dataset that is large enough to force design/engineering choices and rich enough to support real analysis questions. Your team is responsible for finding data, understanding its limitations, and identifying the main challenges. Select a dataset that could present challenges to current methods while also creating opportunities for innovative ideas and approaches. 

A good dataset should have a combination of: (1) multiple attributes and/or modalities (time + geo + text + graph, etc.), (2) messy/heterogeneous data that requires transformation, (3) scale that prevents "load it into Excel" solutions, (4) supports multiple real questions (not just one plot).

Here is a list of potential datasets, but don't limit your survey to just these websites:

- [Awesome Public Datasets](https://github.com/awesomedata/awesome-public-datasets)
- [Awesome Spatial Data](https://github.com/bchapuis/awesome-spatial-data)
- [Awesome Urban Data](https://github.com/urban-toolkit/awesome-urban-datasets)
- [Awesome Network Analysis](https://github.com/briatte/awesome-network-analysis?tab=readme-ov-file#datasets)
- [Awesome Multimodal Urban Computing](https://github.com/yoshall/Awesome-Multimodal-Urban-Computing#taxonomy-and-summary-of-open-sourced-dataset)

What is not enoug? Your project proposal should not lead to: (1) "a dashboard that shows charts" with minimal analysis, (2) a small dataset with simple filtering, (3) only a data cleaning exercise, (4) only a model-training project with a couple of plots. Your work should involve at least one substantial technical challenge (scale, interaction, system design, algorithmic transformation, or evaluation).

**Avoid selecting a dataset that has been extensively explored in the past (e.g., bike data, taxi data), unless you can identify a specific angle that might yield *new* and intriguing research problems.**

**Please be aware that merely creating a basic dashboard to visualize limited data is insufficient and does not meet the course expectations. Also be aware that the selection of a problem and dataset is the most important step, as it will directly impact the rest of your project -- a simple dataset will not provide opportunities for new approaches. The selection of your dataset and the way you define your approach will be reflected in your evaluation.**

**Also, be proactive and plan to attend office hours to discuss ideas and papers that might be useful to your team, depending on your topic.**

#### M1 Deliverables

Your team should present the proposal, clearly explaining the problem (e.g., why it is important, how you plan to address it), covering prior work, describing the data, proposal, and **timeline**. Your group will be randomly assigned to present on Tuesday or Thursday, but you are expected to attend *both* presentation days. It is up to you and your teammates to decide how the presentation will be divided between each member of the team. Keep in mind that crafting a good presentation requires time and effort, and this will be carefully considered in your evaluation. Asking questions following teams' presentations will be used to assess class participation.

Your team is responsible for surveying for interesting datasets, identifying challenges, and crafting a well-thought-out and organized presentation. In this project proposal, you should **clearly** articulate how your proposal will tackle some of the problems related to the dataset, framing it around one of the areas of visualization research. Spend some time thinking and discussing potential challenges and solutions. Make sure that you are comfortable with the problem, dataset, and proposal. 

Proper time management is crucial and will be reflected in your evaluation. Consider rehearsing your presentation to ensure it fits within the time frame. Asking thoughtful questions after other teams’ presentations contributes to participation assessment.

---

### Milestone 2: Midterm Review

In the second milestone, you will present your proposal and intermediate results. The goal is to show that your project is no longer just an idea: you have a working pipeline and early results that reduce risk for the rest of the semester.

#### M2 Objectives

By the midterm review, your team should be able to demonstrate:

1. A crisp recap of the project direction: Restate the problem, target users/tasks, and your planned contribution (system/algorithm/interaction/workflow).
2. Working data + infrastructure: You should have data access confirmed and a functioning pipeline.
3. A functional prototype (not slides-only): At minimum, a working end-to-end “vertical slice” that supports one core task on real data.
4. Intermediate results that inform decisions: For example, performance measurements, early design iterations, baseline comparisons, ablation results, pilot user feedback, or a case study walkthrough.
5. A revised plan based on what you learned: What changed since M1? What’s the new scope, risks, and next steps?

A "pretty UI" without a working pipeline, or a pipeline without any interactive/visual component, is usually not enough.

#### M2 Deliverables

Your group should present the proposal and intermediate results. The presentation should again clearly explain the problem, describe the data, proposal and intermediate results. Your group will be randomly assigned to present on Tuesday or Thursday, but again you are expected to attend *both* presentation days. It is up to you and your teammates to decide how the presentation will be divided between each member of the team. Asking questions following teams' presentations will be used to assess class participation.

Note that this midterm review will be an opportunity to assess the progress of your team, so optimize your time to ensure that you have meaningful results by the day of your presentation.

By M2, most teams should have: (1) the dataset fully acquired and processed (or a justified subset + scaling plan), (2) a prototype that supports at least one core analysis task end-to-end, (3) at least one meaningful evaluation artifact (even preliminary), (4) a revised scope that reflects reality (not just the original plan).

---

### Milestone 3: Final Project

Milestone 3 is your final delivery: a clear story, a working artifact, and evidence that your approach solves a real problem better than obvious alternatives. Treat this like a mini conference-style submission: demo + paper + reproducible project page.

#### M3 Objectives

In this milestone, you will:

1. Present the final system and findings (what you built, what works, what doesn’t, and why).
2. Submit a 4-page report (+ references).
3. Final GitHub project page.

#### M3 Deliverables

##### Presentation

Your group should present the final results of your project. The presentation should briefly explain the problem, cover prior work, describe data, proposal, final results, conclusion and future work. Just like the previous presentations, your group will be randomly assigned to present on Tuesday or Thursday, but you are expected to attend both presentation days. Asking questions following teams' presentations will be used to assess class participation.


##### Report

Your group should also submit a 4-page (plus references) report using the [IEEE VGTC Latex template](https://tc.computer.org/vgtc/publications/journal/). It is up to your team to define an appropriate outline for the paper. In this report, you should **clearly** articulate how your work tackled the problem and highlight how your results can point to future research directions. Besides concrete results, it is also important to discuss future work that you were able to identify throughout the semester. The report should contain an adequate number of figures to highlight the problem and approach.

You can use the following as a suggested outline:
- Abstract (≈150–200 words): problem, method, key result.
- Introduction: task + motivation + summary of contributions.
- Related Work: ~20 relevant works; connect directly to your approach.
- Data & Tasks: dataset description, scale, preprocessing, target tasks/users.
- Approach / System Design: architecture, algorithms, visual encodings, interactions, implementation details.
- Evaluation / Results: benchmarks, comparisons, case study, user feedback, whatever fits your project, but include evidence.
- Discussion: lessons learned, limitations, tradeoffs.
- Conclusion & Future Work: what's next and what research directions your results suggest.

Include enough figures to make the paper understandable without the demo. For example, a system architecture diagram, key UI screenshot(s) / workflow, one or two result figures (performance plot, comparison, case study output).

##### GitHub repository

On top of the presentation and project report, you should also create a well-documented GitHub project page (using [Markdown](https://www.markdownguide.org/)). The document should include: 
- README with: problem statement, dataset access instructions, setup steps, how to run, and how to reproduce key results.
- Demo media: screenshots and/or a short GIF/video walkthrough.
- Reproducibility: pinned dependencies (requirements.txt / environment.yml / package-lock), and clear run scripts.
- Project structure: organized code + brief documentation of key modules.
- Results artifacts: where evaluation outputs live (plots, logs, configs), and how they were produced.

If your dataset cannot be redistributed, document how to obtain it and provide a small sample (if allowed) plus scripts to reproduce processing. For good examples of GitHub project descriptions, see [here](https://github.com/VIDA-NYU/urban-pulse), [here](https://github.com/VIDA-NYU/city-surfaces), [here](https://github.com/uic-vis/project-3-traffic-crashes-farah-nafiul), or [here](https://github.com/duynguyen2001/Divvy-data-exploration-tool).


---

### Latex

If this is the first time using LaTeX, go through [this](https://www.overleaf.com/learn/latex/Tutorials) tutorial.

---

### Evaluation

Overall, I am looking for a project that is well-motivated, technically sound, evidence-driven, and clearly communicated. In each milestone, you will be evaluated based on several key areas:

1. Problem definition and scope.
  - Clarity of the research/engineering problem: what exactly are you trying to enable or improve?
  - Relevance to big data visual analytics and alignment with at least one course theme/area.
  - Appropriate scope for the semester (not too vague, not overly ambitious).
  - Significance: why should we care, and who benefits (analyst, decision-maker, developer, domain user)?
2. Literature review and positioning.
  - Breadth and quality of sources (papers, systems, tools, and relevant background).
  - Depth of analysis: you should go beyond summaries and explain how prior work relates to your problem.
  - Clear identification of limitations in existing approaches and the specific gap your project addresses.
  - Correct positioning of your contribution relative to prior work (what is new, different, or validated?).
3. Methodology and technical contribution.
  - Appropriateness of the visualization/analytics methods you chose for the tasks and data.
  - Soundness of design decisions: encodings, interactions, transformations, scalability strategies, and system architecture (if applicable).
  - Implementation quality: robustness, correctness, and whether the prototype meaningfully supports real tasks.
  - Evidence of non-trivial work (beyond "basic dashboarding").
4. Data collection, preparation, and analysis.
  - Data suitability: why this dataset supports the problem and what challenges it introduces.
  - Thoroughness and transparency of data processing (cleaning, filtering, transformations, feature engineering).
  - Consideration of data limitations (missing data, bias, noise, sampling issues, privacy/ethics when relevant).
5. Quality and interpretation.
  - You should connect insights back to the research problem and explain what the results mean and why they matter.
6. Evaluation and evidence.
  - Strength of evidence supporting your claims (not just "it looks good").
  - Appropriate evaluation approach for your project type.
7. Communication.
  - Presentation quality: clear story, good pacing, informative figures/demos, and well-structured slides.
  - Report quality: coherent narrative, useful figures, and reproducibility details.
  - GitHub project quality: organization, documentation, and ability for others to run/understand your project.
8. Reflection and future work.
  - Honest assessment of strengths and weaknesses (what worked, what didn’t, and why).
  - Lessons learned.
  - Specific future work: realistic next steps and research directions grounded in your results (not generic statements).
