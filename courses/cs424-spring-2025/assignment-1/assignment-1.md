### CS424 - Visualization & Visual Analytics (Spring 2025)

Instructor: Fabio Miranda

Course webpage: https://fmiranda.me/courses/cs424-spring-2025/

---

### Assignment 1: Sketching visualizations

The goal of this assignment is to get you familiar with visualization sketching. You will use the dataset you selected in the previous assignment, discuss data questions and task abstractions, and sketch a few visualizations. Sketching your visualization, before delving too deep into the implementation of the visualization, will allow you to test your ideas early on. Your sketches will serve as the foundation for the visualizations that you will create in the subsequent assignments. The tasks require multiple iterations, so make sure you start early and appreciate the process of brainstorming and discussing ideas. Make sure to go over the resources listed at the end of this document.

This assignment contains five tasks. You should write your answers and include your sketches in a single [markdown document](https://www.markdownguide.org/getting-started/). Throughout the tasks, you should keep in mind that one of the objectives of sketching is to decouple the design of the visualizations from their implementation. In doing so, you should feel free to explore the design space without being concerned with (and limited by) implementation considerations.

We will use GitHub to manage the deliverable. You should create a repository for your team on GitHub Classroom (see Piazza for the invitation link).

---

### Tasks

#### Task 1: Data description

Write one paragraph describing the dataset, summarizing the most important points (including, but not limited to, its size and attributes). Discuss how the data was collected, potential users and use cases for the dataset.

#### Task 2: Domain questions

Write one paragraph discussing at least four domain questions that you would like to investigate using visualization. Make sure to discuss the reasoning behind each question, and link back to the attributes previously discussed. This is a critical part of the assignment, as it will heavily influence the other tasks.

#### Task 3: Task abstractions

Translate the domain-specific questions to abstract tasks. For each question, identify *actions* and *targets* that define user goals, making sure to discuss your reasoning behind each decision. You should follow Brehmer and Munzner's [typology](https://www.cs.ubc.ca/labs/imager/tr/2013/MultiLevelTaskTypology/brehmer_infovis13.pdf) of abstract visualization tasks, as seen in class.

#### Task 4: Visualization sketches

Design 8 to 16 different visualization sketches (8 for groups with one member, 12 for groups with two members and 16 otherwise). Each domain question should be covered by at least two visualization sketches. For each visualization sketch, write a paragraph detailing its main idea, the rationale behind your design decisions (What was the motivation behind the sketch? What worked well and what didn't work so well?).

In this task, brainstorm within your group potential visualizations that you think are effective in answering the questions. Ensure the diversity of the visualization sketches -- it is not enough to come up with a series of well-known bar charts, line charts, etc. (even if they use different attributes), make sure the visualizations are fundamentally different. If you end up with variations of the same idea, think of alternatives and refine your approach.

In this assignment, do not use any tool or library to visualize the data. You are expected to create *hand-drawn* sketches. However, that does not mean that you should hand in an unstructured set of sketches, without reason or rhyme. Even though the process of sketching visualizations is an iterative one, the submitted document should be readable and provide a clear view of your creation process.

Check resources below for pointers on sketching.

#### Task 5: Summarizing

Write a paragraph comparing your visualization designs, covering both strengths and weaknesses in relation to each other, as well as originality. Discuss whether they would be effective in answering the domain questions posed in task 2. You should discuss the strengths and weaknesses of your different visualizations, evaluate their effectiveness in answering the domain questions, while considering factors such as readability, complexity, expressiveness, and scalability.

Some important questions to keep in mind: Did you explore a wide range of visualization techniques, or did you rely on a small subset of common visual encodings? How does the diversity of your sketches contribute to answering the domain questions in different ways?

---

#### Deliverables

Submit your assignment on GitHub. Your writeups and sketches should be compiled into a single Markdown document (intertwining text and images), uploaded to GitHub (see Piazza for the invitation link). Take pictures or scan your sketches, making sure that they are easily readable. Make sure your writeups and sketches are clearly organized.

---

#### Grading

Your submission will be graded according to three components:

- Complexity and relevant of domain questions & abstract tasks:
  - Excellent (A): The domain questions fully consider the complexity of the dataset. Abstract tasks effectively generalize domain questions, correctly applying the typology with insightful reasoning.
  - Good (B): The domain questions are relevant and well thought-out, but may not fully explore the complexity of the dataset. Abstract tasks are mostly correct, with reasonable generalization, but with some missed opportunities for deeper abstraction.
  - Poor (C): The domain questions are too simplistic or superficial, missing opportunities for deeper analysis. Abstract tasks lack coherence with domain questions or misapply the typology.

- Design choices:
  - Excellent (A): Design choices are effective, and the visualizations are easily read and understood. Encodings match data types well.
  - Good (B): Design choices are mostly effective, but there are minor readability or effectiveness issues.
  - Poor (C): Ineffective mark or encoding choices, leading to confusion or misinterpretation.

- Creativity and diversity of visualizations:
  - Excellent (A): Highly original visualizations demonstrating a broad exploration of the design space.
  - Good (B): Uses well-known visualization types but applies them creatively and with diversity.
  - Poor (C): Relies heavily on basic and overly similar visualizations, limiting design space exploration.

- Writeups:
  - Excellent (A): Detailed writeups with strong justifications for all design choices, including insightful discussions on design trade-offs.
  - Good (B): Writeups provide reasonable justifications but could be more detailed or critical.
  - Poor (C): Writeups are incomplete or lack sufficient reasoning.

----

#### Other resources

* [How to Sketch, Doodle, and Draw Data Visualization Drafts by Hand](https://depictdatastudio.com/how-to-sketch-doodle-and-draw-data-visualization-drafts-by-hand/)
* [Sketching with Data Opens the Mind's Eye](https://medium.com/accurat-in-sight/sketching-with-data-opens-the-mind-s-eye-92d78554565)
* [A Tour through the Visualization Zoo: A survey of powerful visualization techniques, from the obvious to the obscure](https://dl.acm.org/doi/10.1145/1794514.1805128)
* [From data to Viz](https://www.data-to-viz.com/)
