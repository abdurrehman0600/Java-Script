// async await >> promise chains >> callback hell
//syncronous: in a seq
//Asyncronous: executes next instructions due to delay and doesnt block the flow.
console.log("one")
console.log("one")
function hello(){
    console.log("hello")
}
// setTimeout(hello,4000)
console.log("one")
console.log("one")
//callbacks
function sum(a,b){  
    console.log(a+b)
}
function calculator(a,b,sumfunc){
    sumfunc(a, b);   
}
calculator(2,3,sum)