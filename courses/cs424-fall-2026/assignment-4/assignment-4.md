### CS424 - Visualization & Visual Analytics (Fall 2026)

Instructor: Fabio Miranda

Course webpage: https://fmiranda.me/courses/cs424-fall-2026/

---

### Assignment 4: Findings

Throughout this semester, you have worked on a visualization project that evolved through three assignments. In Assignment 1, you identified a phenomenon or question of interest and collected your own dataset. In Assignment 2, you developed analytical questions, explored alternative visualization designs, and implemented initial visualizations. In Assignment 3, you evaluated your visualizations with participants, comparing static and interactive approaches and identifying opportunities for improvement.

In this final assignment, you will bring everything together by **developing an integrated visual analytics interface and using it to investigate your data and communicate your findings**.

Your goal is to move beyond individual visualizations and build a system that supports analytical reasoning. You should integrate the visualizations developed throughout the semester, refine them based on your evaluation, and use the resulting interface to answer your domain questions.

Also important, you should demonstrate how your project evolved throughout the semester, including the decisions, technical challenges, and iterations that shaped your final work.

#### Task 1: Build Your Final Visual Analytics Interface (35%)

Develop a complete, working visual analytics interface that integrates and extends the visualizations you created in previous assignments.

Your interface must satisfy the following requirements:

1. **Multiple visualizations:** Include at least two complementary visualizations that support different aspects of your analytical questions.
2. **Coordinated interaction:** Implement at least one mechanism connecting your visualizations. For example, selecting data in one view might highlight related observations in another, or applying a filter might update multiple views.
3. **Meaningful interactions:** Support at least two analytical interactions, such as filtering, selection, brushing, comparison, or details on demand.
4. **New functionality:** Implement at least one substantial new capability beyond what you submitted in Assignment 3.
5. **Integrated interface:** Organize your visualizations into a coherent interface.

**Simply placing independent charts next to each other is not sufficient.** Your visualizations should work together to support the exploration of your data. For example, suppose you collected pedestrian activity data across different locations and time periods. Your final interface might combine a map showing observation locations, a temporal visualization showing changes throughout the day, and a chart comparing pedestrian counts across locations.

#### Implementation options

You are free to choose the technologies used to build your final interface. You are encouraged to reuse and extend code developed in previous assignments rather than implementing everything from scratch.

