### CS524 - Big Data Visualization and Analytics (Spring 2026)

#### Table of Contents
1. [General Information](#general-information)
    1. [Class Meeting Information](#class-meeting-information)
    2. [Course Instructor](#course-instructor)
2. [Course Description](#course-description)
    1. [Rationale](#rationale)
    2. [Course Pre-requisites](#course-pre-requisites)
    3. [Course Objectives](#course-objectives)
    4. [Deliverables](#deliverables)
    5. [Textbook](#textbook)
    6. [Format and Teaching Methods](#format-and-teaching-methods)
3. [Course Schedule](#course-schedule)
4. [Evaluation and Grading](#evaluation-and-grading)
    1. [Grading Policy](#grading-policy)
    2. [Evaluation Philosophy](#evaluation-philosophy)
    3. [Participation](#participation)
    4. [Letter Grades](#letter-grades)
    5. [Late Days](#late-days)
5. [Important Notes](#important-notes)
6. [Academic Integrity](#academic-integrity)
7. [Inclusive Learning Environment](#inclusive-learning-environment)
8. [Disability Accommodation Procedures](#disability-accomodation-procedures)
9. [Religious Holidays](#religious-holidays)
10. [Mental and Emotional Wellness](#mental-and-emotional-wellness)
11. [Disclaimer](#disclaimer)


***

### General Information

#### Class Meeting Information
We will meet in person in the classroom at the time indicated in the schedule of classes. Please read the [evaluation](#evaluation-and-grading) section for details on attendance. Office hours will be held in person.

#### Course Instructor
Fabio Miranda

fabiom [at] uic.edu

https://fmiranda.me/

Office hours: Friday 10am - 12pm, by appointment. Please email me at least one day before office hours to schedule an appointment.


***

### Course Description

#### Rationale
In the past decade, technological innovations have enabled the automatic collection of a diverse set of very large and complex datasets, from user-generated content, such as tweets, to sensor data, such as noise decibel level or aerial surveys. As data grows in size and complexity, however, siloed solutions become less capable of conveying all the structure and information hidden in the data. Visual analytics systems have been successful at enabling users to obtain insights from large data; Well-designed large-scale data visual analytics systems merge domain expertise and analytics techniques, enabling users to gain actionable insights into real-world problems by formulating and testing hypotheses, and to address domain-specific challenges.

This course will introduce students to big data visualization and analytics, with a focus on the systems aspect of the end-to-end pipeline, emphasizing the connections between visualization, data management, machine learning, and data mining. We will cover potential sources of big data, including audio, image, graph, geometry, and mobile data, both structured or unstructured. The course will discuss effective metaphors to visualize data that might span billions of records; data mining and machine learning techniques that can summarize the data, or extract patterns to guide users in their visual exploration; and the data management techniques that can effectively drive interactivity in the visual exploration of big data.

*In the context of this course, big data refers to datasets that are too large, too complex, or too fast-changing for traditional tools and small tabular workflows, then requiring scalable storage, processing, and analytics (often all three) to extract value beyond simple tables.*

#### Course Pre-requisites
Students are expected to be proficient in programming, capable of learning new programming languages as needed for assignments and projects, and skilled in writing short technical documentation. While CS 424 (Visualization) is not a strict prerequisite, students should be independently comfortable with its core concepts, such as visual encoding, interaction, perception, and design principles (see [here](../) for examples of 424 syllabi). These visualization fundamentals will be briefly summarized in Week 1 to ensure everyone starts with a shared baseline.

#### Course Objectives
This course will focus on the intersection between visualization, data management, data mining, and machine learning, covering the necessary topics to build visual analytics tools to handle big data. For the purposes of this course, big data will include any dataset with size (or complexity) that goes beyond the ability of standard tools and techniques to interactively manage and process it with a latency below 0.5 second.

At the end of the course, students will have a good understanding of the state of the art in visual analytics of large data, limitations of current techniques, and promising research directions. They will also be able to design and implement visual analytics systems capable of handling large data, by combining visualization and data mining techniques, data structures and algorithms that work in tandem to enable interactive data exploration and tackle real-world problems.

After successful completion of this course, students will be able to:
-	Understand the state of the art in visual analytics of large data, limitations of current techniques, and promising research directions.
-	Design and implement visual analytics capable of handling large data.
-	Combine visualization and data mining techniques, data structures and algorithms that work in tandem to enable interactive data exploration.
-	Understand and apply data management, data mining, and machine learning techniques specifically designed for visualization and visual analytics.

Class notes can be found [here](./notes/)

#### Deliverables

Students will be required to complete one project, where they will implement concepts and techniques presented in class using large datasets. In this project, students will have to identify a research problem under my guidance, and propose and implement a small-scale system for the interactive exploration of a large dataset (or multiple datasets). Students will be able to use external datasets, or select from a list of available datasets, including spatiotemporal audio, image, graph, and geometry data. Students will have to produce a short paper reporting preliminary results, and give a brief final presentation in class. Ideally, a project will have produced the initial stages of a research paper, capable of being accepted at a workshop.

Students will also be required to review and present published papers to class.

#### Textbook

- T. Munzner, 2014. Visualization Analysis and Design, AK Peters (Optional)
- Research papers from conferences and journals, including visualization (VIS, EuroVis, IEEE TVCG), database (SIGMOD, VLDB, IEEE Big Data), and related fields (IEEE TITS, IEEE TBD, AAAI).


#### Format and Teaching Methods

The course is organized around three themes that collectively cover: (1) systems foundations for delivering interactive visualization over large data, (2) AI-era system building and evaluation (how we build systems with/for agents and how we demonstrate they work), and (3) pipelines and representations for exploration (streaming, progressive methods, uncertainty, and structure-aware summaries).

The course will be driven by lectures paired with in-class discussion centered on the required readings. Most themes culminate in a group presentation + discussion where students lead a structured synthesis of a selected research paper and facilitate critique. Additional activities include reading and reviewing research papers and a team-based final project with proposal and end-of-term presentations.

***

### Course Schedule

The course themes are spread across 13 weeks through 10 instructional sessions, with an additional two weeks reserved for the project proposal and project presentations. In addition, 8 class meetings are dedicated to student research presentations. This is a tentative schedule and will be adjusted along the way. Each session includes a few required readings to make sure you have a comprehensive understanding of the topic. Important: Sessions are not aligned one-to-one with weeks.

**Class notes can be found [here](./notes/)**

#### ► Theme 1: Data-to-viz systems foundations
*How visualization is delivered in an end-to-end fashion when the data lives "behind" a system.*

##### ▷ Week 1: Introduction to the course & big data visual analytics
- Topic: Introduction to the course, goals, expectations, key themes, what is big data, EVL overview.
- Slides: [Introduction](../cs524-slides/01-intro-new.pdf), [Big data visual analytics](../cs524-slides/02-va-systems.pdf)
- Reading:
  - "What makes Big Data, Big Data? Exploring the ontological characteristics of 26 datasets", [PDF](https://journals.sagepub.com/doi/10.1177/2053951716631130)
  - "The fifth era of science: Artificial scientific intelligence", [PDF](https://journals.plos.org/plosbiology/article?id=10.1371/journal.pbio.3003230)
  - "Visual Analytics: Scope and Challenges", [PDF](https://link.springer.com/chapter/10.1007/978-3-540-71080-6_6)
  - "A conceptual framework for developing dashboards for big mobility data", [PDF](https://www.tandfonline.com/doi/full/10.1080/15230406.2023.2190164)
  - "Visual Exploration of Big Spatio-Temporal Urban Data: A Study of New York City Taxi Trips", [PDF](https://doi.org/10.1109/TVCG.2013.226)
  - "Grand Challenges in Visual Analytics Applications", [PDF](https://doi.org/10.1109/MCG.2023.3284620)
  - "Urban Mosaic: Visual Exploration of Streetscapes Using Large-Scale Image Data", [PDF](https://dl.acm.org/doi/abs/10.1145/3313831.3376399)
  - "Urban Rhapsody: Large-scale exploration of urban soundscapes", [PDF](https://onlinelibrary.wiley.com/doi/abs/10.1111/cgf.14534)

##### ▷ Week 2: Web-first big-data visualization
- Topic: How modern web stacks deliver scalable visualization when data is large and latency matters.
- Slides: [Web-first big data visualization & analytics](../cs524-slides/03-web-va.pdf)
- Reading:
  - "From WebGL to WebGPU: A Reality Check of Browser-Based GPU Acceleration", [PDF](https://dl.acm.org/doi/abs/10.1145/3730567.3764504)
  - "Interactive Visualization of Terascale Data in the Browser: Fact or Fiction?", [PDF](https://ieeexplore.ieee.org/abstract/document/9308044?)

##### ▷ Week 3: Database-backed visualization systems
- Topic: Database-backed visualization, where query processing, indexing, and data layout shape interactive visual performance.
- Slides: [Database-backed visualization systems](../cs524-slides/04-db-va.pdf)
- Reading:
  - "Mosaic: An Architecture for Scalable & Interoperable Data Views", [PDF](https://ieeexplore.ieee.org/abstract/document/10297587)
  - "Mosaic Selections: Managing and Optimizing User Selections for Scalable Data Visualization Systems", [PDF](https://arxiv.org/abs/2507.19690)
  - "GPU Rasterization for Real-Time Spatial Aggregation over Arbitrary Polygons", [PDF](http://www.vldb.org/pvldb/vol11/p352-zacharatou.pdf)
  - "Interactive Visual Exploration of Spatio-Temporal Urban Data Sets using Urbane", [PDF](https://dl.acm.org/doi/abs/10.1145/3183713.3193559)

#### ► Theme 2: Building and evaluating systems in the age of AI
*Modern system-building and evaluation practices when LLMs / agents change the tooling, workflows, and architecture.*

##### ▷ Week 4: Benchmarking & evaluating systems
- Topic: How to benchmark and evaluate systems rigorously, including metrics, baselines, reproducibility, and fair comparisons.
- Reading:
  - "ReVISit 2: A Full Experiment Life Cycle User Study Framework", [PDF](https://arxiv.org/abs/2508.03876)

##### ▷ Week 5: Proposal presentations

##### ▷ Week 6 & 7: VA system building (+research presentation)
- Topic: How system-building changes with LLMs and agents, from prototyping and debugging to architecture and reliability.
- Reading:
  - "ProWis: A Visual Approach for Building, Managing, and Analyzing Weather Simulation Ensembles at Runtime", [PDF](https://doi.org/10.1109/TVCG.2023.3326514)
  - "Urbanite: A Dataflow-Based Framework for Human-AI Interactive Alignment in Urban Visual Analytics", [PDF](https://arxiv.org/abs/2508.07390)
  - "VA-Blueprint: Uncovering Building Blocks for Visual Analytics System Design", [PDF](https://arxiv.org/abs/2508.07497)

##### ▷ Week 8 & 9: Intelligent agents in Visual Analytics (+research presentation)
- Topic: How intelligent agents can support visual analytics workflows and what effective human–AI collaboration looks like in practice.
- Reading:
  - "A Design Space for Intelligent Agents in Mixed-Initiative Visual Analytics", [PDF](https://arxiv.org/abs/2512.23372)

##### ▷ Week 10: Invited talks & Project updates

#### ► Theme 3: Pipelines + representations for exploration
*Techniques for large data summarization and to support real-time visual data exploration.*

##### ▷ Week 11: Streaming + learned + online transformation pipelines (+research presentation)
- Topic: Streaming and online/learned pipelines for large data.
- Reading:
  - "Nanocubes for Real-Time Exploration of Spatiotemporal Datasets", [PDF](https://ieeexplore.ieee.org/abstract/document/6634137)
  - "NeuralCubes: Deep Representations for Visual Data Exploration", [PDF](https://ieeexplore.ieee.org/abstract/document/9671390)

##### ▷ Week 12: Provenance for visualization and visualization for provenance (+research presentation)
- Topic: Intersection between provenance, visualization, and visual analytics.
- Reading:
  - "Characterizing Provenance in Visualization and Data Analysis: An Organizational Framework", [PDF](https://doi.org/10.1109/TVCG.2015.2511718)

##### ▷ Week 13: Computational topology (+research presentation)
- Topic: Computational topology techniques for summarizing and reasoning about shape/structure in complex data.
- Reading:
  - "The Topology ToolKit", [PDF](https://ieeexplore.ieee.org/abstract/document/8017627)

##### ▷ Week 14: Computational frameworks for large-scale visual analytics (+research presentation)
- Topic: Neural fields, encoder-decoder models, and other advanced techniques to support large-scale visual analytics.
- Reading:
  - "A Neural Field-Based Approach for View Computation & Data Exploration in 3D Urban Environments", [PDF](https://doi.org/10.1109/TVCG.2025.3635528)
  - "Deep Umbra: A Generative Approach for Sunlight Access Computation in Urban Spaces", [PDF](https://doi.org/10.1109/TBDATA.2024.3382964)

##### ▷ Week 15: Project presentations

***

### Evaluation and Grading

- [Research presentations](./research-presentation/)
- [Project](./project)

#### Grading Policy
- Research paper presentations: 30% (15% each presentation)
- Project proposal: 10%
- Project midterm review: 15%
- Final project deliverables: 30%
- Participation: 15%

This course includes a cumulative project, where the student will need to demonstrate their research skills for interactive data exploration. There will be three milestones for this project spread throughout the semester that will allow the student to receive feedback: a project proposal, mid-term review, and final presentation and report. Evaluation will emphasize overall quality (e.g., clarity, rigor, and soundness of design choices) rather than mechanical correctness. Detailed instructions for assignments and project deliverables will be released in alignment with the course evaluation schedule.

In addition, each group will prepare and deliver two research presentations on relevant topics. This involves reading and synthesizing research papers, identifying the main contributions and limitations, and presenting the material in a clear, well-organized, and engaging way to facilitate class discussion.

**Students will need to work in teams for the project and research paper presentations.**


#### Evaluation Philosophy

This is a research-oriented course. You are not just building software or producing visualizations, you are practicing how to think and work like a researcher: framing questions, making defensible design choices, connecting evidence to claims, and communicating tradeoffs and limitations. For projects, evaluation emphasizes your thinking, process, and research judgement. For the project, evaluation goes beyond standard deliverables. Each group will present to the class and also meet with the instructor for a walkthrough of documentation and code as needed, with an emphasis on how your evidence supports your claims.

Note that your project *must* go beyond a simple dashboard: your work should engage with the underlying data, models, and systems constraints, and demonstrate why your approach is appropriate for a well-defined research problem.

A core requirement throughout all projects is documenting your research process. You should show how ideas evolved through sketches, prototypes, experiments, and iterations; explain key decisions; and reflect on challenges, failed attempts, and what you learned. This documentation is essential because it makes your reasoning visible (exactly what matters in research).

Be mindful that a single day of work does not constitute a research process. If you don't engage consistently throughout the semester, you won't have iterations, evidence, or reflection to document. Last-minute assembly will fall short of what this course is designed to develop. **Think of this course as a marathon: steady engagement enables stronger ideas, better evidence, and clearer contributions.**

There are many ways to excel: conceptual depth, methodological rigor, visual craft, system design, narrative clarity, or reflective insight. Ultimately, what matters is not only the outcome, but the research process and evidence that led you there, and how clearly you make that process legible so others can learn from it too.

#### Participation

This course includes a class participation grade that will consider your contribution to a productive learning environment, whether in the classroom, online, or during office hours. Attendance will be tracked through attendance sheets and occasional roll calls. Good attendance and consistent engagement will be considered beyond the assigned participation portion of your grade and may also be factored into any potential rounding to higher letter grades.

Note that you do not need to participate in every classroom discussion. However, you are expected to actively engage with the instructor or classmates in some capacity (in class, online, via email, or during office hours). Rather than focus solely on penalizing absences, this policy rewards those who invest in the learning community by showing up and participating.

Students who may struggle with the course material but take advantage of resources such as office hours or mentoring can still be successful. The key is taking initiative to stay involved and seeking help when needed.

#### Letter Grades
Letter grades will be based on a straight scale using the following thresholds for grade cut-offs: A ranges from 90-100%, B ranges from 80-89.9%, C ranges from 70-79.9%, D ranges from 60-69.9%, and F for 59.9% or lower. However, strong attendance and participation may be taken into account in borderline situations, allowing a slightly lower percentage (e.g., 89.75%) to be rounded up.

**Under no circumstances will grades be adjusted down**. You can use this straight grading scale as an indicator of your minimum grade in the course at any time during the course. You should keep track of your own points so that at any time during the semester you may calculate your minimum grade based on the total number of points possible at that particular time. If and when, for any reason, you have concerns about your grade in the course, please email me to schedule a time for you to speak with me or your TA so that we can discuss study techniques or alternative strategies to help you.

**You have two weeks after each grade is released to raise any concerns or questions regarding their marks. Beyond this two-week window, no further inquiries or revisions to the grade will be considered.**


#### Late Days
Since students will need to present their projects to the class, it is very important that they are submitted by the deadlines, otherwise it will be difficult to schedule new presentation slots. **If one team member is unable to present, the responsibility will fall to the other team members -- no exceptions will be made. In the unlikely event that all team members are unable to complete the project by the deadline, a documented and compelling excuse, such as illness, hospitalization, is required.**

***

### Important Notes

Here is a summary of some key points:
- Office hours will be held on Fridays from 10 AM to 12 PM. Please email me at least one day in advance to schedule an appointment; I will send you a calendar invite to a slot between 10 AM and 12 PM.
- Please adhere to the maximum number of students allowed per team. No exceptions will be made.
- Please adhere to the course schedule. Presentations will not be rescheduled unless **all** team members have a valid and documented reason.
- Attendance is not optional, though justified absences with valid excuses will be understood. It is a crucial component of your learning experience and success in all courses, and it will be reflected in your grades.
- Use your own words, anything other than that is plagiarism. That includes copying from ChatGPT and/or slide decks available online.
- Under no circumstances should you compromise academic integrity. Plagiarizing others' work or cheating in any form is unfair to both your instructors and your peers.
- Please note that our definitions of academic integrity might differ, so refer to the definition provided below, which will be used throughout the course.
- The final course activities will take place in week 15. There will be no activities during week 16 (finals week).
- **Your success in this course will be directly proportional to the effort you invest. As a research-focused course, the more you put in, the more you will get out of it.**

***

### Academic Integrity
UIC is an academic community committed to providing an environment in which research, learning, and scholarship can flourish and in which all endeavors are guided by academic and professional integrity. In this community, all members including faculty, administrators, staff, and students alike share the responsibility to uphold the highest standards of academic honesty and quality of academic work so that such a collegial and productive environment exists. 

As a student and member of the UIC community, you are expected to adhere to the [Community Standards](https://dos.uic.edu/community-standards/) of integrity, accountability, and respect in all of your academic endeavors. When [accusations of academic dishonesty](https://dos.uic.edu/community-standards/academic-integrity/) occur, the Office of the Dean of Students investigates and adjudicates suspected violations of this student code. Unacceptable behavior includes cheating, unauthorized collaboration, fabrication or falsification, plagiarism, multiple submissions without instructor permission, using unauthorized study aids, coercion regarding grading or evaluation of coursework, and facilitating academic misconduct. Please review the [UIC Student Disciplinary Policy](https://dos.uic.edu/wp-content/uploads/sites/262/2018/10/DOS-Student-Disciplinary-Policy-2018-2019-FINAL.pdf) for additional information about the process by which instances of academic misconduct are handled towards the goal of developing responsible student behavior.

By submitting your assignments for grading you acknowledge these terms, you declare that your work is solely your own, and you promise that, unless authorized by the instructor or proctor, you have not communicated with anyone in any way during an exam or other online assessment. Let's embrace what it means to be a UIC community member and together be committed to the values of integrity.

Please familiarize yourself with the [UIC Department of Computer Science Student Code of Conduct](https://www.cs.uic.edu/~grad/CS_Code_of_Conduct.pdf).

***

### Inclusive Learning Environment
UIC values diversity and inclusion. Regardless of age, disability, ethnicity, race, gender, gender identity, sexual orientation, socioeconomic status, geographic background, religion, political ideology, language, or culture, we expect all members of this class to contribute to a respectful, welcoming, and inclusive environment for every other member of our class. If there are aspects of the instruction or design of this course that result in barriers to your inclusion, engagement, accurate assessment or achievement, please notify me as soon as possible.

***

### Disability Accommodation Procedures
UIC is committed to full inclusion and participation of people with disabilities in all aspects of university life. If you face or anticipate disability-related barriers while at UIC, please connect with the Disability Resource Center (DRC) at [drc.uic.edu](https://drc.uic.edu/), via email at [drc@uic.edu](mailto:drc@uic.edu), or call (312) 413-2183 to create a plan for reasonable accommodations. In order to receive accommodations, you will need to disclose the disability to the DRC, complete an interactive registration process with the DRC, and provide me with a Letter of Accommodation (LOA). Upon receipt of a LOA, I will gladly work with you and the DRC to implement approved accommodations.

***

### Disclaimer
This syllabus is intended to give the student guidance in what may be covered during the semester and will be followed as closely as possible. However, as the instructor, I reserve the right to modify, supplement and make changes as the course needs arise.
