// from data.js
var tableData = data;

// YOUR CODE HERE!
// Select the button
var button = d3.select("#filter-btn")

// Select the form
var form = d3.select("form")

// Create event handlers 
button.on("click", runEnter)
form.on("submit",runEnter)

// Complete the event handler function for the form
function runEnter() {