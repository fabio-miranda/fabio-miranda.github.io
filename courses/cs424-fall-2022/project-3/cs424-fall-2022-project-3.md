### CS424 - Visualization & Visual Analytics (Fall 2022)

Instructor: Fabio Miranda

Course webpage: https://fmiranda.me/courses/cs424-fall-2022/

---

### Project 3
The goal of this project is build a complete web-based visualization system leveraging outcomes from Project 1 and Project3. We will use JavaScript and D3 to visualize and interactively analyze a dataset. Your visualization should be hosted on a publicly available website and you can use any web hosting service you prefer. Options include [GitHub](https://pages.github.com/), [Heroku](https://www.heroku.com/students), and [Google Sites](https://sites.google.com/). Once again, we will use GitHub to manage documentation and code. You should create a repository for your team on GitHub Classroom (see Piazza for invitation link).

---

#### Tasks

Up until now, you have created isolated visualizations to explore a particular dataset. The tasks below are designed so that you can integrate your previous outcomes into a single web-based visualization system to explore the dataset you chose. You are free to re-use your Project 1 and 2 datasets and outcomes.

#### Task 0: Setting up a web page

Select a web hosting service and make yourself familiar with the steps needed in order to upload files to the service. Free options include [GitHub](https://pages.github.com/), [Heroku](https://www.heroku.com/students), and [Google Sites](https://sites.google.com/).

---

#### Task 1: Creating an empty page

Create a web page to host your visualizations. You should start by defining the div elements that will serve as the parament element for your individual visualizations (check [here](https://fmiranda.me/courses/cs424-slides/05-d3.pdf) to refresh your memories). Ideally, you should also define the *size* of each element in a style sheet -- make sure you use percentage as opposed to size in pixels. After you have outlined the position of your visualization elements in your screen, create a JavaScript file (e.g., main.js) that will have the code to (1) load your data and (2) generate your visualizations. Again, revisit [this](https://fmiranda.me/courses/cs424-slides/05-d3.pdf) lecture to make sure you are familiar with the interaction between HTML and JavaScript.


---

#### Task 2: Using previous visualizations

In Project 2 you have already created a set of interactive visualizations. Re-use these visualizations in your new web page, making sure you *maintain* the same level of interactivity, i.e., if you brush a particular view, the linked views are updated. In the previous project you had to create at least **two** interactive visualizations (one using single view and another using multiple views) -- you should now port them to your new integrated visualization interface.

---

#### Task 3: New multiple linked view

Create a new multiple linked view visualization, using a different interaction mechanism (i.e., manipulating the data, manipulating the visual mapping, manipulating the view) or method (i.e., aggregation, filtering, change mapping, selection, navigation, spatial arrangement) from the ones you used in the previous task. Again, make sure your plots avoid common problems, such as overplotting.

---

#### Task 4: Deliverables

In this project, there will be five deliverables:

1) A [markdown document](https://www.markdownguide.org/getting-started/) (``.md``), with a clear description of the dataset, summarizing the most important points, questions, data transformations, encodings, interactions and initial findings (feel free to re-use text from Project 1 and 2). Also include a link to your visualization solution (see deliverable 4). You should include screenshots with meaningful captions. Please put some effort into it as outcomes like this can be helpful when building up a portfolio.

2) Source code and any necessary data files.

3) A png image showing your visualization interface. I will be linking your web page to the course notes, so please make sure to have a good screenshot.

4) A web page hosting your visualization interface.

5) A ~5 minute presentation, presenting your visualization interface. For the presentation, you should present your interface, interactions and findings, **without** relying on a Powerpoint presentation. In other words, in your presentation you should open the webpage hosting your visualization and present it live.

(1), (2) and (3) should be uploaded to GitHub. You should use a web hosting service for (4). Presentations will take place in the week of Nov 29.

---

#### Grading

Your submission will be graded according to the quality and coverage of the results and presentation. You need to make sure that both your deliverables and visualizations clearly show your findings. Visualizations need to be well constructed, with good color and font choices and proper labeling.

To get a C on the assignment, you must complete tasks 0, 1 and part of task 2. To get a B, you must complete tasks 0, 1 and 2. To get an A on the assignment, you must complete all tasks.
