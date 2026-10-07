### CS424 - Visualization & Visual Analytics (Fall 2026)

Instructor: Fabio Miranda

Course webpage: https://fmiranda.me/courses/cs424-fall-2026/

---

### Assignment 2: Exploring and building visualizations

In Assignment 1, you collected your own data, developed domain questions, and sketched different visualization ideas. In this assignment, you will start working with the data directly. You will clean and transform it as needed, explore it, implement different visualization ideas, and refine the directions that seem most useful.

Do not treat the sketches from Assignment 1 as specifications that you now have to implement. Once you start exploring the actual data, some ideas will work and others will not. You may discover new questions, new problems with the data, or better visualization approaches.

The general process for this assignment is:

> **Explore → Transform → Visualize → Compare → Iterate**

**This should be an iterative process. If an analysis or visualization is not working, change it. If the data reveals that one of your questions is not interesting or cannot be supported, revise the question. Do not keep a weak direction simply because you have already spent time on it.**

By the end of the assignment, you should have a working visualization, or a small set of connected visualizations, that is ready to be evaluated in Assignment 3.

The assignment instructions contain seven tasks, the grading policy, and a frequently asked questions (FAQ) section.

You should carefully read the assignment before getting started. You may work individually or in groups of up to three students. If you have a question that is not addressed in the FAQ, please email me and cc the TA.

Continue using the GitHub repository from Assignment 1.

---

### Tasks

#### Task 1: Revisit your data and questions

Start by looking again at the data and domain questions from Assignment 1. You do not need to keep the same questions. At this point, you know considerably more about the dataset than you did when you first proposed them. Decide which questions are still worth investigating and whether new ones have emerged. Also inspect the dataset itself. Look for missing values, inconsistent values, attributes that are difficult to interpret, limited coverage, or other problems that may affect your analysis. If necessary, modify or extend the dataset. You may clean it, derive new attributes, collect additional observations, or revise part of the original collection.

**If you realize that the dataset cannot support meaningful analysis, address the problem rather than continuing with it as-is.**

Briefly describe the questions you will use to guide this assignment and any important changes you made to the data or to your original questions.

#### Task 2: Prepare the data

Create a reproducible process for transforming the collected data into the form you need for analysis. Depending on your project, this may include:

* Cleaning missing or inconsistent values.
* Converting attribute types.
* Filtering observations.
* Combining multiple files.
* Reshaping or aggregating data.
* Computing new attributes.
* Joining additional spatial or contextual information.
* Extracting attributes from images, video, or other raw data.
* Processing outputs from computer vision or other models.

You may use Python, Pandas, GeoPandas, Jupyter, or other appropriate tools. Whenever practical, these transformations should be implemented in code rather than performed manually. Someone should be able to start with your original data and reproduce the dataset used by your visualizations. Document the important transformations and why you made them. You do not need to describe every line of code. Your repository should clearly distinguish between the original data, the processing steps, and the data used by your visualizations.

#### Task 3: Explore the data

Use exploratory data analysis to better understand the dataset and the questions you are investigating. Create visualizations that help you examine distributions, comparisons, relationships, outliers, spatial or temporal patterns, or other characteristics of the data. There is no required number of exploratory visualizations. Do not create plots simply to increase the count. Include the ones that helped you understand the data or changed the direction of your analysis. Some things to think about:

* What patterns or differences do you see?
* What surprised you?
* Are there unusual observations?
* Are some comparisons misleading because of how the data was collected?
* Does aggregation hide important differences?
* Do you need to transform the data differently?
* Did your exploration change any of your original questions?

Include important intermediate or unsuccessful visualizations when they led you to change your approach. This task is about using visualization to understand the data. You are not expected to present your final findings yet.

#### Task 4: Implement visualization alternatives

Return to the visualization sketches from Assignment 1 and begin implementing some of the ideas. Implement at least **three substantially different visualization directions**. You may use ideas from your original sketches, modify them, combine them, or develop completely new ones based on what you learned during exploration. The three directions should not simply be cosmetic variations of the same visualization.

For each direction, briefly discuss:

* What question or task it supports.
* Which data attributes it uses.
* The main marks and visual channels.
* Why you tried this approach.
* What worked and what did not.
* Whether you decided to keep, modify, combine, or abandon it.

Do not worry if some implementations fail. A visualization that looked good as a sketch may not work with the actual data. That is part of the point of this assignment. Keep screenshots or other evidence of important intermediate versions.

#### Task 5: Interaction and multiple views

Consider whether your visualization would benefit from interaction, multiple views, or both. Examples include filtering, selection, zooming, panning, details-on-demand, changing variables, highlighting related observations, or coordinating multiple views. Do not add interaction simply for the sake of adding interaction. Each interaction should help support a task. Similarly, do not build a dashboard simply because you have several charts. Multiple views should have a reason to exist together. Explain the interactions or multiple views you decided to use and what they allow someone to do. If a static visualization or a single view is more appropriate for your project, that is also fine. Explain why.

#### Task 6: Iterate and refine

Choose the strongest direction and refine it. Document at least **two substantial iterations**. For each one, explain what problem you noticed, what you changed, and why. Changes may involve:

* Data transformations or aggregation.
* Marks or visual channels.
* Scales.
* Layout.
* Interaction.
* Coordination between views.
* Filtering.
* Labels or annotations.
* The scope of the visualization itself.

