### CS524 - Big Data Visualization and Analytics (Fall 2024)

#### Table of Contents
1. [General Information](#general-information)
    1. [Class Meeting Information](#class-meeting-information)
    2. [Course Instructor](#course-instructor)
2. [Course Description](#course-description)
    1. [Rationale](#rationale)
    2. [Pre-requisites](#pre-requisites)
    3. [Objectives](#objectives)
    4. [Deliverables](#deliverables)
    5. [Textbooks and Readings](#textbooks-and-readings)
    6. [Format and Teaching Methods](#format-and-teaching-methods)
3. [Course Schedule](#course-schedule)
4. [Evaluation and Grading](#evaluation-and-grading)
    1. [Grading Policy](#grading-policy)
    2. [Evaluation Schedule](#evaluation-schedule)
    3. [Late Days](#late-days)
5. [Important Notes](#important-notes)
6. [Academic Integrity](#academic-integrity)
7. [Inclusive Learning Environment](#inclusive-learning-environment)
8. [Disability Accommodation Procedures](#disability-accomodation-procedures)
9. [Disclaimer](#disclaimer)


***

### General Information

#### Class Meeting Information
We will meet in-person in EVL's [Continuum room](https://www.evl.uic.edu/location), at the time indicated in the schedule of classes. Please read the [evaluation](#evaluation-and-grading) section for details on attendance, and [important notes](#important-notes) for key points. Office hours will be held via Zoom.

Piazza will be the main platform for instructor / student communication, please check Blackboard for the invitation link. Zoom meeting information will be posted on Piazza.

#### Course Instructor
Fabio Miranda

fabiom [at] uic.edu

https://fmiranda.me/

Office hours: Friday 10am - 12pm, by appointment (Zoom info on Piazza). Please email me at least one day before office hours to schedule an appointment.


***

### Course Description

#### Rationale
In the past decade, technological innovations have enabled the automatic collection of a diverse set of very large datasets, from user-generated content, such as tweets, to sensor data, such as noise decibel level or aerial surveys. As pointed out by Hal Varian, Google's Chief Economist, today data is not only free but ubiquitous, and the ability to understand, process, extract value from, and visualize it, is going to be hugely important in the next decades. As data grows in size and complexity, however, siloed solutions become less capable of conveying all the structure and information hidden in the data. Visual analytics systems have been successful at enabling users to obtain insights from large data; Well-designed large-scale data visual analytics systems merge domain expertise and analytics techniques, enabling users to gain actionable insights into real-world problems by formulating and testing hypotheses, and to address domain-specific challenges.

This course will introduce students to big data visualization and analytics, focusing on the connections between visualization, data management, and data mining. We will cover potential sources of big data, including audio, image, graph, geometry, and mobile data, both structured or unstructured. The course will discuss effective metaphors to visualize data that might span billions of records; data mining and machine learning techniques that can summarize the data, or extract patterns to guide users in their visual exploration; and the data management techniques that can effectively drive interactivity in the visual exploration of big data.

#### Pre-requisites
Students are expected to be proficient in programming, capable of learning new programming languages as needed for assignments and projects, and skilled in writing short technical documentation.

#### Objectives
This course will focus on the intersection between visualization, data management, and data mining, covering the necessary topics to build visual analytics tools to handle big data. For the purposes of this course, big data will include any dataset with size (or complexity) that goes beyond the ability of standard tools and techniques to interactively manage and process it with a latency below 0.5 second.

At the end of the course, students will have a good understanding of the state of the art in visual analytics of large data, limitations of current techniques, and promising research directions. They will also be able to design and implement visual analytics systems capable of handling large data, by combining visualization and data mining techniques, data structures and algorithms that work in tandem to enable interactive data exploration and tackle real-world problems.

After successful completion of this course, students will be able to:
-	Understand the state of the art in visual analytics of large data, limitations of current techniques, and promising research directions.
-	Design and implement visual analytics capable of handling large data.
-	Combine visualization and data mining techniques, data structures and algorithms that work in tandem to enable interactive data exploration.
-	Understand and apply data management and mining techniques specifically designed for visualization and visual analytics.
-	Create web-based interactive visualizations using JavaScript, D3, Angular and React. 

#### Deliverables

Students will be required to complete 3 assignments, where they will implement concepts and techniques presented in class using large datasets, from high-resolution timeseries to image data. There will be a fourth and final assignment where students will have to identify a research problem under my guidance, and propose and implement a small-scale system for the interactive exploration of a large dataset (or multiple datasets). Students will be able to use external datasets, or select from a list of available datasets, including spatiotemporal audio, image, graph, and geometry data. Students will have to produce a short paper reporting preliminary results, and give a brief final presentation in class. Ideally, a project will have produced the initial stages of a research paper, capable of being accepted at a workshop.

Students will also be required to review and present published papers to class.

#### Textbooks and readings

- T. Munzner, 2014. Visualization Analysis and Design, AK Peters (Optional)
- Research papers from conferences and journals, including visualization (VIS, EuroVis, IEEE TVCG), database (SIGMOD, VLDB, IEEE Big Data), and related fields (IEEE TITS, AAAI).


#### Format and Teaching Methods

The course is divided into four parts: 1) buildings blocks, where we will cover the current technologies, frameworks and libraries to build visual analytics systems for big data; 2) visualization, where we will discuss visualization implications of handling big data; 3) data, covering data management techniques to handle big data; and 4) analytics, covering the machine learning, data mining and technical frameworks to extract patterns or features that can drive visual analytics systems.

The course will be driven by lectures and in-class discussion. Other relevant activities include reading research papers, programming and written assignments, and a final project.

***

### Course Schedule
This is a tentative course schedule and will be adjusted along the way. Slides may be updated after each lecture. Each week includes a few **required readings** to make sure you have a comprehensive understanding of the topic.

| Week | Week date | Topic | Resources and readings | Slides | Research presentations |
|:----:|:----------:|:----------------------------------------- |:-------------------------------------------------- |:------ |:------ |
| 1 | 08/27/2024 | Intro to course, visualization, and building blocks | Required: [[1](https://drops.dagstuhl.de/opus/volltexte/2018/8670/pdf/dagrep_v007_i011_p046_17461.pdf)]; Others: [[2](https://idl.cs.washington.edu/files/2014-Latency-InfoVis.pdf)], [[3](https://hal-lirmm.ccsd.cnrs.fr/lirmm-00272779/document)] | [01-intro.pdf](https://fmiranda.me/courses/cs524-slides/01-intro.pdf), [02-vis.pdf](https://fmiranda.me/courses/cs524-slides/02-vis.pdf) | -
| 2 | 09/03/2024 | **Vis**: Big data visual analytics systems | Required: [[1](http://vgc.poly.edu/projects/taxivis/resources/paper.pdf)], [[2](https://kops.uni-konstanz.de/bitstream/handle/123456789/5631/Visual_Analytics_Scope_and_Challenges.pdf)], [[3](https://doi.org/10.1080/15230406.2023.2190164)]; Others: [[4](https://ieeexplore.ieee.org/document/1333623)], [[5](https://hdc.cs.arizona.edu/papers/infovis_2020_dbsurvey.pdf)] | [03-building-blocks.pdf](https://fmiranda.me/courses/cs524-slides/03-building-blocks.pdf), [04-vis-analytics.pdf](https://fmiranda.me/courses/cs524-slides/04-vis-analytics-systems.pdf) | -
| 3 | 09/10/2024 | Project discussion & presentations | | |
| 4 | 09/17/2024 | **Vis**: Toolkits| Required: [[1](https://ieeexplore.ieee.org/document/7539624)], [[2](https://ieeexplore.ieee.org/document/10290965)] |  | Teams 1, 2 |
| 5 | 09/24/2024 | **Vis**: Uncertainty | Required: [[1](http://space.ucmerced.edu/Downloads/publications/Uncertainty_Visualization_Padilla_Kay_Hullman_2020.pdf)]; Others: [[2](https://damassets.autodesk.net/content/dam/autodesk/www/autodesk-reasearch/Publications/pdf/same-stats-different-graphs.pdf)], [[3](http://jonathanstray.com/papers/wickham.pdf)], [[4](https://research.tableau.com/sites/default/files/uncertainty_vis_eval.pdf)] | [05-uncertainty.pdf](https://fmiranda.me/courses/cs524-slides/05-uncertainty.pdf) | Teams 3, 4 |
| 6 | 10/01/2024 | **Vis**: Progressive | Required: [[1](http://data.jku-vds-lab.at/papers/2014_vast_opening-black-box.pdf)]; Others: [[2](https://drops.dagstuhl.de/opus/volltexte/2019/10346/pdf/dagrep_v008_i010_p001_18411.pdf)], [[3](http://idl.cs.washington.edu/files/2019-Falcon-CHI.pdf)], [[4](http://data.jku-vds-lab.at/papers/2014_vast_opening-black-box.pdf)], [[5](https://perer.org/papers/adamPerer-Progressive-VAST2014.pdf)] | [06-progressive.pdf](https://fmiranda.me/courses/cs524-slides/06-progressive.pdf) | Teams 5, 6 |
| 7 | 10/08/2024 | **Vis**: Vis for machine learning | Required: [[1](https://ieeexplore.ieee.org/abstract/document/8440124)] |[08-vis-ml.pdf](https://fmiranda.me/courses/cs524-slides/08-vis-ml.pdf) | Teams 7, 8 |
| 8 | 10/15/2024 | Presentations (VIS week) | | |
| 9 | 10/22/2024 | **Analytics**: Machine learning for vis | Required: [[1](https://ieeexplore.ieee.org/abstract/document/9523770)], [[2](https://arxiv.org/abs/2205.13064)] | [07-ml-vis.pdf](https://fmiranda.me/courses/cs524-slides/07-ml-vis.pdf) | Teams 9, 10 |
| 10 | 10/29/2024 | **Analytics**: Computational topology | Required: [[1](http://cs.arizona.edu/~nivanferreira/pdfs/taxi_patterns.pdf)], [[2](https://arxiv.org/abs/1610.06978)]; Others: [[3](https://topology-tool-kit.github.io/)] | [09-topological-data-analysis.pdf](https://fmiranda.me/courses/cs524-slides/09-topological-data-analysis.pdf) | Teams 1, 2 |
| 11 | 11/05/2024 | Invited talks | | | Teams 3, 4 |
| 12 | 11/12/2024 | **Data**: Visualization data structures and spatial queries | Required: [[1](https://nanocubes.net/assets/pdf/nanocubes_paper.pdf)], [[2](https://fmiranda.me/publications/raster-join-demo/sigmod-2018-demo-raster-join.pdf)]; Others: [[3](http://vis.stanford.edu/files/2013-imMens-EuroVis.pdf)], [[4](https://fmiranda.me/publications/topkube/tvcg-2017-topkube.pdf)], [[5](https://ieeexplore.ieee.org/document/7536648)], [[6](https://www.harishd.com/home/assets/papers/raster-join.pdf)] | [10-spatial-data-structures.pdf](https://fmiranda.me/courses/cs524-slides/10-spatial-data-structures.pdf), [11-visualization-data-structures.pdf](https://fmiranda.me/courses/cs524-slides/11-visualization-data-structures.pdf) | Teams 5, 6 |
| 13 | 11/19/2024 | **Data**: MapReduce, Hadoop, Spark, Dask | [[1](https://hadoop.apache.org/)], [[2](https://spark.apache.org/)], [[3](https://dask.org/)] | [12-mapreduce-spark.pdf](https://fmiranda.me/courses/cs524-slides/12-mapreduce-spark.pdf) | Teams 7, 8 |
| 14 | 11/26/2024 | **Data**: Approximate queries, hashing, learned indices | Required: [[1](https://dl.acm.org/doi/10.1145/3318464.3389752)]; Others: [[2](https://www.cin.ufpe.br/~nivan/pdfs/qds.pdf)] | [13-probabilistic-data-structures.pdf](https://fmiranda.me/courses/cs524-slides/13-probabilistic-data-structures.pdf) | Teams 9, 10 |
| 15 | 12/03/2024 | Project presentations | | |




***

### Evaluation and Grading
#### Grading Policy
- Research paper presentations: 40% (20% each)
- Final project midterm review: 20%
- Final project: 25%
- Participation: 15%

This course includes a cumulative final project, where the student will need to demonstrate their research skills by combining visualization and data mining techniques, data structures and algorithms that work in tandem to enable interactive data exploration. There will be three milestones for this project spread throughout the semester that will allow the student to receive feedback: a project proposal, mid review and final presentation and report. The work will be evaluated with a focus on overall quality, rather than mechanical correctness. Detailed assignment and project instructions will be made available following the evaluation schedule.

In addition, students will have to prepare and present two 30-minute presentations on a relevant research topic. This will require them to read research papers, organize the main contributions of the papers, and deliver their presentations in a clear and engaging manner.

**Students may work in teams of up to three members for both the final project and research paper presentations. While teams of one or two are also allowed, teams of four or more are not permitted (no exceptions will be made).**

This course also includes a class participation grade that will take into consideration the student's contribution to a productive environment, either in the classroom, Piazza or office hours. This is a holistic evaluation and may include attendance, participation, engagement in discussions, questions after presentations, and support for colleagues.

#### Evaluation Details

For grades, see Grading Policy. For schedule, see Course Schedule. **Assignments 1 and 2 will not be graded**; they are designed to ensure you become proficient with the necessary technologies.

- Assignment 1 (optional, not graded):
  - Front-end technologies and libraries.
  - Link: https://github.com/uic-big-data/assignment-1/
- Assignment 2 (optional, not graded):
  - Back-end technologies and libraries.
  - Link: https://github.com/uic-big-data/assignment-2/
- Research paper presentation:
  - Two presentations.
  - Link: https://fmiranda.me/courses/cs524-fall-2024/research-presentation/
- Project proposal:
  - Link: https://fmiranda.me/courses/cs524-fall-2024/final-project/#milestone-1-project-proposal
- Final project midterm review:
  - Link: https://fmiranda.me/courses/cs524-fall-2024/final-project/#milestone-2-midterm-review
- Final project:
  - Link: https://fmiranda.me/courses/cs524-fall-2024/final-project/#milestone-3-final-project


#### Late Days
Since students will need to present their projects to the class, it is very important that they are submitted by the deadlines, otherwise it will be difficult to schedule new presentation slots. **If one team member is unable to present, the responsibility will fall to the other team members -- no exceptions will be made. In the unlikely event that all team members are unable to complete the project by the deadline, a documented and compelling excuse, such as illness, hospitalization, is required.**

***

### Important Notes

Here is a summary of some key points:
- Office hours will be held on Fridays from 10 AM to 12 PM. Please email me at least one day in advance to schedule an appointment; I will send you a calendar invite between 10 AM and 12 PM.
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
