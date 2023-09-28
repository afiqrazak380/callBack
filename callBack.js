
// Simulate fetching data from a server (takes some time)
function fetchData(callback) {
  setTimeout(function () {
    const data = "Hello, World!";
    callback(data); // When the data is ready, call the callback function with the data
  }, 15000); // Simulating a 2-second delay
}

// Callback function to handle the fetched data
function processData(data) {
  console.log("Received data: " + data);
}

// Now, let's use fetchData with our callback
console.log("Fetching data...");
fetchData(processData);
console.log("Request sent!"); // This line runs immediately after sending the request

function myFunction() {
  console.log("Timeout function executed!");
}
