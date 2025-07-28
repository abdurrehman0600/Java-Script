// Promt the user to enter their full name. generate a username for them based on the input. start uername with @,followed by thir full name and ending with the full name length.
// eg:user name = "abdurehman", username shoud be "@abdurehman10"
let input = prompt("Enter your username");
console.log(input);
let lenth = input.length;
console.log(lenth);
let before = "@";
let after = lenth;
let final = before + input + lenth;
console.log(final);

