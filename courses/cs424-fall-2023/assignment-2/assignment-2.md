### CS424 - Visualization & Visual Analytics (Fall 2023)

Instructor: Fabio Miranda

Course webpage: https://fmiranda.me/courses/cs424-fall-2023/

---

### Assignment 2
The goal of this project is to get you familiar with visual data exploration. We will use Pandas, GeoPandas and Jupyter to import, transform, visualize and analyze a dataset. If you would like to use other libraries, please reach out first. Some of the operations you will need to perform in this exploratory process have been covered in the lectures, other operations have not. Please, familiarize yourself with GeoPandas' [documentation](https://geopandas.org/en/stable/docs.html). Also note that, depending on your selected dataset, you will need to also consider *other* datasets; the most straightforward case is if you want to perform a spatial aggregation over neighborhoods -- in this case you will also need a Shapefile (or GeoJSON) with the description of the shape neighborhoods.

We will use GitHub to manage code and documentation.

---

#### Tasks

You should leverage your assignment 1 outcomes to facilitate the tasks of assignment 2. If you think you need to modify any of your outcomes, feel free to do so. Make sure that you select appropriate domain and data questions.

#### Task 0: Setting up your environment

We will be using Pandas, Geopandas, Matplotlib and Jupyter Notebook (or Jupyter Lab). Projects should be submitted using git.

[Conda](https://docs.conda.io/en/latest/) provides an easy-to-use source package and environment management system that runs on Windows, macOS and Linux. You can use other systems, but if you prefer Conda you can follow [this](https://docs.anaconda.com/anaconda/install/) installation guide, and [this](https://docs.conda.io/projects/conda/en/latest/user-guide/getting-started.html) guide to get started. Alternatively, you can also use [Miniconda](https://docs.conda.io/en/latest/miniconda.html), a minimal installer for conda.

If you are using Windows, you can use [Git for Windows](https://gitforwindows.org/) to access git and Conda.

[git](https://en.wikipedia.org/wiki/Git) is a version control system, designed to help developers track different versions of your code, synchronize them across different machines, and collaborate with others. Follow the instructions [here](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) to install git on your computer. [GitHub](https://github.com/) is a website that supports git as a service. [This](https://guides.github.com/activities/hello-world/) a nice tutorial on how to get started with git and GitHub.

We will provide a GitHub Classroom link for each assignment. Follow the link to create a repository. Use `git clone` to get a local copy of the newly created repository. After writing your code, you can push your modifications to the server using `git commit` followed by `git push`. For example, if your username is `uic-user`:

```
git clone git@github.com:uic-vis/assignment-2-group-name.git
touch index.html
git add README.md
git commit -am "README.md file"
git push
```
---

#### Task 1: Data importing & transformation

To complete this task, you will need to complete at least three subtasks (depending of your data):

* Load the data: Use Pandas and GeoPandas to load and view the data to have an initial idea of what it contains. For instance, what are the columns in the dataset? Is there a spatial or temporal component? What are the categorial and numerical columns? For each data point, if there are multiple categories, is there a specific one you want to focus? What is the spatial and temporal coverage of the dataset? Percentage of missing values? Depending of the size of the data, you will need to filter the data and only consider a more manageable subset (e.g., a month or a week, or a spatial region).

* Profile the data: Compute interesting statistics from the dataset. For example: For a numerical column of interest, compute max, min, std. deviation, etc; For a categorical column, find the unique categories.

* Clean the data: Remove data rows with NaN or missing values.

These subtasks (as well as the next tasks) should be done inside one (or more) Jupyter notebooks.  Make sure your code is clear, with comments to clearly explain your reasoning behind the operations.

---

#### Task 2: Data visualization & analytics

In this task, you will need to visualize attributes of interest of the dataset for exploratory data analysis. Select a set of visualizations that you sketched in the previous assignment for this exploratory data analysis. The visualizations should cover important aspects of the data, such as (but not limited to):

* Time: If your dataset has a temporal attribute, aggregate and plot the data at a chosen level (e.g., days, weeks, months). If you don't notice any noticeable pattern, try a different aggregation level, or different subset of the data. Are there any trends? Outliers?

* Space: If your dataset has a spatial attribute, aggregate and plot the data at a chosen level (e.g., zip code, neighborhoods). Are there any outliers? Patterns?

* Space + Time: If the dataset contains both space and time, visualize both of these attributes. For instance, are temporal trends different when considering different regions?

* Distributions: If your dataset has a numerical column, aggregate the data to compute distributions, considering potentially interesting spatial and temporal subsets of the data.

* Comparison: Select two subsets of the data (e.g., two regions, two time ranges), and compare them.

Even though there is no minimum number of visualizations for this task, you should *comprehensively* explore the dataset, and it is difficult to do so with just a handful of plots. Make sure you visualize multiple attributes (or combinations of attributes) of the dataset as well.


---


#### Deliverables

In this project, there will be three deliverables:

1) A [markdown document](https://www.markdownguide.org/getting-started/) (``.md``), with a short description of the dataset and implemented visualizations, and derived insights. Again, there is no minimum number of visualizations for this assignment, you will be graded on whether the visualizations you implemented reasonably describe the most important aspects of the data. It is reasonable to assume that you won't be able to convey all the most important aspects of a dataset using only one visualization. However, it is also reasonable to assume that you won't need to implement 16 different visualizations to explore a dataset. **You should leverage your sketches as much as possible as a starting point for your visualizations**. The document should be uploaded to the root of your GitHub project, with the name README.md (so that it is displayed by default by GitHub).

2) A 5-minute presentation, presenting the dataset, questions, transformations, encodings, interactions, and findings. This presentation should be a combination of the outcomes from assignments 1 and 2. Ideally, you should present a clear path between visualization sketches, actual visualizations and insights. You should upload the presentation (``.pdf`` or ``.pptx``) to your github project. **Check the course schedule for the week that we will have the presentations**. A reasonable presentation should have: (1) short introduction of the dataset and goals of the visualizations (~1 minute); (2) presentation of sketches, reasoning behind key design decisions (~2 minutes); (3) presentation of the visualizations, reasoning behind key design decisions (e.g, how they were influenced by the sketches? How was the exploratory data analysis process? Why did you choose these visual encodings?) (~2 minutes).

3) One or more Jupyter notebooks (``.ipynb``) at the root directory of your git project, with each step of your exploratory process. Make sure it is *easily* reproducible and well documented, including both comments and plots.

---

#### Grading

Your submission will be graded according to the quality and coverage of the results and presentation. You need to make sure that both your deliverables (presentation and documentation) and notebooks clearly show your findings. Visualizations need to be well constructed, with good color and font choices and proper labeling. Your submission and presentation will be graded according to the following:

- Writeup:
    - Excellent (A): your visualizations effectively cover the most important aspects of the data, clear design decisions and motivation.
    - Good (B): good visualizations, with minor problems.
    - Poor (C): ineffective visualizations, poor description of the data and/or insights.

- Presentation:
    - Excellent (A): clearly described the data and the path between sketches and visualizations, good discussion regarding design decisions.
    - Good (B): good description of the data and visualizations, but could be more detailed.
    - Poor (C): missing or incomplete descriptions and / or visualizations.
