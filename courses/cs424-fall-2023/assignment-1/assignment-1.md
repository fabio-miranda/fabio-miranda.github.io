### CS424 - Visualization & Visual Analytics (Fall 2023)

Instructor: Fabio Miranda

Course webpage: https://fmiranda.me/courses/cs424-fall-2023/

---

### Assignment 1: Sketching visualizations

The goal of this assignment is to get you familiar with visualization sketching. You will have to present an overview of a dataset, discuss data questions and task abstractions, and sketch a few visualizations. Sketching your visualization, before delving too deep into the implementation of the visualization, will allow you to test your ideas early on. Your sketches will serve as the foundation for the visualizations that you will create in the subsequent assignments. The tasks require multiple iterations, so make sure you start early and appreciate the process of brainstorming and discussing ideas. Make sure to go over the resources listed at the end of this document.

This assignment contains six tasks (including an initial task). For tasks 1 through 5, you should write your answers and sketches in a single [markdown document](https://www.markdownguide.org/getting-started/). Throughout the tasks, you should keep in mind that one of the objectives of sketching is to decouple the design of the visualizations from their implementation. In doing so, you should feel free to explore the design space without being concerned with (and limited by) implementation considerations.

We will use GitHub to manage the deliverable. You should create a repository for your team on GitHub Classroom (see Piazza for the invitation link).

---

### Tasks

#### Task 0: Selecting a dataset

Select a dataset that is of interest to you, from the list below:

* [Traffic crashes - crashes](https://data.cityofchicago.org/Transportation/Traffic-Crashes-Crashes/85ca-t3if)
* [Traffic crashes - people](https://data.cityofchicago.org/Transportation/Traffic-Crashes-People/u6pd-qa9d)
* [Traffic crashes - vehicles](https://data.cityofchicago.org/Transportation/Traffic-Crashes-Vehicles/68nd-jvt3)
* [Towed vehicles](https://data.cityofchicago.org/Transportation/Towed-Vehicles/ygr5-vcbg)
* [Red light camera violations](https://data.cityofchicago.org/Transportation/Red-Light-Camera-Violations/spqx-js37)
* [Speed camera violations](https://data.cityofchicago.org/Transportation/Speed-Camera-Violations/hhkd-xvj4)
* [Chicago traffic tracker](https://data.cityofchicago.org/Transportation/Chicago-Traffic-Tracker-Historical-Congestion-Esti/sxs8-h27x)
* [Chicago traffic tracker estimates](https://data.cityofchicago.org/Transportation/Chicago-Traffic-Tracker-Congestion-Estimates-by-Se/n4j6-wkkf)
* [Chicago crimes](https://data.cityofchicago.org/Public-Safety/Crimes-2001-to-Present/ijzp-q8t2)
* [CDPH environmental records](https://data.cityofchicago.org/Environment-Sustainable-Development/CDPH-Environmental-Records-Lookup-Table/a9u4-3dwb)
* [CDPH environmental complaints](https://data.cityofchicago.org/Environment-Sustainable-Development/CDPH-Environmental-Complaints/fypr-ksnz)
* [Building violations](https://data.cityofchicago.org/Buildings/Building-Violations/22u3-xenr)
* [311 service requests](https://data.cityofchicago.org/Service-Requests/311-Service-Requests/v6vf-nfxy)

* [Income and Unemployment](https://data.cityofchicago.org/Health-Human-Services/Selected-socioeconomic-indicators-by-neighborhood/i9hv-en6g/data)
* [Crimes](https://catalog.data.gov/dataset/crimes-2001-to-present)
* [Green Roofs](https://data.cityofchicago.org/Environment-Sustainable-Development/Green-Roofs-Map/u23m-pa73)
* [Energy Usage](https://data.cityofchicago.org/Environment-Sustainable-Development/Energy-Usage-2010/8yq3-m6wp)
* [Energy Efficiency of buildings](https://data.cityofchicago.org/Environment-Sustainable-Development/Chicago-Energy-Benchmarking-2020-Data-Reported-in-/ydbk-8hi6)
* [Environmental Complaints](https://data.cityofchicago.org/Environment-Sustainable-Development/CDPH-Environmental-Complaints/fypr-ksnz/about_data)
* [Flooding Measurements](https://data.cityofchicago.org/Environment-Sustainable-Development/Smart-Green-Infrastructure-Monitoring-Sensors-Hist/ggws-77ih/about_data)
* [Urban Farms](https://data.cityofchicago.org/Environment-Sustainable-Development/Map-of-Urban-Farms/uti6-fp3f)

All of the previous datasets contain metadata with a description of the data attributes, source of the data, gaps, etc. After selecting the dataset, make sure you enter your selection in the shared spreadsheet (see Piazza for link).

---

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

#### Task 5: Summarizing

Write a paragraph comparing your visualization designs, covering both strengths and weaknesses in relation to each other, as well as originality. Discuss whether they would be effective in answering the domain questions posed in task 2.

---

#### Deliverables

Submit your assignment on GitHub. Your writeups and sketches should be compiled into a single Markdown document (intertwining text and images), uploaded to GitHub (see Piazza for the invitation link). Take pictures or scan your sketches, making sure that they are easily readable. Make sure your writeups and sketches are clearly organized.

---

#### Grading

Your submission will be graded according to three components:

- Design choices:
  - Excellent (A): design choices are effective, visualizations can be easily read and understood.
  - Good (B): design choices are effective, with minor problems.
  - Poor (C): ineffective mark or encoding choices.

- Creativity and diversity of visualizations:
  - Excellent (A): largely original visualizations and designs.
  - Good (B): visualizations based on well-known designs, but with enough diversity to reasonably cover the design space.
  - Poor (C): ineffective exploration of the design space, with simple visualizations based on well-known designs and very similar to each other.

- Writeups:
  - Excellent (A): detailed writeups, with reasonable justifications for all design choices.
  - Good (B): good justifications, writeups could be more detailed.
  - Poor (C): missing or incomplete justifications.

----

#### Other resources

* [How to Sketch, Doodle, and Draw Data Visualization Drafts by Hand](https://depictdatastudio.com/how-to-sketch-doodle-and-draw-data-visualization-drafts-by-hand/)
* [Sketching with Data Opens the Mind's Eye](https://medium.com/accurat-in-sight/sketching-with-data-opens-the-mind-s-eye-92d78554565)
* [A Tour through the Visualization Zoo: A survey of powerful visualization techniques, from the obvious to the obscure](https://dl.acm.org/doi/10.1145/1794514.1805128)
* [From data to Viz](https://www.data-to-viz.com/)
