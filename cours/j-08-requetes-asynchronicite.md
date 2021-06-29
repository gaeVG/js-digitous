# Requêtes
> 💬 HTTP (**H**yper**T**ext **T**ransfer **P**rotocol) fonctionne sur un protocole de requête-réponse dans le contexte du client-serveur; le *client* (***frontend***) envoi des requêtes au *serveur* (***backend***).
> 
> 👁‍🗨 Voici les codes de status HTTP qaue l'on peut rencontrer :
> * 1xx: **Informationnel**
> * 2xx: **Sucess** — *Ces codes indiques que la requête a été reçue et traitée correctement*
>   * 200 : **OK**
>   * 201 : **Created**
>   * 204 : **No Content**
> * 3xx : **Redirection** — *Ce groupe montre que le client a dû effectuer des action supplémentaires pour terminer sa requête*
>   * 301 : **Moved Permanently**
>   * 304 : **Not Modified**
> * 4xx : **Client Error** — *Ce groupe de status est affiche quand la requête envoyé par le client est erronée*
>   * 400 : **Bad Request**
>   * 401 : **Unauthorized**
>   * 403 : **Forbidden**
>   * 404 : **Not Found** — *Page Introuvable*
## Envoyer une requête à une API externe
```js
const http =require ("http")
```
> 💬 Se connecter à une API est très facile dans Node ; il suffit d'importer le module `http` qui est installé sur Node par défaut, et d'envoyer la requête au **endpoint**.
> 
> 👁‍🗨 Sur NPM, il est possible de trouver plusieurs modules qui appelleront un notemment grâce aux modules `axios` ou `node-fetch`
```
$ npm i axios
```
```js
let axios = require("axios")

axios
    .get("https://restcountries.eu/rest/v2/name/france")
    .then((res) => {
        console.log(res)
        console.log(res.data);
    })
    .catch((err) => {
        console.log("Il y a un problème)
    })
```
---
## JSON
> 💬 JavaScript Object Notation est un object sécurisé qui contient deux méthodes
> 
> 👁‍🗨 Il ne peut contenir de fonction, mais uniquement des `Sring`, `Number`, `Boolean`, `Object` et `Array`

### Méthodes

* ### `JSON.parse()`
```js
JSON.parse({ var: value })
```
> 💬 La méthode transforme une string en un object littéral.
> 
> 👁‍🗨 La méthode s'utilise réuglièrement afin de le **parser** (*subdiviser*) de requêtes *API*

* ### `JSON.stringify()`
```js
JSON.stringify({ var: value })
```
> 💬 La méthode transforme un objet littéral en JSON.
> 
> 👁‍🗨 Elle ajoutera les doubles guillemets sur les clés.
```js
var obj = {foo: 1, bar: ['buzz', 'woody']};
var str = JSON.stringify(obj);

console.log(str);
```
> ```js
>
> ```

# Asynchronicité
```js
console.log("Hello");
setTimeout(() => console.log("Goodbye"), 2000);
console.log("World");
```
> 💬 Javascript est *un des seuls langages* à avoir le principe d'**asynchronicité**, qui fait partie de son coeur de langage : lors d'une requête, le code n'aura pas diretement accès au résultat d'une requête, dû au temps de latence.
> 
> 👁‍🗨Lors une requête, le navigateur est **bloqué** *tant que la requête n'est pas finie*. Il est dont important de créer du code **qui sera appelé** *uniquement quand la réponse de la requête sera reçue* afin de ne pas bloquer le code qui vient après

```js
const axios = require("axios")
let country = "france"

axios.get(`https://restcountries.eu/rest/v2/name/${country}`).then((res) => {
    console.log("#2")
    const data =res.data[0];

    for (const [key, value] of Object.entries(data)) {
        console.log(`${value} pour la clé "${key}"`)         
    }

    console.log("#3")
});

console.log("#1")
```

> ```js
> $ "#1"
> "#2"
> "France pour la clé \"name\""
> [...]
> "FRA pour la clé \"cioc\""
> "#3"
> ```
