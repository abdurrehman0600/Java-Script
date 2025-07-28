  //for a given array with marks of students ->[85.97,44,37,76,60]
  //find the average marks of the entire class
  let sum=0;
  let marks = [85,97,44,37,76,60]
  for (let i =0;i<marks.length;i++)
  {
    sum = sum+marks[i];
  }
 let ans = sum/marks.length;
 console.log(ans);

 //for a given array with prices of5 items -> [250,645,300,900,50]
 //all items have an offer of 10% off on them. change the array to store final price after applying offer.

 let prices = [250,645,300,900,50]
 for (let i=0;i<prices.length;i++)
 { 
   let dp = prices[i]/100*90;
   prices[i]=dp;
 }
 console.log(prices);

 //with for of

 
 let numbers = [250,645,300,900,50]
 for (let number of numbers)
 {
   let dp = numbers[number]/100*90;
      numbers[number]=dp;
 }
 console.log(prices);
//push()

let vegges = ["potato","apple","mango","banana"];
vegges.push("chips","juice","lays");
console.log(vegges);
//pop()
let deletedItem = vegges.pop(vegges);
console.log(vegges);
console.log(deletedItem);
//tostring
console.log(vegges.toString());
//concat joins multiple arrays and returns resul

let bollywoodActors = ["salman bhai","sanju baba","ajay"];
let lollywoodActors = ["hisham arwar","dippo don"];
let actors = lollywoodActors.concat(bollywoodActors); 
console.log(actors);

// unshift() --> add to start
// shift()  --> delete fromm start and return

let Countries = ["thailand","bangkok","phuket"];
Countries.unshift("turkey");
console.log(Countries);
Countries.shift("turkey");
console.log(Countries);

//slice() ---> original arrays remain same -->alo makes copy
// splice() ---> changes original arrays (add,remove,replace) --> start->de->add
console.log(actors.slice(1,3));