// 01. Hello World
/*
console.log("Hello World !");
*/

// 02. String
/*
var test ="My name is Andy";
console.log(test)
*/

// 03. Concatenation
/*
var myName = "Andy Bouchet"
console.log("Nice to meet you " + myName)
*/

// 04. String Length
/*
var testLength ="I'm very long"
console.log('La longueur de la variable "testLength" est de ' + testLength.length)
*/

// 05. Replace
/*
var food ="croissant is meh"
testify = food.replace("meh", "good")
console.log("In Paul's bakeries, the " + testify)
*/

// 06. Up and Down
/*
function format(fmt, ...args) {
    if (!fmt.match(/^(?:(?:(?:[^{}]|(?:\{\{)|(?:\}\}))+)|(?:\{[0-9]+\}))+$/)) {
        throw new Error('invalid format string.');
    }
    return fmt.replace(/((?:[^{}]|(?:\{\{)|(?:\}\}))+)|(?:\{([0-9]+)\})/g, (m, str, index) => {
        if (str) {
            return str.replace(/(?:{{)|(?:}})/g, m => m[0]);
        } else {
            if (index >= args.length) {
                throw new Error('argument index is out of range in format');
            }
            return args[index];
        }
    });
}
function print(fmt, ...args) {
    console.log(format(fmt, ...args));
}

var basic ="This is Cool"
var basicUp =basic.toUpperCase(basic)
var basicDown =basic.toLowerCase(basic)

print(
    "Valeur de la variable \"basic\": {0}\n" +
    "Valeur de la variable \"basicUp\": {1}\n" +
    "Valeur de la variable \"basicDown\": {2}\n"
, basic, basicUp, basicDown)
*/

// 07. Split
/*
var word ="banana"
var letters =word.split('')
console.log(letters)
*/

// 08. Template
var age =31
var template =`I'm ${age} years old`
console.log(template)