//Q1: you are creating a website of yoyr college.Createa class user with two properties, name and email.it also has a method called view data(). that allows user to view website data.
class user{
    constructor(name,email){
         this.name = name;
         this.email = email;
    }
    viewData(){
        console.log("This is my website data")
    }
}
let std1 = new user("ali","ali@123");
let std2 = new user("abdur","abdur@123");
//Q2: create a new class called admin which inherits from user. add a new method called editData to admin that allows it to edit website data.

class admin extends user{
   editData(){
    console.log("you can edit data")
   }
}
let hod = new admin();