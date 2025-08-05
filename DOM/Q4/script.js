//Q: Create a new btn element.give it a text "click me", background color of red and text of white. insert the button as the  first element inside the body tag.
let a = document.querySelector("body")
let el = document.createElement("button")
el.innerText = "click me";  
el.style.backgroundColor = "red"
el.style.color = "white";
a.before(el);

//Q2: create a <p> tag in html, give it a cleass and some styling.now ceate a new class in css and try to append this class to the <p> element.
let para= document.querySelector("p");
// para.getAttribute("class");
// para.setAttribute("class","newAbc")
para.classList.add("newAbc"); // from Ai

//Did you notice,how you override the classname when you add a new one? solve this problem using class list.
