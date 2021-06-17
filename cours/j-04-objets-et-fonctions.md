# Les Objects
```js
var myObject ={
    key1 =String,
    key2 =String,

}
```
> 💬 Un `objet` est une variable dans laquelle on peut stocker plusieurs valeurs, associés à des clés
> 
> 👁‍🗨 On préfèrera utiliser un objet quand les valeurs stockées à l'intérieur sont de catégories différents, décrites par des clés.

```js
var user ={
    name : "Andy",
    age : 31,
    isStudent : true
    favorites : {
        breakfast : ["cereals"],
        dinner : ["pizza"]
    }
}

console.log(user)
console.table(user.favorites)
```
> ```
> $ {
>      name: 'Andy',
>      age: 31
>      isStudent: true,
> 
>      favorites: [ 'cereals', 'yahourts' ]
> }
>
>
> ┌─────────┬────────────┐
> │ (index) │   Values   │
> ├─────────┼────────────┤
> │    0    │ 'cereals'  │
> │    1    │ 'yahourts' │
> └─────────┴────────────┘
> ```
## Accès
```js
Object.key
Object["key"]
```
> 💬 On accède à une clé spécifique soit en renseignant son nom 
## Méthodes
* ### Assign
    ```js
    Object.asign(object1, object2)
    ```
    > 💬 Ajoute le contenue d'un objet b dans un objet a
    ```js
    var admin ={
        age: 30,
        role: "Admin"
    }

    var user ={
        name : "Andy",
        age : 31,
        isStudent : true
        favorites : {
            breakfast : ["cereals"],
            dinner : ["pizza"]
        }
    }

    console.asign(user, admin)
    console.table(admin)
    ```

* ### hasOwnProperty
    ```js
    Object.hasOwnProperty(key)
    ```

    > 💬 La méthode `hasOwnProperty` vérifie si un object possède la clé renseigné en argument
    ```js
    var admin ={
        age: 30,
        role: "Admin"
    }

    Object.asign(user, admin)
    console.table(admin)
    ```
* ### Keys
    ```js
    Object.keys(object)
    ```
    > 💬 `keys()` renvoie un tableau contenant toutes les clés d'un `object`
    ```js
    var user ={
        name: "Andy",
        age: 3&,
        isStudent: true,
        favoriteFood: {
            breakfast: ["cereals", "milk"],
            dinner: ["pizza"]
        }
    }

    Object.keys(user)
    ```
* ### Values
    ```js
    Object.values(object)
    ```
    > 💬 `values()`, un peu comme `keys()`, renvoi les 

* ### Entries
    ```js
    Object.entries(object)
    ```
    > 💬 Cette dernière méthode renvoi sous forme de tableau toute les valeurs contenues dans l'objet
# Les fonctions
```js
function myFunction(arg1, arg2) {
    // Bloc d'instructions
}
```
> 💬Les fonctions servent à effectuer des actions ; regrouper du code à l'intérieur pour découper la logique en morceaux
>
> 👁‍🗨 On déclare une fonction en utilisant le mot clé `function`, suivi de son nom, de ses paramètres entre parathèses, puis du bloc d'instruction entre accolades
```js
function multiply(product, factor) {
    return product *factor
}

console.log(multiply(2, 4))
```
> ```
> $ 8
> ```
# Le scope
> 💬 Lorsqu'une variable est déclarée à l'intérieur d'une fonction, celle-ci n'est accessible qu'à l'intérieur du bloc ; ***la fonction a son propre scope***
>
> 👁‍🗨 Une variable déclarée en dehors d'une fonction, d'une boucle, ou tout autre bloc d'instruction
