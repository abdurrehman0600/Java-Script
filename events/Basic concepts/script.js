//EVENTS(Listening or Handling) IN JS  
//Inline Event Handling e.g (onClick)
let abc = document.querySelector("#a")
abc.onclick = () => {
    // console.log(e)
    console.log("Button was double clicked");
}
// e.target,e.type,e.clientX,e.clientY
//Event listeners
//addEventListener
 a.addEventListener("click",() => {
   console.log("again");
 })
//removeEventListener
//callback reference should be same (in a variable)