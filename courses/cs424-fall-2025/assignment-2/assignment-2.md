### CS424 - Visualization & Visual Analytics (Fall 2025)

Instructor: Fabio Miranda

Course webpage: https://fmiranda.me/courses/cs424-fall-2025/

---

### Assignment 2
The goal of this project is to get you familiar with visual data exploration. We will use Pandas, GeoPandas, and Vega-Lite to import, transform, visualize and analyze a dataset. If you would like to use other libraries, please reach out first. Some of the operations you will need to perform in this exploratory process have been covered in the lectures, other operations have not. Please, familiarize yourself with GeoPandas' [documentation](https://geopandas.org/en/stable/docs.html). Also note that, depending on your selected dataset, you will need to also consider *other* datasets; the most straightforward case is if you want to perform a spatial aggregation over neighborhoods -- in this case you will also need a Shapefile (or GeoJSON) with the description of the shape neighborhoods.

If your dataset is too large to handle efficiently, it is up to you to select an interesting and manageable subset of the data. This could mean filtering by time, geography, or specific attributes of interest. The goal is to focus on a portion of the dataset that allows for meaningful analysis while keeping computations reasonable.

We will use GitHub to manage code and documentation.

---

#### Tasks

You should leverage your assignment 1 outcomes to facilitate the tasks of assignment 2. If you think you need to modify any of your outcomes, feel free to do so. Make sure that you select appropriate domain and data questions.

#### Task 0: Setting up your environment

We will be using Pandas, GeoPandas, Vega-Altair (Python interface to Vega-Lite), and a computing environment of your choice. Projects should be submitted using git.

[Conda](https://docs.conda.io/en/latest/) provides an easy-to-use source package and environment management system that runs on Windows, macOS and Linux. You can use other systems, but if you prefer Conda you can follow [this](https://docs.anaconda.com/anaconda/install/) installation guide, and [this](https://docs.conda.io/projects/conda/en/latest/user-guide/getting-started.html) guide to get started. Alternatively, you can also use [Miniconda](https://docs.conda.io/en/latest/miniconda.html), a minimal installer for conda.

Recommended packages:
- `pandas`, `geopandas`, `altair`, `vegafusion` (for larger datasets and faster transforms).
- For geospatial shapes, use GeoJSON/TopoJSON (Altair can read these directly). You may use GeoPandas to transform Shapefiles into GeoJSON.

---

#### Task 1: Data importing & transformation

To complete this task, you will need to complete at least three subtasks (depending of your data):

* Load the data: Use Pandas and GeoPandas to load and view the data to have an initial idea of what it contains. For instance, what are the columns in the dataset? Is there a spatial or temporal component? What are the categorial and numerical columns? For each data point, if there are multiple categories, is there a specific one you want to focus? What is the spatial and temporal coverage of the dataset? Percentage of missing values? Depending of the size of the data, you will need to filter the data and only consider a more manageable subset (e.g., a month or a week, or a spatial region).

* Profile the data: Compute interesting statistics from the dataset. For example: For a numerical column of interest, compute max, min, std. deviation, etc; For a categorical column, find the unique categories. Generate basic visual summaries (e.g., histograms, boxplots) using Vega-Lite. Examples: univariate histograms (`mark_bar` with `bin`), boxplots (`mark_boxplot`), faceted small multiples, and interactive tooltips/selections.

* Clean the data: Remove data rows with NaN or missing values. Consider imputation strategies if needed (e.g., filling missing values based on means, medians).

These subtasks (as well as the next tasks) should be done inside one (or more) Jupyter notebooks.  Make sure your code is clear, with comments to clearly explain your reasoning behind the operations.

---

#### Task 2: Data visualization & analytics

In this task, you will need to visualize attributes of interest of the dataset for exploratory data analysis. You must implement at least 50% of the visualizations you sketched in Assignment 1. You may add new views beyond the sketched ones as needed for thorough analysis. The visualizations should cover important aspects of the data, for example:

* Time: If your dataset has a temporal attribute, aggregate and plot the data at a chosen level (e.g., days, weeks, months). If you don't notice any noticeable pattern, try a different aggregation level, or different subset of the data. Are there any trends? Outliers?

* Space: If your dataset has a spatial attribute, aggregate and plot the data at a chosen level (e.g., zip code, neighborhoods). Are there any outliers? Patterns?

* Space + Time: If the dataset contains both space and time, visualize both of these attributes. For instance, are temporal trends different when considering different regions?

* Distributions: If your dataset has a numerical column, aggregate the data to compute distributions, considering potentially interesting spatial and temporal subsets of the data.

* Comparison: Select two subsets of the data (e.g., two regions, two time ranges), and compare them.

You should *comprehensively* explore the dataset, and it is difficult to do so with just a handful of plots. Make sure you visualize multiple attributes (or combinations of attributes) of the dataset as well. The goal is to build a comprehensive, static overview of your data using clear and effective visual encodings. Each chart should be readable, labeled, and interpretable; focus on correctness and clarity over interactivity.

Notes:
- Use Vega-Altair for all visualizations (no Matplotlib or Seaborn).
- Use these visualizations for exploratory analysis, you can refine or expand them later in Task 3.


---

#### Task 3: Interactive & Extended Vega-Lite Visualizations (for groups with at least one graduate student)

This task focuses on enhancing and extending your exploratory work from Task 2 using Vega-Lite's interactivity, composition, and expressiveness.

* Select at least three of your most informative Task 2 visualizations (preferably ones that correspond to Assignment 1 sketches).
* Enhance them using Vega-Lite features that go beyond static visualization. Examples: (1) Add interactivity (tooltips, selections, filters, zoom/pan, brushing, highlighting); (2) Add alternative encodings or marks (switching between bar/line/area/point views); (3) Add layering or composition (reference lines, rolling averages, small multiples, or linked views); (4) Add interlinked views (e.g., selecting a region on a map filters a time series below).

By the end of this task, your notebook should contain a set of clear and insightful Vega-Lite visualizations that **complement and extend** your previous exploratory analysis.

---

#### Deliverables

In this project, there will be two deliverables:

1) A [markdown document](https://www.markdownguide.org/getting-started/) (``.md``), with a description of the dataset and implemented visualizations, and derived insights. Again, there is no minimum number of visualizations for this assignment, you will be graded on whether the visualizations you implemented reasonably describe the most important aspects of the data. It is reasonable to assume that you won't be able to convey all the most important aspects of a dataset using only one visualization. However, it is also reasonable to assume that you won't need to implement 16 different visualizations to explore a dataset. **You should leverage your sketches as much as possible as a starting point for your visualizations**. The document should be uploaded to the root of your GitHub project, with the name README.md (so that it is displayed by default by GitHub). The markdown should contain: (1) the dataset and its key attributes, (2) the exploratory questions you investigated, (3) the visualizations and key findings for each question.

For each question, your README.md should follow this structure:

* State the Question: What aspect of the dataset are you exploring?
* Provide the Visualizations: Include images from the visualizations. If visualizations are interactive, include a GIF.
* Summarize Key Findings: Briefly explain insights from the visualization.

2) One or more Jupyter notebooks (``.ipynb``) at the root directory of your git project, with each step of your exploratory process. Make sure it is *easily* reproducible and well documented, including both comments and plots. The notebooks should contain:

