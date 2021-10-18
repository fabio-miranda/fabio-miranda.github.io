### CS594 Special Topics: Big Data Visualization and Analytics

#### Table of Contents
1. [General Information](#general-information)
    1. [Class Meeting Information](#class-meeting-information)
    2. [Course Instructor](#course-instructor)
2. [Course Description](#course-description)
    1. [Rationale](#rationale)
    2. [Course Pre-requisites](#course-pre-requisites)
    3. [Textbooks and Readings](#textbooks-and-readings)
    4. [Objectives](#objectives)
    5. [Deliverables](#deliverables)
    6. [Format and Teaching Methods](#format-and-teaching-methods)
3. [Course Schedule](#course-schedule)
4. [Evaluation and Grading](#evaluation-and-grading)
    1. [Grading Policy](#grading-policy)
    2. [Evaluation Schedule](#evaluation-schedule)
    3. [Assignment Considerations](#assignment-considerations)
    4. [Late Days](#late-days)
5. [COVID-19 Considerations](#covid-19-considerations)
6. [Academic Integrity](#academic-integrity)
7. [Inclusive Learning Environment](#inclusive-learning-environment)
8. [Disability Accommodation Procedures](#disability-accomodation-procedures)
9. [Disclaimer](#disclaimer)

### General Information

#### Class Meeting Information
We will meet in-person in EVL's [Continuum room](https://www.evl.uic.edu/location), Mondays and Wednsdays at 9:30am-10:45am. Students are required to participate in these sessions; video recordings will be made available a few hours after each session. Office hours will be held via Zoom.

Discord will be the main platform for instructor / student communication, please check Blackboard for the Discord invitation link. Zoom meeting information, as well as video recordings, will be posted on Discord.

#### Course Instructor
Fabio Miranda

fabiom [at] uic.edu

https://fmiranda.me/

Office hours: Friday 11am - 1pm, or by appointment (Zoom info on Discord).

Instructor: Fabio Miranda (fabiom@uic.edu)

***

### Course Description

#### Rationale
In the past decade, technological innovations have enabled the automatic collection of a diverse set of very large datasets, from user-generated content, such as tweets, to sensor data, such as noise decibel level or aerial surveys. As pointed out by Hal Varian, Google's Chief Economist, today data is not only free but ubiquitous, and the ability to understand, process, extract value from, and visualize it, is going to be hugely important in the next decades. As data grows in size and complexity, however, siloed solutions become less capable of conveying all the structure and information hidden in the data. Visual analytics systems have been successful at enabling users to obtain insights from large data; Well-designed large-scale data visual analytics systems merge domain expertise and analytics techniques, enabling users to gain actionable insights into real-world problems by formulating and testing hypotheses, and to address domain-specific challenges.

This course will introduce students to big data visualization and analytics, focusing on the connections between visualization, data management, and data mining. We will cover potential sources of big data, including audio, image, graph, geometry, and mobile data, both structured or unstructured. The course will discuss effective metaphors to visualize data that might span billions of records; data mining and machine learning techniques that can summarize the data, or extract patterns to guide users in their visual exploration; and the data management techniques that can effectively drive interactivity in the visual exploration of big data.

#### Course Pre-requisites
Even though there are no specific pre-requisite courses, students are expected to be comfortable with programming and be able to learn new programming languages as required by the assignments and projects, as well as write technical documents.

#### Objectives

This course will focus on the intersection between visualization, data management, and data mining, covering the necessary topics to build visual analytics tools to handle big data. For the purposes of this course, big data will include any dataset with size (or complexity) that goes beyond the ability of standard tools and techniques to interactively manage and process it with a latency below 0.5 second.

At the end of the course, students will have a good understanding of the state of the art in visual analytics of large data, limitations of current techniques, and promising research directions. They will also be able to design and implement visual analytics systems capable of handling large data, by combining visualization and data mining techniques, data structures and algorithms that work in tandem to enable interactive data exploration and tackle real-world problems.

#### Deliverables

Students will be required to complete 3 assignments, where they will implement concepts and techniques presented in class using large datasets, from high-resolution timeseries to image data. There will be a fourth and final assignment where students will have to identify a research problem under my guidance, and propose and implement a small-scale system for the interactive exploration of a large dataset (or multiple datasets). Students will be able to use external datasets, or select from a list of available datasets, including spatiotemporal audio, image, graph, and geometry data. Students will have to produce a short paper reporting preliminary results, and give a brief final presentation in class. Ideally, a project will have produced the initial stages of a research paper, capable of being accepted at a workshop.

#### Format and Teaching Methods

The course is divided into four parts: 1) buildings blocks, where we will cover the current technologies, frameworks and libraries to build visual analytics systems for big data; 2) visualization, where we will discuss visualization implications of handling big data; 3) data, covering data management techniques to handle big data; and 4) analytics, covering the data mining and technical frameworks to extract patterns or features that can drive visual analytics systems.

The course will be driven by lectures and in-class discussion. Other relevant activities include reading research papers, programming and written assignments, and a final project.

***

### Course Schedule
This is a tentative course schedule and will be adjusted along the way. Slides will be made available after each lecture.

| Week |        | Topic                                     | Resources and readings                             | Slides |
| ---- | ------ | ----------------------------------------- | -------------------------------------------------- | ------ |
| 1  | Aug 23 | Intro to course and visualization | [[1](https://drops.dagstuhl.de/opus/volltexte/2018/8670/pdf/dagrep_v007_i011_p046_17461.pdf)], [[2](https://idl.cs.washington.edu/files/2014-Latency-InfoVis.pdf)], [[3](https://hal-lirmm.ccsd.cnrs.fr/lirmm-00272779/document)] | [01-intro.pdf](https://fmiranda.me/courses/cs594-slides/01-intro.pdf), [02-vis.pdf](https://fmiranda.me/courses/cs594-slides/02-vis.pdf) |
| 2  | Aug 30 | Building blocks: front-end technologies and libraries | [[1](https://eloquentjavascript.net/)], [[2](http://speakingjs.com/)], [[3](https://angular.io/)] | [03-d3.pdf](https://fmiranda.me/courses/cs594-slides/03-d3.pdf), [04-angular.pdf](https://fmiranda.me/courses/cs594-slides/04-angular.pdf) |
| 3  | Sep 6  | Building blocks: back-end technologies and libraries | [[1](https://flask.palletsprojects.com/)], [[2](https://www.boost.org/)], [[3](https://developer.nvidia.com/cuda-toolkit)] | [05-back-end.pdf](https://fmiranda.me/courses/cs594-slides/05-back-end.pdf) |
| 4  | Sep 13 | **Vis**: Big data visual analytics systems | [[1](https://ieeexplore.ieee.org/document/1333623)], [[2](https://kops.uni-konstanz.de/bitstream/handle/123456789/5631/Visual_Analytics_Scope_and_Challenges.pdf)], [[3](http://vgc.poly.edu/projects/taxivis/resources/paper.pdf)], [[4](https://hdc.cs.arizona.edu/papers/infovis_2020_dbsurvey.pdf)] | [06-vis-analytics-systems.pdf](https://fmiranda.me/courses/cs594-slides/06-vis-analytics-systems.pdf) |
| 5  | Sep 20 | **Vis**: Uncertainty | [[1](http://space.ucmerced.edu/Downloads/publications/Uncertainty_Visualization_Padilla_Kay_Hullman_2020.pdf)], [[2](https://damassets.autodesk.net/content/dam/autodesk/www/autodesk-reasearch/Publications/pdf/same-stats-different-graphs.pdf)], [[3](http://jonathanstray.com/papers/wickham.pdf)], [[4](https://research.tableau.com/sites/default/files/uncertainty_vis_eval.pdf)] | [07-uncertainty.pdf](https://fmiranda.me/courses/cs594-slides/07-uncertainty.pdf)   |
| 6  | Sep 27 | **Vis**: Progressive | [[1](https://drops.dagstuhl.de/opus/volltexte/2019/10346/pdf/dagrep_v008_i010_p001_18411.pdf)], [[2](http://idl.cs.washington.edu/files/2019-Falcon-CHI.pdf)], [[3](http://data.jku-vds-lab.at/papers/2014_vast_opening-black-box.pdf)], [[4](https://perer.org/papers/adamPerer-Progressive-VAST2014.pdf)] | [08-progressive.pdf](https://fmiranda.me/courses/cs594-slides/08-progressive.pdf) |
| 7 | Oct 4  | Reproducibility & interactive computing | [[1](https://www.computer.org/csdl/magazine/cs/2021/02/09391750/1sq7sW0pjWM)] | [09-interactive-computing.pdf](https://fmiranda.me/courses/cs594-slides/09-interactive-computing.pdf) |
| 8 | Oct 11 | **Analytics**: computational topology | [[1](https://topology-tool-kit.github.io/)], [[2](https://arxiv.org/abs/1610.06978)], [[3](http://cs.arizona.edu/~nivanferreira/pdfs/taxi_patterns.pdf)] | [10-topological-data-analysis.pdf](https://fmiranda.me/courses/cs594-slides/10-topological-data-analysis.pdf) |
| 9 | Oct 18 | **Data**: spatial structures | [[1](https://nanocubes.net/assets/pdf/nanocubes_paper.pdf)], [[2](http://vis.stanford.edu/files/2013-imMens-EuroVis.pdf)], [[3](https://fmiranda.me/publications/topkube/tvcg-2017-topkube.pdf)], [[4](https://ieeexplore.ieee.org/document/7536648)] | |
| 10 | Oct 25 | **Data**: spatial queries | [[1](https://www.harishd.com/home/assets/papers/raster-join.pdf)], [[2](https://fmiranda.me/publications/raster-join-demo/sigmod-2018-demo-raster-join.pdf)] | |
| 11 | Nov 1 | Final project midterm review | | |
| 12 | Nov 8  | **Data**: approximate queries, hashing, learned indices | [[1](https://dl.acm.org/doi/10.1145/3318464.3389752)], [[2](https://www.cin.ufpe.br/~nivan/pdfs/qds.pdf)] | |
| 13 | Nov 15  | **Data**: MapReduce, Hadoop, Spark | [[1](https://hadoop.apache.org/)], [[2](https://spark.apache.org/)] | |
| 14 | Nov 22 | **Analytics**: wavelet | [[1](https://link.springer.com/chapter/10.1007/978-3-030-03574-7_14)], [[2](https://ieeexplore.ieee.org/abstract/document/8024139)], [[3](https://ieeexplore.ieee.org/abstract/document/7347624)] | |
| 15 | Nov 29 | **Analytics**: streaming data | [[1](https://dl.acm.org/doi/abs/10.14778/3137628.3137652)], [[2](https://www.sciencedirect.com/science/article/pii/S2665963820300403)] | | 
| 16 | Dec 6  | Project presentations | | |


***

### Evaluation and Grading
#### Grading Policy
- Assignment 1: 15%
- Assignment 2: 15%
- Project proposal: 10%
- Final project midterm review: 15%
- Final project: 35%
- Participation: 10%

This course includes two initial assignments to make sure the student is familiar with the main components of front-end and back-end development. This course also includes a cumulative final project, where the student will need to demonstrate their research skills by combining visualization and data mining techniques, data structures and algorithms that work in tandem to enable interactive data exploration. There will be three milestones for this project spread throughout the semester that will allow the student to receive feedback: a project proposal, mid review and final presentation and report. The work will be evaluated with a focus on overall quality, rather than mechanical correctness. In the final project, the student will be able to work in groups of 2 or 3, with a *maximum* of 1 PhD student per group. Each group must also attend a 30-minute meeting every two weeks during the office hours, where we will discuss the overall direction and progress of the project. The final report must contain a detailed description of the contributions of each team member. Detailed assignment and project instructions will be made available following the evaluation schedule.

This course also includes a class participation grade that will take into consideration the student's contribution to a productive environment, either in the classroom, discord or office hours. This is a subjective assessment, and does not mean that the student needs to participate in *every* classroom discussion, but it does mean that they need to actively engage with the instructor or classmates in some capacity (classroom, discord, office hours, emails).

#### Evaluation Schedule
- Assignment 1:
  - Front-end technologies and libraries.
  - Week 3 (Sep 6), due week 4 (Sep 13).
  - Link: https://fmiranda.me/courses/cs594-fall-2021/assignment-1
- Assignment 2:
  - Back-end technologies and libraries.
  - Week 5 (Sep 18), due week 6 (Sep 27).
  - Link: https://fmiranda.me/courses/cs594-fall-2021/assignment-2
- Final project proposal:
  - 2-page document describing final project proposal.
  - Week 3 (Sep 6), due week 5 (Sep 24).
  - Link: https://fmiranda.me/courses/cs594-fall-2021/final-project/#milestone-1-project-proposal
- Final project midterm review:
  - ~10-minute presentation.
  - Due week 11 (presentations).
  - Link: https://fmiranda.me/courses/cs594-fall-2021/final-project/#milestone-2-midterm-review
- Final project:
  - ~30-minute presentation and final report.
  - Due weeks 15 and 16 (presentations) and week 16 (final report).

#### Late Days
Late submissions will be penalized at a deduction rate of 20% per day (after 5 days the submission will have a maximum grade of zero). The student can use five late-day points during the semester to make up for that; each late-day point extends an assignment deadline by one day.

***

### COVID-19 Considerations

Face Masks: Masks covering both the mouth and nose must be worn at all times by all students, faculty, and staff while on campus and inside any building regardless of vaccination status.  If you do not wear a mask, you will be asked to leave the classroom and will not be allowed back in class unless or until you wear a mask. If you have forgotten your mask, you may pick one up from one of the student information desks on campus during the first two weeks of campus. Students who do not comply with the mask-wearing policy will be reported to the Dean of Students. Eating and drinking are not allowed in classrooms. For more information regarding COVID-19 safety measures and guidelines for the campus, please see [here](https://provost.uic.edu/guidance-for-fall-2021/).

***

### Academic Integrity
UIC is an academic community committed to providing an environment in which research, learning, and scholarship can flourish and in which all endeavors are guided by academic and professional integrity. In this community, all members including faculty, administrators, staff, and students alike share the responsibility to uphold the highest standards of academic honesty and quality of academic work so that such a collegial and productive environment exists. 

As a student and member of the UIC community, you are expected to adhere to the [Community Standards](https://dos.uic.edu/community-standards/) of integrity, accountability, and respect in all of your academic endeavors. When [accusations of academic dishonesty](https://dos.uic.edu/community-standards/academic-integrity/) occur, the Office of the Dean of Students investigates and adjudicates suspected violations of this student code. Unacceptable behavior includes cheating, unauthorized collaboration, fabrication or falsification, plagiarism, multiple submissions without instructor permission, using unauthorized study aids, coercion regarding grading or evaluation of coursework, and facilitating academic misconduct. Please review the [UIC Student Disciplinary Policy](https://dos.uic.edu/wp-content/uploads/sites/262/2018/10/DOS-Student-Disciplinary-Policy-2018-2019-FINAL.pdf) for additional information about the process by which instances of academic misconduct are handled towards the goal of developing responsible student behavior.

By submitting your assignments for grading you acknowledge these terms, you declare that your work is solely your own, and you promise that, unless authorized by the instructor or proctor, you have not communicated with anyone in any way during an exam or other online assessment. Let’s embrace what it means to be a UIC community member and together be committed to the values of integrity.

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