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
/*
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
*/
// * Bonus

let nombre =Math.floor(Math.random() * (6 -1 +1)) +1

if (nombre === 6) {
    console.log("Critical strike!");
} else {
    console.log(nombre)
    console.log("So closed...")
}

// ** Bonus II
/*
let currentMonth ="March"
let months =["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

switch(months.indexOf(currentMonth)) {
    case 0:
    case 1:
    case 11:
        console.log("Winter");
        break;
    case 2:
    case 3:
    case 4:
        console.log("Spring");
        break;
    case 5:
    case 6:
    case 7:
        console.log("Summer");
        break;
    case 8:
    case 9:
    case 10:
        console.log("Fall");
        break;
    default:
        console.log("Une erreur est survenue");
}
*/
// *** Bonus III
/*
function mathRound(n, roundUp =false) {
    nSplited =n.toString().split(".")

    if (nSplited.length < 2) {
        return n
    } else {
        if (roundUp) {

        } else {
            for (let i =nSplited.length; i > )
        }
    }
}

let roundedNumber = 3.6
console.log(mathRound(roundedNumber))
*/
