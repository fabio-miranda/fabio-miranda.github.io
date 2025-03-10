### CS424 - Visualization & Visual Analytics (Spring 2025)

Instructor: Fabio Miranda

Course webpage: https://fmiranda.me/courses/cs424-spring-2025/

---

### Assignment 3
The goal of this project is to design and implement a series of linked visualizations leveraging outcomes from the previous assignments. We will use Vega-Lite to visualize and analyze a dataset. Some of the operations you will need to perform in this exploratory process have been covered in the lectures, other operations have not. Please, familiarize yourself with Vega-Lite's [documentation](https://vega.github.io/vega-lite/docs/). Also note that, depending on your selected dataset, you will need to also consider *other* datasets; the most straightforward case is if you want to perform a spatial aggregation over neighborhoods -- in this case you will also need a Shapefile (or GeoJSON) with the description of the shape neighborhoods. Furthermore, you might need to use Jupyter Notebook, Pandas, and Geopandas to preprocess and transform the data, depending on the visualizations you will create.

Note that Vega-Lite has limitations when handling large datasets. If your dataset is too large, it is up to you to preprocess the data into a more manageable format before using Vega-Lite. This may involve aggregating, sampling, or transforming the data to ensure smooth and efficient visualization. You should document any decision with respect to that.

We will use GitHub to manage code and documentation. You can choose where you will implement your Vega-Lite specifications, as long as the implementation is accessible and reproducible from the GitHub repository. Options include using Jupyter Notebook with Altair, embedding Vega-Lite in a web page, using TypeScript, or any other appropriate method. Regardless of the approach, **you must ensure that your chosen implementation is well-documented and easy to execute**.

**It is your responsibility to ensure that your work is well-documented and straightforward to set up so that others, including the instructor and graders, can review and evaluate it without difficulty.**

---

#### Tasks

You should leverage your previous assignment outcomes to facilitate the tasks of assignment 3. If you think you need to modify any of your outcomes, feel free to do so. Make sure that you select appropriate domain and data questions.

In the next assignment, we will combine the visualizations into a single web-based visualization system, so keep that in mind when choosing the visualizations.

#### Task 1: Single view visualizations

In the previous assignments, you have already created a set of visualizations using GeoPandas and Matplotlib covering the following aspects: time, space, space + time, distribution, comparison. From those visualizations, select at least six and create Vega-Lite specifications implementing them. Make sure you select diverse visualizations (i.e., it is not enough to create six bar charts).

#### Task 2: Linked view visualizations

Create four linked view visualizations, using different interaction mechanisms (i.e., manipulating the data, manipulating the visual mapping, manipulating the view) and method (i.e., aggregation, filtering, change mapping, selection, navigation, spatial arrangement). Make sure your visualizations avoid common problems, such as overplotting. These views can be built using visualizations from Task 1. The goal is to explore relationships between different attributes and dimensions of your dataset by linking multiple links together.

Each linked view must involve at least two visualizations from Task 1. For example, users should be able to filter one visualization and see the effects on another, adjust parameters dynamically, etc.

#### Task 3: Spatial visualization

Create a visualization leveraging the spatial information from your dataset. Consider different spatial representations such as heatmaps, choropleth maps, dot density maps, or spatial network visualizations. If applicable, explore multi-scale spatial patterns by visualizing data at different levels of granularity (e.g., city, neighborhood, block).

If your dataset has no spatial information, create an extra visualization using an attribute you have not explored in the previous tasks.

#### Task 4: Linked spatial visualization (for groups with at least one graduate student)

Link the views that you created in Task 2 with the visualization you created in Task 3. Design meaningful interactions between spatial and non-spatial views, such as brushing and linking, coordinated highlighting, or drill-down exploration.

#### Deliverables

In this project, there will be four deliverables:

