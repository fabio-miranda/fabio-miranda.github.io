### CS424 - Visualization & Visual Analytics (Fall 2026)

Instructor: Fabio Miranda

Course webpage: https://fmiranda.me/courses/cs424-fall-2026/

---

### Assignment 1: Collecting data and sketching visualizations

The goal of this assignment is to get you familiar with data collection and visualization sketching. Rather than starting with an existing dataset, **you will collect your own data**. You will identify something you are interested in observing, decide how to represent those observations as data, collect and document a small dataset, develop questions about the data, and sketch visualizations that could help answer those questions.

You will experience an earlier part of the visualization process: deciding **what becomes data in the first place**. The choices you make about what to observe, what attributes to record, where and when to collect observations, and what not to record will shape the questions you can ask and the visualizations you can create. Sketching your visualizations before delving too deep into their implementation will then allow you to test your ideas early on. Your sketches will serve as the foundation for the visualizations that you will create in subsequent assignments.

The main focus is not on producing a large or perfect dataset, nor on producing polished visualization solutions. Instead, the emphasis is on **observation, iteration, exploration, and reflection**. Your submission should document how you went from something in the world that interested you to a structured dataset, questions about that dataset, and different visualization ideas.

The assignment follows roughly this process:

> **Observe → Question → Design collection → Pilot → Collect → Reflect → Abstract → Sketch**

The process is not necessarily linear. Your questions may change once you start collecting data, your pilot may reveal problems with your original collection plan, and sketching may make you reconsider what you wish you had collected. Document these changes rather than hiding them.

