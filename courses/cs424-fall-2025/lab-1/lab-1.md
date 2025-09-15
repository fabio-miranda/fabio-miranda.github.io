### CS424 - Visualization & Visual Analytics (Fall 2025)

Instructor: Fabio Miranda

Course webpage: https://fmiranda.me/courses/cs424-fall-2025/

---

### Lab 1: Visualizing data with Vega-Lite

The goal of this lab is to get you familiar with Vega-Lite.

---

### Tasks

#### Task 0: Setting up your environment

- Open the online editor: https://vega.github.io/editor/
- Or include this in an HTML file:
```html
<script src="https://cdn.jsdelivr.net/npm/vega@5"></script>
<script src="https://cdn.jsdelivr.net/npm/vega-lite@5"></script>
<script src="https://cdn.jsdelivr.net/npm/vega-embed@6"></script>
<div id="vis"></div>
<script>
  const spec = {/* paste Vega-Lite JSON here */};
  vegaEmbed('#vis', spec);
</script>
```

#### Task 1: Simple bar charts

We will use `car.json`, which contains attributes for cars from the 1970s. Useful fields include:
  - `Name` (car model), `Miles_per_Gallon` (fuel efficiency), `Cylinders` (engine size), `Displacement`, `Horsepower`, `Weight_in_lbs`, `Acceleration`, `Year` (as a date string), and `Origin` (USA, Europe, Japan).

The first three rows look like this:

```json
{"Name":"chevrolet chevelle malibu","Miles_per_Gallon":18,"Cylinders":8,"Displacement":307,"Horsepower":130,"Weight_in_lbs":3504,"Acceleration":12,"Year":"1970-01-01","Origin":"USA"}
{"Name":"buick skylark 320","Miles_per_Gallon":15,"Cylinders":8,"Displacement":350,"Horsepower":165,"Weight_in_lbs":3693,"Acceleration":11.5,"Year":"1970-01-01","Origin":"USA"}
{"Name":"plymouth satellite","Miles_per_Gallon":18,"Cylinders":8,"Displacement":318,"Horsepower":150,"Weight_in_lbs":3436,"Acceleration":11,"Year":"1970-01-01","Origin":"USA"}
```

*Main question:* Do cars from different regions (and cylinder counts) differ in how many there are in the dataset and in their average fuel efficiency?

*What you will build:* You will first make a count bar chart by origin. Then you will sort it, add tooltips, and finally switch to an average bar chart for MPG, both by origin and by cylinders.

##### Step 1: Draw a basic count bar chart

Start by counting how many cars come from each region. This uses a bar mark and a count aggregation on the y-axis.

```json
{
  "$schema":"https://vega.github.io/schema/vega-lite/v5.json",
  "data":{"url":"data/cars.json"},
  "mark":"bar",
  "encoding":{
    "x":{"field":"Origin","type":"nominal","title":"Origin"},
    "y":{"aggregate":"count","title":"Number of cars"}
  }
}
```

##### Step 2: Sort the bars by their height and add a tooltip

Next, make the ordering meaningful by sorting descending on the y-value. Also add a tooltip so students can read the exact count.

```json
{
  "$schema":"https://vega.github.io/schema/vega-lite/v5.json",
  "data":{"url":"data/cars.json"},
  "mark":"bar",
  "encoding":{
    "x":{"field":"Origin","type":"nominal","sort":"-y","title":"Origin"},
    "y":{"aggregate":"count","title":"Number of cars"},
    "tooltip":[{"aggregate":"count","title":"Count"}]
  }
}
```

##### Step 3: Change the measure: average MPG by Origin

Now answer a different question: which origin has higher fuel efficiency on average? Filter out null MPG values, keep the same bar chart, and change the aggregation to `mean` over `Miles_per_Gallon`.

```json
{
  "$schema":"https://vega.github.io/schema/vega-lite/v5.json",
  "description":"Average MPG by origin",
  "data":{"url":"data/cars.json"},
  "transform":[{"filter":"isValid(datum.Miles_per_Gallon) && isValid(datum.Origin)"}],
  "mark":"bar",
  "encoding":{
    "x":{"field":"Origin","type":"nominal","sort":"-y","title":"Origin"},
    "y":{"aggregate":"mean","field":"Miles_per_Gallon","title":"Avg MPG"},
    "tooltip":[{"aggregate":"mean","field":"Miles_per_Gallon","title":"Avg MPG"}]
  }
}
```

