### CS424 - Visualization & Visual Analytics (Fall 2026)

Instructor: Fabio Miranda

Course webpage: https://fmiranda.me/courses/cs424-fall-2026/

---

### Assignment 3: Interaction and Evaluation

In Assignment 2, you explored your dataset, designed visualizations, and refined them through multiple iterations. In this assignment, you will focus on **interaction and evaluation**. You will implement an interactive version of one of your visualizations and conduct a user study to investigate whether interaction improves people's ability to analyze the data.

A visualization that looks good is not necessarily effective. Similarly, adding interaction does not automatically make a visualization better. How can we measure whether a design supports the tasks it was intended for? You will compare two versions of the same visualization: one static and one interactive. You will design analytical tasks, recruit at least 10 participants, collect quantitative measurements, and analyze the results. Your objective is to understand how interaction affects the analysis, using evidence rather than assumptions.

This assignment contains five required tasks and one optional extra-credit task. Continue working with the dataset, domain questions, repository, and visualizations developed in Assignments 1 and 2.

**Be concise in your report.** The questions within each task are intended to guide your work; you should not answer them individually. Instead, explain your approach, justify your decisions, and support your conclusions with evidence.

---

### Tasks

#### Task 1: Implementing interaction (20%)

Select one visualization from Assignment 2 and implement an interactive version of it. Your implementation must include **at least one meaningful interaction** that supports one or more of your analytical questions. Possible interactions include filtering, selection, brushing and linking, zooming and panning, details-on-demand, or dynamic aggregation. You are free to use any suitable visualization library or framework. You should have two versions of the selected visualization:

- **Static version:** A non-interactive visualization based on your design from Assignment 2.
- **Interactive version:** The same visualization, extended with at least one meaningful interaction.

This is very important: **The static version must be a meaningful alternative to the interactive version**. It does not need to consist of a single chart. You may use multiple static visualizations, such as small multiples, to present information that the interactive version makes accessible through filtering, selection, or other interactions. Both versions must provide the information necessary to complete the evaluation tasks. You should not intentionally make the static version less informative to favor the interactive version.

Both versions must use the same underlying dataset and comparable visual encodings. The main difference between them should be the interaction. Explain which visualization you selected, how you implemented the interaction, and why you expect it to help users complete particular analytical tasks. **The interaction must serve an analytical purpose.** For example, adding a tooltip that simply repeats information already visible in the chart is not sufficient. On the other hand, introducing filtering that allows users to compare subsets of the data could support analytical tasks that would otherwise require more effort. Your implementations must be functional and accessible to participants during the evaluation.

#### Task 2: Evaluation design (20%)

Design an experiment to compare the static and interactive versions of your visualization. Start by defining **at least one evaluation question and a corresponding hypothesis**. For example, you might hypothesize that allowing users to filter data by time reduces the time required to identify patterns across different periods. As mentioned above, this experiment must compare the static and interactive versions of your visualization In other words, you will compare two conditions:

- Condition 1. Static: Participants use the static visualization developed in Task 1, without interaction.
- Condition 2. Interactive: Participants use the interactive version of the same visualization, with the interaction implemented in Task 1.


Your evaluation must use a within-subject design, meaning that every participant evaluates both conditions. You will compare their performance to investigate whether interaction makes a difference. Start by defining at least one evaluation question and a corresponding hypothesis. For example, you might hypothesize that allowing users to filter data by time reduces the time required to identify patterns across different periods. You must then define at least two analytical tasks, each with two comparable variants (four questions in total). Each participant will perform two tasks using the static visualization and two using the interactive visualization. Importantly, **the tasks should assess the same analytical abilities but use different subsets or aspects of the data to reduce memorization effects.**

For example, consider the following two analytical tasks, each with two variants:

| Analytical task | Static condition (example assignment) | Interactive condition (example assignment) |
|---|---|---|
| Task 1: Identify a maximum | Which neighborhood had the most crashes on weekdays? | Which neighborhood had the most crashes on weekends? |
| Task 2: Compare categories | Which had more crashes: cars or bicycles in 2024? | Which had more crashes: cars or bicycles in 2025? |

