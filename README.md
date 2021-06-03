# plotyly_challenge
NW Bootcamp Plotly HW


This homework focused on displaying various graphs of bacteria data for various participant ids. The homework included two parts outlined below. To run the files use a source code editor (ex. VS Code) and your local server/default browser or use the gihub pages link (https://sieiden.github.io/plotyly_challenge/). Use the drop down menu to select a participant ID to see the corresponding graphs on the dashboard.

# **Biodiversity Level One**

The app.js file uses two functions to perform the app's actions
* buildTable
   *  loops through each array of the ufo data array and enters the data into a bootstrap table

* onChange
   * clears any data previously entered into the table
   * pulls the entered date from the filter search box
   * filters the ufo data and puts the new filtered data into the buildTable function
   * if the entered date does not exist, the table is blank and a new header "This data does not exist" is displayed on the page
   * if the search box is empty the full table is displayed

# **Biodiversity Level Two**
Biodiversity level two contains the same two functions as part 1. However, the page now has a guage graph to show the number of belly button washes for each participant.