* Data loading & transformations (task 1)
* Exploratory visualizations & analytics (task 2)
* If applicable, Vega-Lite visualizations (task 3)

Notebooks should be well-documented with:

* Clear markdown cells explaining each step.
* Commented code to clarify implementation detail.s
* Well-labeled plots.

---

#### Notes

- Include a `.gitignore` file to exclude unnecessary files (e.g., large datasets).
- Use Vega-Altair for all visualizations (no Matplotlib or Seaborn).
- GitHub commit history will be reviewed to evaluate each group member's contribution to the assignment.
- Ensure that all files and visualizations are **easily accessible and properly linked**.
- You will lose points for poorly designed visualizations. Some common mistakes include:
  - Unlabeled Axes: Every plot must have proper axis labels and a title.
  - Overloaded Legends: If your plot has too many overlapping categories, consider using facet plots or simplifying the legend to improve readability.
  - Misleading Scales: Always ensure that the scale used is appropriate for the data.
  - Poor Color Choices: Avoid using too many colors or selecting colors that are difficult to distinguish.
  - Unclear or Crowded Visuals: If your plot is difficult to interpret due to excessive overlapping points, cluttered labels, or an overcrowded design, consider alternative encodings that make the information clearer.
- Your goal is to make visualizations clear, readable, and useful for analysis.
- You are not allowed to use ChatGPT or other AI-based text generators to generate any part of your submission. This assignment requires critical thinking and independent analysis, and the use of AI-generated content will result in a significant grade penalty. Your write-up should reflect your own reasoning, backed by class concepts, readings, and examples.

---

#### Grading

Your submission will be graded according to the quality and coverage of the results and presentation. You need to make sure that both your deliverables (presentation and documentation) and notebooks clearly show your findings. Visualizations need to be well constructed, with good color and font choices and proper labeling. Your submission and presentation will be graded according to the following:

- Visualizations:
    - Up to -25 if visualizations are ineffective, poor descriptions of the data and/or insights.

- Presentation:
    - Up to -25 if presentation is missing descriptions and/or visualizations.
 
- Design choices:
    - Up to -25 if mark and encoding choices are ineffective.

- Clarity and Organization of Writing:
    - Up to -25 if document is unclear, disorganized, or difficult to follow.

- Sketch coverage:
    - Up to -20 if fewer than 50% of Assignment 1 sketches are implemented in Task 2.

- Interactive coverage:
    - Up to -15 if fewer than 3 enhanced Vega-Lite visualizations are implemented in Task 3.


