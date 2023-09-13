### CS424 - Visualization & Visual Analytics (Fall 2023)

Instructor: Fabio Miranda

Course webpage: https://fmiranda.me/courses/cs424-fall-2023/

---

### Lab 2: Visualizing data with GeoPandas and Matplotlib

This lab is a continuation from our [previous](../lab-1/), but now focused on GeoPandas and spatial operations to analyze spatial distributions. We will re-use the same datasets and environment from the previous lab. Also, make sure to perform the same data cleaning operations (Task 2 from the previous lab).

If you would like to check the answers, you can download the Jupyter notebook [here](../lab-1/lab-1.ipynb).

---

### Tasks

#### Task 1: Creating visualizations

#### Visualization 1: Number of cases and deaths over space

Similarly, to create a visualization with the number of cases and eaths over space, we need to perform three steps: (1) aggregate the measures of interest by ZIP code, (2) merge the aggregated data with sociodemographics data, and (3) merge the aggregated data with the dataframe specifying the ZIP code regions. We first need to aggregate the measures by ZIP code:

```python
df_agg_by_zip = df_covid[['cases', 'deaths', 'zipcode']]
df_agg_by_zip = df_agg_by_zip.groupby(['zipcode']).sum()
df_agg_by_zip = df_agg_by_zip.reset_index()
```

For analyses taking into account sociodemographics features, we can also [merge](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.merge.html) two dataframes: `df_agg_by_zip` just created and `df_soc` with the sociodemographics data. The merge operation leverages a common attribute / column (zipcode):

```python
# merge with socio-demographic data
df_agg_by_zip = df_agg_by_zip.merge(df_soc, how='inner', on='zipcode')
```

We can merge two other dataframes: `df_agg_by_zip` and `gdf` (the GeoDataFrame that contains the ZIP code areas):

```python
gdf_merged = pd.merge(df_agg_by_zip, gdf, how='inner', on='zipcode')
gdf_merged = gpd.GeoDataFrame(gdf_merged, crs="EPSG:4326", geometry='geometry')
```

Different from Panda's merge, the previous merge is a [spatial join](https://geopandas.org/en/stable/docs/user_guide/mergingdata.html) between dataframes. More specifically, a GeoDataFrame and a regular DataFrame. We can plot the resulting merge with:

```python
fig, ((ax1, ax2)) = plt.subplots(nrows=1, ncols=2, figsize=(40,50))

ax1.set_title('Covid Case Rates in Chicago Neighborhoods', fontsize=24)
gdf_merged.plot(column = 'cases_per_1000', ax=ax1, cmap='YlOrRd', legend=True, legend_kwds={'shrink': 0.3})
```

The result should be similar to the following image:

<img src="vis-3.jpg" alt="Visualization 3" width="100%"/>


#### Visualization 2 (extra): Correlation between two attributes

For this visualization, check the Jupyter notebook for the required steps and comments. It details the creation of four subplots, each displaying a scatter plot of a sociodemographic attribute against deaths per 1000 people. A regression line is fitted (in red) to visualize any trends. The red line in each plot represents the regression line.

The result should be similar to the following image:

<img src="vis-4.jpg" alt="Visualization 4" width="100%"/>

#### Resources

* [Conda cheatsheet](https://conda.io/projects/conda/en/latest/_downloads/843d9e0198f2a193a3484886fa28163c/conda-cheatsheet.pdf)
* [Running Jupyter notebooks](https://docs.jupyter.org/en/latest/running.html)
* [Panda merge](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.merge.html)
* [GeoPandas merge](https://geopandas.org/en/stable/docs/user_guide/mergingdata.html)