**Your analytical tasks must require more than identifying an obvious value in a chart.** At least one task must involve comparing multiple values, categories, locations, or time periods. For example, identifying the tallest bar in a chart is generally too simple, while identifying which neighborhood experienced the largest change between two periods requires a more meaningful comparison. Your tasks should require some analysis while remaining answerable using either visualization. During your pilot study, check whether the tasks are too obvious, too difficult, or unfairly favor one condition.

Notice that the **tasks assess the same analytical abilities but use different subsets of the data**. This helps prevent participants from simply remembering their answers when moving from one condition to the other.

The assignment of question variants to conditions must also be balanced. For example, some participants should answer the weekday question using the static visualization and the weekend question using the interactive visualization, while others should do the reverse. This avoids consistently assigning easier questions to one condition. Your analytical tasks should be connected to the domain and data questions developed in Assignment 2 and should have objectively assessable outcomes.

Your evaluation must include at least two quantitative measurements:

- **Task accuracy:** Whether participants correctly complete each task.
- **Task completion time:** The time, in seconds, required to complete each task.

You may include additional measurements, such as confidence, perceived difficulty, or the number of interactions performed.

To reduce potential learning effects, you must:

- Use comparable, but not identical, analytical tasks across the two conditions.
- Counterbalance the presentation order: approximately half of the participants should use the static version first, while the other half should use the interactive version first.
- Distribute the comparable task sets across conditions as evenly as possible, so that task difficulty is not systematically associated with one version.

Describe your experimental procedure, including the tasks, expected answers, measurements, participant instructions, and how you will record the results. Your protocol should be detailed enough for someone else to reproduce the experiment.

#### Task 3: Conducting the evaluation (25%)

Recruit **at least 10 participants** to evaluate your visualization. Participants may be classmates or people outside the course, but they cannot be members of your own group. Each participant must complete the tasks under both conditions, following the protocol from Task 2. Before starting the study, **conduct a pilot evaluation with one or two people**. Use this opportunity to identify unclear instructions, inappropriate task difficulty, problems with the implementation, or issues with your measurements. Pilot participants do not count toward the required 10 participants.

During the study, record the quantitative measurements defined in Task 2. At a minimum, collect accuracy and completion time for each participant, task, and condition. You should also document relevant observations that may help explain the results. For example, did participants struggle with particular visual encodings? Did they have difficulty finding or understanding the interaction controls? Were some tasks consistently harder than others?

Organize the measurements in a structured dataset (e.g., CSV), using anonymous participant identifiers. **You must preserve individual-level measurements**.

#### Task 4: Quantitative analysis (25%)

Analyze the measurements collected in Task 3 to compare the effectiveness of the static and interactive visualizations.

Your analysis must include:

- Descriptive statistics for task accuracy and completion time, separately for each condition.
- At least two visualizations of your evaluation results: one comparing accuracy and another comparing completion time.
- A comparison of performance across the two conditions, including differences among tasks and participants.
- An interpretation of the results in relation to your original evaluation question and hypothesis.

For example, did participants complete tasks faster with interaction? Did accuracy improve? Were there tasks where interaction made little difference, or even made performance worse? Do not limit your analysis to reporting averages. Consider variations between participants and tasks, and discuss possible explanations for the patterns you observe. Make sure your visualizations and statistics appropriately represent the collected measurements.

**You are not required to perform statistical significance testing.** Given the relatively small number of participants, the objective is to understand the observed differences and their limitations, rather than claim that your results generalize to a broader population. Your conclusions must be supported by your measurements. In particular, avoid claiming that one version is better simply because of a small difference in average performance.

#### Task 5: Reflection and recommendations (10%)

Based on the results of your evaluation, discuss what you learned about your visualization and the interaction you implemented. Identify the most important strengths and weaknesses of your design. What worked as expected? What surprised you? Which aspects of the visualization would you change? Propose concrete improvements supported by the evaluation results. You do not need to implement these changes, but you should explain how they would address the problems identified. Discuss the limitations of your evaluation, including the number and background of participants, task difficulty, learning effects, and other factors that may have influenced the results.

