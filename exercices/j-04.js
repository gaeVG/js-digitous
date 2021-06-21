// Exercice 01. Object
console.log("\nExerice 01: Object\n-----------\n");
let cat ={
    name :"Garfield",
    age :3,
    isCute :true
}

console.table(cat)
// Exercice 02. Combine
console.log("\nExerice 02: Combine\n-----------\n");
let cat2 =new Object()
Object.assign(cat2, cat);
cat2.name ="Kira"
cat2.age =1
cat2.isCute =false
console.table(cat2)
let cats ={
    cat,
    cat2
}

console.log(cats.cat.age)
console.log(cats["cat2"]["isCute"])

console.log("\nExerice 03: Even\n-----------\n");

function checkIfEven(num) {

    if (num % 2 == 0) {
        console.log(`${num}: Even`)
    } else {
        console.log(`${num}: Odd`)
    }
}

for (let i =0; i <= 20; i++) {
    checkIfEven(i)
}
// Exercice 04. Compare
console.log("\nExerice 04: Compare\n-----------\n");

function compare(num1, num2) {
    process.stdout.write(`For the following numbers: ${num1} and ${num2}, then `)

    if (num1 === num2) {
        console.log("Both are the same")
    } else {
        if (num1 > num2) {
            process.stdout.write(`num1 (${num1})`)
        } else if (num2 > num1) {
            process.stdout.write(`num2 (${num2})`)
        }
        
        console.log(" is Bigger")
    }
}
function rand () {
    return Math.floor(Math.random() * (42 - 1 +1)) + 1
}

for (let i =0; i < 10; i++) {  
    let r =rand()
    compare(Math.floor(r ** i), Math.floor(r ** (r %2 == 0 ? i +r : i -Math.abs(r))));
}

// Exercice 05. Add up
console.log("\nExerice 05: Add Up\n-----------\n");

function addUp(num =42) {
    let total =0

    for (let i =1; i <= num; i++) {
        total += i
    }

    return total
}

console.log(addUp(12))
console.log(addUp())

// Exercice 06. Time
console.log("\nExerice 06: Time\n-----------\n");

function format(num) {
    return `${Math.floor(num /60 /60)} heures ${Math.floor((num /60) %60)} minutes et ${Math.floor(num %60)} ${(num %60 > 1 ? "secondes" : "seconde")}`
}

let seconds =7000
console.log(`${seconds} secondes est égal à ${format(seconds)}`)
console.log(`Il s'est écoulé ${format(Date.now()/1000)} depuis le 1er Janvier 1970`)

// * Bonus
console.log("\nExerice Bonus 1:\n-----------\n");
function generatePasswword(num, method) {
    
    if (num < 6 || num > 15) {
        return "error";
    }

    let lettres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let password = "";
    
    for (let i =1; i <= num; i++) {
        let index = Math.floor(Math.random() * lettres.length);
        password += lettres[index];
    }

    return password;
}

console.log(generatePasswword(8))
console.log(generatePasswword(17))

console.log("\nExerice Bonus 2:\n-----------\n");
