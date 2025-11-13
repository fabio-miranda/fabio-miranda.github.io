### CS424 - Visualization & Visual Analytics (Fall 2025)

Instructor: Fabio Miranda

Course webpage: https://fmiranda.me/courses/cs424-fall-2025/

---

### Assignment 4
The goal of this assignment is to design interactive visualizations to create, explore, and analyze embeddings derived from a dataset you have already used in previous assignments. You will:

- Construct embeddings (feature vectors) from your data.
- Apply dimensionality reduction or layout methods (e.g., PCA, t-SNE, UMAP) to obtain 2D/3D projections.
- Build interactive visualizations that help analyze structure in the embedding space (clusters, outliers, neighborhoods) and connect it back to the original attributes.

---

### What we mean by "embeddings"

In this assignment, an embedding is a numerical vector that represents each record (row, object) in your dataset. Examples: 

- A movie represented by features like genre counts, average rating, release year, word embeddings of the synopsis, etc.
- A neighborhood represented by demographic indicators, crime counts, and spatial features.
- A product represented by price, category, popularity metrics, and text embeddings of its description.

You will:

1. Define *how to turn your data into vectors* (feature engineering, or using pre-trained models).
2. Save those vectors as a dataset (e.g., CSV with one row per record and one column per embedding dimension).
3. Use a dimensionality reduction method (PCA, t-SNE, UMAP, etc.) to project embeddings to 2D.
4. Visualize and interact with the resulting embedding space, linking it to original attributes and/or spatial views.

You may compute embeddings and dimensionality reduction offline (e.g., using Python, R) and then load the resulting CSV/JSON into Vega-Lite.

Note that you can construct embeddings using a combination of simple, well-chosen features from your data (e.g., numeric attributes scaled or normalized, possibly with log transforms for skewed counts; categorical variables encoded as one-hot or grouped indicators; text fields represented by a few keyword counts, or precomputed text embeddings; time summarized as aggregates such as day/night proportions or counts per period; and spatial information such as coordinates, region indicators, or distances to landmarks). Aim for a moderate number of meaningful dimensions rather than many raw columns, and briefly justify in your report why these features capture similarity in your domain (e.g., "two records are similar if they share call type distribution and time-of-day patterns").

---

### Web-Based Visualization Interface

The goal is to build a standalone visualization interface that lets a user interactively explore an embedding space derived from your existing dataset. You will:

1. Use Vega-Lite (and supporting Vega libraries) to create interactive visualizations.
2. Integrate multiple coordinated views centered on an embedding scatterplot.
3. Produce a self-contained HTML page (plus data files) that can be opened in a browser.

