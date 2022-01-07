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