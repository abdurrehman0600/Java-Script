const btn = document.getElementById("button")
btn.addEventListener("click",function abc(){
    const inputtag = document.getElementById("input")
    const value = inputtag.value;
    const count = newFunc(value);
    const j = document.getElementById("answer");
    j.innerText = count;
})

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

