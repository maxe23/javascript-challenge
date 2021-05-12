
// from data.js
var tableData = data;

// table ref
var tbody = d3.select('tbody');

// append data to columns and rows
tableData.forEach((sighting) => {
    var row = tbody.append('tr');

    Object.entries(sighting).forEach(([key, value]) => {
        var cell = row.append('td');
        cell.text(value);
    })
});
// Select the button
var button = d3.select('#filter-btn')
var form = d3.select('#form');
// Create event handlers 
button.on('click', runEnter);
form.on('submit', runEnter);
// Prevent the page from refreshing
function runEnter() {
    d3.event.preventDefault();
    var inputElement = d3.select('#datetime')
    var inputValue = inputElement.property('value');
//input value info
    var filteredData = data.filter(date => date.datetime === inputValue);

    var table = d3.select('tbody')
    table.html('')
 // Show filter data table
    filteredData.forEach((sighting) => {
        var row = tbody.append('tr');

        Object.entries(sighting).forEach(([key, value]) => {
            var cell = row.append('td');
            cell.text(value);
        })
    });
};
