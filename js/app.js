// import data from data.js
const tableData = data;

// Reference HTML table using D3
var tbody = d3.select("tbody");

// Simple JavaScript console.log statement
function printHello() {
    console.log("Hello There!");
}
// takes two numbers and adds them
function addition(a,b) {
    return a + b;
}

console.log(addition(4,5))

// 11.4.2

// for loop thru vegetables
let vegetables = ["Carrots", "Peas", "Lettuce", "Tomatoes"];
for (var i = 0; i < vegetables.length; i++) {
    console.log(`I love ` + vegetables[i]);
}

for (var i = 0; i < 5; i++) {
    console.log(`I am ` + i); 
}

function buildTable(data) {
    // clear existing data
    tbody.html("");
    // loop thru each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
        // append a row to the table body
        let row = tbody.append("tr");

        // loop thru each field in the dataRow and add each value as a table cell (td)
        Object.values(dataRow.forEach(val) => {
            let cell = row.append("td");
            cell.text(val);
        }
        );       
});

function handleClick() {
    // grab datetime value from filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
    // check to see if a date was entered and fulter the data using that date
    if (date) {
        // appply `filter` to the table data to only keeo the
        // rows where the `datetime` value matches the filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    }

    // rebuild the table using the filtered data
    // @note: if no date was entered, then filteredData will 
    // just be the original tableData.
    buildTable(filteredData);
}
    // attach an event to listen for the form button
    d3.selectAll("#filter-btn").on("click", handleClick);

    // build the table when the page loads
    buildTable(tableData);