**Remember that showing an interaction does not improve performance is a valid result.** You will be evaluated on the quality of your experimental design, analysis, and reasoning, not on whether the interactive version performs better.

---

### Important constraints

The following requirements apply to your evaluation:

1. **Fair comparison.** Both versions must use the same dataset and comparable visual encodings. Avoid introducing unrelated changes that make it difficult to isolate the effect of interaction.

2. **Tasks must be possible in both conditions.** Do not create questions that are impossible to answer using the static visualization. The objective is to measure differences in effectiveness, not whether information is available in only one version.

3. **Comparable, but not identical, tasks.** Participants should not simply memorize an answer from the first condition and repeat it in the second. Use questions that assess equivalent analytical abilities and have reasonably similar difficulty.

4. **Counterbalancing.** Approximately half the participants must start with each condition. You must also distribute the comparable task sets across conditions to avoid systematically favoring one version.

5. **Consistent procedures.** Use the same instructions, measurement methods, and time limits across participants. Whenever possible, use the same testing environment and devices. Do not modify the implementation or evaluation tasks after beginning the main study.

6. **At least 10 participants.** Every participant must evaluate both versions. Pilot participants are excluded from this minimum.

7. **Quantitative evidence.** Accuracy and completion time are mandatory. Define how incorrect, incomplete, or timed-out tasks are handled before the study and report these cases consistently. Preserve the measurements for individual participants and tasks.

8. **No predetermined outcome.** You should not design the evaluation to demonstrate that your interactive visualization is superior. Both positive and negative results are acceptable.

9. **Reproducibility.** Your submission must include the materials necessary to reproduce the study and verify the analysis, including the visualizations, analytical tasks, measurement procedures, and anonymized data.

10. **Meaningful evaluation.** Do not use trivial questions or artificially weaken one visualization to produce a desired result. The static version should be a reasonable visualization in its own right, and both versions should support nontrivial analytical tasks. Your evaluation should help reveal the benefits and limitations of interaction rather than simply demonstrate that an interactive control exists.

---

### Extra credit: Interactive prototype using Curio (+5%)

