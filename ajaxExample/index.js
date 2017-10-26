var dataURL = "https://data.seattle.gov/resource/4xy5-26gy.json?$order=date%20desc&$limit=24";

let myTable = document.getElementById("bikes");

function parseAsJSON(response) {
    return response.json();
}

function handleError(err) {
    console.error(err);
    alert(err.message);
}

function renderRecord(record) {
    //create a <tr> and <td> elements for each property
    //...
    var tableRow = document.createElement("tr");
    var tableData = tableRow.appendChild(document.createElement("td"));
    tableRow.textContent = record.date

    tableData = tableRow.appendChild(document.createElement("td"));
    tableData.textContent = record.fremont_bridge_nb;

    tableData = tableRow.appendChild(document.createElement("td"));
    tableData.textContent = record.fremont_bridge_sb;

    return tableRow;
}

function renderTable(data) {
    console.log(data)
    var myTable = document.getElementById("bikes");


    data.forEach(function(record) {
        myTable.appendChild(renderRecord(record));
    });
    //`data` is an array of objects
    //loop over the array calling renderRecord()
    //for each record, and appending the returned
    //<tr> to the <tbody>
    //...
}

//fetch the data
fetch(dataURL)
    .then(parseAsJSON)
    .then(renderTable)
    .catch(handleError);