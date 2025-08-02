//Q: We are given an array of marks of students.filter out the marks of students more than 90.
 let arr = [63,85,43,98,45,91]
 let newArray = arr.filter((pre)=>{
    return pre>90;
 })
 console.log(newArray);
//Q2: Take a number n as an input from user.  creatre an array of numbers from 1 to n. use the reduce method to calculate sum of all numbers  in the array. use the reduce method to calculate the product of all numbers in te array.
let n = parseInt(prompt("Enter a number:"));//parse int from AI
let arrr = [];
for (let i = 1; i <= n; i++) {
     arrr.push(i);
}
console.log(arrr);
let newRed = arrr.reduce((pre,curr)=>{
    return pre+curr;
})
console.log(newRed);
let againRed = arrr.reduce((pre,curr)=>{
    return pre*curr;
})
console.log(againRed);

 
