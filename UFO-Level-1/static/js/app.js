// from data.js
let tableData = data;

// YOUR CODE HERE!
let dataField = d3.select("#datetime");
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
    let dateInput = dataField.property("value").trim();
    let dateFilter = tableData.filter(tableData => tableData.datetime === dateInput);

    $tbody.html("");

    let query = {
        dateFilter
    }

    if(query.dateFilter.length !== 0) {
        createTable(dateFilter);
    }else {
            $tbody.append("tr").append("td").text("There is no record of a UFO sightingson on this date");
        }
})