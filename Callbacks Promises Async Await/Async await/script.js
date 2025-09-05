// function getData(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("weather data")
//             resolve("success")
//         },2000)
//         })
//     }
// async function abc(){
//     await getData();
//     await getData();
//     await getData();
// } 

// Function that returns a Promise
function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("success");
    }, 2000);
  });
}

// Async-await function
async function getAllData() {
  await getData(1);
  await getData(2);
  await getData(3);
  await getData(4);
  await getData(5);
  await getData(6);
}

// Call the async function
getAllData();
 
//immeditely invoked function expression
(func)();