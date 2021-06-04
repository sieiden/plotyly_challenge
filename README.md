# plotyly_challenge
NW Bootcamp Plotly HW


This homework focused on displaying various graphs of bacteria data and demographic information for various participant ids. To run the files use a source code editor (ex. VS Code) and your local server/default browser or use the gihub pages link (https://sieiden.github.io/plotyly_challenge/). Use the drop down menu to select a participant ID to see the corresponding graphs on the dashboard.

# **Biodiversity Level One**

The app.js file uses three functions to perform the app's actions
* init()
   *  Reads the json data with d3.json method
   *  loops through each array of the biodiversity json and enters the participant id names into the select drop down menu in the html

![empty search](https://user-images.githubusercontent.com/68086211/120862805-2a6ff280-c54f-11eb-8b13-88ff3ac14999.png)

The above photo shows the page when it initially loads. No graphs are shown because a participant ID has not been selected

*buildPlot()
  * reads in the json data for analysis using d3.json()
  * sets variables for arrays of sample values, otu ids, and otu labels to be used in building the plots
  * builds the bar chart of top 10 bacteria found in each sample
  * builds the bubble chart of all bacteria found for each participant
  * enters the demographic metadata for each participant into a panel on the left side of the page

* onChange()
   * pulls out the chosen participant id and feeds the id into the buildPlot function 


![graphs displayed](https://user-images.githubusercontent.com/68086211/120863331-fa751f00-c54f-11eb-86da-7169d2625f6e.png)

The above screen shot displays the graphs generated for participant ID 952
