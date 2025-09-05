//aplication-programming interface
const URL = "https://randomuser.me/api";
const getFacts = async () => {
 console.log("Loading...")
 let response = await fetch (URL);
 console.log(response);
 let data = await response.json();
console.log(data);
}

//by default get req
/*
Understanding Terms

AJAX: Asynchronous JavaScript & XML

JSON: JavaScript Object Notation
- Example: { "name": "John", "age": 25 }

json() method:
- Returns a second promise that resolves with the result of parsing 
  the response body text as JSON.
- Input is JSON (string), output is JavaScript object.
*/

//request&response
//mdn documentations