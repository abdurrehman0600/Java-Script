let marks = [24,34,214,45,234,324];  
//console.log(marks);  
for (let i=0;i<marks.length;i++)
{
    console.log(marks[i]);
}
let cities=["lahore","karachi","islamabad","hyderabad","swat"];
for(city of cities)
{
    console.log(city.toUpperCase());
}


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
// it add deletes replace
console.log(actors.slice(1,3));
let address = [3,5,1,3,4,4,3]; 
console.log(address.splice(4,2,7));
//show new arrray?
