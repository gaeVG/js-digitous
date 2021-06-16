# Mon premier script
> ***Ne pas oublier le point-virgule à la fin de chaque instruction !***
```js
console.log("Hello World");
```
> `$ Hello World`

> Il est possible d'exécuter son code *Javascript* avec **NodeJS**
# Les variables
```js
var maVariable = value;
```
> 
> On déclare nos variables à l'aide du mot clé **var**, suivi du *nom de notre variable*, d'un symbole **égal**, puis de sa valeur.
> 

```js
var hello ="Hello World";
console.log(hello);
```
> `$ Hello World`


## Les types de variables
* ### Les chaînes de caractères
```js
var monPrenom = "Ma chaîne de caractères";
```
> Ce sont les variables un / plusieurs mots, situés entre guillemets
```js
var nomPrenom = "Andy"
console.log(monPrenom)
```
> `$ Andy`


> Il est également possible d'effectuer des opérations (concaténation) avec tous type de variables
```js
var prenom = "Andy"
var nom = "Bouchet"
var age = 31

console.log("Je m'appelle " + prenom + " " + nom + " et j'ai " + age + " ans")
```
> `$ Je m'appelle Andy Bouchet et j'ai 31 ans`
* ### Les nombres entier
```js
var monAge = 31;
```
> Ce sont tous les nombres, sur lesquels ils est possible d'effectuer toutes les opérations mathématiques connues
* ### Les booléens
```js

```
> Les variables *booléennes* sont les variables les plus simple, qui n'acceptent que les deux valeurs 
* ### Les objets
```js
var users ={
 name: "Andy",
 age : 98,
 isCool =true
};
```
> Les objets sont des variables détaillées

* ### Les tableau (array)
```js
var tab =[]
tab = ["Andy, 31, true", {}]
```
> Un tableau est un objet spécial, qui ne contient aucune propriété

> `console.log(tab[1])`
>
> $ 98
### Les non-définies
```js
var myVarNull = null
var myVarUndefined = undefined;
```
> Une variable `null` ne possède aucune information, à comparer à `undefined` qui ne contient aucune information, mais qui n'a jamais été définie
```js
var onCrouch, onProned
onCrouch =true
console.log(onCrouch, onProned)
onCrouch =null
console.log(onCrouch, onProned)
```
# Les fonctions
```js
function myFunc(argument) {
 // code à exécuter
}
```
> On **déclare** une fonction à l'aide du mot clé `function`, suivi du nom de la fonction, puis de ses arguments entre parathèses, et le bloc d'instruction entre accolade, lequel nous servira à délarer les instructions souhaités

```js
function printMyName(name) {
 console.log(name)
}

printMyName("Andy")
```
## Utilisation des méthodes d'objets
* ### Replace
```js
var isHard = "Coding is hard";
isFun = test.replace("hard, "fun")

console.log(isFun)
```
> `$ Coding is fun`

* ### charAt
```js
var hello = "Bonjour je m'appelle Andy"
console.log(hello.charAt(5)
```
> `$ u`

* ### toUpperCase / toLowercase
```js
var shy ="écoutez moi !"
console.log(shy.toUpperCase())
var spammer ="SALUT JE VEND DES SCRIPTS"
console.log(spammer.toLowerCase())
```
> `$ ÉCOUTEZ MOI !`
>
> `salut je vend des scripts`

* ### split
```js
String.split(arg)
```
> Cette méthode découpe une chaine de caractère en tableau ordonné
```js

```
* ### indexOf
```js
String.indexOf(String)
```
> Voir la liste des [mots réservés](https://www.w3schools.com/js/js_reserved.asp)

* ### subString
```js
String.subString(int, int)
```
> **subString** va séparer la chaine en tableau, en fonction du nombre renseigné en argument
```js
var fakeNew = "J'adore la Bible ! Ça n'a aucun sens, et personne ne s'est posé la question !"
console.log(fakeNew.substring(0, 18))
```

> * ### trim
```js
String.trim()
```
> Le **trim** va retirer les blancs en début et fin de chaine de caractère
```js
var message ="            Je suis quelqu'un qui prends beaucoup de place             "
console.log(message)
console.log(message.trim())
```
> `$ Je suis quelqu'un qui prends beaucoup de place`