For up to **5 additional percentage points on Assignment 3**, implement an interactive visualization prototype using [Curio](https://github.com/urban-toolkit/curio), a dataflow-based framework for visual analytics. **You must clone Curio directly from its GitHub repository and run it locally. The pip-installed version of Curio and online hosted versions are not permitted.** Follow the [Curio installation and usage guide](https://curio.urbantk.org), specifically the **Installation from git** section. You may use the local installation methods described there.

Your prototype should use your own dataset and implement at least one meaningful analytical interaction. You may reproduce the interactive visualization from Task 1 in Curio, or develop an alternative approach. The goal is to demonstrate how your visualization and analysis can be expressed using Curio's dataflow environment.

For this extra credit, submit:

- The working Curio prototype and the dataflow or project files needed to reproduce it.
- A short demonstration of the interaction (screenshots or video).
- A brief explanation of the analytical question supported by your prototype, the main data transformations, and how the interaction works.

**Simply importing your dataset or creating a static chart in Curio is not sufficient.** Your prototype must contain a functioning interaction that supports an analytical task. This task is optional and does not replace any of the required tasks.

---

### Deliverables

Continue using the **same GitHub repository created for Assignments 1 and 2**.

Your submission must contain a single Markdown report, organized according to Tasks 1–5, along with the following materials:

- **Static and interactive visualizations:** Working implementations, source code, and instructions for running them.
- **Evaluation protocol:** Participant instructions, analytical tasks, expected answers, condition ordering, measurement procedures, and scoring criteria.
- **Evaluation data:** An anonymized CSV (or equivalent) containing the individual task measurements, along with a description of the columns and measurement units.
- **Analysis:** Code or notebooks used to compute the statistics and generate the result visualizations.
- **Report:** Your evaluation question, design decisions, study procedure, quantitative results, interpretations, limitations, and recommendations. Include figures and tables directly in the Markdown document.
- **Extra credit:** Curio project files, instructions, and demonstration.

The report should be concise, clearly organized, and supported by evidence. We should be able to understand your evaluation and reproduce your analysis without having to search through unrelated files. **Do not answer every guiding question separately.** Organize the report as a coherent account of your work, explaining the important decisions, measurements, results, and conclusions. Screenshots, tables, and figures should be included where they help communicate your findings.

We will also evaluate your approach to implementation and evaluation, not just the final visualizations and numerical results. Document important decisions, difficulties, and any changes made during the pilot phase.

---

### Grading

Your submission will be evaluated according to the following components:

| Component | Weight |
|---|---:|
| Task 1: Interactive implementation | 20% |
| Task 2: Evaluation design | 20% |
| Task 3: User study and data collection | 25% |
| Task 4: Quantitative analysis | 25% |
| Task 5: Reflection and recommendations | 10% |
| **Extra credit: Curio** | **+5%** |

We will consider the following criteria:

- **Interactive implementation:** The visualization functions correctly, the interaction supports an analytical task, and the two versions provide a meaningful basis for comparison.
- **Evaluation design:** The questions, tasks, and metrics are appropriate. The experimental protocol is carefully planned and addresses learning effects and potential confounding factors.
- **User study:** The evaluation follows the defined protocol, includes the required participants, and collects consistent, genuine, and well-documented measurements.
- **Quantitative analysis:** The calculations and visualizations are correct, the comparisons are meaningful, and the conclusions are supported by evidence.
- **Reflection:** The discussion identifies limitations and proposes specific improvements motivated by the evaluation.

A technically sophisticated visualization will not compensate for a poorly designed evaluation. Similarly, reporting numerical results without explaining how they were collected or what they mean will not receive full credit.
---

### Frequently asked questions

**1. Do we need to recruit 10 participants for each condition?**

No. You need at least 10 participants in total. Since this is a within-subject study, each participant must evaluate both the static and interactive versions.

**2. Can our participants be students from CS424?**

Yes. You may recruit classmates or people outside the course, as long as they are not members of your own group. You should consider how their familiarity with visualization might affect your results.

**3. Do we need to implement a completely new visualization?**

No. You should build on your work from Assignment 2. Select one visualization, prepare a static version, and implement at least one meaningful interaction. You do not need to implement every visualization developed in the previous assignment.

**4. Can we use Python, JavaScript, or visualization libraries?**

Yes. You are free to choose a suitable implementation approach. The important requirement is that both versions function correctly and can be used in the evaluation.

**5. How do we compare static and interactive versions if some tasks are easier with interaction?**

That is precisely what you are investigating. However, all tasks must be possible in both versions. Design comparable tasks and use the same underlying data to avoid making the comparison unfair.

**6. Do participants need to answer the same questions in both conditions?**

No. In fact, you should avoid identical questions because participants may remember their previous answers. Use equivalent tasks that measure the same analytical abilities, and balance the task sets across conditions.

**7. What if our results show that interaction does not help?**

That is a valid finding. You are not expected to prove that interaction is beneficial. You should explain the results using your measurements and discuss why the interaction may or may not have helped.

**8. Do we need to perform statistical significance testing?**

No. You must calculate descriptive statistics, visualize the results, and compare the two conditions. Statistical significance testing is not required. Focus on interpreting the observed differences and acknowledging the limitations of your study.

**9. Do we need to implement the improvements suggested in Task 5?**

No. You should propose and justify improvements based on your evaluation.

**10. Can we use the online version of Curio for extra credit?**

No. For extra credit, you must clone Curio from [GitHub](https://github.com/urban-toolkit/curio) and run it locally, following the [installation guide](https://github.com/urban-toolkit/curio/blob/main/docs/USAGE.md#installation-from-git). Installing the packaged version of Curio through pip or using a hosted instance does not satisfy the requirement.

**11. Does the Curio extra credit require another user study?**

No. The extra credit focuses on implementing a working interactive prototype using Curio. Your main evaluation must still follow Tasks 1–5.