##### Step 4: Compare engine categories: average MPG by Cylinders

To contrast engine sizes, switch the x-axis to the Cylinders field. Treat cylinders as an ordered category and compute the mean MPG for each group.

```json
{
  "$schema":"https://vega.github.io/schema/vega-lite/v5.json",
  "data":{"url":"data/cars.json"},
  "transform":[{"filter":"isValid(datum.Miles_per_Gallon) && isValid(datum.Cylinders)"}],
  "mark":"bar",
  "encoding":{
    "x":{"field":"Cylinders","type":"ordinal","sort":"ascending","title":"Cylinders"},
    "y":{"aggregate":"mean","field":"Miles_per_Gallon","title":"Avg MPG"},
    "tooltip":[{"aggregate":"mean","field":"Miles_per_Gallon","title":"Avg MPG"}]
  }
}
```

#### Task 2: Multifacets

We will use the same `cars.json` dataset.

*Main question:* How does the relationship between weight and fuel efficiency (MPG) differ across regions of origin and engine sizes (cylinders)?

*What you will build:* You will first make a simple scatterplot of weight vs MPG. Then you will facet by origin into columns.


##### Step 1: Scatterplot of weight vs MPG

Start by showing the overall relationship. Cars with higher weight generally have lower fuel efficiency, and a scatterplot is one option to visualize this.

```json
{
  "$schema":"https://vega.github.io/schema/vega-lite/v5.json",
  "data":{"url":"data/cars.json"},
  "transform":[{"filter":"isValid(datum.Miles_per_Gallon) && isValid(datum.Weight_in_lbs)"}],
  "mark":"point",
  "encoding":{
    "x":{"field":"Weight_in_lbs","type":"quantitative","title":"Weight (lbs)"},
    "y":{"field":"Miles_per_Gallon","type":"quantitative","title":"MPG"}
  }
}
```

##### Step 2: Add a column facet by Origin

Next, split the scatterplot into separate panels for each region of origin. This makes it easier to compare patterns for U.S., European, and Japanese cars side by side.

```json
{
  "$schema":"https://vega.github.io/schema/vega-lite/v5.json",
  "data":{"url":"data/cars.json"},
  "transform":[{"filter":"isValid(datum.Miles_per_Gallon) && isValid(datum.Weight_in_lbs) && isValid(datum.Origin)"}],
  "facet":{"column":{"field":"Origin","type":"nominal","title":"Origin"}},
  "spec":{
    "mark":"point",
    "encoding":{
      "x":{"field":"Weight_in_lbs","type":"quantitative","title":"Weight (lbs)"},
      "y":{"field":"Miles_per_Gallon","type":"quantitative","title":"MPG"}
    }
  }
}
```

##### Step 3: Add tooltips to inspect car details

Now, when you hover over a point, add a tooltip to see the car’s name, its weight, and MPG. This helps identify outliers and patterns.

```json
{
  "$schema":"https://vega.github.io/schema/vega-lite/v5.json",
  "data":{"url":"data/cars.json"},
  "transform":[{"filter":"isValid(datum.Miles_per_Gallon) && isValid(datum.Weight_in_lbs) && isValid(datum.Origin)"}],
  "facet":{"column":{"field":"Origin","type":"nominal","title":"Origin"}},
  "spec":{
    "mark":"point",
    "encoding":{
      "x":{"field":"Weight_in_lbs","type":"quantitative","title":"Weight (lbs)"},
      "y":{"field":"Miles_per_Gallon","type":"quantitative","title":"MPG"},
      "tooltip":[
        {"field":"Name","title":"Car"},
        {"field":"Weight_in_lbs","title":"Weight (lbs)"},
        {"field":"Miles_per_Gallon","title":"MPG"}
      ]
    }
  }
}
```


#### Resources
- **Vega-Lite Documentation** — the canonical guide to marks, encodings, transforms, interactions, and more:  
  [https://vega.github.io/vega-lite/docs/](https://vega.github.io/vega-lite/docs/)
- **Vega Editor** (try and tweak your JSON live):  
  [https://vega.github.io/editor/](https://vega.github.io/editor/)
- **Vega Datasets** (overview of all the built-in datasets you can use in the editor):  
  [https://github.com/vega/vega-datasets](https://github.com/vega/vega-datasets)
