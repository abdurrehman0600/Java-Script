// Q: create a toggle button that changes the screen to dark mode whn clicked and light mode when clicked again.
let a = document.querySelector("#mode")
let currentMode = "you are in light mode";
a.addEventListener("click",()=>{
   if(currentMode === "you are in light mode")
   {
    currentMode = "you are in dark mode"
    document.querySelector("body").style.backgroundColor = "black"// from video
   }
   else{
    currentMode = "you are in light mode"
   document.querySelector("body").style.backgroundColor = "white"
   }
})