 const car = {
    make : "Suzuki",
    model : "model",
    variant : "vxl",
    calPrice(){
        console.log("Nice car")
    },
};
// Prototypes are already available  and accessed when an object is made.
const alto = {
    price : "1200000",
};
alto.__proto__ = car;
// if the obj and prototype both have the same methods, then the method present present in obj will bec called(method overriding)
//clasess
class toyotaCar{
    start(){
        console.log("car is started")
    }
    stop(){
        console.log("car is stoped")
    }
    setBrand(brand){
        this.brandName = brand;
    }
}
let corolla = new toyotaCar();
corolla.setBrand("hellooo");
//constructor
//inheritence
class person{
    eat(){
    console.log("i can eat")
}
sleep(){
    console.log("i can sleep")
}
work(){
    console.log("i can work")
}
}
class engineer extends person{
    work(){
        console.log("i can build projects")
    }
}
let mani = new engineer();
//super{};


// ERROR HANDLING
// try{
//     norml code
// }
// catch(err){
//     ...handling error}