// from data.js
var tableData = data;
// var tbody = d3.select("tbody");

// Console.log the weather data from data.js
// console.log(data);

// YOUR CODE HERE!


// var dataPoint = {datetime: "1/1/2010",
// city: "benton",
// state: "ar",
// country: "us",
// shape: "circle",
// durationMinutes: "5 mins.",
// comments: "4 bright green circles high in the sky going in circles then one bright green light at my front door."
// }
// d3.event.preventDefault();
// lines 21-32 implemented in function
// Select the submit button
// Select the submit button
// // var submit = d3.select("#submit");

// // submit.on("click", function() {

// // //   // Prevent the page from refreshing
// //   d3.event.preventDefault();

// // //   // Select the input element and get the raw HTML node
  


// // //   // Prevent the page from refreshing
// // // //   d3.event.preventDefault(); 
// //     var tbody = d3.select("tbody");
// //     var inputElement = d3.select("#datetime");

// // //   // Get the value property of the input element
// //     var inputValue = inputElement.property("value");

// //     // console.log(inputValue);
// //     // console.log(tableData);
// //     if (inputValue){
// //         var filteredData = tableData.filter(row => row.datetime === inputValue);
// //         console.log(filteredData);

//     }
    
    // console.log(filteredData);
// read the value within the datetime input field; use to filter the data array
// build rows for all of the remaining data objects
 
    // data.forEach(function (filteredData){
    //     var trow = tbody.append('tr');
    //     Object.inputValue(filteredData).forEach((val) => {
    //         var cell = trow.append("td");
    //             cell.text(val);
    //     })
        // trow.append('td').text(filteredData['datetime']);
        // trow.append('td').text(filteredData['city']);
        // trow.append('td').text(filteredData['state']);
        // trow.append('td').text(filteredData['country']);
        // trow.append('td').text(filteredData['shape']);
        // trow.append('td').text(filteredData['durationMinutes']);
        // trow.append('td').text(filteredData['comments']);
// })});


function whenClick(){
        d3.event.preventDefault();
        var inputElement = d3.select("#datetime");
        var inputValue = inputElement.property("value");
        let filteredData = tableData
        if (inputValue){
            var filteredData = tableData.filter(row => row.datetime === inputValue);
        }
       buildMytable(filteredData);

    };


function buildMytable(data){
    var tbody = d3.select("tbody");
    tbody.html("");
    data.forEach((my_data) => {
        var trow = tbody.append('tr');
        Object.values(my_data).forEach((val) => {
            var cell = trow.append("td");
                cell.text(val);
        }
        );
    });
};

d3.selectAll("#filter-btn").on("click",whenClick);
buildMytable(tableData);
