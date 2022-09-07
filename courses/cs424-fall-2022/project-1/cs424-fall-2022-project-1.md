## CS424 - Visualization & Visual Analytics (Fall 2022)

Instructor: Fabio Miranda

Course webpage: https://fmiranda.me/courses/cs424-fall-2022/

### Project 1
The goal of this project is to get you familiar with visual data exploration. We will use Pandas, GeoPandas and Jupyter to import, transform, visualize and analyze a dataset. Some of the operations you will need to perform in this exploratory process have been covered in the lectures, other operations have not. Please, familiarize yourself with GeoPandas' [documentation](https://geopandas.org/en/stable/docs.html). Also note that, depending of your exploration, you will need to use *multiple* datasets; The most straightforward case is if you want to perform a spatial aggregation over neighborhoods -- in this case you will also need a Shapefile (or GeoJSON) with the description of the neighborhoods.

We will use GitHub to manage code and documentation. You should create a repository for your team on GitHub Classroom (see Piazza for invitation link).

### Tasks

#### Task 0: Selecting a dataset

Select a dataset that is of interest to you. You can either choose one from the list below, or pick your own. Note that tasks 1 and 2 offer a suggested guideline for the exploration, heavily biased towards spatiotemporal datasets; However, you are free to choose any other dataset, just be mindful to follow a similar guideline. Make sure you choose a dataset that contains detailed metadata information describing its columns, types, etc. It is also important to balance dataset complexity and size and the project timeline. If you identify a dataset that is either too large or too complex, make sure you can select a manageable subset of the data where you can still find interesting insights.

Suggested datasets:

* [Chicago taxi trips](https://data.cityofchicago.org/Transportation/Taxi-Trips/wrvz-psew)
* [Divvy bike data](https://ride.divvybikes.com/system-data)
* [Traffic crashes - crashes](https://data.cityofchicago.org/Transportation/Traffic-Crashes-Crashes/85ca-t3if)
  * [Traffic crashes - people](https://data.cityofchicago.org/Transportation/Traffic-Crashes-People/u6pd-qa9d)
  * [Traffic crashes - vehicles](https://data.cityofchicago.org/Transportation/Traffic-Crashes-Vehicles/68nd-jvt3)
* [Towed vehicles](https://data.cityofchicago.org/Transportation/Towed-Vehicles/ygr5-vcbg)
* [Red light camera violations](https://data.cityofchicago.org/Transportation/Red-Light-Camera-Violations/spqx-js37)
* [Speed camera violations](https://data.cityofchicago.org/Transportation/Speed-Camera-Violations/hhkd-xvj4)
* [Chicago traffic tracker](https://data.cityofchicago.org/Transportation/Chicago-Traffic-Tracker-Historical-Congestion-Esti/ef4k-dci7)
* [Chicago traffic tracker](https://data.cityofchicago.org/Transportation/Chicago-Traffic-Tracker-Congestion-Estimates-by-Se/n4j6-wkkf)
* [CDPH environmental records](https://data.cityofchicago.org/Environment-Sustainable-Development/CDPH-Environmental-Records-Lookup-Table/a9u4-3dwb)
* [311 service requests](https://data.cityofchicago.org/Service-Requests/311-Service-Requests/v6vf-nfxy)

After selecting the dataset, make sure you enter your selection in the shared spreadsheet (see Piazza for link).

#### Task 0: Setting up your environment

We will be using Pandas, Geopandas, Matplotlib and Jupyter Notebook (or Jupyter Lab). Projects should be submitted using git.

[Conda](https://docs.conda.io/en/latest/) provides an easy-to-use source package and environment management system that runs on Windows, macOS and Linux. You can use other systems, but if you prefer Conda you can follow [this](https://docs.anaconda.com/anaconda/install/) installation guide, and [this](https://docs.conda.io/projects/conda/en/latest/user-guide/getting-started.html) guide to get started. Alternatively, you can also use [Miniconda](https://docs.conda.io/en/latest/miniconda.html), a minimal installer for conda.

If you are using Windows, you can use [Git for Windows](https://gitforwindows.org/) to access git and Conda.

[git](https://en.wikipedia.org/wiki/Git) is a version control system, designed to help developers track different versions of your code, synchronize them across different machines, and collaborate with others. Follow the instructions [here](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) to install git on your computer. [GitHub](https://github.com/) is a website that supports git as a service. [This](https://guides.github.com/activities/hello-world/) a nice tutorial on how to get started with git and GitHub.

We will provide a GitHub Classroom link for each assignment. Follow the link to create a repository. Use `git clone` to get a local copy of the newly created repository. After writing your code, you can push your modifications to the server using `git commit` followed by `git push`. For example, if your username is `uic-user`:

```
git clone git@github.com:uic-vis/assignment-0-uic-user.git
touch index.html
git add README.md
git commit -am "README.md file"
git push
```


#### Task 1: Data importing & transformation

In this task, you will need to perform at least three subtasks (depending of your data):
* Load the data: Use Pandas and GeoPandas to load and view the data to have an initial idea of what it contains. For instance, what are the columns in the dataset? Is there a spatial or temporal component? What are the categorial and numerical columns? For each data point, if there are multiple categories, is there a specific one you want to focus? What is the spatial and temporal coverage of the dataset? Percentage of missing values? Depending of the size of the data, you will need to filter the data and only consider a more manageable subset (e.g., a month or a week, or a spatial region).

* Profile the data: Compute interesting statistics from the dataset. For example: For a numerical column of interest, compute max, min, std. deviation, etc; For a categorical column, find the unique categories.

* Clean the data: Remove data rows with NaN or missing values.

#### Task 2: Data visualization & analytics

Based on the attributes of interest in the dataset, you will need to perform the following subtasks:

* Time: If your dataset has a temporal attribute, aggregate and plot the data at a chosen level (e.g., days, weeks, months). If you don't notice any noticeable pattern, try a different aggregation level, or different subset of the data. Are there any trends? Outliers?

* Space: If your dataset has a spatial attribute, aggregate and plot the data at a chosen level (e.g., zip code, neighborhoods). Are there any outliers? Patterns?

* Space + Time: If the dataset contains both space and time, visualize both of these attributes. For instance, are temporal trends different when considering different regions?

* Distributions: If your dataset has a numerical column, aggregate the data to compute distributions, considering potentially interesting spatial and temporal subsets of the data.


#### Task 3: Deliverables

In this project, there will be three deliverables:

1) A markdown document, with a clear description of the dataset, summarizing the most important points (size, attributes) and initial findings. Clearly describe each step of your exploratory process. You should include plots with meaningful captions. Please put some effort into it, it can be very helpful later as you build your portfolio. The document should have 500-800 words.

2) A ~5 minute presentation, also describing the dataset and summarizing your most important findings.

3) A Jupyter Notebook, with each step of your exploratory process. Make sure it is *easily* reproducible and well documented, including both comments and plots.


#### Grading

Your submission will be graded according to the quality and coverage of the results and presentation. You need to make sure that both your deliverables (presentation and documentation) and notebooks clearly show your findings. Visualizations need to be well constructed, with good color and font choices and proper labeling.
