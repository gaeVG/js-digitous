# Les *Arrays*

```js
var myArray =[String, Number, Function];
```
> 💬 C'est une liste de valeurs quelconque.
> 
> 👁‍🗨 Chaque élément à l'intérieur du tableau possède un **index** et chaque tableau possède des méthodes qui lui sont propre
```js
var tab =["Sophie", "Julien", "Paul"]

console.log(`Taille de mon tableau: ${tab.length}`)
console.log(`Mon tableau à l'indice 2: ${tab[2]}`)
```
> **$** `Taille de mon tableau: 3`
>
> **$** `Mon tableau à l'indice 2: Paul`

* ## Les méthodes
    * ### indexOf
        ```js
        Array.indexOf(element)
        ```
        > 💬 Renvoi la position de l'élément renseigné en argument
        ```js
        let recipe =["eggs", "flour"]
        recipe.push("milk")

        console.log(recipe)
        ```
        > **$**` ['eggs','flour','milk']`
    * ### unshift
        ```js
        Array.unshift(element)
        ```
        > 💬 Ajoute un élement au début d'un array       
        ```js
        let recipe =["eggs", "flour"]
        recipe.unshift("butter")

        console.log(recipe)
        ```
        > **$**` ['butter','eggs','flour']`
    * ### push
        ```js
        Array.push(element)
        ```
        > 💬 Ajoute un élément à la fin d'un array
    * ### shift
        ```js
        Array.shift(element)
        ```
        > 💬 Retire la première occurence d'un array
    * ### pop
        ```js
        Array.pop(element)
        ```
        > 💬 Retire le dernier élément d'un array
    * ### sort
        ```js
        Array.sort(element => return);
        ```
        > 💬 La méthode permet de trier les éléments d'un tableau
        ```js
        let numbers     =[54, 13, 36, 64];
        let sorted      =numbers.sort();
        let unsorted    =numbers.sort((a, b) => b -a)
        
        console.log(sorted)
        console.log(unsorted)
    * ### slice
        ```js
        Array.sort(element => function() => return);
        ```
        > 💬 La méthode extrait les éléments d'un tableau
        ```js
        let numbers     =[54, 13, 36, 64];
        let sorted      =numbers.sort();
        let unsorted    =numbers.sort((a, b) => b -a)
        
        console.log(sorted)
        console.log(unsorted)
        ```
        > **$**` [ 13, 36, 54, 64 ]`
        >
        > **$**` [ 64, 54, 36, 13 ]`
    * ### join
        ```js
        Array.sort(element => function() => return);
        ```
        > 💬 Sert à relier les éléments d'un tableau dans une string, en ajoutant ou non quelque chose entre chaque éléments
        ```js
        let tab =["md-3", "d-flex", "col-6"]
        console.log(tab.join(" "))
        ```
        > **$**` md-3 d-flex col-6`
    * ### typeOf
        ```js
       typeOf 
        ```
        > 💬 Sert à relier les éléments d'un tableau dans une string, en ajoutant ou non quelque chose entre chaque éléments
        ```js
        let tab =["md-3", "d-flex", "col-6"]
        console.log(tab.join(" "))
        ```
        > **$**` md-3 d-flex col-6`
# Les boucles
> **💭 Bien penser à mettre en place un moyen de rendre la condition invalide à un certain moment**
```js
while (condition) {
    // Bloc d'instructions

    for (condition) {
        // Bloc d'instructions
    }
}
```
> 💬 Les boucles sont utilisées pour exécuter, arbitrairement ou non, plusieurs fois la même opération sur un ensemble de données
>
> 👁‍🗨 Elles sont déclarées à l'aide de leur mot clé respectif, suivi de la condition, et du bloc d'instruction entre accolades, qui s'exécutera, *tant que* la condition de la boucle résultera à **true**
  * ## While
    ```js
    while (condition) {
        // Bloc d'instructions
    }
    ```
    > 👁‍🗨 La boucle **while** est utilisée lorsqu'*on ne connaît pas* le nombre d'itérations nécessaires
    ```js
    let i =0
    let limit =100

    while (i < limit) {
        console.log(i)
        i++
    }
    ```
    > **$**` 0`
    >
    > **$**` 1`
    >
    > **$**` ...`
    >
    > **$**` 99`
  * ## For
    ```js
    for (start, condition, incrementation) {
        // Bloc d'instructions
    }
    ```
    > 💬 La boucle **for** est utilisée lorsque l'*on connaît* le nombre d'itérations nécessaires
    >
    > 👁‍🗨 Elle se déclare à l'aide du mot clé `for`, suivi d'une *itération*
    ```js
    let i =0
    let limit =100

    for (let i =0; i < 100; i++)
        console.log(i)
    }
    ```
    > **$**` 0`
    >
    > **$**` 1`
    >
    > **$**` ...`
    >
    > **$**` 99`
  * ## forEach
    ```js
    Array.forEach (function() {
        // Bloc d'instructions
    })
    ```
    > 👁‍🗨 La boucle **forEach** est la méthode pour parcourir un **Array**
    ```js
    let i =0
    let limit =100

    while (i < limit) {
        console.log(i)
        i++
    }
    ```
    > **$**` 0`
    >
    > **$**` 1`
    >
    > **$**` ...`
    >
    > **$**` 99`

    * ### Le mot clé **break**
        ```js
        while (true) {
            break
        }
        ```
        > 💬 Ce mot clé, utilisé, entre autre dans une boucle permet de sortir, permet de sortir d'un bloc d'instruction
    * ### Le mot clé **continue**
        ```js
        while (true) {
            continue
        }
        ```
        > 💬 Ce mot clé *stop* l'exécution de la boucle en cours, pour la reprendre à la suite, sans exécuter le reste du bloc actuellement