Your visualization should be hosted on a publicly available website and you can use any web hosting service you prefer. Options include [GitHub](https://pages.github.com/) and [Google Sites](https://sites.google.com/).

As before, you should use GitHub to manage documentation and code and create a team repository via GitHub Classroom (see Piazza for invitation link).

#### Tasks

Up until now, you have created isolated visualizations to explore a particular dataset. The tasks below are designed so that you can integrate your previous outcomes into a single web-based visualization system to explore the dataset you chose. You are free to re-use your previous assignments datasets and outcomes.

#### Task 0: Setting up a local server

Before moving your interface to the web, it is easier to develop using a local server (i.e., a server running on your own computer). There are several ways to achieve that but, for the purposes of this assignment, the most straightforward one is to simply use Python's HTTP servers. In the folder where you will store your code, type in the command line:

```console
python -m http.server
```

That will serve all files in your folder through the address 0.0.0.0:8000 . Open the address in a browser and you will be able to see the served files.

#### Task 1: Creating embeddings and projections

Before designing your interface, you must first construct embeddings and obtain a low-dimensional projection of your data.

Using the same dataset from previous assignments:

##### Task 1.1: Construct embeddings

Decide how to represent each record as a numerical vector. For example:

1. Concatenate normalized numeric attributes (e.g., scaled [0,1]).
2. Encode categorical variables (e.g., one-hot encoding, counts).
3. Use text embeddings for descriptions (computed offline with a library of your choice).
4. Create aggregated features (e.g., temporal, spatial, or group-based indicators).

Save this as a file (e.g., embeddings.csv) with:
1. One row per record.
2. A unique ID linking back to the original record.
3. Embedding dimensions (feat1, feat2, ...).

##### Task 1.2: Project embeddings to a low-dimensional space

Apply a dimensionality reduction method (PCA, t-SNE, UMAP, or similar) to project your embeddings into 2D (or 3D).

Save the result as a file (e.g., embeddings_2d.csv). This file will be the core data inputs to your Vega-Lite visualizations in the HTML interface.

#### Task 2: Building the standalone embedding-focused HTML page

Now that you have embeddings and projections, create a single HTML page (e.g., index.html) that hosts your embedding visualizations. This page is your final, standalone interface. You should start by defining the div elements that will serve as the parament element for your individual visualizations (check [here](https://fmiranda.me/courses/cs424-slides/05-d3.pdf)). Ideally, you should also define the *size* of each element in a style sheet -- make sure you use percentage as opposed to size in pixels. After you have outlined the position of your visualization elements in your screen, create a JavaScript file (main.js) that will contain the code to (1) load your data and (2) generate your visualizations. Again, check [this](https://fmiranda.me/courses/cs424-slides/05-d3.pdf) lecture to make sure you are familiar with the interaction between HTML and JavaScript.

For a possible starting point, you can check [this](template.zip) template. This is just a template, and you should not expect it to satisfy *all* the requirements of the assignment. In other words, do not simply paste your previous Vega-lite specifications into the .js file, without adequately addressing questions of interaction, size, and positioning. The zip file contains three files: ``index.html`` containing six div elements, ``style.css`` defining the position of the divs, and ``script.js`` with the code to generate the Vega-lite visualizations.

In the ``index.html`` file, notice that we are including the appropriate Vega libraries:

```html
<script src="https://cdn.jsdelivr.net/npm/vega@5"></script>
<script src="https://cdn.jsdelivr.net/npm/vega-lite@5"></script>
<script src="https://cdn.jsdelivr.net/npm/vega-embed@6"></script>
```

Following the steps outlined [here](https://vega.github.io/vega-lite/usage/embed.html), the ``script.js`` file calls the ``vegaEmbed`` function to embed specifications into the HTML file.

Notice that the example provided in the template loads raw data from HTTP addresses. However, depending on your data, that might not be feasible, as you might need to access preprocessed data files instead.

Your interface will include at least:
- One main embedding scatterplot using the projected coordinates (x, y) from embeddings_2d.csv.
- One or more detail / attribute views that show information about selected points in the embedding space (e.g., distributions of numerical attributes, bar charts of categories, or textual details).
- A spatial view if your dataset has geographic information.

Place your embedding data files (embeddings.csv, embeddings_2d.csv, etc.) in the same folder (or subfolder) as the HTML so Vega-Lite can load them via relative URLs.

#### Task 3: Using previous visualizations

In the previous assignment, you created interactive visualizations (single-view and multiple linked views). In this task, you will reuse and adapt at least two of these:

- One interactive single-view visualization (e.g., histogram, bar chart, time series, map).
- One multiple-view visualization with linked interaction (e.g., brushing, filtering, selection).

Now, integrate them into your standalone HTML interface so that:
- Interactions in the embedding view (e.g., brushing/selecting a cluster) update your attribute/spatial views.
- Interactions in an attribute/spatial view (e.g., selecting a category or range) highlight or filter points in the embedding scatterplot.

Maintain at least the same level of interactivity you had before, but anchor it around the embedding space. Adjust your layout and div sizes so the embedding view is prominent and the linked views are clearly visible.


#### Task 4: Web deployment

Select a web hosting service and make yourself familiar with the steps needed in order to upload files to the service. Free options include [GitHub](https://pages.github.com/) and [Google Sites](https://sites.google.com/). Make sure you upload your final results to the hosting service so that they are publicly available.

#### Deliverables

There are five deliverables:

1) A [markdown document](https://www.markdownguide.org/getting-started/) (``.md``), with a clear description of:
- The dataset (reusing text from previous assignments is allowed).
- How you constructed embeddings (features used, tools, parameter choices).
- Dimensionality reduction method(s) used and rationale.
- Encodings, interactions, and initial findings (e.g., discovered clusters, outliers, patterns).
- A brief explanation of how your standalone HTML interface is organized.

Note that your markdown should include a list of steps you followed to build your embeddings (e.g., data cleaning, feature selection / extraction, normalization, dimensionality reduction, etc). Explicitly describe at least two iterations you tried. For each, briefly note what you changed (e.g., removed very rare categories, added time-of-day features, switched from PCA to UMAP), why you changed (e.g., clusters were not separating by type as expected), and what effect it had on the embedding and visualizations (e.g., neighborhoods with similar crime mixes became more clearly grouped).

Include screenshots (with meaningful captions) showing:
- The embedding space and clusters or neighborhoods.
- Linked attribute/spatial views responding to interactions.

**Please put some effort into it as outcomes like this can be helpful when building up a portfolio.**

2) Source code and any necessary data files.

3) A png image showing your visualization interface. I might use your screenshot to link your web page in the course notes, so please make sure to have a good screenshot.

4) A web page hosting your visualization interface. The web page should be publicly accessible.

5) A ~10 minute presentation, presenting your visualization interface. For the presentation, you should present how you built the embeddings and projections, your standalone interface, interactions, and findings, interesting structures in the embedding space (clusters, transitions, anomalies). For your presentation, you should consider opening the webpage hosting your visualization and present it live.


---

### Grading

Your submission will be evaluated on the quality and coverage of your results and presentation. Ensure that your deliverables and notebooks clearly communicate your findings. Visualizations must be well constructed with appropriate color, font, and labeling choices.

Scoring: You start with 100 points. Points will be deducted as follows:

- Embeddings & Projections: Up to −20 for weak or unjustified embedding design (e.g., unclear feature choices, missing explanation of preprocessing or dimensionality reduction), poor-quality projections (e.g., misuse of methods), or failing to clearly relate structures in the embedding space back to the original data.
- Visualizations & Linked Views: Up to −20 for ineffective visuals, missing or incomplete linked views, poor support for exploring clusters/neighborhoods/outliers in the embedding, or weak description of the data and insights revealed by the visualizations.
- Presentation: Up to −20 if descriptions and/or visuals in the presentation are missing, incomplete, or do not clearly explain (1) How embeddings were constructed, (2) How the interface or dataflow works, (3) What insights were obtained from the embedding space.
- Clarity and Organization of Writing: Up to −15 if the markdown document is unclear, disorganized, or difficult to follow; lacks structure; or does not adequately explain the data, embedding pipeline, visual encodings, and findings.

Additional points may be deducted if:
- Your HTML interface has errors or broken features (e.g., visualizations do not load, interactions do not work as described).
- The design is overly simplistic relative to the assignment requirements (e.g., only a single static plot, no meaningful interaction or linkage).
- The write-up is incomplete or missing key components (e.g., no explanation of embeddings, no discussion of design choices or limitations).
