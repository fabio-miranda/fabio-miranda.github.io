### CS424 - Visualization & Visual Analytics (Fall 2025)

Instructor: Fabio Miranda

Course webpage: https://fmiranda.me/courses/cs424-fall-2025/

---

### Assignment 1: Sketching visualizations

The goal of this assignment is to get you familiar with visualization sketching. You will use the dataset you selected in the previous assignment, discuss data questions and task abstractions, and sketch a few visualizations. Sketching your visualization, before delving too deep into the implementation of the visualization, will allow you to test your ideas early on. Your sketches will serve as the foundation for the visualizations that you will create in the subsequent assignments. The tasks require multiple iterations, so make sure you start early and appreciate the process of brainstorming and discussing ideas. Make sure to go over the resources listed at the end of this document.

The main focus is not on producing polished solutions, but on exploring the design space, testing ideas early, and documenting your thought process. Your sketches should reflect experimentation, iteration, and reflection -— think of them as a record of your design journey. The assignment values how you get to your ideas (e.g., brainstorming, discussing, refining, discarding) more than whether the final outcomes are perfect.

This assignment contains five tasks. You should write your answers and include your sketches in a single [markdown document](https://www.markdownguide.org/getting-started/). Throughout the tasks, you should keep in mind that one of the objectives of sketching is to decouple the design of the visualizations from their implementation. In doing so, you should feel free to explore the design space without being concerned with (and limited by) implementation considerations. The document should tell the story of your process: why you made certain decisions, what you tried, what didn't work, and how you evolved your ideas.

We will use GitHub to manage the deliverable. You should create a repository for your team on GitHub Classroom (see Piazza for the invitation link).

---

### Tasks

#### Task 1: Data description

Write one paragraph describing the dataset, summarizing the most important points (including, but not limited to, its size and attributes). Discuss how the data was collected, potential users and use cases for the dataset.

#### Task 2: Domain questions

Write one paragraph discussing at least four domain questions that you would like to investigate using visualization. Make sure to discuss the reasoning behind each question, and link back to the attributes previously discussed. This is a critical part of the assignment, as it will heavily influence the other tasks. Treat this step as idea generation rather than narrowing down to the right questions.

#### Task 3: Task abstractions

Translate the domain-specific questions to abstract tasks. For each question, identify *actions* and *targets* that define user goals, making sure to discuss your reasoning behind each decision. Reflect on why you mapped them the way you did and how this abstraction step reshaped your perspective on the original questions.

#### Task 4: Visualization sketches

Design 8 to 16 different visualization sketches (8 for groups with one member, 12 for groups with two members and 16 otherwise). Each domain question should be covered by at least two visualization sketches. For each visualization sketch, write a paragraph detailing its main idea, the rationale behind your design decisions (Treat these as prompts for reflection: What was the motivation behind the sketch? What worked well and what didn't work so well? What aspects felt confusing, limited, or not quite right? How does it differ from other sketches?).

In this task, brainstorm within your group potential visualizations that you think are effective in answering the questions. Ensure the diversity of the visualization sketches -- it is not enough to come up with a series of well-known bar charts, line charts, etc. (even if they use different attributes), make sure the visualizations are fundamentally different. If you end up with variations of the same idea, think of alternatives and refine your approach.

Your goal is to experiment broadly: try ideas that are very different from one another, not just variations on the same design. Don’t worry about whether the sketch would be easy to implement in code; focus on whether the sketch sparks new thinking. Your goal is to treat sketching as an iterative process; don’t stop at a single version of a visualization idea. Even small changes in layout, encoding, or scope should be documented as separate logged versions.

All sketches must be hand-drawn. Treat them as a creative logbook of your iterative process, not as polished deliverables. The emphasis is on documenting how you got there, not just the end result.

#### Task 5: Summarizing

Write a comparison of your visualization designs, covering both strengths and weaknesses in relation to each other, as well as originality. Discuss whether they would be effective in answering the domain questions posed in task 2. You should discuss the strengths and weaknesses of your different visualizations, evaluate their effectiveness in answering the domain questions, while considering factors such as readability, complexity, expressiveness, and scalability. Treat these as prompts for reflection: What kinds of design directions did you explore? What did you learn from trying different ideas? How did your perspective on the questions shift as you sketched? Were there moments of surprise, frustration, or breakthrough? Did you explore a wide range of visualization techniques, or did you rely on a small subset of common visual encodings? How does the diversity of your sketches contribute to answering the domain questions in different ways?

Discuss the relative strengths and weaknesses of your sketches in terms of process: what felt generative, what felt repetitive, and how exploring different directions expanded your design space.


#### Task 6: Collaboration process

For groups, document how your group collaborated during this assignment. Write 1–2 paragraphs covering: 
  - How you communicated (e.g., in-person meetings, online chats, video calls).
  - How you shared sketches and artifacts (e.g., scanned images, photos, GitHub uploads, shared drives).
  - How you divided or rotated tasks (e.g., brainstorming together, each sketching different versions, reviewing and iterating).
  - What worked well in your collaboration, and what challenges you encountered.

Treat this as another kind of reflection: How did the group process shape the design process?

---

#### Deliverables

Submit your assignment on GitHub. Your writeups and sketches should be compiled into a single Markdown document (intertwining text and images), uploaded to GitHub (see Piazza for the invitation link). Take pictures or scan your sketches, making sure that they are easily readable. **Make sure your writeups and sketches are clearly organized.**

---

#### Grading

Your submission starts with 100 points. Points will be deducted according to:

- Complexity and relevant of domain questions & abstract tasks:
  - Up to -20 if domain questions are superficial, disconnected from the dataset, or show little thought.

- Process reflection:
  - Up to –20 if the writeup does not document how ideas evolved, misses iterations, or lacks reflection on false starts and changes.

- Design choices:
  - Up to –20 if sketches are repetitive, rely too heavily on a narrow set of visualizations, or show little exploration.

- Writeups:
  - Up to –15 if explanations for sketches and design choices are missing, incomplete, or not well justified.
 
- Clarity and organization:
  - Up to –15 if the Markdown document is unclear, disorganized, or difficult to follow.
 
- Collaboration process:
  - Up to -10 if the collaboration process is missing, vague, or superficial (e.g., "we met" with no detail).

**Important**: The emphasis is on process and reflection. Small flaws in drawing quality, neatness, or "correctness" of visualization design will not be penalized as long as your process is thoughtful and documented. And remember: the prompts in each task are guides for reflection, not checklists.

----

#### Other resources
* [A Tour through the Visualization Zoo](https://dl.acm.org/doi/10.1145/1794514.1805128)
* [Data Viz Project](https://datavizproject.com/)
* [How to Sketch, Doodle, and Draw Data Visualization Drafts by Hand](https://depictdatastudio.com/how-to-sketch-doodle-and-draw-data-visualization-drafts-by-hand/)
* [Sketching with Data Opens the Mind's Eye](https://medium.com/accurat-in-sight/sketching-with-data-opens-the-mind-s-eye-92d78554565)
* [A Tour through the Visualization Zoo: A survey of powerful visualization techniques, from the obvious to the obscure](https://dl.acm.org/doi/10.1145/1794514.1805128)
* [From data to Viz](https://www.data-to-viz.com/)