1) A [markdown document](https://www.markdownguide.org/getting-started/) (``.md``), with a short description and screenshot of each visualization you created in the tasks. The visualization description should cover the attributes being visualized and (for task 2) the interaction mechanisms and methods that were implemented. **You should leverage your sketches as much as possible as a starting point for your visualizations**. The document should be uploaded to the root of your GitHub project, with the name README.md (so that it is displayed by default by GitHub). The visualization descriptions should cover:

- The attributes being visualized.
- The motivation and rationale for the visualization.
- The interaction mechanisms and methods implemented (for Task 2).
- The design decisions made, including color choices, encoding strategies, and layout considerations (if appropriate).

2) One or more Jupyter notebooks (``.ipynb``) at the root directory of your git project, with each step of your exploratory process. Make sure it is *easily* reproducible and well documented, including both comments and plots.


3) The environment that you used to create the Vega-Lite visualizations. As seen in class, there are several ways to create and visualize Vega-Lite specifications (e.g., [using Jupyter Notebook](https://altair-viz.github.io/), [embedded on a webpage](https://vega.github.io/vega-lite/usage/embed.html), [TypeScript](https://vega.github.io/vega-lite/usage/typescript.html)), and you are free to follow any approach **as long as you push it to the GitHub repository**. We should be able to **easily** reproduce your visualizations using your environment, which means that it is not enough to simply push your JSON specifications, without an accompanying method to interpret it.

---

#### Notes

- Task 4 is mandatory for groups with at least one graduate student. Groups without a graduate student should skip Task 4, as it will not be counted for extra credit.
- Include a `.gitignore` file to exclude unnecessary files (e.g., large datasets).
- Ensure that all files and visualizations are **easily accessible and properly linked**.
- You will lose points for poorly designed visualizations. See Assignment 2's notes for common mistakes.
- Your goal is to make visualizations clear, readable, and useful for analysis.
- *Reproducibility*: You should double check whether your implementation is easy to reproduce on another computer. It is your responsability to ensure that your work is well-documented and straightforward to set up.
- *Vega-Lite*: If your dataset is too large, you must preprocess the data into a more manageable format before using Vega-Lite. This may involve aggregating, sampling, or transforming the data to ensure smooth and efficient visualization.
- *Environment*: You can choose where you will implement your Vega-Lite specifications. Options include using Jupyter Notebook with Altair, embedding Vega-Lite in a web page, using TypeScript, or any other appropriate method. Regardless of the approach, you must ensure that your chosen implementation is well-documented and easy to execute.
- You are not allowed to use ChatGPT or other AI-based text generators to generate any part of your submission. This assignment requires critical thinking and independent analysis, and the use of AI-generated content will result in a significant grade penalty. Your write-up should reflect your own reasoning, backed by class concepts, readings, and examples.

#### Grading

Your submission will be graded according to the quality and coverage of the results and presentation. You need to make sure that both your deliverables (presentation and documentation) and notebooks clearly show your findings. Visualizations need to be well constructed, with good color and font choices and proper labeling. Your submission and presentation will be graded according to the following:

- Visualizations:
    - Excellent (A): your visualizations effectively cover the most important aspects of the data, clear design decisions and motivation.
    - Good (B): good visualizations, with minor problems.
    - Poor (C): ineffective visualizations, poor description of the data and/or insights.

- Presentation:
    - Excellent (A): clearly described the data and the path between sketches and visualizations, good discussion regarding design decisions.
    - Good (B): good description of the data and visualizations, but could be more detailed.
    - Poor (C): missing or incomplete descriptions and / or visualizations.
 
- Design choices:
  - Excellent (A): Design choices are effective, and the visualizations are easily read and understood.
  - Good (B): Design choices are mostly effective, with minor issues.
  - Poor (C): Ineffective mark or encoding choices.

Clarity and Organization of Writing:
  - Excellent (A): The writing is clear, concise, and well-structured.
  - Good (B): The writing is mostly clear and well-organized.
  - Poor (C): The writing is difficult to follow.

Points will be deducted if your visualizations suffer from errors or broken features, overly simplistic designs, incomplete write-up.
