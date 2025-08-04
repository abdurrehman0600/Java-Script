// Q: createv h2 heading and amend one more.
let a = document.querySelector("h2");
console.dir(a.innerText);
a.innerText = a.innerText + " from apna colllege";  
// Q2: give three div with common clss names. access them and add some unique text to each of them.

let b = document.querySelectorAll(".box")
console.log(b);
//way 1 from video.
c=0;
for(let div of b ){
    div.innerText=`New box number ${c}`;
    c++;
}
//way 2
// b[0].innerText = "Box one";
// b[1].innerText = "box two";
// b[2].innerText = "Box 3"; 