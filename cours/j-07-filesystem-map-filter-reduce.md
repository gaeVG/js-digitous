# File system

```js
let fs = require("fs")
```

> 💬 Node implémente l'`I/O` (**Input** / **Ouput**) à travers le module `fs`

## Récupérer les information d'un fichier
```js
let path 
fs.stat(path, cb)
```

> 💬 `stats` est un objet de type `fs.Stats` qui est imprimé dans l'exemple:
> * `stats.isFile()` retourne `true` si le fichier est un fichier simple
> * `stats.isDirectory()` retourne `true` si le fichier est un dossier

```js
let fs  = require("fs");

fs.stat("./hello.txt", function(err, stats) {
    if (err) {
        return console.error(err);
    }

    if (stats.isFile()) {
        console.log("C'est un fichier");
    } else {
        console.log("C'est un dossier");
    }
});

```
> ```js
> $ "C'est un fichier"
> ```

## Lecture de fichier
```js
fs.readFile(String path, function(err, data))
```

> 💬 La méthode sert à lire le contenu d'un fichier
>
> 👁‍🗨 Paramètres :
> * path : le chemin du fichier
> * callback : fonction qui récupère les deux arguments `err` et `stats`
```js
fs.readFile("./hello.txt", function(err, data) {
    if (err) return console.error(err)

    console.log(data.toString());
})
```

## Écriture de fichier
```js
fs.writeFile(String path, String data, function)
```

> 💬 La méthode réécrit sur le fichier si celui-ci existe
>
> 👁‍🗨 Paramètres :
> * path : le chemin du fichier
> * data : ce qui va être écrit dans le fichier
> * options : paramètre optionnel contenant les options (*encoding*, *mode*, *flag*)
> * callback : fonction qui ne récupère que le paramètre `error` dans le cas d'une erreur

```js
fs.writeFile("./hello.txt", "Bonjour à tous", function(err) {

    if (err) return console.error(err);

    console.log("Fichier écrit !")

    fs.readFile("./hello.txt", function(err, data) {
        if (err) {
            return console.error(err)
        }

        console.log(data.toString());
    });
});
```

# Map, Filter, Reduce

> 💬 La programmation fonctionnelle est un style de programmation où l'on évitera de faire des opération de modification sur les variables.
> 
> 👁‍🗨 Les méthodes `push()`, `pop()` ou `sort()` ne sont pas fonctionnelles, puisqu'elle modifient directement le contenu d'un array, ce qui peut causer des conflits si un morceau de code dépendait d'une version précédente de cet array

## Map
```js
Array.map(function(element) {
    return element;
})
```
> 💬 La méthode créé un nouvel array en appelant une fonction pour chaque élément.
> 
> 👁‍🗨 La fonction aura pour paramètre l'élément traversé
```js
let users =[
    {
        name :"Julie",
        age : 28
    },
    {
        name :"Patrick",
        age : 31
    }
];

let res = users.map(function(user) {
    return user.name;
})
```

> ```js
> $ Julie
> Patrick
> ```

## Filter
```js
Array.filter(function(element) {
    return condition;
})
```
> 💬 La méthode créé un nouvel `array` avec tous ses éléments qui passeront la fonction de vérification

```js
let users =[
    { name :"Claire", age : 45 },
    { name :"Kira", age : 2 },
    { name :"Joachim", age : 24 },
    { age : 19 }    
];

let adults = users.filter(function(user) {
    return (user.name && user.age >= 18)
})

console.table(users)
console.table(adults)
```
> ```js
> $
> ┌─────────┬───────────┬─────┐
> │ (index) │   name    │ age │
> ├─────────┼───────────┼─────┤
> │    0    │ 'Joachim' │ 24  │
> │    1    │           │ 19  │
> │    2    │ 'Claire'  │ 45  │
> │    3    │  'Kira'   │  2  │
> └─────────┴───────────┴─────┘
> ┌─────────┬───────────┬─────┐
> │ (index) │   name    │ age │
> ├─────────┼───────────┼─────┤
> │    0    │ 'Joachim' │ 24  │
> │    1    │ 'Claire'  │ 45  │
> └─────────┴───────────┴─────┘
> ```

## Reduce
```js
var myVar =Array.reduce((acc, cur, index, array) => return);
```
> 💬La méthode applique une fontion accumulatrice qui traite chaque valeur d'une liste afin de la réduire à une seule valeur
> 
> 👁‍🗨 Cette fonction peut recevoir jusqu'à quatre paramètres :
> * `acc` : l'accumulateur
> * `cur` : la valeur courante
> * `index` : l'index de la valeur courante
> * `array` : l'array sur lequel on effectue l'opération

```js
let total =[1, 3, 5, 7, 9].reduce(function(acc, cur, index) {
    console.log(index);
    acc + cur;
});

console.log(`Total : ${total})
```
> ```js
> $ 0
> 1
> 2
> 3
> 4
> "Total : 25"
