// str.length
// str.indices
// string method always return a new value
// strings are immutable in js
// arrays are mutable


function myFunction(){
    console.log("Hello World")
}
//input var in func definition = parameter
//input var in func call = argument
myFunction();
function myFunction(a){
    console.log(a)
}   
myFunction("My name is KHAN");
myFunction("My name is ALI KHAN");


function a(x,y)
 {
     a= x+y;
     console.log(a);
 }
 a(1,2);
 a(3,4);


function a(x,y)
{
    let sum = x+y;
    console.log(sum);
    return sum;
}
r = a(5,5);
console.log(r);
// parameters have limited block scope. they are like local variables
//arrowfunction
const arrowMul = (c,d) =>
     {
    let mul = c*d;
    console.log(mul);
}
arrowMul(3,4);
// without parameters and {}
let hello = () => console.log("Learn JS");
hello();
// callback functions in js (functions can be passed as a parameter)
//for.each(higher order function)
let arr = [1,2,3,4,5];
arr.forEach(function myfunc(val){
   console.log(val,"This is the no");
});
//callback in the form of arrow function
let arrSecond = [1,2,3,4,5];
arrSecond.forEach((val) => {
console.log(val,"This is the Secondno");
});
//3 parameters of for.each (index,value,array)
let arrThird = ["lahore","karachi","islamabad"]
arrThird.forEach((val,idx,arrThird)=>
{
    console.log(val.toUpperCase(),idx,arrThird);
}
)
//highr order functons or methods: which take another function as a parameter or returns a function as a value.
// map method : same works as for each just creates a new array of the result.
let digit = [234,635,353]
let newArr = digit.map((value)=>
{
    return value;
})
console.log(newArr);
//filter method
let j = [1,2,4,6,7,2]
let newArray = j.filter((value) => {
    return value ==2;
})
console.log(newArray);
//reduce method
const red = [1,2,,6,4,6,9]
let newRed = red.reduce((pre,curr)=>{
    return pre>curr ? pre : curr;
})
console.log(newRed)