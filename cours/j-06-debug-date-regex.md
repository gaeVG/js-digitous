# Debug
> 💬 Le debug permet de voir ce qu'il se passe dans la boîte noire du code. Il est important d'utiliser les différents outils pour s'y retrouver et comprendre où se situe le problème

## Le texte
> 💬 C'est le plus naturel et le plus simple, voir ce qui s'affiche sur la page.

* ### `console.log()`
    > 👁‍🗨 Cette méthode est la plus répandue pour débugger ; elle fonctionne côté client
    
## Debugger VisualStudio Code


# Date
```js
new Date()
```
> 💬 Date est un objet Javascript qui va nous sertir à travailler avec les dates. Ce format standardié nous permettrea de convertir le temps et de calculer l'équivalence en jours, mois années... Et ainsi accéder à des dizaine de possiblités de formatage
> 
> 👁‍🗨 Lorsqu'on appelle une nouvelle instance de l'objet, on obtient un chiffre qui correspond au nombre de millisecondes qui se sont écoulées depuis le **1er Janvier 1970**
```js
let test = new Date()
let demo = new Date.now()
console.log(test, demo)
```
> ```js
> $ 2021-06-24T08:15:50.381Z, 1624522631900
> ```

## Méthodes
* ### `getFullYear()`
```js

```
> 💬 Retourne l’année (avec 4 chiffres)
* ### `getYear()`
```js

```
> 💬 Retourne l'année (avec 2 ou 3 chiffres)
* ### `getMonth()` : 
```js

```
> 💬 Retourne le numéro du mois (🚨 de 0 à 11)
>
> 👁‍🗨 0 est Janvier, 2 est Février
* ### `getDate()` : retourne le jour du mois (de 1 à 31)
```js

```
* ### `getDay()`
```js

```
> 💬 Retourne le nombre du jour de la semaine ( 🚨 de 0 à 6)
>
> 👁‍🗨 0 est Dimanche, 1 est Lundi, 2 est Mardi, ..etc
* ### `getHours()`
```js

```
> 💬 Retourne le nombre d’heures (de 0 à 23)
* ### `getMinutes()`
```js

```
> 💬 Retourne le nombre de minutes (de 0 à 59)
* ### `getSeconds()`
```js

```
> 💬 Retourne le nombre de secondes (de 0 à 59)
* ### `getMilliseconds()`
```js

```
> 💬 Retourne le nombre de millisecondes (de 0 à 999)
* ### `toLocaleString()`
```js

```
> 💬 Convertit les millisecondes en date / heure
* ### `toDateString()` : 
```js

```

# Regex
```js
let pattern =/(a|b|c)/gi
```
> 💬 Les **expressions régulières** sont des patterns pré-définis et qui tentent une string.
>
> 👁‍🗨 Dans l'exemple, le *pattern* cherche soit un **a**, un b ou un c. **g** est un **flag** qui spécifie qu'il cherchera ce schéma dans toute la string. Le *flag* **i** spécifie que la recherche n'esst pas sensible à la casse.

## Exemple
* ### `replace()`
  ```js
  String.replace(regex, String)
  ```
  > 💬 
  >
  > Coucou

  ```js
  var str ="An apple was eaten";
  str.replace(/a/gi, "4");
  ```
  > ```js
  > $ '4n 4pple w4s e4ten'
  > ```
* ### `search()`
  ```js
  String.search(regex, String)
  ```
  > 💬 
  >
  > Coucou

  ```js
  var str ="An apple was eaten";
  str.replace(/a/gi, "4");
  ```
  > ```js
  > $ '4n 4pple w4s e4ten'
  > ```
* ### `match()`
  ```js
  String.search(regex, String)
  ```
  > 💬 
  >
  > Coucou

  ```js
  var str ="An apple was eaten";
  str.replace(/a/gi, "4");
  ```
  > ```js
  > $ '4n 4pple w4s e4ten'
  > ```