### CS424 - Visualization & Visual Analytics (Spring 2025)

Instructor: Fabio Miranda

Course webpage: https://fmiranda.me/courses/cs424-spring-2025/

---

### Assignment 4
The goal of this assignment is to create a complete interactive visualization system to explore and analyze a dataset of your choice. This assignment now offers two options:

- [Option 1: Build a dedicated web-based visualization interface using HTML, JavaScript, and Vega/Vega-lite.](#option-1-web-based-visualization-interface)
- [Option 2: Use the Curio platform to design and implement a dataflow-based visual analytics system.](#option-2-dataflow-system-in-curio)

You will submit different types of deliverables depending on your choice. Pick the option that best suits your interests and background.

> ⚠️ **Important:** Read both options carefully before making your choice. Consider the complexity of each option and any technical risks involved before committing to a direction.
> Your submission will be graded out of 100 total points. For Option 2, up to 20 extra points can be earned by completing optional subtasks in Tasks 3, 4, and 5.

---

### Option 1: Web-Based Visualization Interface

The goal of this option is to build a complete web-based visualization system leveraging outcomes from the previous assignments. We will use JavaScript and a visualization library to visualize and interactively analyze a dataset. Your visualization should be hosted on a publicly available website and you can use any web hosting service you prefer. Options include [GitHub](https://pages.github.com/) and [Google Sites](https://sites.google.com/). Once again, we will use GitHub to manage documentation and code. You should create a repository for your team on GitHub Classroom (see Piazza for invitation link). We will use GitHub to manage code and documentation.

#### Tasks

Up until now, you have created isolated visualizations to explore a particular dataset. The tasks below are designed so that you can integrate your previous outcomes into a single web-based visualization system to explore the dataset you chose. You are free to re-use your previous assignments datasets and outcomes.

#### Task 0: Setting up a local server

Before moving your system to the web, it is easier to develop using a local server (i.e., a server running on your own computer). There are several ways to achieve that but, for the purposes of this assignment, the most straightforward one is to simply use Python's HTTP servers. In the folder where you will store your code, type in the command line:

```console
python -m http.server
```

That will serve all files in your folder through the address 0.0.0.0:8000 . Open the address in a browser and you will be able to see the served files.


#### Task 1: Creating an empty page

Create a web page to host your visualizations. You should start by defining the div elements that will serve as the parament element for your individual visualizations (check [here](https://fmiranda.me/courses/cs424-slides/05-d3.pdf)). Ideally, you should also define the *size* of each element in a style sheet -- make sure you use percentage as opposed to size in pixels. After you have outlined the position of your visualization elements in your screen, create a JavaScript file (main.js) that will contain the code to (1) load your data and (2) generate your visualizations. Again, check [this](https://fmiranda.me/courses/cs424-slides/05-d3.pdf) lecture to make sure you are familiar with the interaction between HTML and JavaScript.

For a possible starting point, you can check [this](template.zip) template. This is just a template, and you should not expect it to satisfy *all* the requirements of the assignment. In other words, do not simply paste your previous Vega-lite specifications into the .js file, without adequately addressing questions of interaction, size, and positioning. The zip file contains three files: ``index.html`` containing six div elements, ``style.css`` defining the position of the divs, and ``script.js`` with the code to generate the Vega-lite visualizations.

In the ``index.html`` file, notice that we are including the appropriate Vega libraries:

```html
<script src="https://cdn.jsdelivr.net/npm/vega@5"></script>
<script src="https://cdn.jsdelivr.net/npm/vega-lite@5"></script>
<script src="https://cdn.jsdelivr.net/npm/vega-embed@6"></script>
```

Following the steps outlined [here](https://vega.github.io/vega-lite/usage/embed.html), the ``script.js`` file calls the ``vegaEmbed`` function to embed specifications into the HTML file.

Notice that the example provided in the template loads raw data from HTTP addresses. However, depending on your data, that might not be feasible, as you might need to access preprocessed data files instead.

For a list of useful resources, click [here](https://fmiranda.me/courses/cs424-fall-2023/#resources).

#### Task 2: Preprocess and host data files

Given the size of your data, you should not expect that Vega-lite will support your raw data. Instead, you might need to preprocess the file and save *visualization appropriate* data files. By *visualization appropriate*, I mean data that only contains attributes and aggregations that will be used in the visualization. Based on your previous assignments, store the precomputed data (either as JSON or CSV files) in a folder that is served by your local server.

#### Task 3: Using previous visualizations

In the previous assignment, you have already created a set of interactive visualizations. Re-use these visualizations in your new web page, making sure you *maintain* the same level of interactivity, i.e., if you brush a particular view, the linked views are updated. In the previous project you had to create at least **two** interactive visualizations (one using single view and another using multiple views) -- you should now port them to your new integrated visualization interface.

Make sure to appropriately modify the div elements so that the size and position of your visualizations are adequate.

#### Task 4: New multiple linked view

Create a new multiple linked view visualization, using a different interaction mechanism (i.e., manipulating the data, manipulating the visual mapping, manipulating the view) or method (i.e., aggregation, filtering, change mapping, selection, navigation, spatial arrangement) from the ones you used in the previous task. Again, make sure your plots avoid common problems, such as overplotting.

Even though the template provides you with a starting point, you should go beyond that. Consider adding HTML elements (such as [drop down menus](https://www.w3schools.com/howto/howto_css_dropdown.asp)) to enable and/or enhance user interaction. For example, a reasonable (yet simple) approach would be to have a drop down menu to select attributes for a bar chart. You should carefully think about the interplay of HTML and Vega-lite interactions. 

#### Task 5: Spatial visualization

Migrate or create a new visualization leveraging the spatial information from your dataset. For extra points, you should link the spatial view with a reasonable subset of the views from the previous tasks.

#### Task 6: Web deployment

Select a web hosting service and make yourself familiar with the steps needed in order to upload files to the service. Free options include [GitHub](https://pages.github.com/) and [Google Sites](https://sites.google.com/). Make sure you upload your final results to the hosting service so that they are publicly available.

#### Deliverables

In this option, there will be five deliverables:

1) A [markdown document](https://www.markdownguide.org/getting-started/) (``.md``), with a clear description of the dataset, summarizing the most important points, questions, data transformations, encodings, interactions and initial findings (feel free to re-use text from previous assignments). Also include a link to your visualization solution (see deliverable 4). You should include screenshots with meaningful captions. **Please put some effort into it as outcomes like this can be helpful when building up a portfolio.**

2) Source code and any necessary data files.

3) A png image showing your visualization interface. I might use your screenshot to link your web page in the course notes, so please make sure to have a good screenshot.

4) A web page hosting your visualization interface. The web page should be publicly accessible.

5) A ~5 minute presentation, presenting your visualization interface. For the presentation, you should present your interface, interactions and findings, **without** relying on a Powerpoint presentation. In other words, for your presentation you should simply open the webpage hosting your visualization (see task 1) and present it live.

---

### Option 2: Dataflow system in Curio

In this second option, you will use [Curio](https://urbantk.org/curio), an open-source dataflow-based visual analytics system. You’ll build an interactive dataflow by:

- Loading and preparing your dataset in Curio.
- Designing a dataflow with multiple visual encodings.
- Building coordinated views using Curio's modules.
- Optionally incorporating Python logic and spatial data.

Curio allows you to create linked visualizations and reuse your Vega-lite specifications. This option is a great fit if you want to work in a more modular visual analytics environment.

You can earn up to 20 extra points in this assignment by going beyond the minimum requirements in Option 2. These extra points are tied to specific tasks:

- Task 3: Reusing and integrating previous visualizations
    - +5 points: Successfully reimplement one of your previous interactive single-view visualizations using Curio.
    - +5 points: Successfully reimplement one of your previous multiple-view visualizations with linked interaction using Curio modules.
- Task 4: New linked view with different interaction
    - +5 points: Create a new multi-view visualization that uses a different interaction method from Task 3 (e.g., navigation instead of filtering, or different spatial arrangement techniques).
- Task 5: Spatial visualization
    - +5 points: Add a meaningful spatial visualization to your dataflow.

#### Task 0: Setting up Curio locally

Follow the instructions in the [Curio documentation](https://github.com/urban-toolkit/curio) to clone and run the system locally. You may use either Docker or manual setup. Ensure you can run the frontend, backend, and Python sandbox.

> 💡 Tip: Before you begin building your own system, spend time exploring the examples and dataflows provided in Curio’s GitHub repository. These examples demonstrate how different modules are connected and can help you understand how to create interactive and linked visualizations within Curio.

#### Task 1: Importing or preparing your dataset

Decide which dataset you will use — ideally the same as in previous assignments. Use either the built-in Curio modules to load your data or write a custom Python preprocessing step using the sandbox. Create cleaned or aggregated versions of your dataset if needed.

#### Task 2: Designing a basic dataflow

Create your initial dataflow in Curio using available modules. Your dataflow must include:

- A data source module.
- At least one visualization module.
- A connection between them.

Use this as a foundation to build more complex views.

#### Task 3: Reusing and integrating previous visualizations

Recreate at least one visualization from your previous assignments inside Curio. Choose one of the following, with the last two having extra points attached to them:

- One single-view visualization.
- One single-view interactive visualization (+5 extra points)
- One multiple-view visualization with coordinated interaction (e.g., brushing, filtering, selection) (+5 extra points)

You can reuse your Vega-lite specifications by adapting them to Curio's Vega-lite module. Make sure the interactivity still works as expected.

#### Task 4: New linked view with different interaction (+5 extra points)

Add a new multiple-view visualization to your dataflow that uses a different interaction mechanism or analytical method from Task 3. For example, if you previously used brushing, try selection filtering or view navigation.

This new view should demonstrate your ability to design a complementary interaction pattern using Curio’s modular design.

#### Task 5: Spatial visualization (+5 extra points)

Include at least one spatial visualization (e.g., a map or geospatial encoding). You can use UTK's map module, or embed a Vega-lite visualization with geographic data. You may reuse work from earlier assignments, but make sure it's integrated into your dataflow and linked to other views.

#### Task 6: Exporting your system

Export your dataflow as a JSON file using Curio's export feature. You should also capture a screenshot of your complete interface, showing the system in use.

You do not need to host your system online, but your exported files must run in a local Curio environment.

#### Deliverables:

In this option, there will be five deliverables:

1) A [markdown document](https://www.markdownguide.org/getting-started/) (``.md``), with a clear description of the dataset, summarizing the most important points, questions, data transformations, encodings, interactions and initial findings (feel free to re-use text from previous assignments). Summarize your design decisions and how your Curio dataflow supports them. Include annotated screenshots and a discussion of the challenges and advantages of using Curio. **Please put some effort into it as outcomes like this can be helpful when building up a portfolio.**

2) Export your complete Curio dataflow as a .json file. Include any raw or preprocessed datasets you used (e.g., CSV, JSON).

3) A well-framed PNG image of your full Curio workspace, with your dataflow and visualizations active. This screenshot may be featured in class notes, so make it representative of your final product.

4) Custom modules or Python scripts that you used.

5) A ~5 minute presentation, presenting your visualization interface. For the presentation, you should present your interface, interactions and findings. You can use PowerPoint and screenshots of your dataflow. You do not need to run it live.


---

#### Grading

Your submission will be graded according to the quality and coverage of the results and presentation. You need to make sure that both your deliverables (presentation and documentation) clearly show your findings. Visualizations need to be well constructed, with good color and font choices and proper labeling. Your submission and presentation will be graded according to the following:

- Visualizations:
    - Excellent (A): well-rounded and thoughtful visualizations, clear description.
    - Good (B): good description of the visualizations but could be more detailed.
    - Poor (C): missing or incomplete descriptions and / or visualizations.

- Presentation:
    - Excellent (A): clearly described the data and the path between sketches and visualizations, good discussion regarding design decisions.
    - Good (B): good description of the data and visualizations, but could be more detailed.
    - Poor (C): missing or incomplete descriptions and / or visualizations.

- Clarity and Organization of Writing:
    - Excellent (A): The writing is clear, concise, and well-structured.
    - Good (B): The writing is mostly clear and well-organized.
    - Poor (C): The writing is difficult to follow.


