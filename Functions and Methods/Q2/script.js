console.log("Js");  
// Q:For a given array of numbers print the square of each value using the for each loop?
 let arr = [1,3,5,7,9]
 arr.forEach((val)=>
{
    console.log(val*val);
 })
//reduce method
const red = [1,2,,6,4,6,9]
let newRed = red.reduce((pre,curr)=>{
    return pre>curr ? pre : curr;
})
console.log(newRed)