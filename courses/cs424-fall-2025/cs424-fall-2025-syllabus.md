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
   1. [Theme 1: Foundations of Visualization](#theme-1-foundations-of-visualization)  
   2. [Theme 2: Visual Data Analysis Workflows](#theme-2-visual-data-analysis-workflows)  
   3. [Theme 3: AI + Visualization](#theme-3-ai-visualization)  
   4. [Theme 4: Frontiers](#theme-4-frontiers)  
4. [Resources](#resources)
5. [Evaluation and Grading](#evaluation-and-grading)
    1. [Grading Policy](#grading-policy)
    2. [Evaluation Philosophy](#evaluation-philosophy)
    3. [Participation](#participation)
    4. [Letter Grades](#letter-grades)
    5. [Evaluation Schedule](#evaluation-schedule)
    6. [Late Days](#late-days)
7. [FAQ](#faq)
6. [Academic Integrity](#academic-integrity)
7. [Inclusive Learning Environment](#inclusive-learning-environment)
8. [Disability Accommodation Procedures](#disability-accomodation-procedures)
9. [Religious Holidays](#religious-holidays)
10. [Mental and Emotional Wellness](#mental-and-emotional-wellness)
11. [Disclaimer](#disclaimer)

### General Information

#### Class Meeting Information
We will meet in person in the classroom at the time indicated in the schedule of classes. Please read the [evaluation](#evaluation-and-grading) section for details on attendance. Office hours will be held in person.

Piazza will be the main platform for instructor / student communication, please check Blackboard for the Piazza invitation link.

Credit hours: 3 or 4.

#### Course Instructor
Fabio Miranda
https://fmiranda.me/  
Office hours: Check Piazza for information.

#### Teaching Assistant
TBA

***

### Course Description

This course provides an introduction to the field of visualization, including scientific visualization, information visualization, visual analytics, and the effective use of interactive visualization for analytical reasoning. The course is designed to balance theory and practice, covering both design and implementation aspects of visual analytics systems. Topics include: basic principles of data visualization; exploratory data analysis; data management for visualization; embedded, juxtaposed and coordinated views; visual analytics systems; machine learning for visualization; spatial and uncertainty visualization; techniques for big data visualization. The course will also include an introduction to data analysis libraries and frameworks, and web technologies for visualization.

Course website: https://fmiranda.me/courses/cs424-fall-2025/

#### Rationale
In the past decade, technological innovations have enabled the automatic collection of a diverse set of very large datasets, from user-generated content, such as tweets, to sensor data, such as noise decibel level or aerial surveys. The ability to understand, process, extract value from, and visualize it, is going to be hugely important in the next decades. Well-designed data visual analytics systems merge domain expertise and analytics techniques, enabling users to gain insights into real-world problems by formulating and testing hypotheses, and to address domain-specific challenges. This course will introduce students to visualization and visual analytics, covering the fundamentals of visualization and visual analytics, exploratory data analysis, data management and machine learning techniques for visualization, and the technological frameworks needed to create visual analytics systems.

#### Course Pre-requisites

CS 251 (Data Structures) and solid grasp of programming in a language like C, C++, Java, Python or JavaScript and basic data structures to be able to implement the visualization projects in the course.

#### Course objectives

By the end of the course, you will have a good understanding of the basic principles of visualization, visual analytics, and AI-enhanced visualization. You will be able to articulate advantages and disadvantages of visual design choices for different data types. You will also be able to design and implement web-based visual analytics systems by combining visualization, data management, data mining and machine learning techniques. These systems will support interactive exploration, interpretation, and collaboration around multidimensional and heterogeneous datasets.

#### Learning outcomes

- Understand the state of the art in visualization, visual analytics, and AI-driven visualization techniques.
- Acquire, clean and transform data to satisfy visualization requirements.
- Design and implement visualizations, including those that integrate interactive machine learning and AI models.
- Create web-based interactive visualizations using modern technologies.

#### Textbook

- [Visualization Analysis and Design](https://www.routledge.com/Visualization-Analysis-and-Design/Munzner/p/book/9781466508910) by Tamara Munzner


#### Deliverables

Students will be required to complete four projects (plus a project zero), where they will implement concepts and techniques covered in class using real-world datasets. Students will need to present their projects to the class, so it is very important that they are finished by the deadlines. The first project will cover visualization sketching (using pen and paper). The second project will cover exploratory data analysis using interactive computing frameworks (e.g., Jupyter); the third project will cover coordinated views using collaborative environments (e.g., Observable); the fourth project will cover data visualization using web technologies. Project repositories should include detailed documentation of the processes of reflection and iteration, supported by artifacts, sketches, screenshots, code snippets, meeting records, and notes.

#### Format and Teaching Methods

The course is divided into four themes: (1) foundations of visualization (weeks 1-4), (2) data & analysis workflows (weeks 5-9), (3) AI+visualization (weeks 10-13), and (4) frontiers (week 14). In each part, students will be introduced to the related theory as well as different tech stacks needed to create visualization and visual analytics solutions. The course will be driven by lectures and in-class discussion.

***

### Course Schedule

This schedule will be updated throughout the semester with links for slides and reading material.

#### Theme 1: Foundations of Visualization
##### Week 1: Course introduction & Why visualization in the age of AI?
- Slides: [Introduction and overview](https://fmiranda.me/courses/cs424-slides/01-intro.pdf), [Why visualize data?](https://fmiranda.me/courses/cs424-slides/02-why-vis.pdf)
- Reading: Munzner (Ch. 1)

##### Week 2: Data, attributes, marks, and tasks
- Slides: [Introduction to visualization](https://fmiranda.me/courses/cs424-slides/03-vis.pdf), [Task abstraction](https://fmiranda.me/courses/cs424-slides/04-tasks.pdf)
- Reading: Munzner (Ch. 2, 3), [Best Practices for Data Visualisation](https://royal-statistical-society.github.io/datavisguide/)
![Static Badge](https://img.shields.io/badge/Project%200%20released-2171b5)

##### Week 3: Data questions & analytical tasks
- Slides: [Data questions](https://fmiranda.me/courses/cs424-slides/06-data-questions.pdf)
- Reading: Munzner (Ch. 5), [Heer et al., 2010](https://dl.acm.org/doi/10.1145/1794514.1805128), [Perer and Schneiderman, 2008](https://dl.acm.org/doi/10.1145/1357054.1357101) 
![Static Badge](https://img.shields.io/badge/Project%200%20due-aa2721)
![Static Badge](https://img.shields.io/badge/Project%201%20released-2171b5)

##### Week 4: Grammars for visualization
- Slides: [Visualization grammars](https://fmiranda.me/courses/cs424-slides/06-vis-grammars.pdf)
- Reading: [Intro to Vega-Lite](https://vega.github.io/vega-lite/tutorials/getting_started.html), [Survey](https://arxiv.org/pdf/2207.07998.pdf)
![Static Badge](https://img.shields.io/badge/Lab%20session%201%20(Wed)-2f8a70)

#### Theme 2: Visual Data Analysis Workflows
##### Week 5: Exploratory data analysis & transformations
- Slides: [Data exploration with GeoPandas](https://fmiranda.me/courses/cs424-slides/05-geopandas.pdf)
- Reading: [Minimalist Data Wrangling with Python](https://datawranglingpy.gagolewski.com/), [GeoPandas](https://geopandas.org/en/stable/getting_started.html)
![Static Badge](https://img.shields.io/badge/Lab%20session%202%20(Wed)-2f8a70)
![Static Badge](https://img.shields.io/badge/Project%201%20due-aa2721)

##### Week 6: Interaction & multiple coordinated views
- Slides: [Interaction & multiple views](https://fmiranda.me/courses/cs424-slides/07-interaction.pdf)
- Reading: Munzner (Ch. 8, 11, 12), [TaxiVis](https://ieeexplore.ieee.org/abstract/document/6634127)
![Static Badge](https://img.shields.io/badge/Project%202%20released-2171b5)

##### Week 7: Visual analytics
- Slides: [Visual analytics](https://fmiranda.me/courses/cs424-slides/09-visual-analytics.pdf)
- Reading: [Introduction to Visual Analytics by an Example](https://link.springer.com/chapter/10.1007/978-3-030-56146-8_1) (Ch. 1)

##### Week 8: Maps, space, and spatial visualization
- Slides: [Spatial visualization](https://fmiranda.me/courses/cs424-slides/08-spatial-vis.pdf)
- Reading: Munzner (Ch. 8), [TaxiVis](https://ieeexplore.ieee.org/abstract/document/6634127)
![Static Badge](https://img.shields.io/badge/Project%202%20due-aa2721)
![Static Badge](https://img.shields.io/badge/Project%203%20released-2171b5)

##### Week 9: Data pipelines & management for visualization
- Slides: [Data pipelines and management for visualization](https://fmiranda.me/courses/cs424-slides/10-data-vis.pdf)
- Reading: [Connecting Visualization and Data Management Research](https://inria.hal.science/hal-01756799/), [VisTrails](https://dl.acm.org/doi/abs/10.1145/1142473.1142574), [Curio](https://arxiv.org/abs/2408.06139)

#### Theme 3: AI + Visualization
##### Week 10: ML for visualization: Interactive machine learning
- Slides:
- Reading: [Machine learning for visualization](https://medium.com/@enjalot/machine-learning-for-visualization-927a9dff1cab)

##### Week 11: Uncertainty visualization & model behaviors
- Slides:
- Reading: [Uncertainty + Visualization, Explained](https://medium.com/multiple-views-visualization-research-explained/uncertainty-visualization-explained-67e7a73f031b)
![Static Badge](https://img.shields.io/badge/Lab%20session%205%20(Wed)-2f8a70)
![Static Badge](https://img.shields.io/badge/Project%203%20due-aa2721)
![Static Badge](https://img.shields.io/badge/Project%204%20released-2171b5)

##### Week 12: Inner workings of AI & embeddings
- Slides:
- Reading:

##### Week 13: Visualization for ML: Interpretability
- Slides:
- Reading:

#### Theme 4: Frontiers
##### Week 14: Human–AI collaboration in visualization
- Slides:
- Reading:

##### Week 15: Capstone week, project presentations
- Slides:
- Reading:
![Static Badge](https://img.shields.io/badge/Project%204%20due-aa2721)

***

### Resources

The projects of this course require the design and implementation of web-based visualizations. Feel free to use the links below to familiarize yourself with common tools and languages.

- Visualization galleries:
  - [A Tour through the Visualization Zoo](https://dl.acm.org/doi/10.1145/1794514.1805128)
  - [Data Viz Project](https://datavizproject.com/)

- Visualization programming toolkits
  - [D3](http://mbostock.github.com/d3): JavaScript library for data-driven DOM manipulation.
  - [Vega](http://vega.github.io/vega): Declarative language for visualizations.
  - [Vega-Lite](http://vega.github.io/vega-lite): High-level visualization grammar.
  - [VTK](http://www.vtk.org/): scientific visualization toolkit.
  - [UTK](http://www.urbantk.org/utk): urban visualization toolkit.
  - [Curio](http://www.urbantk.org/curio): dataflow toolkit.

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
- Project 0: 5%
- Project 1: 12.5%
- Project 2: 15%
- Project 3: 17.5%
- Project 4: 25%
- Quizzes: 12.5%
- Participation: 12.5%

This course includes four projects (plus a project zero) to make sure you are familiar with the main components of visualization and visual analytics systems. The projects will balance theory and practice, covering both design and implementation aspects. You can either choose a different dataset for each project, or re-use the same dataset over all projects -- potentially further exploring and augmenting findings, insights, techniques, and/or methods. A list of datasets will be made available. We will use [GitHub Classroom](https://github.com/uic-cs424) for the projects.

Projects 0 and 1 will not involve any programming. Project 2 will use Python. For Projects 3 and 4, you will be able to choose between visualization toolkits or Javascript / Typescript.

You will present your final project to the class, following the course schedule. Detailed instructions will be made available following the evaluation schedule. 

Quizzes will be given throughout the semester. Your lowest quiz grade will be dropped.

**For the projects, you have the option to work in groups; however, team members may receive different grades. Individual grades will be adjusted if a team member's contributions to the project are insufficient. Contributions will be evaluated based on GitHub commits to ensure a fair and accurate assessment of individual effort within the team.**

> 🖋️ You should treat your GitHub repositories as the central hubs for your projects, using them to track changes in code and documentation, and to store and share artifacts. Use GitHub to facilitate reflection and iteration.


#### Evaluation Philosophy

You are expected to complete projects without relying heavily on large language models (LLMs). *Vibe coding* (producing code without a clear understanding of its purpose or function) is certainly **not** the goal of this course. To make sure you are genuinely engaging with both the foundational and practical aspects of the material, I will use several strategies. These include in-class quizzes, oral check-ins and code reviews to confirm your understanding and ability to clearly articulate design and implementation choices, as well as progress checkpoints documented through GitHub commits.

For the projects, evaluation will consider your thinking, process, and design judgement not just outputs. It will focus on: (1) integration (how well did you connect data, design, interpretation? Not necessarily how well you completed parts); (2) process (how well did you iterate, reflect, and justify your partial and final design choices?). **For the final project, beyond the usual deliverables, each group will present to the class and meet with the instructor and teaching assistant to walk through their documentation and code as needed.**

In this course, evaluation emphasizes human-centered inquiry rather than a checklist of tasks. This means you are graded not only on the final visualization product, but also on how you: frame meaningful problems and questions; make thoughtful and justified design choices; reflect on and iterate your work; engage with your data and your own assumptions. **A core requirement throughout all projects is documenting your process. You should show how your ideas developed through sketches, drafts, and iterations. You should explain why you made key design decisions. And you should reflect on challenges, failed attempts, and what you learned from them. This documentation is key as it will demonstrate your thinking and growth as a computer scientist creating visualization artifacts.**

This approach is a deliberate response to the overuse of LLMs. LLMs can produce polished but shallow outputs; they cannot demonstrate your unique reasoning, process, and reflective judgement. By documenting your process, you will make your learning process visible and tractable, as well as highlight the value of your own perspective.

> 🖋️ In short: We are not grading whether you can tick the boxes. We are grading whether you can pose, explore, and reflect on problems as a thoughtful computer scientist. Your unique pespective, your reflective judgement, and your dialogue with the data cannot be outsourced to a machine.

Be mindful that a single day of work does not count as a process. If you don't engage with the projects in a consistent and meaningful way throughout the semester, you won’t have a process to document or anything substantial to reflect on. Trying to pull everything together at the very end will fall short of what this course is designed to help you achieve. **Think of this course as a marathon, not a sprint—the real value comes from steady engagement, not last-day rushes.**

Throughout the semester, keep in mind that there are many ways to excel: through conceptual depth, visual craft, narrative clarity, reflective insight, etc. At the end of the day, what will matter most is not just the outcome itself, but how you share the process that led you there. That process should be documented and made visible so others can learn from it too.

#### Participation

This course includes a class participation grade that will consider your contribution to a productive learning environment—whether in the classroom, on Piazza, or during office hours. Attendance will be tracked through a mix of iClicker responses, attendance sheets, and occasional roll calls. Good attendance and consistent engagement will be considered beyond the assigned participation portion of your grade and may also be factored into any potential rounding to higher letter grades.

Note that you do not need to participate in every classroom discussion. However, you are expected to actively engage with the instructor or classmates in some capacity (in class, on Piazza, via email, or during office hours). Rather than focus solely on penalizing absences, this policy rewards those who invest in the learning community by showing up and participating.

Students who may struggle with the course material but take advantage of resources such as office hours or mentoring can still be successful. The key is taking initiative to stay involved and seeking help when needed.

For group projects, GitHub contributions will be tracked and used to assess individual participation. Group grades will reflect these contributions to ensure fairness, with adjustments made if participation within a team is uneven.

#### Letter Grades
Letter grades will be based on a straight scale using the following thresholds for grade cut-offs: A ranges from 90-100%, B ranges from 80-89.9%, C ranges from 70-79.9%, D ranges from 60-69.9%, and F for 59.9% or lower. However, strong attendance and participation may be taken into account in borderline situations, allowing a slightly lower percentage (e.g., 89.75%) to be rounded up.

**Under no circumstances will grades be adjusted down**. You can use this straight grading scale as an indicator of your minimum grade in the course at any time during the course. You should keep track of your own points so that at any time during the semester you may calculate your minimum grade based on the total number of points possible at that particular time. If and when, for any reason, you have concerns about your grade in the course, please email me to schedule a time for you to speak with me or your TA so that we can discuss study techniques or alternative strategies to help you.

**You have two weeks after each grade is released to raise any concerns or questions regarding their marks. Beyond this two-week window, no further inquiries or revisions to the grade will be considered.**

#### Evaluation Schedule
- Project 0:
  - Dataset selection
- Project 1:
  - Visualization sketching
- Project 2:
  - Exploratory data analysis
- Project 3:
  - Coordinated views
- Project 4:
  - Web visualization interface


#### Late Days
Projects must be submitted by the deadlines. No projects will be accepted after the deadline unless there is a documented compelling excuse (such as illness or hospitalization). Project 1 is designed to ensure students are comfortable with GitHub. To avoid problems, make sure to commit your work early and often rather than waiting until the last minute. Excuses such as "GitHub was not working" or "I forgot to push my changes" will not be accepted. It is your responsibility to ensure that your changes are properly committed and reflected in the repository.

***

### FAQ

#### Deadlines & Submissions
***I wasn’t able to push to GitHub before the deadline. Can I have an extension?***  
No.

***Can I send my project by email to you or the TA instead?***  
No.

***I made a mistake in my GitHub push. Can I push again after the deadline?***  
No.

***The deadline is inconvenient for me. Can you move it?***  
No.

***My WiFi went down right before the deadline. Can I get an exception?***  
No.

***The server/GitHub was slow. Can I have extra time?***  
No.

***Can you grade my assignment early so I know before the deadline?***  
No.

***I lost points because I didn’t follow the submission instructions. Can you give them back?***  
No.

***Can I redo or resubmit an assignment for a better grade?***  
No.

#### Attendance & Participation
***I can’t join class on date X. Can I be excused from participation?***  
Only with a documented excuse. Otherwise, no.

***Can you count me present if I join for five minutes? Or if I join after you took attendance?***  
No.

***I forgot to sign the attendance sheet. Can you mark me as here?***  
No.


#### Grading & Grades
***It’s the end of the semester, and I have an 87.3. Can you round me up to 90?***  
No.

***Can you "round generously" since I worked hard?***  
No.

***Is there any extra credit?***  
Maybe. Don’t plan your grade around it.


#### Projects & Teamwork
***Can my teammate just push everything to GitHub for us?***  
No, everyone must contribute individually.

***My teammate did more work than me. Will we get the same grade?***  
No, contributions are tracked individually, to the best of our ability.

***Can I email you saying "I helped" if my commits aren’t visible?***  
No.

***My grade is lower than my teammate's, but I did a lot of work that isn't visible in the commits. Can I get credit for that?***  
No. You already know that evaluation is based on visible contributions (commits and documented activity). It's your responsibility to create a natural trail of work throughout the process. If you choose not to, you accept the risk that your contributions will not be credited.

#### Office Hours & Support
***Can I schedule an office hour outside the posted times with you or the TA?***  
No.

***Can you debug my code for me?***  
No.

#### AI & Academic Integrity
***Can I copy code or text from ChatGPT and submit it as my own?***  
No. That’s plagiarism. You have to understand and explain everything.

***The AI gave me the wrong answer. Can I get points back?***  
No.

***Will you be able to tell if I used ChatGPT?***  
Probably, yes.



***

### Academic Integrity
UIC is an academic community committed to providing an environment in which research, learning, and scholarship can flourish and in which all endeavors are guided by academic and professional integrity. In this community, all members including faculty, administrators, staff, and students alike share the responsibility to uphold the highest standards of academic honesty and quality of academic work so that such a collegial and productive environment exists. 

As a student and member of the UIC community, you are expected to adhere to the [Community Standards](https://dos.uic.edu/community-standards/) of integrity, accountability, and respect in all of your academic endeavors. When [accusations of academic dishonesty](https://dos.uic.edu/community-standards/academic-integrity/) occur, the Office of the Dean of Students investigates and adjudicates suspected violations of this student code. Unacceptable behavior includes cheating, unauthorized collaboration, fabrication or falsification, plagiarism, multiple submissions without instructor permission, using unauthorized study aids, coercion regarding grading or evaluation of coursework, and facilitating academic misconduct. Please review the [UIC Student Disciplinary Policy](https://dos.uic.edu/wp-content/uploads/sites/262/2018/10/DOS-Student-Disciplinary-Policy-2018-2019-FINAL.pdf) for additional information about the process by which instances of academic misconduct are handled towards the goal of developing responsible student behavior.

By submitting your projects for grading you acknowledge these terms, you declare that your work is solely your own, and you promise that, unless authorized by the instructor or proctor, you have not communicated with anyone in any way during an exam or other online assessment. Let's embrace what it means to be a UIC community member and together be committed to the values of integrity.

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