The iterations should involve real design decisions. Changing a font size or moving a legend does not count as a substantial iteration.

**Your process is part of what will be evaluated. We should be able to see how the visualization changed and why.**

#### Task 7: Current design

Present the visualization, or set of connected visualizations, that you would currently choose to continue with. This should be a working implementation. Briefly discuss:

* What questions and tasks it supports.
* The main design decisions.
* How it differs from your Assignment 1 sketches and earlier implementations.
* What currently works well.
* What you are still unsure about.
* What you would like to evaluate in Assignment 3.

Do not assume that the visualization is effective simply because it works technically. Assignment 3 will focus on evaluating the design.

---

#### Deliverables

Submit the **URL of your GitHub repository by email to the instructor and TA**. If the repository is private, make sure the instructor and TA have access before sending the URL.

Your repository should contain:

* A single Markdown document organized by **Tasks 1–7**, containing the required writeups, exploratory visualizations, screenshots, iterations, and reflections. Images should appear near the text that discusses them rather than being collected separately at the end. **Be concise. Focus on decisions, reasoning, changes, and important observations. The questions listed under each task are guides for reflection, not questions that should be copied and answered one at a time.**
* The original data from Assignment 1.
* The processed dataset used in this assignment.
* The code used to clean, transform, or derive the data.
* The code used for exploratory analysis and visualization.
* Relevant screenshots or intermediate versions needed to document your process.
* The working visualization that you plan to take into Assignment 3.
* A `README.md` with instructions for running your code and visualization.

The repository should make it possible to understand where the data came from, how it was transformed, how the visualization changed, and how to run the current implementation. All group members should contribute using their own GitHub accounts. The commit history should show the development of the project rather than a single upload at the end.

---

#### Grading

Your submission starts with 100 points. Points will be deducted according to:

* Data preparation and exploration:
  * Up to -20 if important problems with the data are ignored, transformations are not reproducible or justified, or the exploratory analysis is superficial or disconnected from the questions.

* Visualization design:
  * Up to -20 if the visual encodings are poorly matched to the data or tasks, or important design decisions are not justified.

* Exploration of alternatives:
  * Up to -15 if the three implementations are minor variations of the same idea or there is little evidence that you explored different directions.

* Iteration:
  * Up to -20 if there is little evidence that the visualization changed in response to what you learned from the data or from earlier implementations. **If something is not working, you are expected to recognize it and adapt.**

* Implementation and reproducibility:
  * Up to -15 if the visualization does not work as described, important processing steps cannot be reproduced, files are missing, or instructions for running the project are unclear.

* Writeups, clarity, and organization:
  * Up to -10 if explanations are missing, poorly justified, repetitive, overly verbose, written as a question-by-question checklist, or difficult to follow. Strong submissions should be **concise, clear, and focused on the important decisions and lessons learned**.

**Important:** We are interested in both the visualization you build and how you got there. Failed attempts, abandoned ideas, unexpected problems, and changes in direction are useful when they are documented and lead to better decisions.

----

#### Frequently asked questions

**Do we have to use the same questions from Assignment 1?**  
No. Change them if the data suggests better questions or if the original ones are not well supported.

**Can we change the dataset from Assignment 1?**  
Yes. You may clean it, add observations, derive attributes, or otherwise improve it. Keep the original data and document important changes.

**What if our Assignment 1 dataset turns out to be weak?**  
Fix it. You may need to collect additional data, change how you process it, revise the questions, or partially pivot the project.

**Do we have to use Python?**  
No. Use tools that are appropriate for your project. The important point is that the workflow should be reproducible and understandable.

**How many exploratory plots do we need?**  
There is no required number. Include the visualizations that actually helped you understand the data.

**How many visualization implementations do we need?**  
At least three substantially different directions.

**Do all three implementations need to be polished?**  
No. Some may be rough or unsuccessful. What matters is that you learn from comparing them.

**Does the visualization have to be interactive?**  
No. Use interaction only when it supports the analytical tasks.

**Do we need a dashboard?**  
No. Do not create a dashboard simply by placing several charts next to each other. Use multiple views only when they work together.

**What counts as a substantial iteration?**  
A change that affects how the data is represented or how the visualization supports a task. Examples include changing the encoding, aggregation, layout, interaction, data transformation, or organization of multiple views.

**Can we abandon one of our ideas?**  
Yes. Briefly document why you abandoned it and what you learned.

**How polished should the final implementation be?**  
It should work well enough that another person can use it in Assignment 3. It does not need to be the final version of the semester project.

**Are we supposed to report findings in this assignment?**  
Not yet. You will probably notice interesting patterns, but Assignment 4 will focus on communicating the findings.

**What should we have ready for Assignment 3?**  
A working visualization and a clear sense of what you are still uncertain about. Those uncertainties should help determine what you evaluate.

**Should we answer every question listed under the tasks?**  
No. They are **guides**, not a checklist. Write a coherent response for each task.

**How long should the writeup be?**  
There is no fixed length. Be concise. Include what is necessary to understand your decisions and process, and leave out unnecessary detail.

**Can the repository be private?**  
Yes. Make sure the instructor and TA have access.

**How do we submit?**  
Email the repository URL to the instructor and TA by the deadline.
