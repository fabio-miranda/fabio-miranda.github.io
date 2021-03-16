### CS594 Special Topics: Big Data Visualization and Analytics

Instructor: Fabio Miranda (fabiom@uic.edu)

#### 1. Course rationale
In the past decade, technological innovations have enabled the automatic collection of a diverse set of very large data sets, from user-generated content, such as tweets, to sensor data, such as noise decibel level or aerial surveys. As pointed out by Hal Varian, Google's Chief Economist, today data is not only free but ubiquitous, and the ability to understand, process, extract value from, and visualize it, is going to be hugely important in the next decades. As data grows in size and complexity, however, siloed solutions become less capable of conveying all the structure and information hidden in the data. Visual analytics systems have been successful at enabling users to obtain insights from large data [1,2]; Well-designed large-scale data visual analytics systems merge domain expertise and analytics techniques, enabling users to gain actionable insights into problems by formulating and testing hypotheses, and to address domain-specific challenges.

This course will introduce students to big data visualization and analytics, focusing on the connections between visualization, data management, and data mining [3]. We will cover potential sources of big data, including audio, image, graph, geometry, and mobile data, both structured or unstructured. The course will discuss effective metaphors to visualize data that might span billions of records; data mining and machine learning techniques that can summarize the data, or extract patterns to guide users in their visual exploration; and the data management techniques that can effectively drive interactivity in the visual exploration of big data. See [here](https://fmiranda.me/research/) for a broader perspective.

#### 2. Course objectives

This course will focus on the intersection between visualization, data management, and data mining, covering the necessary topics to build visual analytics tools to handle big data. For the purposes of this course, big data will include any data set with size (or complexity) that goes beyond the ability of standard tools and techniques to interactively manage and process it with a latency below 0.5 second [4].

At the end of the course, students will have a good understanding of the state of the art in visual analytics of large data, limitations of current techniques, and promising research directions. They will also be able to design and implement visual analytics systems capable of handling large data, by combining visualization and data mining techniques, data structures and algorithms that work in tandem to enable interactive data exploration.

#### 3. Course topics

* Visualization
  * Uncertainty vis
  * Progressive vis
* Data management
  * Data structures for vis, including data cubes
  * Spatial queries using GPUs
  * Approximate queries, hashing schemes, and learned indices
* Data analytics
  * Computational topology
  * Wavelet-based techniques

#### 4. Student deliverables

Students will be required to complete 3 assignments, where they will implement concepts and techniques presented in class using large data sets, from high-resolution timeseries to image data. There will be a fourth and final assignment where students will have to identify a research problem under my guidance, and propose and implement a small-scale system for the interactive exploration of a large data set (or multiple data sets). Students will be able to use their own dataset, or select from a list of available datasets, including spatiotemporal audio, image, graph, and geometry data. Students will have to produce a short paper reporting preliminary results, and give a brief final presentation in class. Ideally, a project will have produced the initial stages of a research paper, capable of being accepted at a workshop.


#### 5. Course pre-requisites

Programming experience, preferably in either C/C++, Java, Python or Javascript.

#### 6. Readings

There is no required textbook. The vast majority of the coursework will be based on research papers from conferences and journals, including visualization (VIS, EuroVis, IEEE TVCG), database (SIGMOD, VLDB, IEEE Big Data), and related fields (IEEE TITS, AAAI).

#### 7. Method of instruction

For the first \~10 weeks, the course will be lecture based (75 minutes twice per week), followed by \~5 weeks of paper presentations and discussions.


#### References

[1] H. Doraiswamy, J. Freire, M. Lage, F. Miranda, and C. Silva, "Spatio-Temporal Urban Data Analysis: A Visual Analytics Perspective," *IEEE Computer Graphics and Applications*, 38(5):26-35, 2018

[2] N. Ferreira, J. Poco, H. T. Vo, J. Freire, and C. T. Silva, "Visual exploration of big spatio-temporal urban data: A study of New York City taxi trips," *IEEE Transactions on Visualization and Computer Graphics*, 19(12):2149–2158, 2013

[3] R. Chang, J. D. Fekete, J. Freire, and C. E. Scheidegger, "Connecting visualization and data management research," *Dagstuhl Reports*, 7(11):46–58, 2017

[4] Z. Liu and J. Heer, "The effects of interactive latency on exploratory visual analysis," *IEEE Transactions on Visualization and Computer Graphics*, 20(12):2122–2131, 2014