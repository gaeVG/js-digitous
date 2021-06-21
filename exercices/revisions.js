// 01. Alphabet
console.log("Exercice 1: Alphabet\n-----------");

function sortLetters(str ="") {
    
    if (str.length === 0) {
        return undefined
    }

    return str.split("").sort((a, b) => a.charCodeAt(0) -b.charCodeAt(0)).join("")
}

console.log(sortLetters("konexio"));

// 02. XOXO
console.log("\nExercice 2: XOXO\n-----------");

function countEach(str ="") {

    if (str.length === 0 || str.length % 2 != 0) {
        return false
    }

    let xCount =0;
    let oCount =0;

    for (let i =0; i <= str.length; i++) {
        if (str[i] === "x") {
            xCount++;
        } else if (str[i] === "o") {
            oCount++;
        }
    }

    return (xCount === oCount) ? true : false
}

console.log(`Résultat pour "xxxoooox": ${countEach("xxxoooox")}`)
console.log(`Résultat pour "xox": ${countEach("xox")}`)

// 03. Palindrome
console.log("\nExercice 3: Palindrome\n-----------");

function checkPal(str ="") {

    if (str.length === 0) {
        return false
    }

    let strReverse =""

    for (let i =str.length -1; i >= 0; i--) {
        strReverse +=str[i]
    }

    return (str === strReverse) ? true : false
}

console.log(`Le mot "kayak" est-il un palindrome ? Réponse : ${checkPal("kayak")}`)
console.log(`Le mot "laptop" est-il un palindrome ? Réponse : ${checkPal("laptop")}`)
console.log(`Le mot "racecar" est-il un palindrome ? Réponse : ${checkPal("racecar")}`)

// 04. Swap
console.log("\nExercice 4: Swap\n-----------");

function swap(str) {

    if (str.length === 0) {
        return false
    }

    let strSwap =""

    for (let i =0; i < str.length; i++) {

        strSwap += ( str[i].match(/[a-z]/) ) ? str[i].toUpperCase() : ( str[i].match(/[A-Z]/) ) ? str[i].toLowerCase() : str[i]
    }

    return strSwap
}

console.log(swap("Hello World"))