# Les *Arrays*

```js
var myArray =[String, Number, Function];
```
> 💬 C'est une liste de valeurs quelconque.
> 
> 👁‍🗨 Chaque élément à l'intérieur du tableau possède un **index** et chaque tableau possède des méthodes qui lui sont propre. À comparé aux [Objects](), on préfèrera stocker des valeurs de la même catégorie à l'intérieur d'un *Array*.
```js
var tab =["Sophie", "Julien", "Paul"]

console.log(`Taille de mon tableau: ${tab.length}`)
console.log(`Mon tableau à l'indice 2: ${tab[2]}`)
```
> ```
> $ Taille de mon tableau: 3
> Mon tableau à l'indice 2: Paul
> ```
* ## Les méthodes
    * ### `indexOf()`
        ```js
        Array.indexOf(element)
        ```
        > 💬 Renvoi la position de l'élément renseigné en argument
        ```js
        let recipe =["eggs", "flour"]
        recipe.push("milk")

        console.log(recipe)
        ```
        > ```
        > $ ['eggs','flour','milk']
        > ```
    * ### `reverse()`
        ```js
        Array.reverse()
        ```
        > 💬 Retourne un tableau envoyé dans l'ordre inverse
        ```js
        let list =["one", "two", "three"]
        console.log(list.reverse())
        ```
        > ```
        > $ ['three','two','one']
        > ```
    * ### `unshift()`
        ```js
        Array.unshift(element)
        ```
        > 💬 Ajoute un élement au début d'un array       
        ```js
        let recipe =["eggs", "flour"]
        recipe.unshift("butter")

        console.log(recipe)
        ```
        > ```
        > $ ['butter','eggs','flour']
        > ```
    * ### `push()`
        ```js
        Array.push(element)
        ```
        > 💬 Ajoute un élément à la fin d'un array
         ```js
        let recipe =["eggs", "flour"]
        recipe.push("butter")

        console.log(recipe)
        ```
        > ```
        > $ ['eggs','flour','butter']
        > ```
   * ### `shift()`
        ```js
        Array.shift(element)
        ```
        > 💬 Retire la première occurence d'un array

        ```js
        let recipe =["eggs", "flour", "butter"]
        recipe.shift()

        console.log(recipe)
        ```
        
        > ```
        > $ ['flour','butter']
        > ```
   * ### `pop()`
        ```js
        Array.pop(element)
        ```
        > 💬 Retire le dernier élément d'un array

        ```js
        let recipe =["eggs", "flour", "butter"]
        recipe.pop()

        console.log(recipe)
        ```
        > ```
        > $ ['eggs','flour']
        > ```
    * ### `sort()`
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
        ```
        > ```
        > $ 
        > ``` 
    * ### `slice()`
        ```js
        Array.sort(element => (function() => return true));
        ```
        > 💬 La méthode extrait les éléments d'un tableau
        ```js
        let numbers     =[54, 13, 36, 64];
        let sorted      =numbers.sort();
        let unsorted    =numbers.sort((a, b) => b -a)
        
        console.log(sorted)
        console.log(unsorted)
        ```
        > ```
        > $ [ 13, 36, 54, 64 ]
        > [ 64, 54, 36, 13 ]
        > ```
    * ### `join()`
        ```js
        Array.sort(element => function() => return);
        ```
        > 💬 Sert à relier les éléments d'un tableau dans une string, en ajoutant ou non quelque chose entre chaque éléments
        ```js
        let tab =["md-3", "d-flex", "col-6"]
        console.log(tab.join(" "))
        ```
        > ```
        > $ md-3 d-flex col-6
        > ```
    * ### `typeOf()`
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
    > **↪** `1`
    >
    > **↪** ` ...`
    >
    > **↪** ` 99`
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
    > 🔻 `console` 
    > ```
    > $ 0
    > 1
    > 2
    > ...
    > 99
    ||
  * ## `forEach()`
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
    > **↪**` 1`
    >
    > **↪**` ...`
    >
    > **↪**` 99`

    * ### Le mot clé **break**
        ```js
        while (true) {
            break
        }
        ```
        > 💬 Ce mot clé, utilisé, entre autre dans une boucle permet de sortir, permet de sortir d'un bloc d'instruction

        ```js
        for (let i =0; i < 100; i++) {
            if (i === 50) {
                break;
            }
            
            console.log(i)
        }
        console.log("Boucle terminée");
        ```
        > **$** 0
        >
        > **↪** 1
        >
        > **↪** ...
        >
        > **↪** 48
        >
        > **↪** 49
        >
        > **↪** Boucle terminée
    * ### Le mot clé **continue**
        ```js
        while (true) {
            continue
        }
        ```
        > 💬 Ce mot clé *stop* l'exécution de la boucle en cours, pour la reprendre à la suite, sans exécuter le reste du bloc actuellement

        ```js
        for (let i= 0; i < 100; i++) {
            if (i === 50) {
                continue;
            }

            console.log(i)
        }
        
        ```
        > **$** 0
        >
        > **↪** 1
        >
        > **↪** ...
        >
        > **↪** 49
        >
        > **↪** 51
        >
        > **↪** ...
        >
        > **↪** 99
        > **↪** Boucle terminée
