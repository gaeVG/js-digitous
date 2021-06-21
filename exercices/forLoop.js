// 01. Somme des carrés

console.log("\nExerice 1: Somme des carrés\n-----------");

let total =0

for (let i =5; i <= 10; i++) {
    total += i * i   
}

console.log(`La somme des carrés de 5 à 10 est égal à ${total}`);

// 02. Comptons
console.log("\nExerice 2: Comptons\n-----------");

let totalMultiple =0

for (let i =100; i <= 1000; i++) {
    if (i % 7 === 0) {
        totalMultiple++;
    }
}

console.log(`Nombre total de multiples entre 100 et 1000 : ${totalMultiple}`)

// 03. Chanceux
console.log("\nExerice 3: Chanceux\n-----------");

function lancerDe () {
    return Math.floor(Math.random() * (6 - 1 +1)) + 1
}

let noFail =0

for (let i =0; i < 20; i++) {
    let roll =lancerDe()
    console.log(roll)
    if (roll >= 5) {
        noFail++
    }
}

console.log(`Vous faites ${noFail} réussites critiques sur 20`)

// 04. Des boites
/*
    box1 = 5
    Affiche : 10
    box2 = 17 ( ? 18)
    box1 = 17
    Affiche : 34
    box2 = 30
    Affiche : 17 ( ? 5)
    Affiche : 30 
    Affiche : 14
*/

