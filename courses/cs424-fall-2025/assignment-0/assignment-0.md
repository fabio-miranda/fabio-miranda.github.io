### CS424 - Visualization & Visual Analytics (Fall 2025)

Instructor: Fabio Miranda

Course webpage: https://fmiranda.me/courses/cs424-fall-2025/

---

### Assignment 0: Getting Started

The goal of this assignment is to get familiar with GitHub Classroom, form your project groups, and select a dataset to be used in this course. By the end of this assignment, you will be set up to work collaboratively with your colleagues throughout the semester.

We will use GitHub to manage the deliverable. You should create a repository for your team on GitHub Classroom (see Piazza for the invitation link). Check resources below for pointers regarding GitHub and Markdown documentation.

---

### Tasks

#### Task 1: Setting up GitHub Classroom

Accept the GitHub Classroom invitation link shared on Piazza. You should create a repository for your team on GitHub Classroom. Ensure all team members are added as collaborators to the repository. If you are using Windows, you can use [Git for Windows](https://gitforwindows.org/) to access git.

[git](https://en.wikipedia.org/wiki/Git) is a version control system, designed to help developers track different versions of your code, synchronize them across different machines, and collaborate with others. Follow the instructions [here](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) to install git on your computer. [GitHub](https://github.com/) is a website that supports git as a service. [This](https://guides.github.com/activities/hello-world/) a nice tutorial on how to get started with git and GitHub.

We will provide a GitHub Classroom link for each assignment. Follow the link to create a repository. Use `git clone` to get a local copy of the newly created repository. After writing your code, you can push your modifications to the server using `git commit` followed by `git push`. For example, if your username is `uic-user`:

```
git clone git@github.com:uic-424/assignment-0-group-name.git
touch README.md
git add README.md
git commit -am "README.md file"
git push
```

#### Task 2: Forming Groups

Form a group of up to three students. Enter your group information, including emails of group members, in the shared spreadsheet (link provided on Piazza).

Note: If you encounter difficulties finding a group, post on Piazza to connect with other students who are also looking for team members.

#### Task 3: Selecting a Dataset

Discuss with your group and select a dataset that aligns with your interests and goals for the course. For this task, ensure that you are comfortable working with the dataset and have a clear understanding of its type and attributes. It is up to you to ensure that you (1) have access to the dataset, (2) are reasonably comfortable working with it, and (3) understand the filtering options available when downloading it. Some datasets may be large, so you may need to filter or preprocess them to make them manageable for your analysis. After making your selection, record it in the shared spreadsheet (see Piazza for the link).

No two groups can select the same dataset. Dataset selection will be handled on a first come, first served basis. Check if your preferred dataset has already been claimed in the shared spreadsheet; if so, you will need to select a different one.

**Some datasets may not be used in this class**: traffic crashes, towed vehicles, red light camera violations, crimes, traffic trackers, 311 service requests (or similar datasets), energy usage, green roofs, flooding measurements, and building violations.

It is up to you to find a dataset. Search the [Chicago Data Portal](https://data.cityofchicago.org/), [NYC Open Data](https://opendata.cityofnewyork.us/), [Analyze Boston](https://data.boston.gov/), or other data portals for potential datasets.

Note 1: If two or more groups list the same dataset in the spreadsheet, all groups except the first to select the dataset will have points deducted for failing to check for conflicts beforehand. Spreadsheet edit timestamps will be used to determine the order of selection and ensure fairness in this process.

Note 2: All dataset selections must be reviewed and approved by me. You should email me well ahead of the deadline to receive a yes or no. If your dataset is not approved, you must leave enough time to select a new one. Dataset approvals need to be done by email. *As a rule of thumb, you should email me your selection by at least Wednesday night; otherwise, you may not have enough time to choose a replacement if needed.*

---

#### Deliverables

By the deadline, ensure your group repository is set up and includes a README.md file with: (1) Group member names and emails, (2) the dataset your group selected (see notes 1 and 2 above), (3) a brief explanation (at least ~250 words) of why your group selected this dataset; this explanation should: (a) clearly describe what the dataset is about, (b) state why your group finds it interesting or relevant, (c) mention at least one challenge you anticipate when working with it. Also, confirm your group and dataset selection are recorded in the shared spreadsheet.

To demonstrate group participation, each group must also include in the markdown file a short note (at least ~250 words) describing: (1) how you found the dataset (e.g., which portal or search strategy you used), (2) what other datasets you considered before settling on your final choice, and why you did not pick them, and (3) how you collaborated in this process.

---

#### Grading

This assignment will be graded out of 100 points. Points will be deducted as follows:
- -50 for selecting the same dataset as another group, or for selecting a dataset that is not allowed.
- -25 for not getting approval by email for the selected dataset.
- -25 for not correctly adding emails to the spreadsheet.
- -25 for not correctly adding the dataset to the spreadsheet.
- -25 for not describing group participation.
- -10 for not including all required information (names, emails, dataset, explanation) in the README.md file (-10 for each missing information).

The maximum score for this assignment is 100 points, and the minimum score is zero.

----

#### Other resources

- [GitHub Documentation](https://docs.github.com/en/get-started)
- [Markdown Guide](https://www.markdownguide.org/getting-started/)
