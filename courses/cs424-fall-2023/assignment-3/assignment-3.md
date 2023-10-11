### CS424 - Visualization & Visual Analytics (Fall 2023)

Instructor: Fabio Miranda

Course webpage: https://fmiranda.me/courses/cs424-fall-2023/

---

### Assignment 3
The goal of this project is to design and implement a series of linked visualizations leveraging outcomes from the previous assignments. We will use Vega-Lite (and similar high-level visualization libraries) to visualize and analyze a dataset. If you would like to use other libraries, please reach out first. Some of the operations you will need to perform in this exploratory process have been covered in the lectures, other operations have not. Please, familiarize yourself with Vega-Lite's [documentation](https://vega.github.io/vega-lite/docs/). Also note that, depending on your selected dataset, you will need to also consider *other* datasets; the most straightforward case is if you want to perform a spatial aggregation over neighborhoods -- in this case you will also need a Shapefile (or GeoJSON) with the description of the shape neighborhoods. Furthermore, you might need to use Jupyter Notebook, Pandas, and Geopandas to preprocess and transform the data, depending on the visualizations you will create.

We will use GitHub to manage code and documentation.

---

#### Tasks

You should leverage your previous assignment outcomes to facilitate the tasks of assignment 3. If you think you need to modify any of your outcomes, feel free to do so. Make sure that you select appropriate domain and data questions.

In the next assignment, we will combine the visualizations into a single web-based visualization system, so keep that in mind when choosing the visualizations.

#### Task 1: Single view visualizations

In the previous assignments, you have already created a set of visualizations using GeoPandas and Matplotlib covering the following aspects: time, space, space + time, distribution, comparison. From those visualizations, select at least six and create Vega-Lite specifications implementing them. Make sure you select diverse visualizations (i.e., it is not enough to create six bar charts).

#### Task 2: Linked view visualizations

Create four linked view visualizations, using different interaction mechanisms (i.e., manipulating the data, manipulating the visual mapping, manipulating the view) and method (i.e., aggregation, filtering, change mapping, selection, navigation, spatial arrangement). Make sure your visualizations avoid common problems, such as overplotting.

#### Task 3: Spatial visualization

Create a visualization leveraging the spatial information from your dataset. For extra points, you should link the spatial view with a reasonable subset of the views from the previous tasks.

#### Task 4: Complex visualization (extra)

From your sketches, select a visualization that *can't be implemented using Vega-Lite*. Implement it using D3 or any low-level visualization library. The visualization does not need to be linked with any other visualization.

#### Deliverables

In this project, there will be four deliverables:

1) A [markdown document](https://www.markdownguide.org/getting-started/) (``.md``), with a short description and screenshot of each visualization you created in the tasks. The visualization description should cover the attributes being visualized and (for task 2) the interaction mechanisms and methods that were implemented. **You should leverage your sketches as much as possible as a starting point for your visualizations**. You should also provide an overview of your development process -- how the work was split among the team members, how much time you spent developing the visualizations and what aspects took the most time. The document should be uploaded to the root of your GitHub project, with the name README.md (so that it is displayed by default by GitHub). 

2) The Vega-Lite specifications that you created for each visualization.

3) Any Jupyter notebook you might have used to pre-process and/or transform the data.

4) The environment that you used to create the Vega-Lite visualizations. As seen in class, there are several ways to create and visualize Vega-Lite specifications (e.g., [using Jupyter Notebook](https://github.com/vega/ipyvega), [embedded on a webpage](https://vega.github.io/vega-lite/usage/embed.html), [TypeScript](https://vega.github.io/vega-lite/usage/typescript.html)), and you are free to follow any approach **as long as you push it to the GitHub repository**. We should be able to **easily** reproduce your visualizations using your environment, which means that it is not enough to simply push your JSON specifications, without an accompanying method to interpret it.

---

#### Grading

Your submission will be graded according to the quality and coverage of the results and presentation. You need to make sure that both your deliverables (presentation and documentation) and notebooks clearly show your findings. Visualizations need to be well constructed, with good color and font choices and proper labeling. Your submission and presentation will be graded according to the following:

- Visualizations:
    - Excellent (A): well-rounded and thoughtful visualizations, clear description.
    - Good (B): good description of the visualizations but could be more detailed.
    - Poor (C): missing or incomplete descriptions and / or visualizations.

Points will be deducted if your visualizations suffer from errors or broken features, overly simplistic designs, incomplete write-up.

If you decide to link the spatial view with the views from the previous tasks, you will get 5 extra points in the assignment. If you decide to do task 4, you will get 10 extra points.
