# Les Nombres
* ## Les types
> On a deux types de nombres en Javascript: les **Int**(egers) et les **Floats**
```js
let integer = 100
let float = 8.124
```
> * Un *Int* représente tous les entiers relatifs
> * Un *Float* représente tous les nombres décimaux

* ## Les opérations
> Tous les opérateurs mathématiques sont disponibles pour effectuer tout types d'opération
```js
let addition        =1  +9
let soustraction    =10 -5
let multiplication  =2  *5
let division        =20 /2
let modulo          =20 %3

console.log(addition, soustraction, multiplication, divison, modulo)
```
> `$ 10, 10, 10, 10, 2`

* ## Méthodes
  * ### Random
    ```js
    Math.Random(number)
    ```
    Génène un nombre aléatoire
    ```js
    const students =["Laura", "Amadou", "Victor"]
    let min =0
    let max =students.length
    let myNumber =Math.floor(Math.random() * (max -min +1) +min;

    console.log(students[myNumber])
    ```
  * ### Floor
    ```js
    Math.Random(number)
    ```
    Génène un nombre aléatoire
    ```js
    const students =["Laura", "Amadou", "Victor"]
    let min =0
    let max =students.length
    let myNumber =Math.floor(Math.random() * (max -min +1) +min;

    console.log(students[myNumber])
    ```
  * ### Ceil
    ```js
    Math.Random(number)
    ```
    Génène un nombre aléatoire
    ```js
    const students =["Laura", "Amadou", "Victor"]
    let min =0
    let max =students.length
    let myNumber =Math.floor(Math.random() * (max -min +1) +min;

    console.log(students[myNumber])
    ```
# Les conditions
* ## if — elseif —  else
```js
if (condition) {
  // Bloc d'instruction
} else if (condition) {
  // Bloc d'instruction
} else {
  // Bloc d'instruction
}
```
> Un bloc conditionnel se déclare avec les mots `if`, `elseif`, et `else`
> 
> Le résultat des conditions à l'intérieur des deux premiers blocs doit forcément être égal à `true` pour exécuter le code situé à l'intérieur
```js
let monAge =14

if (myNumber < 13) {
  console.log("Tu n'as pas l'âge d'être ici !");
} else if (myNumber >= 13 && myNumber < 18) {
  console.log("Bienvenue à toi !");
} else {
  console.log("
}
```
* ## switch
```js
switch (condition) {
 case myCase:
 // Bloc d'instruction
 break;
default:
 // Bloc d'instruction par défault
}
```
> Les blocs `switch` servent à exécuter du code en fonction de la valeur de quelque chose
```js
let season ="Summer";

switch (season.toLowerCase()) {
 case "winter":
 console.log("C'est l'hiver..")
 break;
 case "summer":
 console.log("C'est l'été !")
 break;
 default:
 console.log("Cette saison n'existe pas...")
}
```
## Les opérateurs
### Comparaisons
---
```js
== // Compare la deux valeurs entre elles, sans typage
=== // Compare deux valeurs strictement identiques
> // Compare deux valeurs, la première strictement supérieure à l'autre
< // Compare deux valeurs, la première strictement inférieure à l'autre
=> // Compare deux valeur, la première supérieure ou égal à l'autre
=< // Compare deux valeur, la première inférieure ou égal à l'autre
!= // Compare deux valeurs différentes l'une de l'autre
!== // Compare deux valeurs strictement différentes l'une de l'autre
```
## Les opérateurs ternaires
```js
let var === true ? return true : return false
```
