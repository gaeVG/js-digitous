// 01. Sum
console.log("Exercice 1: Sum\n-----------");

let numbersSum =[];
let sum =0;

for (let i =0; i < 50; i++) {
    numbersSum.push(Math.floor(Math.random() * (100 - 0 +1)) + 0);
}

for (let i in numbersSum) {
    sum += numbersSum[i];
}

console.log(`La somme du tableau "numbersSum" est de ${sum}`);
console.table(numbersSum);

// 02. Max
console.log("Exercice 2: Max\n-----------");
let numbersMax =[];
let max = 0;

for (let i =0; i < 50; i++) {
    numbersMax.push(Math.floor(Math.random() * (200 - 50 +1)) + 50);
}

for (let i in numbersMax) {
    if (numbersMax[i] > max) {
        max =numbersMax[i];
    }
}

console.log(`${max} est le nombre le plus grand parmis tous ceux du tableau "numbersMax"`);
console.table(numbersMax);

// 03. Unique
console.log("Exercice 3: Unique\n-----------");

let numbersUnique =[];
let unique = null;

for (let i =0; i < 50; i++) {
    numbersUnique.push(Math.floor(Math.random() * (200 - 50 +1)) + 50);
}

let i =0;
while (i < numbersUnique.length) {
    if (numbersUnique[i] >= 75) {
        console.log(`${i +1}) ${numbersUnique[i]} est plus grand ou égal à 75`);
        break;
    } else {
        console.log(`${i +1}) ${numbersUnique[i]} n'est pas plus grand ou égal à 75`)
    }

    i++;
}

// 04. Nested Loop
console.log("\nExercice 4: Nested Loop\n-----------");

let words =["hello", "goodbye", "yes", "no", "stop", "go go go"];
let letters =[];
let totalO = 0

for (let i in words) {
    letters.push(words[i].split(""))
}

for (let i in letters) {
    letters[i].forEach(j => (j === "o" ? totalO++ : false))
}

console.log(`Dans le tableau ci-dessous, il y a ${totalO} fois la lettre "o"`)
console.table(words)