Some suggested approaches include [Curio](https://curio.urbantk.org/), [Altair](https://altair-viz.github.io/), a web-based interface using HTML, CSS, and JavaScript, [Plotly Dash](https://dash.plotly.com/), or any other appropriate technology.

Whatever framework you choose, your application must satisfy the integration and interaction requirements described above.

**We will evaluate the functionality and analytical capabilities of your interface, not your choice of framework.**

#### Evaluation-driven refinement

Your final interface should incorporate what you learned in Assignment 3. Identify at least two observations or design decisions informed by your evaluation results. Explain how these influenced the final system, and provide before-and-after examples where appropriate. You are not required to conduct another user study.

### Task 2: Investigate Your Data and Report Findings (30%)

Now that you have developed your final interface, use it to investigate the domain questions you identified in previous assignments. You must report **at least three substantive findings** supported by your data and visualizations. For each finding, include:

1. **Analytical question:** What question or hypothesis were you investigating?
2. **Analytical process:** How did you use your interface to investigate the question? Describe the relevant interactions, filters, selections, or comparisons.
3. **Finding:** What did you discover? State a clear conclusion supported by your analysis.
4. **Supporting evidence:** Include visualizations, screenshots, numerical measurements, or other appropriate evidence supporting your conclusion.
5. **Interpretation and limitations:** What does the result suggest? What uncertainties or alternative explanations should be considered?

For example, reporting that *Location A had the highest pedestrian count* is a simple observation. A stronger finding might investigate how pedestrian activity differs across locations depending on the time of day, whether the difference persists across multiple observation periods, and whether unequal sampling affects the comparison.

You should also discuss at least one question or hypothesis that your data could not adequately resolve. Explaining why the available evidence is insufficient is a valid and valuable analytical outcome.

Remember that **findings about your data** and **findings about the effectiveness of your visualization** are different. Your main findings in this task should concern the phenomenon you investigated, not simply whether participants liked or understood your interface.

### Task 3: Document the Evolution of Your Project (20%)

Your final submission should demonstrate how your project evolved across the four assignments. Discuss the main changes in your analytical questions, data, visualizations, and understanding of the problem.

In particular, address:

- **Questions and data:** How did your original domain questions change? Did your data collection reveal limitations or lead you to investigate different questions?
- **Visualization design:** How did your visualizations evolve from the initial sketches in Assignment 2 to the final interface?
- **Evaluation:** What did you learn from Assignment 3, and how did those results influence your final design?
- **Findings:** Did your exploration reveal unexpected patterns, challenge initial assumptions, or lead you to investigate new questions?

Support your discussion with artifacts from previous assignments, such as sketches, screenshots, code, evaluation results, and development notes. Your goal is not to repeat the previous assignment reports, but to explain **how and why your approach evolved**.

### Task 4: Development Process and Individual Contributions (15%)

Demonstrate your understanding of the system you developed and the technical decisions involved in its implementation. In addition to the final working interface, you must document your development process. To do this, (1) describe **at least two substantive technical challenges** encountered while developing your final system. For each challenge, explain what was the technical problem, why was it challenging, what approaches or alternatives did you consider or attempt, how did you resolve the problem, or what limitations remain, and finally what did you learn from the experience.

Include relevant evidence, such as code snippets, screenshots, error messages, or GitHub commits. The challenges should reflect actual difficulties encountered during development, not hypothetical problems or superficial implementation details.

Also (2) document your individual contributions. Clearly identify each group member's contributions to the project, including the components they implemented, analytical work they performed, and documentation they produced. **Contributions should be visible through commits and supporting documentation, make sure to highlight that in your submission document.** You may include a table summarizing each member's contributions and linking to relevant commits or files.

Your documentation should reflect work performed throughout the assignment rather than a retrospective assembled immediately before the deadline.

### Extra Credit (Up to 10%)

#### Advanced Analytics or AI Integration

Extend your interface with an analytical capability that goes beyond the visualizations and interactions required in Task 1. Possible directions include:

- **Machine learning:** Integrate clustering, classification, anomaly detection, or another appropriate analytical model.
- **Interactive analytics:** Allow users to modify analytical parameters, such as density estimation bandwidth or clustering thresholds, and observe how the results change.
- **AI-assisted exploration:** Integrate an LLM-based feature that helps users formulate or investigate analytical questions, with appropriate mechanisms to inspect and verify its outputs.

The functionality must be directly connected to your domain questions and integrated into the final interface. Simply calling an AI API, displaying a model prediction, or adding another chart does not automatically qualify for extra credit.

**Deliverable:** A working implementation, at least one analytical example demonstrating its usefulness, and a discussion of its limitations.

### Deliverables and Submission

Continue using the same GitHub repository from Assignments 1-3. Create an `assignment-4/` directory containing the following:

1. **README.md:** A self-contained report documenting Tasks 1-4, including your interface, findings, design evolution, technical challenges, and individual contributions.
2. **Final application:** All source code, configuration files, and other artifacts necessary to run your visual analytics interface.
3. **Data and analysis:** The dataset and any scripts or transformations necessary to reproduce your findings.
6. **Extra credit (if applicable):** The implementation and documentation of your optional extensions.

Your README must include clear instructions for installing dependencies and running your application locally. If your application uses Curio, include the dataflow and relevant files needed to reproduce your system.

### Grading

We will evaluate the quality of your analytical reasoning, the functionality of your system, and the evidence supporting your design decisions and conclusions. Your final submission should make both the results of your investigation and the process that produced them visible.
