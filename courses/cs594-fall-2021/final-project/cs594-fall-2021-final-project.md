### CS594 Special Topics: Big Data Visualization and Analytics - Final Projects

#### Table of Contents
1. [General Information](#general-information)
2. [Milestone 1: Project Proposal](#milestone-1-project-proposal)
    1. [M1 Objectives](#m1-objectives)
    2. [M1 Tentative Topics](#m1-tentative-topics)
    3. [M1 Deliverables](#m1-deliverables)
2. [Milestone 2: Midterm Review](#milestone-2-midterm-review)
    1. [M2 Objectives](#m2-objectives)
    2. [M2 Deliverables](#m2-deliverables)
3. [Milestone 3: Final Report and Presentation](#milestone-3-final-project)
    1. [M3 Objectives](#m3-objectives)
    2. [M3 Deliverables](#m3-deliverables)
4. [Teams](#teams)
5. [Evaluation and Grading](#evaluation-and-grading)

### General Information

The goal of the final project is to get you familiar with the main components of big data visual analytics systems. You will need to demonstrate your research skills by combining visualization, analytics, data mining, data structures and algorithms that work in tandem to enable interactive data exploration. There will be three milestones for this project spread throughout the semester: [project proposal](#milestone-1-project-proposal), [midterm review](#milestone-2-midterm-review), and [final presentation and report](#milestone-3-final-report-and-presentation). This page will be updated with more information regarding milestones 2 and 3 in the coming weeks.

We will use GitHub to manage code and documentation. You should create your team repository on GitHub Classroom (see Discord for invitation link).

### Milestone 1: Project Proposal

The first milestone for the final project is proposing what you and your team will work on. You should start by brainstorming ideas with your teammates, and then reaching out for feedback.

#### M1 Objectives

In this milestone, you will:

1. Plan the research project you will be tackling during the semester.
2. Verify that all resources (including data) are in place to complete the project.
3. Motivate the problem and the potential contributions.

#### M1 Tentative Topics

There are several topics that cover visualization, analytics and data management of big data. You should frame your proposal in terms of how your contribution effectively tackles the problem from one (or more) of the angles covered in the course. For a concrete description of the types of contributions expected from a visualization researcher, read Lee et al's [Broadening Intellectual Diversity in Visualization Research Papers](https://cmci.colorado.edu/visualab/papers/19-CGA-ContributionTypes.pdf).

For a tentative list of topics and datasets, please see the ``final-project.pdf`` presentation shared on Discord. I highly recommend you choose a topic (or dataset) that you are personally interested in and that you want to understand in more detail.


#### M1 Deliverables

You will need to submit a 2-page (plus references) project proposal using the [IEEE VGTC Latex template](https://tc.computer.org/vgtc/publications/journal/). The proposal should contain the following files: ``01-introduction.tex``, ``02-related.tex``, ``03-data.tex``, ``04-research.tex``, ``05-timeline.tex``, and ``proposal.bib`` with the references. You can also add figures inside the ``figs`` repository.

In the ``01-introduction.tex`` file, clearly describe the problem, why it is important, and how you plan to address it.

In the ``02-related.tex`` file, briefly describe prior work, and how the proposal work differs from it.

In the ``03-data.tex`` file, summarize the most important points (e.g., size, attributes) of the dataset you plan to use.

In the ``04-research.tex`` file, discuss how you plan to tackle the problem. You should include a clear description of how your proposal will solve some of the limitations of related work.

In the ``05-timeline.tex`` file, detail your weekly plan to research and develop your proposal.

In this project proposal, you should **clearly** articulate how your proposal will tackle some of the problems related to the dataset. Before writing a single word, spend some time thinking and discussing potential challenges and solutions. Make sure that you are comfortable with the problem, dataset, and proposal. 

You have two pages to cover **all** of the topics; if you use less than that, it can give the impression that you have not taken the time to understand and appreciate the problem. If you use more than that, it can give the impression that you can't properly summarize the topics.

You are expected to submit your proposal using GitHub. You should create a repository for your team on GitHub Classroom (see Discord for invitation link), and include **all** proposal files inside the **proposal** folder. You should also include a ``Makefile`` to build the document into a PDF file (i.e., ``make pdf`` command should generate a PDF file). The [template repository](https://github.com/uic-big-data/fall-2021-final-project) already includes some of the files you will need.

If this is the first time using LaTeX, go through [this](https://www.overleaf.com/learn/latex/Tutorials) tutorial. Please note that GitHub is a version control platform, so simply pushing your final proposal document defeats the purpose of using a management system. The GitHub repository should be a good representation of the evolution of all artifacts of the project, including reports, and contributions from individual members of the team. Therefore, if you use Overleaf, you are expected to link your project with your GitHub repository (see [here](https://www.overleaf.com/learn/how-to/How_do_I_connect_an_Overleaf_project_with_a_repo_on_GitHub%2C_GitLab_or_BitBucket%3F) for instructions how).

### Milestone 2: Midterm Review

In the second milestone, you will present your proposal and intermediate results.

#### M2 Objectives

In this milestone, you will:

1. Summarize and present your proposal.
2. Organize and present your intermediate results.


#### M2 Deliverables

Your group should present the proposal and intermediate results. The presentation should clearly explain the problem (why it is important, and how you plan to address it), briefly cover prior work, describe the data, proposal and intermediate results. Each group presentation should last 13 minutes *plus* 2 minutes for questions (15 minutes total). Your group will be randomly assigned to present on Monday or Wednesday, but you are expected to attend *both* presentation days. It is up to you and your teammates to decide how the presentation will be divided between each member of the team. On top of that, you are expected to pose *at least* two questions to two different groups.

Submit your presentation using GitHub (PPTX or KEY presentations) and note that this midterm review will be an opportunity to assess the progress of your team, so optimize your time to ensure that you have meaningful results by the day of your presentation.

##### Presentation Order

Monday November 1st:
1. Flow (9:30am)
2. Taxi (9:45am)
3. Viscor (10:00am)
4. Covid (10:15am)
5. Urban (10:30am)

Wednesday November 3rd:
1. Art (9:30am)
2. Noise (9:45am)
3. Fishing (10:00am)
4. Real estate (10:15am)


### Milestone 3: Final Project

In the final milestone, you will present your final results.


#### M3 Objectives

In this milestone, you will:

1. Summarize and present your final project.
2. Submit a 4-page (plus references) project report.

#### M3 Deliverables

Your group should present the final results of your project. The presentation should briefly explain the problem, cover prior work, describe data, proposal, final results, conclusion and future work. Each group presentation should last 10 minutes. Just like the previous presentations, your group will be randomly assigned to present on Monday or Wednesday, but you are expected to attend both presentation days.

Your group should also submit a 4-page (plus references) report following the same [template](https://tc.computer.org/vgtc/publications/journal/) used for the proposal document. The final report should contain the following files: ``01-introduction.tex``, ``02-related.tex``, ``03-data.tex``, ``04-research.tex``, ``05-results.tex``, ``06-conclusion.tex``, and ``proposal.bib`` with the references. You can also add figures inside the ``figs`` repository.

In the ``01-introduction.tex`` file, clearly describe the problem, why it is important, and how you plan to address it.

In the ``02-related.tex`` file, briefly describe prior work, and how the proposal work differs from it.

In the ``03-data.tex`` file, summarize the most important points (e.g., size, attributes) of the dataset you plan to use.

In the ``04-research.tex`` file, discuss how you have tackled the problem. Clearly describe how your project solved (or tried to solve) some of the limitations of related work.

In the ``05-results.tex`` file, detail your results.

In the ``06-conclusion.tex`` file, add a conclusion paying close attention to potential future work discussion.

In this report, you should **clearly** articulate how your work tackled the problem and highlight how your results can point to future research directions. Besides concrete results, it is also important to discuss future work that you were able to identify throughout the semester.

You have four pages to cover **all** of the topics.

You are expected to submit your proposal using GitHub. You should create a repository for your team on GitHub Classroom (see Discord for invitation link), and include **all** proposal files inside the **proposal** folder. You should also include a ``Makefile`` to build the document into a PDF file (i.e., ``make pdf`` command should generate a PDF file). The [template repository](https://github.com/uic-big-data/fall-2021-final-project) already includes some of the files you will need.

##### Presentation Order

TBD

### Teams 

In the final project, you will be able to work in groups of 2 or 3, with a *maximum* of 1 PhD student per group. Each group must also attend a 30-minute meeting every two weeks during the office hours, where we will discuss the overall direction and progress of the project. The final report must contain a detailed description of the contributions of each team member.

### Evaluation and Grading

- Project proposal: 10%
- Final project midterm review: 15%
- Final project: 35%