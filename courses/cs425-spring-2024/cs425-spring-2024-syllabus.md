### CS425 - Computer Graphics I (Spring 2024)

#### Table of Contents
1. [General Information](#general-information)
    1. [Class Meeting Information](#class-meeting-information)
    2. [Course Instructor](#course-instructor)
3. [Course Description](#course-description)
4. [Course Pre-requisites](#course-pre-requisites)
5. [Course Objectives](#course-objectives)
6. [Textbooks](#textbooks)
7. [Course Schedule](#course-schedule)
8. [Resources](#resources)
9. [Evaluation and Grading](#evaluation-and-grading)
    1. [Grading Policy](#grading-policy)
    2. [Evaluation Schedule](#evaluation-schedule)
    3. [Exam Considerations](#exam-considerations)
    4. [Assignment Considerations](#assignment-considerations)
    5. [Late Days](#late-days)
10. [Acknowledgments](#acknowledgements)
11. [Academic Integrity](#academic-integrity)
12. [Inclusive Learning Environment](#inclusive-learning-environment)
13. [Disability Accommodation Procedures](#disability-accomodation-procedures)
14. [Disclaimer](#disclaimer)

***

### General Information

#### Class Meeting Information
We will meet in-person in EVL's [Continuum room](https://www.evl.uic.edu/location), at the time indicated in the schedule of classes. Piazza will be the main platform for instructor / student communication, please check Blackboard for the Piazza invitation link.

#### Course Instructor
Fabio Miranda

fabiom [at] uic.edu

https://fmiranda.me/

Office hours: Friday 11am - 1pm (Zoom info on Piazza).


***

### Course Description
This course provides an introduction to the field of Computer Graphics, covering the fundamentals of computer graphics algorithms, real-time rendering, and OpenGL. Topics include: linear algebra, geometric transformations transformations, GPU graphics pipeline, ray tracing, shading, texture, antialiasing, spatial data structures. The course will also include a brief introduction to JavaScript and WebGL.

Course website: https://fmiranda.me/courses/cs425-spring-2024/

***

### Course Pre-requisites
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
- Interactive Computer Graphics 7th Ed., Pearson (strongly recommended)
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

| Week | Topic                                     | Resources                                          | Slides |
| ---- | ----------------------------------------- | -------------------------------------------------- | ------ |
| 1    | Intro, raster images, color               | ICG7:  1<br />ICG6:  1<br />FCG4: 1, 2, 3          | [01-intro.pdf](https://fmiranda.me/courses/cs425-slides/01-intro.pdf), [02-color.pdf](https://fmiranda.me/courses/cs425-slides/02-color.pdf)      |
| 2    | Javascript, web development, and WebGL    | ICG7:  2, 3<br />ICG6:  N/A<br />FCG4: N/A         | [03-web.pdf](https://fmiranda.me/courses/cs425-slides/03-web.pdf)       |
| 3    | Rendering pipeline, and WebGL             | ICG7:  2, 3<br />ICG6:  N/A<br />FCG4: N/A         | [04-webgl.pdf](https://fmiranda.me/courses/cs425-slides/04-webgl.pdf)       |
| 4    | Linear algebra and  transformations       | ICG7:  4<br />ICG6:  3<br />FCG4: 5,6              | [05-linear-algebra.pdf](https://fmiranda.me/courses/cs425-slides/05-linear-algebra.pdf), [06-transformations.pdf](https://fmiranda.me/courses/cs425-slides/06-transformations.pdf)       |
| 5    | Viewing transformations                   | ICG7:  5<br />ICG6:  4<br />FCG4: 7                | [07-viewing.pdf](https://fmiranda.me/courses/cs425-slides/07-viewing.pdf)       |
| 6    | Rendering pipeline                        | ICG7:  2, 8<br />ICG6:  2, 6<br />FCG4: 8, 17      | [08-rendering-pipeline.pdf](https://fmiranda.me/courses/cs425-slides/08-rendering-pipeline.pdf), [09-rasterization.pdf](https://fmiranda.me/courses/cs425-slides/09-rasterization.pdf)       |
| 7    | Light and shading                         | ICG7:  6<br />ICG6:  5<br />FCG4: 10, 18           | [10-lighting.pdf](https://fmiranda.me/courses/cs425-slides/10-lighting.pdf), [11-shading.pdf](https://fmiranda.me/courses/cs425-slides/11-shading.pdf)       |
| 8    | Texture mapping                           | ICG7:  7<br />ICG6:  7<br />FCG4: 11               | [12-textures.pdf](https://fmiranda.me/courses/cs425-slides/12-textures.pdf)       |
| 9    | Shadows                                   | ICG7:  5.10, 5.1<br />ICG6:  4.1<br />FCG4: 11.4.4        | [13-shadows.pdf](https://fmiranda.me/courses/cs425-slides/13-shadows.pdf)       |
| 10   | Ray tracing                               | ICG7:  12<br />ICG6:  11<br />FCG4: 4              | [15-ray-tracing.pdf](https://fmiranda.me/courses/cs425-slides/15-ray-tracing.pdf)       |
| 11   | Antialiasing and transparency             | ICG7:  8.12<br />ICG6:  6.12<br />FCG4: 8.3        | [14-visual-appearance.pdf](https://fmiranda.me/courses/cs425-slides/14-visual-appearance.pdf)       |
| 12   | Antialiasing and transparency             | ICG7:  8.12<br />ICG6:  6.12<br />FCG4: 8.3        | [14-visual-appearance.pdf](https://fmiranda.me/courses/cs425-slides/14-visual-appearance.pdf)       |
| 13   | Curves and surfaces                       | ICG7:  11<br />ICG6:  10<br />FCG4: 12.1, 15       | [16-surfaces.pdf](https://fmiranda.me/courses/cs425-slides/16-surfaces.pdf)       |
| 14   | Spatial data structures                   | ICG7:  9<br />ICG6:  8<br />FCG4: 12               | [17-spatial-data-structures.pdf](https://fmiranda.me/courses/cs425-slides/17-spatial-data-structures.pdf)       |
| 15   | Modern rendering techniques, review for final exam              | FCG4: 11.3, 20.1                                   | [18-modern-rendering-techniques.pdf](https://fmiranda.me/courses/cs425-slides/18-modern-rendering-techniques.pdf)       |
| 16   | Final exam                           |                                                    |        |

***

### Resources
- Web development:
  - [Mozilla's HTML overview page](https://developer.mozilla.org/en-US/docs/Web/HTML)
  - [Mozilla's CSS overview page](https://developer.mozilla.org/en-US/docs/Web/CSS)
  - [Mozilla's JavaScript overview page](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- WebGL
  - [Mozilla's WebGL overview page](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API)
  - [WebGL spec](https://www.khronos.org/registry/webgl/specs/latest/2.0/)
  - [WebGL reference guide](https://www.khronos.org/files/webgl20-reference-guide.pdf)
  - [WebGL2 Fundamentals](https://webgl2fundamentals.org/)

***

### Evaluation and Grading
#### Grading Policy
- Assignment 0: 10%
- Assignments 1-4: 15% each
- Participation: 10%
- Final exam: 20%

#### Evaluation Schedule
- Assignment 0:
  - Topics: Introduction to web environment and WebGL.
  - Week 2, due Week 4.
- Assignment 1:
  - Topics: Triangle meshes rendering.
  - Week 5, due Week 7.
- Assignment 2:
  - Topics: Shading + texture + shadow.
  - Week 7, due Week 9.
- Assignment 3:
  - Topics: Introduction to ray tracing.
  - Week 10, due Week 12.
- Assignment 4:
  - Topic: Procedural meshes.
  - Week 13, due Week 15.
- Final exam: Week 16

#### Exam Considerations
There will be one final exam. You are expected to demonstrate ability to use critical thinking in explaining (and applying) the material covered in class and assignments. Make sure you are as detailed and thorough as possible.

#### Assignment Considerations
There will be an initial WebGL assignment to make sure you are familiar with the main components of web development. After that, there will be four main assignments covering different aspects of computer graphics. You must use Javascript or Typescript with WebGL to complete your assignments. **Do not use any high-level library, such as Three.js, unless clearly specified in the assignment**. We will use [GitHub Classroom](https://github.com/uic-cs425) for the assignments. Assignments will be followed by short in-class quizzes; These quizzes will provide an opportunity for you to demonstrate your understanding of the basic concepts covered in the assignments. Assignment grades will be weighted by the scores of these short quizzes.

For graduate students, tasks marked as optional will be considered required tasks.

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
