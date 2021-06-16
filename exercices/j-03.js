// 01. Array 
console.log("\nExerice 01: Array\n-----------\n");
let fruits =["mango", "lemon", "blueberry"];
console.log(`Afficher la table : ${fruits}\n`);
console.log("Afficher la table à l'aide de `console.table`:");
console.table(fruits);

// 02. Acces
console.log("\nExercice 02: Accès\n-----------\n");
let ingredients =["egg", "milk", "butter"];
console.log(`Afficher : ${ingredients[ingredients.indexOf("milk")]}`);
console.log(`Index de "butter": ${ingredients.indexOf("butter")}`);

// 03. Add and Remove
console.log("\nExercice 03: Add and Remove\n-----------\n");
let objects =["pen", "book", "lamp"];
console.log("Tableau d'origine:");
console.table(objects);
objects.unshift("chair");
console.log('Tableau après un unshift de "chair":');
console.table(objects);
objects.pop("lamp");
console.log('Tableau après un pop de "lamp":');
console.table(objects);
objects.push("laptop");
console.log('Tableau après un push de "laptop":');
console.table(objects);
objects.shift("chair");
console.log('Tableau après un shift de "chair":');
console.table(objects);

// 04. Order
console.log("\nExercice 04: Order\n-----------\n");
let numbers =[4, 10, 8, 12, 6]
console.log("Tableau d'origine:");
console.table(numbers);
let reverseNumbers =numbers.reverse();
console.log("Tableau après un reverse();:");
console.table(reverseNumbers);

// 05. Boucle
console.log("\nExercice 05: Boucle\n-----------\n");
let total =0
let limit =10

console.log(`Valeur actuelle de total (avant boucle): ${total}`);

for (var index =0; index <= limit; index++); {
    total +=index
}

console.log(`Valeur actuelle de total (après boucle): ${total}`);

// 06. Reverse
console.log("\nExercice 06: Reverse\n-----------\n");
let sentence ="Hello Konexio !";
let reverseSentence ="";

for (var i =sentence.length -1; i >= 0; i--) {
    reverseSentence +=sentence[i];
}
console.log(`Texte d'origine: ${sentence}\nTexte renversé: ${reverseSentence}`);

// * Bonus
console.log("\nExercice Bonus: I\n---------------\n");
for (let nb =0; nb < 101; nb++) {
    let result =null

    console.log(
        `Pour le numéro: ${nb}, on affiche : ${nb % 3 === 0 && nb % 5 === 0 ? "Fizz Buzz" : nb % 3 === 0 ? "Fizz" : nb % 5 === 0 ? "Buzz" : nb % 7 === 0 ? "" : nb}`
    )
}

// ** Bonus
console.log("\nExercice Bonus: II\n---------------\n");
wTotal =0
wLimit =10
wIndex =0

console.log(`Valeur actuelle de wTotal (avant boucle): ${wTotal}`);

while (wIndex <= wLimit) {
    wTotal +=wIndex
    wIndex++
}
console.log(`Valeur actuelle de wTotal (après boucle): ${wTotal}`);

// *** Bonus
console.log("\nExercice Bonus: III\n---------------\n");
let promotion =["Ange", "Anthony Delforge", "Assad Mohamed", "Elodie Sayavong", "Laura Illouz", "Mridha Emran", "Rahmad Abuzar", "Baydir Aboudou", "Kévin Kemayou", "Poulain Eliott", "Julien Vigner", "Barry amadou Djoulde", "Amar Salah Omar", "Artha"]

console.log(`Élève sélectionné aléatoirement: ${promotion[Math.floor(Math.random() * promotion.length +1)]}`)

// **** Bonus
console.log("\nExercice Bonus: IV\n---------------\n");
let tableau =[]
let min =0
let max =100
let biggest

console.log("Tableau avant la boucle:")
console.table(tableau)

for (let i =0; i < 20; i++) {
    let n =Math.floor(Math.random() * (max - min +1)) + min

    if (!biggest) {
        biggest =n
    } else if (n > biggest) {
        biggest =n
    }

    tableau.push(n)
}

console.log(`Tableau après la boucle (le nombre le plus grand étant: ${biggest} ):`)
console.table(tableau)



