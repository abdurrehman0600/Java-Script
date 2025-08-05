let div = document.querySelector("div");
console.dir(div);
//stylenodes
div.style.backgroundColor = "skyBlue";
//insert elements
//new element -> let el=document.createElement("div")
//-->node.append(el) -> add at end of the node (inside)
//-->node.prepend(el) -> add at the start of the node (inside)
//-->node.before(el) -> adds before the node(outside)
//-->node.after(el) -> adds after the node(outside)
//delete element
//-->node.remove() -> removes the node 
let btn = document.createElement("button")
btn.innerText = "Open";
console.dir(btn)
let a = document.querySelector("div")
a.append(btn);
a.prepend(btn)
a.before(btn);
a.after(btn);
