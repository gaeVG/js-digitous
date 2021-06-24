# Mon premier script
> 💥 ***Ne pas oublier le point-virgule à la fin de chaque instruction !***

> 👁‍🗨 Il est possible d'exécuter son code *Javascript* avec **NodeJS**
```js
console.log("Hello World");
```
> **$** `Hello World`


# Les variables
```js
var maVariable = value;
```
> 💬 On déclare nos variables à l'aide du mot clé `var`, suivi du *nom de notre variable*, d'un symbole **égal**, puis de sa valeur.
>
> 👁‍🗨 Voir la liste des [mots réservés](https://www.w3schools.com/js/js_reserved.asp)


```js
var hello ="Hello World";
console.log(hello);
```
> **$** `Hello World`

## Les types de variables
* ### Les *chaînes de caractères* (**string**)
```js
var string = "Ma chaîne de caractères";
```
> 💬 Ce sont des variables — un / plusieurs mots — situés entre guillemets
>
> 👁‍🗨 Il est également possible d'effectuer des opérations (concaténation) avec tous type de variables
```js
var prenom = "Andy"
var nom = "Bouchet"

console.log("Je m'appelle " + prenom + " " + nom)
```
> ```
> $ "Je m'appelle Andy Bouchet"
> ```
* ### **Les nombres entier**
```js
var monAge = 31;
```
> 💬 Ce sont tous les nombres, sur lesquels ils est possible d'effectuer toutes les opérations mathématiques connues
> 
> 👁‍🗨 La valeur de ces variables ne doit être comprise entre **-2 147 483 648** et **2 147 483 647**
* ### Les **booléens**
```js
var isTrue =true
var isFalse =false
```

> 💬 Les variables *booléennes* sont les variables les plus simple, qui n'acceptent que deux valeurs, **true** et **false**
* ### Les **objets**
> 💬 Les objets sont des variables détaillées
```js
var users ={
 name: "Andy",
 age : 98,
 isCool =true
};
```
* ### Les *tableaux* (**array**)
> 💬 Un tableau est un objet spécial, qui ne contient aucune propriété
```js
var tab =[]
tab = ["Andy, 31, true", {}]
console.log(tab[1])
```
> **$** `31`
### Les **non-définies**
```js
var myVarNull = null
var myVarUndefined = undefined;
```
> 💬 Une variable `null` ne possède aucune information, à comparer à `undefined` qui ne contient aucune information, mais qui n'a jamais été définie
```js
var onCrouch, onProned
console.log(onCrouch, onProned)
onCrouch =true
console.log(onCrouch, onProned)
onCrouch =null
console.log(onCrouch, onProned)
```
> ```js
> $ "undefined, undefined"
> "true, undefined"
> "null, undefined"
> ```
# Les fonctions
```js
function myFunc(argument) {
 // Bloc d'instruction
}
```
> 💬 On **déclare** une fonction à l'aide du mot clé `function`, suivi du nom de la fonction, puis de ses arguments entre parathèses, et du son bloc d'instruction entre accolade, lequel nous servira à déclarer les instructions souhaités
```js
function printMyName(name) {
 console.log(name)
}

printMyName("Andy")
```
> ```js
> $ "Andy"
> ```
## Utilisation des méthodes d'objets
* ### `replace()`
```js
var isHard = "Coding is hard";
isFun = test.replace("hard", "fun")

console.log(isFun)
```
> ```js
> $ "Coding is fun"
> ```
* ### `charAt()`
```js
var hello = "Bonjour je m'appelle Andy"
console.log(hello.charAt(5)
```
> ```js
> $ "u"
> ```
* ### `toUpperCase()`, `toLowercase()`
```js
String.toUpperCase()
```
> 💬 **toUpperCase** transformera tous les caractères de la chaine en majuscule, tandis que **toLowerCase** les tranformera en minuscule
```js
var shy ="écoutez moi !"
console.log(shy.toUpperCase())
var spammer ="SALUT JE VEND DES SCRIPTS"
console.log(spammer.toLowerCase())
```
> ```js
> $ "ÉCOUTEZ MOI !"
> "salut je vend des scripts !"
> ```
* ### `split()`
```js
String.split(arg)
```
> 💬 Cette méthode découpe une chaine de caractère en tableau ordonné
```js

```
* ### `indexOf()`
```js
String.indexOf(String)
```
* ### `subString()`
```js
String.subString(int, int)
```
> 💬 `subString()` va séparer la chaine en tableau, en fonction du nombre renseigné en argument
```js
var fakeNew = "J'adore la Bible ! Ça n'a aucun sens, et personne ne s'est posé la question !"
console.log(fakeNew.substring(0, 18))
```
> * ### `trim()`
```js
String.trim()
```
> 💬 Le `trim()` va retirer les blancs en début et fin de chaine de caractère
```js
var message ="            Je suis quelqu'un qui prends beaucoup de place             "
console.log(message)
console.log(message.trim())
```
> `$ Je suis quelqu'un qui prends beaucoup de place`
