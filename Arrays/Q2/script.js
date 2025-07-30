// create an array to store company -> bloomberg,microsoft,uber,google,ibm,netflx
// a : remove first company from the array
// b : remove uber and add ola in its place
// c : add amazon at the end

let company = ["bloomberg","microsoft","uber","google","ibm","netflix"];
console.log(company);
let companyA = company.slice(1,6);
console.log(companyA);
let companyB = companyA.splice(1,1,"ola");
console.log(companyA);
companyA.splice(5,0,"amazon");
console.log(companyA);
