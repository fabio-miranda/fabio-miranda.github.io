### CS424: Visualization and Visual Analytics

#### Table of Contents
1. [General Information](#general-information)
    1. [Class Meeting Information](#class-meeting-information)
    2. [Course Instructor](#course-instructor)
2. [Course Description](#course-description)
    1. [Rationale](#rationale)
    2. [Course Pre-requisites](#course-pre-requisites)
    3. [Course Objectives](#course-objectives)
    4. [Learning Outcomes](#learning-outcomes)
    5. [Textbook](#textbook)
    6. [Deliverables](#deliverables)
    7. [Format and Teaching Methods](#format-and-teaching-methods)
3. [Course Schedule](#course-schedule)
4. [Resources](#resources)
5. [Evaluation and Grading](#evaluation-and-grading)
    1. [Grading Policy](#grading-policy)
    2. [Participation](#participation)
    3. [Letter Grades](#letter-grades)
    4. [Evaluation Schedule](#evaluation-schedule)
    5. [Late Days](#late-days)
6. [Academic Integrity](#academic-integrity)
7. [Inclusive Learning Environment](#inclusive-learning-environment)
8. [Disability Accommodation Procedures](#disability-accomodation-procedures)
9. [Religious Holidays](#religious-holidays)
10. [Mental and Emotional Wellness](#mental-and-emotional-wellness)
11. [Disclaimer](#disclaimer)

### General Information

#### Class Meeting Information
We will meet in-person in the Lecture Center Building C - Room C004, at the time indicated in the schedule of classes. Please read the [evaluation](#evaluation-and-grading) section for details on attendance. Office hours will be held via Zoom.

Piazza will be the main platform for instructor / student communication, please check Blackboard for the Piazza invitation link.

Credit hours: 3 or 4.

#### Course Instructor
Fabio Miranda (fabiom [at] uic.edu)  
https://fmiranda.me/  
Office hours: Check Piazza for information.

#### Teaching Assistant
Kazi Omar (komar3 [at] uic.edu)  
Ridhuparan Kungumaraju (rkungu2 [at] uic.edu)  
Office hours: Check Piazza for information.

***

### Course Description

This course provides an introduction to the field of visualization, including scientific visualization, information visualization, visual analytics, and the effective use of interactive visualization for analytical reasoning. The course is designed to balance theory and practice, covering both design and implementation aspects of visual analytics systems. Topics include: basic principles of data visualization; exploratory data analysis; data management for visualization; embedded, juxtaposed and coordinated views; visual analytics systems; machine learning for visualization; spatial and uncertainty visualization; techniques for big data visualization. The course will also include an introduction to data analysis libraries and frameworks, and web technologies for visualization.

Course website: https://fmiranda.me/courses/cs424-fall-2023/

#### Rationale
In the past decade, technological innovations have enabled the automatic collection of a diverse set of very large datasets, from user-generated content, such as tweets, to sensor data, such as noise decibel level or aerial surveys. The ability to understand, process, extract value from, and visualize it, is going to be hugely important in the next decades. Well-designed data visual analytics systems merge domain expertise and analytics techniques, enabling users to gain insights into real-world problems by formulating and testing hypotheses, and to address domain-specific challenges. This course will introduce students to visualization and visual analytics, covering the fundamentals of visualization and visual analytics, exploratory data analysis, data management and machine learning techniques for visualization, and the technological frameworks needed to create visual analytics systems.

#### Course Pre-requisites

CS 251 (Data Structures) and solid grasp of programming in a language like C, C++, Java, Python or JavaScript and basic data structures to be able to implement the visualization projects in the course.

#### Course objectives

By the end of the course, students will have a good understanding of the basic principles of visualization and visual analytics and will be able to articulate advantages and disadvantages of visual design choices for different data types. They will also be able to design and implement web-based visual analytics systems by combining visualization, data management, data mining and machine learning techniques that work in tandem to enable interactive exploration of multidimensional and heterogeneous datasets.

#### Learning outcomes

- Understand the state of the art in visualization and visual analytics.
- Acquire, clean and transform data to satisfy visualization requirements.
- Design and implement visualizations.
- Create web-based interactive visualizations using modern technologies.

#### Textbook

- Visualization Analysis and Design, AK Peters (Optional)


#### Deliverables

Students will be required to complete four assignments, where they will implement concepts and techniques covered in class using real-world datasets. Students will need to present their projects to the class, so it is very important that they are finished by the deadlines. The first assignment will cover visualization sketching (using pen and paper). The second assignment will cover exploratory data analysis using interactive computing frameworks (e.g., Jupyter); the third project will cover coordinated views using collaborative environments (e.g., Observable); the fourth project will cover spatial data visualization using web technologies. Project repositories should also contain a ~500-word markdown report, giving an overview of the dataset, approach and detailing findings. On top of that, students will also need to select one visualization (from a well-known source), and critically evaluate it, presenting their conclusions through a written report.

#### Format and Teaching Methods

The course is divided into three parts: 1) basic principles of visualization and exploratory data analysis; 2) coordinated views and visual analytics; 3) spatial and uncertainty visualization, and data mining and machine learning techniques. In each part, students will be introduced to the related theory as well as different tech stacks needed to create visual analytics solutions. The course will be driven by lectures and in-class discussion. Other relevant activities include three projects and two evaluations of visualizations.

***

### Course Schedule

This schedule will be updated throughout the semester with links for slides and reading material.

###### Week 1 (Aug 21 - 25)
- **Topic: Course introduction & Why vis?**
- Slides: [Introduction and overview](https://fmiranda.me/courses/cs424-slides/01-intro.pdf), [Why visualize data?](https://fmiranda.me/courses/cs424-slides/02-why-vis.pdf)
- Reading: Munzner (Ch. 1)

###### Week 2 (Aug 28 - Sep 1)
- **Topic: Data & attribute types, marks, channels**
- Slides: [Introduction to visualization](https://fmiranda.me/courses/cs424-slides/03-vis.pdf)
- Reading: Munzner (Ch. 2, 5)

###### Week 3 (Sep 1 - 8)
- **Topic: Task abstraction**
- Slides: [Task abstraction](https://fmiranda.me/courses/cs424-slides/04-tasks.pdf)
- Reading: Munzner (Ch. 3, 5), [Best Practices for Data Visualisation](https://royal-statistical-society.github.io/datavisguide/)
![Static Badge](https://img.shields.io/badge/Assignment%201%20released-2171b5)

###### Week 4 (Sep 11 - 15)
- **Topic: Data questions & transformations**
- **Lab: Exploratory data analysis with Pandas** ([link](lab-1/))
- Slides: [Data questions & transformations](https://fmiranda.me/courses/cs424-slides/06-data-questions.pdf), [Pandas](https://fmiranda.me/courses/cs424-slides/04-pandas.pdf)
- Reading: [Heer et al., 2010](https://dl.acm.org/doi/10.1145/1794514.1805128), [Perer and Schneiderman, 2008](https://dl.acm.org/doi/10.1145/1357054.1357101)  
![Static Badge](https://img.shields.io/badge/Lab%20session%201%20(Thu)-2f8a70)

###### Week 5 (Sep 18 - 22)
- **Topic: Interaction & multiple views**
- **Lab: Exploratory data analysis with GeoPandas** ([link](lab-2/))
- Slides: [Interaction](https://fmiranda.me/courses/cs424-slides/07-interaction.pdf), [GeoPandas](https://fmiranda.me/courses/cs424-slides/05-geopandas.pdf)
- Reading: [GeoPandas](https://geopandas.org/en/stable/getting_started.html)
![Static Badge](https://img.shields.io/badge/Lab%20session%202%20(Thu)-2f8a70)
![Static Badge](https://img.shields.io/badge/Assignment%201%20due-aa2721)
![Static Badge](https://img.shields.io/badge/Assignment%202%20released-2171b5)
![Static Badge](https://img.shields.io/badge/Written%20critique%20released-2171b5)

###### Week 6 (Sep 25 - 29)
- **Lab 1: Sketches evaluation**
- **Lab 2: Web technologies for visualization**
- Slides: [Javascript, D3](https://fmiranda.me/courses/cs424-slides/05-d3.pdf)
- Reading: [D3 getting started](https://d3js.org/getting-started), [D3 paper](http://vis.stanford.edu/files/2011-D3-InfoVis.pdf)
![Static Badge](https://img.shields.io/badge/Lab%20session%203%20(Tue)-2f8a70)
![Static Badge](https://img.shields.io/badge/Lab%20session%204%20(Thu)-2f8a70)

###### Week 7 (Oct 2 - 6)
- **Topic: Grammars for visualization (Part 1)**
- **Lab: Visualization grammars**
- Slides: [Visualization grammars](https://fmiranda.me/courses/cs424-slides/06-vis-grammars.pdf)
- Reading: [A Layered Grammar of Graphics](https://vita.had.co.nz/papers/layered-grammar.pdf), [The Grammar of Graphics](https://link.springer.com/book/10.1007/0-387-28695-0), [Vega-Lite](https://ieeexplore.ieee.org/abstract/document/7539624), [Intro to Vega-Lite](https://vega.github.io/vega-lite/tutorials/getting_started.html), [Survey](https://arxiv.org/pdf/2207.07998.pdf)
![Static Badge](https://img.shields.io/badge/Lab%20session%205%20(Thu)-2f8a70)

###### Week 8 (Oct 9 - 13)
- **Topic: Spatial visualization (Part 1)**
- Slides: [Spatial vis](https://fmiranda.me/courses/cs424-slides/08-spatial-vis.pdf)
- Reading: [TaxiVis](https://ieeexplore.ieee.org/abstract/document/6634127)
![Static Badge](https://img.shields.io/badge/Written%20critique%20due%20-aa2721)
![Static Badge](https://img.shields.io/badge/Assignment%202%20due-aa2721)
![Static Badge](https://img.shields.io/badge/Assignment%203%20released-2171b5)

###### Week 9 (Oct 16 - 20)
- **Topic: Uncertainty visualization**
- **Lab: Spatial visualization**
- Slides: [Uncertainty vis](https://fmiranda.me/courses/cs424-slides/09-uncertainty.pdf)
- Reading:
![Static Badge](https://img.shields.io/badge/Lab%20session%206%20(Thu)-2f8a70)
  
###### Week 10 (Oct 23 - 27)
- **Topic: Project updates**
![Static Badge](https://img.shields.io/badge/Online%20(Zoom)-2f8a70)

###### Week 11 (Oct 30 - Nov 3)
- **Topic: Spatial visualization (Part 2)**
- Slides: [Advanced spatial visualization](https://fmiranda.me/courses/cs424-slides/09-advanced-spatial-vis.pdf)
- Reading: [The Urban Toolkit](https://arxiv.org/abs/2308.07769), [Grammar tutorial](https://fmiranda.me/publications/pdfs/grammars.pdf)
![Static Badge](https://img.shields.io/badge/Assignment%203%20due-aa2721)
![Static Badge](https://img.shields.io/badge/Assignment%204%20released-2171b5)

###### Week 12 (Nov 6 - 10)
- **Topic: Visual analytics systems -- integrating visualization and analytics (invited talks)**
- **Lab: Visualization grammars for spatial visualization**
- Slides:  
- Reading:
![Static Badge](https://img.shields.io/badge/Lab%20session%207%20(Thu)-2f8a70)

###### Week 13 (Nov 13 - 17)
- **Topic: Data management for visualization**
- Slides:  
- Reading:

###### Week 14 (Nov 20 - 24)
- **Topic: Machine learning & data mining for visualization**
- Slides:  
- Reading:

###### Week 15 (Nov 27 - Dec 1)
- **Topic: Final project presentations**
- Slides:  
- Reading:
![Static Badge](https://img.shields.io/badge/Assignment%204%20due-aa2721)


***

### Resources

The assignments of this course require the design and implementation of web-based visualizations. Feel free to use the links below to familiarize yourself with common tools and languages.

- Visualization programming toolkits
  - [D3](http://mbostock.github.com/d3): JavaScript library for data-driven DOM manipulation.
  - [Vega](http://vega.github.io/vega): Declarative language for visualizations.
  - [Vega-Lite](http://vega.github.io/vega-lite): High-level visualization grammar.
  - [VTK](http://www.vtk.org/): scientific visualization toolkit.

- HTML, CSS
  - MDN Web Docs: [HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML), [CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS)
  - [HTML in 12 Minutes](https://www.youtube.com/watch?v=bWPMSSsVdPk)
  - [CSS in 12 Minutes](https://www.youtube.com/watch?v=1PnVor36_40)

- JavaScript and TypeScript
  - [Learn JavaScript in 12 Minutes](https://www.youtube.com/watch?v=Ukg_U3CnJWI)
  - [Eloquent JavaScript](https://eloquentjavascript.net/)
  - [Mozilla JavaScript tutorial](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
  - [JavaScript Crash Course](https://www.w3resource.com/course/javascript-course.html#/slide-instructions)

- Web development tools
  - [Visual Studio Code](https://code.visualstudio.com/)
  - [Sublime Text](https://www.sublimetext.com/)
  - [Git for Windows](https://gitforwindows.org/)
  - [Homebrew](https://brew.sh/)

- Git and GitHub
  - [Git documentation](https://git-scm.com/doc)
  - [A Visual Git Reference](http://marklodato.github.io/visual-git-guide/index-en.html)
  - [GitHub tutorial](https://docs.github.com/en/get-started/quickstart/hello-world)

- Color resources
  - [Color Brewer](http://colorbrewer2.org/)


***

### Evaluation and Grading
#### Grading Policy
- Assignment 1: 15%
- Assignment 2: 20%
- Assignment 3: 20%
- Assignment 4 / final project: 25%
- Vis critique report: 15%
- Participation: 5%

This course includes four assignments to make sure the student is familiar with the main components of visualization and visual analytics systems. The assignments will balance theory and practice, covering both design and implementation aspects. The student can either choose a different dataset for each assignment, or re-use the same dataset over the four assignments -- potentially further exploring and augmenting findings, insights, techniques, and/or methods. A list of datasets will be made available.

Assignment 1 will not involve any programming. Assignment 2 will use Python. For Assignments 3 and 4 the student will be able to choose between high-level grammars or Javascript / Typescript.

Students will present their final assignments to the class, following the course schedule. Students will also write a one-page evaluating of two different visualizations, from well-known sources. *For assignments and visualization evaluations, students can optionally work in groups*. Detailed instructions will be made available following the evaluation schedule. We will use [GitHub Classroom](https://github.com/uic-cs424) for the projects.

#### Participation

This course includes a class participation grade that will take into consideration the student's contribution to a productive environment, either in the classroom, Piazza or office hours. Attendance is important, but this is a subjective assessment, and does not mean that the student needs to participate in *every* classroom discussion. It does mean that they need to actively engage with the instructor or classmates in some capacity (classroom, Piazza, office hours, emails). More importantly, rather than only penalize absences (by subtracting points), students will be rewarded for good attendance and participation.

Students who struggle with the material and activities, but that take advantage of other opportunities provided (e.g., office hours, mentoring), can be successful in this course.

#### Letter Grades
Letter grades will be based on a straight scale using the following thresholds for grade cut-offs: A range from 90-100%, B range from 80-89.9%, C range from 70-79.9%, D range from 60-69.9%, and F given to 59.9% or lower.

**Under no circumstances will grades be adjusted down**. You can use this straight grading scale as an indicator of your minimum grade in the course at any time during the course. You should keep track of your own points so that at any time during the semester you may calculate your minimum grade based on the total number of points possible at that particular time. If and when, for any reason, you have concerns about your grade in the course, please email me to schedule a time for you to speak with me or your TA so that we can discuss study techniques or alternative strategies to help you.

#### Evaluation Schedule
- Assignment 1:
  - Visualization sketching
  - [Link](assignment-1/)
  - Due week 5
- Assignment 2:
  - Exploratory data analysis
  - Jupyter
  - [Link](assignment-2/)
  - Due week 8
- Assignment 3:
  - Coordinated views
  - Vega-Lite
  - [Link](assignment-3)
  - Due week 11
- Assignment 4 / final project:
  - Web visualization interface
  - [Link](assignment-4)
  - Due week 15
- Vis critique presentation:
  - Written report.
  - Due week 8

#### Lab Schedule
- Lab 1:
  - Exploratory data analysis with Pandas
  - [Link](lab-1)
  - Week 4
- Lab 2:
  - Exploratory data analysis with GeoPandas
  - [Link](lab-2)
  - Week 5

#### Late Days
Since students will need to present their projects to the class, it is very important that they are submitted by the deadlines, otherwise it will be difficult to schedule new presentation slots. If you are unable to complete a project by the deadline, a documented compelling excuse (such as illness, hospitalization) is required.

***


### Academic Integrity
UIC is an academic community committed to providing an environment in which research, learning, and scholarship can flourish and in which all endeavors are guided by academic and professional integrity. In this community, all members including faculty, administrators, staff, and students alike share the responsibility to uphold the highest standards of academic honesty and quality of academic work so that such a collegial and productive environment exists. 

As a student and member of the UIC community, you are expected to adhere to the [Community Standards](https://dos.uic.edu/community-standards/) of integrity, accountability, and respect in all of your academic endeavors. When [accusations of academic dishonesty](https://dos.uic.edu/community-standards/academic-integrity/) occur, the Office of the Dean of Students investigates and adjudicates suspected violations of this student code. Unacceptable behavior includes cheating, unauthorized collaboration, fabrication or falsification, plagiarism, multiple submissions without instructor permission, using unauthorized study aids, coercion regarding grading or evaluation of coursework, and facilitating academic misconduct. Please review the [UIC Student Disciplinary Policy](https://dos.uic.edu/wp-content/uploads/sites/262/2018/10/DOS-Student-Disciplinary-Policy-2018-2019-FINAL.pdf) for additional information about the process by which instances of academic misconduct are handled towards the goal of developing responsible student behavior.

By submitting your assignments for grading you acknowledge these terms, you declare that your work is solely your own, and you promise that, unless authorized by the instructor or proctor, you have not communicated with anyone in any way during an exam or other online assessment. Let's embrace what it means to be a UIC community member and together be committed to the values of integrity.

Our class (in person and online) will follow the [CS Code of Conduct](https://www.cs.uic.edu/~grad/CS_Code_of_Conduct.pdf).   If you are not adhering to our course norms, a case of behavior misconduct will be submitted to the Dean of Students and to the Director of Undergraduate Studies in the department of Computer Science.  If you are not adhering to our course norms, you will not get full credit for your work in this class.  For extreme cases of violating the course norms, credit for the course will not be given. 

All the work you submit must be your own; you should not use paraphrasing software like (QuillBot), or AI software for writing (like ChatGPT), or any AI tool for content generation (spell-checkers are allowed) – unless explicitly allowed to do so. If in doubt about a specific tool, ask.

***

### Inclusive Learning Environment
UIC values diversity and inclusion. Regardless of age, disability, ethnicity, race, gender, gender identity, sexual orientation, socioeconomic status, geographic background, religion, political ideology, language, or culture, we expect all members of this class to contribute to a respectful, welcoming, and inclusive environment for every other member of our class. If there are aspects of the instruction or design of this course that result in barriers to your inclusion, engagement, accurate assessment or achievement, please notify me as soon as possible.

***

### Disability Accommodation Procedures
UIC is committed to full inclusion and participation of people with disabilities in all aspects of university life. If you face or anticipate disability-related barriers while at UIC, please connect with the Disability Resource Center (DRC) at [drc.uic.edu](https://drc.uic.edu/), via email at [drc@uic.edu](mailto:drc@uic.edu), or call (312) 413-2183 to create a plan for reasonable accommodations. In order to receive accommodations, you will need to disclose the disability to the DRC, complete an interactive registration process with the DRC, and provide me with a Letter of Accommodation (LOA). Upon receipt of a LOA, I will gladly work with you and the DRC to implement approved accommodations.

***

### Religious Holidays
I will make every effort to avoid scheduling exams or requiring student projects be submitted on religious holidays. If you wish to observe your religious holidays, please notify me by the tenth day of the semester of the date when you will be absent unless the religious holiday is observed on or before the tenth day of the semester.  In such cases, please notify me at least five days in advance of the date when you will be absent.  I will make every reasonable effort to honor your request and not penalize you for missing the class.  If an examination or project is due during your absence, you  will  be  given  an  exam  or  assignment  equivalent  to  the  one  completed  by  those students in attendance. Students may appeal through campus grievance procedures for religious accommodations.

***

### Mental and Emotional Wellness
Counseling Services are available for all UIC students. You may seek free and confidential services from the Counseling Center at https://counseling.uic.edu/. The Counseling Center is located in the Student Services Building; you may contact them at (312) 996-3490 during normal business hours (M-F, 9 am -5 pm). If calling after hours, press 2 to be connected to a crisis counselor.  In addition to offering counseling services, the Counseling Center also operates the InTouch Crisis Hotline from 6:00 p.m.-10:30 p.m. They offer support and referrals to callers, as well as telephone crisis interventions; please call (312) 996-5535. 

### Campus Advocacy Network 
The Campus Advocacy Network provides information and offers resources to all UIC students, faculty, and staff. Under the Title IX law you have the right to an education that is free from any form of gender-based violence and discrimination. Crimes of sexual assault, domestic violence, sexual harassment, and stalking are against the law and can be prevented. For more information or for confidential victim-services and advocacy, contact UIC's Campus Advocacy Network at 312-413-1025 or visit http://can.uic.edu/.  To make a report to UIC's Title IX office, email TitleIX@uic.eduor call (312) 996-5657.


***

### Disclaimer
This syllabus is intended to give the student guidance in what may be covered during the semester and will be followed as closely as possible. However, as the instructor, I reserve the right to modify, supplement and make changes as the course needs arise.
