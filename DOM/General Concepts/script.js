console.log("DOM")
//window object 
window.console.log("DOM and Dom")
//html->js (object)
//console.dir(window.document)
console.dir(document.body)
// js is used for dynamic changes in website at runtime
document.body.style.background = "pink";
//dom manipulation
//document.getElementsByClassName("class name") --> empty if not present
//document.getElementById("id name") --> null if not present
let a = document.getElementById("welcome")
console.dir(a)
//document.getElementsByTagName("p")
let b = document.getElementsByTagName("h1")
document.b.style.font = "bold";
//query selector = document.querySelector --> nodelist  
//query selector = document.querySelectorALL

//properties(get&set)
//tagnames:returns tag for elements nodes
//innertext:returns the text content of the element and its children(parent,child,sibling)
//innerhtml: returns the plan text or html contents in the elements
//textcontent: returns textual content even for hidden elements
//learn -->firstchild/lastchild --> comment/text and element nodes
let div = document.querySelector("div");
console.dir(div);
//output:fruits/apple etc