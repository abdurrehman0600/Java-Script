//objects and vriables
const productPackage = {
    price : 20,
    fullName : "pen",
    rating : 4.5,
    deal : true ,
}
console.log(productPackage);
const profile = {
     fName : "shradhakapoor",
     followers : 76345,
     following : 283423,
     posts : 12,
     bio : "my full name is shradha",
}
console.log(profile)
// operators
let a=4;
let b=5;
a += 1;
console.log(a);
b -=1;
console.log(b);
a*=3;
console.log(a);
a%=10;
console.log(a);
b**=10;
console.log(b);

let c=1;
let d="2";
let e=2;
console.log(c==1);
console.log(c!=1);
console.log(d!==e);
//ternary operator

let x=100;
let y=200;
let cond1=x<y;
let cond2=x!=y;
console.log("so the answer is",cond1 && cond2);
console.log("ternary operator",x==y?"han":"nah")

//conditional statements

let num = 11;
if (num%2==0){
    console.log("Even");
}
else{
    console.log("odd");
}
//prompt question 1

// let p=prompt("Enter a number");
// if(p%5==0){
//     console.log("multiple of 5");
// }
// else{
//     console.log("not a multiple of 5");
// }

// question 2

// let mo=prompt("Enter you obtained marks");
// if(mo<=100 && mo>=80)
// {
//     console.log("Congrats yo've got A")
// }
// else if(mo>=70 && mo<=79)
// {
//     console.log("Congrats yo've got B")
// }
// else if(mo>=60 && mo<=69)
// {
//     console.log("Its ok yo've got C")
// }
// else if(mo>=50 && mo<=59)
// { 
//     console.log("Luckily yo've got D")
// }
// else if(mo>=0 && mo<50)
// {
//     console.log("sorry fail")
// }
// else{
//     console.log("What the F you are doing")
// }