This assignment contains seven tasks. You should write your answers and include your data, photographs when appropriate, and sketches in a single [markdown document](https://www.markdownguide.org/getting-started/). The document should tell the story of your process: why you made certain decisions, what you tried, what didn't work, and how your ideas evolved.

You will work in groups of up to **three students**. Your group should create a GitHub repository using one of your own GitHub accounts. The repository may be public or private. If you make it private, **make sure to add the instructor and TA as collaborators** so that we can access your submission. All group members should also be added to the repository and contribute using their own GitHub accounts.

---

### Tasks

#### Task 1: Observation and data collection plan

Identify something that your group is curious about and that you can **observe or measure yourselves**. Your primary dataset must consist of observations collected by your group. Downloading an existing dataset from a website, data portal, API, or repository does not satisfy this requirement. Existing data may be used as supplementary information, but it should not be the primary dataset for your project.

A good project should give you opportunities to collect **multiple attributes and meaningful variation**. The goal is not simply to accumulate rows. Your data should cover enough locations, times, days, conditions, or categories to support meaningful comparisons. For most projects, **a sample collected at one location during one hour or on only one day will not be sufficient**. For example, counting pedestrians outside one building for an hour may produce many observations, but it tells you little about how pedestrian activity varies. Observing several locations, multiple times of day, or multiple days would create a much more meaningful dataset.

Think about the **coverage** of your data, not just its size. Depending on your project, meaningful coverage might involve:

* Multiple locations.
* Multiple days.
* Different times of day.
* Different types of places or objects.
* Different environmental conditions.
* Repeated observations of the same locations under different conditions.

You do not necessarily need all of these. Choose dimensions that make sense for the phenomenon you are studying. The important point is that your collection design should allow you to investigate variation rather than describe a single short snapshot.

##### Ideas for data collection projects

The following are examples meant to help you brainstorm. **You do not have to choose one of these projects**, and you are encouraged to come up with your own.

* **Campus pedestrian activity:** Observe pedestrian traffic at several campus locations and at different times. You might record location, date, time, number of pedestrians, direction of travel, group size, whether people stop or pass through, and environmental conditions. How do patterns change across place and time?

* **Study spaces:** Observe libraries, lounges, cafes, or other study areas at different times or days. You might record location, time, occupancy, available seats, group sizes, types of seating, access to power outlets, noise level, or other characteristics. Which spaces are used most, and under what conditions?

* **Waiting:** Measure waiting times for elevators, buses, coffee, food, or other services across multiple periods. You might record location, date, time, waiting time, queue length, day of the week, and other conditions. When and where are waits longest?

* **Sidewalk assessment:** Select a set of sidewalk segments, blocks, or walking routes and systematically document their characteristics. One observation might correspond to one sidewalk segment. You might record location, approximate width, surface material, surface condition, cracks or unevenness, obstacles, curb ramps, street crossings, construction, vegetation, shade, benches, lighting, or other features. You could compare sidewalk conditions between routes, streets, or neighborhoods, or investigate which combinations of features may make some routes easier or more difficult to navigate.

* **Walking routes:** Compare different routes between common destinations. You might record distance, travel time, number of street crossings, stairs, obstacles, shade, benches, traffic, construction, sidewalk conditions, or perceived difficulty. What tradeoffs exist between different routes?

* **Shade and sunlight:** Observe a set of outdoor locations repeatedly at different times of day. You might record location, date, time, amount of shade, source of shade, seating availability, surface material, or temperature if you have a consistent way to measure it. How does the experience of a space change throughout the day?

* **Street intersections:** Observe intersections and crossings. You might record crossing distance, signal timing, number of lanes, pedestrian volume, bicycle infrastructure, curb ramps, traffic volume, sidewalk conditions, or observed conflicts. How different is the pedestrian experience across intersections?

* **Parking:** Observe parking areas or street parking at different times. You might record location, capacity, occupancy, vehicle type, restrictions, or duration when feasible. How does parking availability vary over space and time?

* **Noise:** Use the same measurement method to record noise levels at multiple places and times. You might also record nearby traffic, number of people, location type, indoor/outdoor setting, or other possible sources of noise. Which environments are consistently louder or quieter?

These examples deliberately leave many decisions open. For instance, **"study spaces" is not yet a dataset**, and neither is "sidewalk accessibility." Your group must decide what constitutes one observation, what you will measure, where and when you will observe, and how you will record those observations consistently.

##### Data formats

Your collected data can take many forms. It does not have to begin as a spreadsheet or table. For example, your group may collect images, videos, audio, GPS traces, sensor measurements, or other forms of raw data. You might record video while walking along a street, take photographs of sidewalks or public spaces, or collect imagery from an existing camera system.

If you choose this type of project, it is your responsibility to design the appropriate collection and processing pipeline. Raw data such as images or video will usually need to be transformed into structured data before it can be analyzed and visualized. This may involve manual annotation, writing scripts, or using models such as computer vision systems to extract counts, classifications, locations, trajectories, or other attributes.

You should be prepared to do the heavy lifting required to turn the raw material into a meaningful dataset. Make sure your group has a realistic plan for collecting, storing, processing, and extracting the data you need. Some projects may also require access to systems or datasets available through research projects, such as the [SideSeeing platform](https://sites.usp.br/sideseeing) or IDOT camera data. If you are interested in using these resources, reach out early to discuss access and whether your proposed collection and processing plan is appropriate.

##### Designing your data collection

Try to choose a project where you expect variation across at least two dimensions. For example, **space and time**, **location and category**, or **conditions and behavior**. This will give you more possibilities when you begin exploring visualization designs.

Write a short description of what you want to observe and why you find it interesting. Then propose at least **four initial domain questions** that you think your observations might help you investigate. At this point, treat these questions as idea generation rather than final questions. You will revisit them after collecting the data.

Next, describe your proposed data collection process. Discuss:

* What constitutes one observation?
* What attributes will you record for each observation?
* Where and when will you collect the data?
* Over how many locations, times, or days will you collect it?
* How will you ensure that your data captures meaningful variation rather than a single snapshot?
* How will you decide what to observe?
* How will the collection be divided among group members?
* What might your collection process fail to capture?
* How might your collection process introduce bias?

Create an initial **data dictionary** describing the attributes you plan to collect. For each attribute, provide its name, type, description, and an example value.

For example:

| Attribute        | Type         | Description                    | Example    |
| ---------------- | ------------ | ------------------------------ | ---------- |
| `location`       | Categorical  | Location of the observation    | `UIC Quad` |
| `time`           | Temporal     | Time of observation            | `14:35`    |
| `bike_type`      | Categorical  | Type of bicycle observed       | `Road`     |
| `rack_occupancy` | Quantitative | Number of occupied rack spaces | `8`        |

If you would like feedback on your proposed data collection project before beginning the collection itself, feel free to reach out. I am happy to give you my opinion on whether the scope, attributes, and collection plan seem appropriate for the assignment.

Be thoughtful when collecting observations involving other people. You should generally collect information about places, objects, environments, or aggregate behavior rather than information that identifies individuals. **Do not collect sensitive or personally identifiable information**, such as names, faces, license plates, or private conversations.

#### Task 2: Pilot and data collection

Before collecting the complete dataset, conduct a small **pilot collection** of approximately 10 observations.

Use the pilot to test your proposed collection process. Discuss:

* Were the attributes clear and easy to record?
* Were any observations difficult to classify?
* Did different group members interpret attributes differently?
* Were important attributes missing?
* Were some attributes unnecessary?
* Did the pilot change the kinds of questions you thought you could answer?

Revise your collection procedure and data dictionary based on what you learned. Document what changed and why. Finding problems during the pilot is expected and is part of the assignment. After completing the pilot, collect your full dataset.

There is no strict required number of observations because appropriate dataset sizes will depend on the project. As a rough guideline, many projects will have approximately hundreds of observations. However, **the number of observations alone is not enough**. Your dataset should have meaningful coverage of the phenomenon you are studying. For example, 100 observations collected at the same place during a single hour may be less useful than 60 observations deliberately collected across several locations, days, or times. Your collection should provide enough variation to support the questions you want to investigate.

Include your final dataset in a machine-readable format. You should also include the final data dictionary and document when, where, and how the data was collected. Include relevant raw materials, such as photographs or collection sheets, when appropriate.

#### Task 3: Data description and domain questions

Write a paragraph describing the dataset that you **actually collected**, summarizing its most important characteristics, including its size and attributes. Discuss how the data was collected, what spatial, temporal, or categorical coverage it contains, what variation you captured, important limitations, potential biases, and any observations that were difficult or ambiguous to record.

Reflect briefly on the process of turning your observations into data. What information from the phenomenon you observed was captured by your attributes? What was lost? What choices did you make when deciding how something in the world became a row or value in your dataset? Then revisit the domain questions you proposed in Task 1. Discuss at least **four domain questions** that you would now like to investigate using visualization. Make sure to discuss the reasoning behind each question and link back to the attributes in your dataset. Your questions may be different from your original questions. If they changed, discuss why. Perhaps you discovered that a question cannot be answered with the data you collected, or perhaps collecting the data suggested a more interesting question.

This is a critical part of the assignment, as it will heavily influence the other tasks. Treat this step as continuing idea generation rather than simply trying to find the "right" questions.

#### Task 4: Task abstractions

Translate the domain-specific questions to abstract tasks. For each question, identify *actions* and *targets* that define user goals, making sure to discuss your reasoning behind each decision. Reflect on why you mapped them the way you did and how this abstraction step reshaped your perspective on the original questions. A task abstraction should describe what someone needs to accomplish using the visualization rather than specify the visualization itself. For example, "compare values across locations" is an abstract task; "create a bar chart" is a visualization design decision.

#### Task 5: Visualization sketches

Each group member should independently create at least **three substantially different visualization sketches**. For a group of three, your submission should therefore contain at least **nine initial sketches**.

Each domain question should be explored through multiple sketches across the group. The sketches should represent genuinely different visualization ideas. It is not enough to produce a series of well-known bar charts, line charts, etc. using different attributes. Make sure the visualizations explore fundamentally different approaches.

For each visualization sketch, write a paragraph detailing its main idea and the rationale behind your design decisions. Use these as prompts for reflection:

* What was the motivation behind the sketch?
* Which question or abstract task does it address?
* Which attributes are being represented?
* What marks and visual channels are being used?
* What worked well and what didn't work so well?
* What aspects felt confusing, limited, or not quite right?
* How does it differ from other sketches?

Your goal is to experiment broadly. Try ideas that are very different from one another, not just variations on the same design. Don't worry about whether the sketch would be easy to implement in code; focus on whether the sketch helps you think about the problem differently. All sketches must be **hand-drawn**. You may use paper or a tablet and stylus. Treat them as a creative logbook of your iterative process, not as polished deliverables. Take pictures or scan your sketches and include them in your Markdown document.

After creating the individual sketches, discuss them as a group. Compare their strengths and weaknesses and use what you learned to produce **two refined sketches**. These may refine one of your earlier ideas, combine ideas from multiple sketches, or introduce a new design that emerged from the group discussion. For each refined sketch, clearly indicate the question or task being addressed, the relevant attributes, the marks and visual channels being used, and what you expect someone to be able to learn from the visualization.

#### Task 6: Summarizing

Write a comparison of your visualization designs, covering both strengths and weaknesses in relation to each other, as well as originality. Discuss whether they would be effective in answering the domain questions posed in Task 3.

You should discuss the strengths and weaknesses of your different visualizations while considering factors such as readability, complexity, expressiveness, and scalability. Treat these as prompts for reflection:

* What kinds of design directions did you explore?
* What did you learn from trying different ideas?
* How did your perspective on the questions shift as you sketched?
* Did you explore a wide range of visualization techniques, or did you rely on a small subset of common visual encodings?
* How does the diversity of your sketches contribute to answering the domain questions in different ways?
* How did knowing how the data was collected affect the visualization designs you considered?
* Is there anything you now wish you had collected differently?

Discuss the relative strengths and weaknesses of your sketches in terms of process: what felt generative, what felt repetitive, and how exploring different directions expanded your design space.

#### Task 7: Collaboration process

Document how your group collaborated during this assignment. You should cover:

* How you communicated (e.g., in-person meetings, online chats, video calls).
* How you divided the data collection.
* How you made sure that different group members collected observations consistently.
* How you shared sketches and artifacts (e.g., scanned images, photos, GitHub uploads, shared drives).
* How you divided or rotated tasks (e.g., brainstorming together, each sketching different versions, reviewing and iterating).
* What worked well in your collaboration, and what challenges you encountered.

Treat this as another kind of reflection: How did the group process shape both the **data collection** and the **visualization design**?

---

#### Deliverables

Submit the **URL of your GitHub repository by email to the instructor and TA**.

Your repository may be public or private. If the repository is private, make sure the instructor and TA have been added as collaborators before sending the URL.

Your repository should contain:

* A single Markdown document organized by Tasks 1-7, containing all required writeups, tables, reflections, and visualization sketches. Images of sketches and other relevant artifacts should be embedded directly in the document near the text that discusses them, rather than collected separately at the end. Be concise: focus on the reasoning, decisions, changes, and takeaways that matter, and avoid unnecessary repetition or overly long descriptions. **The questions listed within each task are guides for reflection, not a checklist to answer one by one. Write a coherent response for each task rather than reproducing and answering every prompt individually.**
* Your data dictionary.
* Documentation of your original and revised data collection process.
* Relevant raw observations or collection artifacts, when appropriate.
* Visualization sketches.

Take pictures or scan your sketches, making sure that they are easily readable. **Make sure your writeups, data, and sketches are clearly organized.**

All group members should contribute to the GitHub repository using their own accounts. Your repository history should reflect the evolution of the project rather than a single upload at the end of the assignment.

---

#### Grading

Your submission starts with 100 points. Points will be deducted according to:

* Data collection and documentation:

  * Up to -20 if the data collection is poorly motivated, too limited in scope or coverage, inconsistent, insufficient for the proposed questions, important attributes or collection decisions are undocumented, or there is little evidence of piloting and refinement.

* Complexity and relevance of domain questions & abstract tasks:

  * Up to -20 if domain questions are superficial, disconnected from the dataset, or show little thought, or if task abstractions are poorly reasoned.

* Process reflection:

  * Up to -15 if the writeup does not document how the data collection or visualization ideas evolved, misses iterations, or lacks reflection on false starts and changes.

* Design choices:

  * Up to -20 if sketches are repetitive, rely too heavily on a narrow set of visualizations, or show little exploration.

* Writeups, clarity, and organization:

  * Up to -15 if explanations for data collection, sketches, and design choices are missing, incomplete, poorly justified, overly verbose, repetitive, written as a question-by-question checklist, or if the Markdown document is difficult to follow. Strong submissions should be concise, clear, coherent, and focused on the most important reasoning and reflection. The prompts within each task should guide the discussion rather than structure it as a list of separate answers.

* Collaboration process:

  * Up to -10 if the collaboration process is missing, vague, or superficial (e.g., "we met" with no detail).

**Important**: The emphasis is on process and reflection. Problems discovered during data collection, abandoned questions, unsuccessful sketches, and changes in direction are not failures if you identify them and thoughtfully discuss what you learned from them. Small flaws in drawing quality, neatness, or "correctness" of visualization design will not be penalized as long as your process is thoughtful and documented. And remember: the prompts in each task are guides for reflection, not checklists.

---

#### Other resources

* [A Tour through the Visualization Zoo](https://dl.acm.org/doi/10.1145/1794514.1805128)
* [Data Viz Project](https://datavizproject.com/)
* [How to Sketch, Doodle, and Draw Data Visualization Drafts by Hand](https://depictdatastudio.com/how-to-sketch-doodle-and-draw-data-visualization-drafts-by-hand/)
* [Sketching with Data Opens the Mind's Eye](https://medium.com/accurat-in-sight/sketching-with-data-opens-the-mind-s-eye-92d78554565)
* [From data to Viz](https://www.data-to-viz.com/)
