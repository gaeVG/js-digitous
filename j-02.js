// 01. Number
/*
let integer =102
let float =13.9
*/

// 02. Convert
/*
let basic =34
let stringfield =basic.toString()

console.log(stringfield)
*/
// 03. Round
/*
let num =1.5
let rounded =Math.round(num)

console.log(rounded)
*/
// 04. Arithmétique
/*
let test =12
let bis =5

console.log(`test + bis = ${test +bis}`);
console.log(`test - bis = ${test -bis}`);
console.log(`text x bis = ${test *bis}`);
console.log(`text / bis = ${test /bis}`);
console.log(`text % bis = ${test %bis}`);
console.log(`text ^ bis = ${test **bis}`);
*/
// 05. Comparaison
/*
let test = 143;
let bis = 219;

console.log(test > bis);
console.log(test < bis);
console.log(test == bis);
console.log(test === bis);
console.log(test != bis);
*/

// 06. Condition
/*
let limit = 50
let score = 64

function showResult(result) {

    if (result >= limit)  {
        console.log("Ok good !");
    } else {
        console.log("Oh nooo...");
    }
}

showResult(score)
showResult(score /2)
*/
// 07. Condition II
/*
let password ="azerty"

console.log(`The password is ${password.length >= 5 ? "long enough" : "not long enough"}`);
*/
// 08. Condition III
let limit =50
let score =64
let password ="azerty"

console.log(`${ function() {

    if (score >= limit && password.length > 5) {
        return "Everything"
    } else if (score >= limit || password.length > 5) {
        return "Something"
    } else {
        console.log("Nothing")
    }
}} is good`);
