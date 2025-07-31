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