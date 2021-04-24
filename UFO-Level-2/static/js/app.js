// from data.js
let tableData = data;

// YOUR CODE HERE!
let dataField = d3.select("#datetime");
let cityField = d3.select("#city");
let button = d3.select("#filter-btn");
let $tbody = d3.select("tbody");
let columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

let createTable = (info) => {
    info.forEach(UFO => {
        let row = $tbody.append("tr");
        columns.forEach(column => row.append("td").text(UFO[column]))
    });
}

createTable(tableData);

button.on("click", () => {
    d3.event.preventDefault();

    let dateInput = dataField.property("value").trim();
    let dateFilter = tableData.filter(tableData => tableData.datetime === dateInput);
    let cityInput = cityField.property("value").toLowerCase().trim();
    let cityFilter = tableData.filter(tableData => tableData.city === cityInput);
    let doubleFilter = tableData.filter(tableData => tableData.datetime === dateInput && tableData.city === cityInput);

    $tbody.html("");

    let response = {
        dateFilter, cityFilter, doubleFilter
    }

    if(response.doubleFilter.length !== 0) {
        createTable(doubleFilter);
    }else if(response.doubleFilter.length === 0 && ((response.dateFilter.length !== 0 || response.cityFilter.length !== 0))) {
        createTable(dateFilter) || createTable(cityFilter);
    }else {
        $tbody.append("tr").append("td").text("There is no record of a UFO sightingson on this date");
    }
})