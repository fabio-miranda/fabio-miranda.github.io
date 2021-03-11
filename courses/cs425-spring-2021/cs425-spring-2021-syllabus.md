### CS425 - Computer Graphics I (Spring 2021)

#### Table of Contents
1. [General Information](#general-information)
    1. [Class Meeting Information](#class-meeting-information)
    2. [Course Instructor](#course-instructor)
3. [Course Description](#course-description)
4. [Course Pre-Requisites](#course-pre-requisites)
5. [Course Objectives](#course-objectives)
6. [Textbooks](#textbooks)
7. [Course Schedule](#course-schedule)
8. [Evaluation and Grading](#evaluation-and-grading)
    1. [Grading Policy](#grading-policy)
    2. [Evaluation Schedule](#evaluation-schedule)
    3. [Exam Considerations](#exam-considerations)
    4. [Assignment Considerations](#assignment-considerations)
    5. [Late Days](#late-days)
9. [Acknowledgments](#acknowledgements)
10. [Academic Integrity](#academic-integrity)
11. [Inclusive Learning Environment](#inclusive-learning-environment)
12. [Disability Accommodation Procedures](#disability-accomodation-procedures)
13. [Disclaimer](#disclaimer)

***

### General Information

#### Class Meeting Information
Our course will take place synchronously (live) using Zoom. We will meet at the same time as indicated in the schedule of classes. Students are encouraged (but not required) to participate in these sessions; video recordings will be made available a few hours after each session. Office hours will be held via Zoom.

Discord will be the main platform for instructor / student communication, please check Blackboard for the Discord invitation link. Zoom meeting information, as well as video recordings, will be posted on Discord.

#### Course Instructor
Fabio Miranda

fabiom [at] uic.edu

https://fmiranda.me/

Office hours: Friday 11am - 1pm, or by appointment (Zoom info on Discord).

#### Teaching Assistant
Krishna Bharadwaj

kbhara5 [at] uic.edu

Office hours: Monday 11am - 1pm (Zoom info on Discord).

***

### Course Description
This course provides an introduction to the field of Computer Graphics, covering the fundamentals of computer graphics algorithms, real-time rendering, and OpenGL. Topics include: linear algebra, geometric transformations transformations, GPU graphics pipeline, ray tracing, shading, texture, antialiasing, spatial data structures. The course will also include a brief introduction to JavaScript and WebGL.

Course website: https://fmiranda.me/courses/cs425-spring-2021/

***

### Course Pre-Requisites
CS251 Data Structures.

Previous experience with JavaScript is helpful (but not required).

***

### Course Objectives
At the end of this course, you will be able to:
- Explain and apply the core concepts of computer graphics.
- Understand and use the different components of a programmable graphics pipeline.
- Understand and use different spatial data structures.
- Implement visual effects such as shadows.
- Implement interactive computer graphics programs using WebGL.

***

### Textbooks
- Interactive Computer Graphics 7th Ed., Pearson (required)
- Fundamentals of Computer Graphics 4th Ed., CRC Press

These two books offer a great introduction to computer graphics, covering the underlying CG theory and principles, as well as their applications. I recommend *Interactive Computer Graphics 7th Ed.* mostly because of its WebGL focus. In case you already have *Fundamentals of Computer Graphics 4th Ed.* (and don't want to get ICG7), in the course schedule you will find a list of the chapters from each book that I cover in each lecture (there are a few differences here and there, so make sure you pay close attention to the lectures and slides).

Other books:
- Real-Time Rendering 4th Ed., CRC Press
- OpenGL Programming Guide 9th Ed., Addison Wesley
- WebGL Programming Guide 1st Ed., Addison Wesley

Useful websites:
- https://open.gl
- https://webgl2fundamentals.org/
- https://songho.ca/opengl/
- https://learnopengl.com/

***

### Course Schedule
This is a tentative course schedule and will be adjusted along the way. In the resources column you can find the chapters for the different editions of Interactive Computer Graphics (ICG6 and ICG7), and Fundamentals of Computer Graphics (FCG4).

| Week |        | Topic                                     | Resources                                          | Slides |
| ---- | ------ | ----------------------------------------- | -------------------------------------------------- | ------ |
| 1    | Jan 12 | Intro, raster images, color               | ICG7:  1<br />ICG6:  1<br />FCG4: 1, 2, 3          | [01-intro.pdf](https://fmiranda.me/courses/cs425-slides/01-intro.pdf), [02-color.pdf](https://fmiranda.me/courses/cs425-slides/02-color.pdf)      |
| 2    | Jan 19 | Javascript, web development, and WebGL    | ICG7:  2, 3<br />ICG6:  N/A<br />FCG4: N/A         | [03-web.pdf](https://fmiranda.me/courses/cs425-slides/03-web.pdf)       |
| 3    | Jan 26 | Rendering pipeline, and WebGL             | ICG7:  2, 3<br />ICG6:  N/A<br />FCG4: N/A         | [04-webgl.pdf](https://fmiranda.me/courses/cs425-slides/04-webgl.pdf)       |
| 4    | Feb 2  | Linear algebra and  transformations       | ICG7:  4<br />ICG6:  3<br />FCG4: 5,6              | [05-linear-algebra.pdf](https://fmiranda.me/courses/cs425-slides/05-linear-algebra.pdf), [06-transformations.pdf](https://fmiranda.me/courses/cs425-slides/06-transformations.pdf)       |
| 5    | Feb 9  | Viewing transformations                   | ICG7:  5<br />ICG6:  4<br />FCG4: 7                | [07-viewing.pdf](https://fmiranda.me/courses/cs425-slides/07-viewing.pdf)       |
| 6    | Feb 16 | Rendering pipeline                        | ICG7:  2, 8<br />ICG6:  2, 6<br />FCG4: 8, 17      | [08-rendering-pipeline.pdf](https://fmiranda.me/courses/cs425-slides/08-rendering-pipeline.pdf), [09-rasterization.pdf](https://fmiranda.me/courses/cs425-slides/09-rasterization.pdf)       |
| 7    | Feb 23 | Light and shading                         | ICG7:  6<br />ICG6:  5<br />FCG4: 10, 18           | [10-lighting.pdf](https://fmiranda.me/courses/cs425-slides/10-lighting.pdf), [11-shading.pdf](https://fmiranda.me/courses/cs425-slides/11-shading.pdf)       |
| 8    | Mar 2  | Texture mapping                           | ICG7:  7<br />ICG6:  7<br />FCG4: 11               | [12-textures.pdf](https://fmiranda.me/courses/cs425-slides/12-textures.pdf)       |
| 9    | Mar 9  | Shadows                                   | ICG7:  5.10, 5.1<br />ICG6:  4.1<br />FCG4: 11.4.4        | [13-shadows.pdf](https://fmiranda.me/courses/cs425-slides/13-shadows.pdf)       |
| 10   | Mar 16 | Antialiasing                              | ICG7:  8.12<br />ICG6:  6.12<br />FCG4: 8.3 |        |
| 11   | Mar 23 | Spring vacation                           |                                                    |        |
| 12   | Mar 30 | Ray tracing 1                             | ICG7:  12<br />ICG6:  11<br />FCG4: 4              |        |
| 13   | Apr 6  | Ray tracing 2                             | ICG7:  12<br />ICG6:  11<br />FCG4: 4              |        |
| 14   | Apr 13 | Curves and surfaces                       | ICG7:  11<br />ICG6:  10<br />FCG4: 12.1, 15       |        |
| 15   | Apr 20 | Spatial data structures                   | ICG7:  9<br />ICG6:  8<br />FCG4: 12               |        |
| 16   | Apr 27 | Advanced topics                           |                                                    |        |
| 17   | May 4  | Final exam week                           |                                                    |        |

***

### Evaluation and Grading
#### Grading Policy
- Initial assignment: 10%
- Four assignments: 70%
- Take-home exam: 20%

#### Evaluation Schedule
- Assignment 0:
  - Topics: Introduction to web environment and WebGL.
  - Week 3 (Jan 31), due week 5 (Feb 14).
  - Link: https://github.com/uic-cs425/assignment-0
- Assignment 1:
  - Topic: Triangle meshes rendering.
  - Week 7 (Feb 26), due week 10 (Mar 14).
  - Link: https://github.com/uic-cs425/assignment-1
- Assignment 2:
  - Topics: Shading + texture + shadow.
  - Week 10 (Mar 19), due week 12 (Apr 2)
- Assignment 3:
  - Topics: Introduction to ray tracing.
  - Week 12 (Apr 2), due week 14 (Apr 16)
- Assignment 4:
  - Topic: Procedural meshes.
  - Week 14 (Apr 16), due week 16 (Apr 30)

- Take-home exam: May 4

#### Exam Considerations
There will be one take-home exam, composed of up to five questions. You will have 24 hours to submit your answers. You can use any textbooks or notes of your choice, but **you cannot discuss solutions with your colleagues**. You are expected to demonstrate ability to use critical thinking in explaining (and applying) the material covered in class and assignments. Make sure you are as detailed and through as possible.

#### Assignment Considerations
There will be an initial WebGL assignment to make sure you are familiar with the main components of web development. After that, there will be four main assignments covering different aspects of computer graphics. You must use Javascript or Typescript with WebGL to complete your assignments. **Do not use any high-level library, such as Three.js, unless clearly specified in the assignment**. We will use [GitHub Classroom](https://github.com/uic-cs425) for the assignments.

#### Late Days
Late submissions will be penalized at a deduction rate of 20% per day (after 5 days you will have a maximum grade of zero). You can use five late-day points during the semester to make up for that; each late-day point extends an assignment deadline by one day.

***

#### Acknowledgments
Some of the figures used in the slides were adapted from:
- Computer Graphics by Professor [Daniele Panozzo](https://cs.nyu.edu/~panozzo/) at New York University
- Interactive Computer Graphics by Professor [Claudio Silva](https://vgc.poly.edu/~csilva/) and Jonathas Costa at New York University
- Interactive Computer Graphics 7th Ed. by Professor Ed Angel and Dave Shreiner

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
