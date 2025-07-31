//create a function using "function" keyword that takes a string as an argument and returns the number of vowels in string
function vowels(line){
     sum=0;
     const vowels = "aeiou"
   for (let i=0; i<line.length;i++)
   {
   
    if(
        vowels.includes(line[i].toLowerCase()) //includes func from AI
    )
    sum++;
    console.log(sum);
   }
    return sum;
  
}
vowels("sadiwfhqerfhw");

//with arrow function

const newFunc = (line)=>{
     sum=0;
     const vowels = "aeiou"
   for (let i=0; i<line.length;i++)
   {
   
    if(
        vowels.includes(line[i].toLowerCase()) //includes func from AI
    )
    sum++;
    console.log(sum);
   }
    return sum;
  
}
newFunc("hello");

