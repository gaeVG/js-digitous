# Node

> 💬 Pour exécuter du code javascript, on était obligé d'utiliser un navigateur
> Node est un moteur qui va pouvoir faire tourner du javascript


## Paramètres
* ### Argv
> 💬 Les arguments reçus par le terminal sont transmis au processus dans un tableau appelé `argv`
>
> 👁‍🗨 NodeJS
```js
console.log(process.argv)
```


# NPM
```
npm --version
```
> 💬 NPM permet de partager et réutiliser du code facile. Ces morceaux de codes sont appelés **packages**, qui sont eux, un dossier ou un ensemble de modules
> 
> 👁‍🗨 Les programmes JS sont généralement dépendants de plusieurs dépendances. On construira donc nos projets en utilisant d'autres packages qui vont chacun servir 

## Initialiser un dossier
```
npm init -y
```
> 💬 Pour utiliser des packages *NPM* dans votre application, il faut d'abord initialiser le dossier souhaité pour créer le fichier **package.json**, contenant la liste des modules utilisés dans l'application.

## Installation locale du package
```
npm install packageName
```
> 💬 Un package peut être installé et disponible uniquement dans un dossier spécifique
>
> 👁‍🗨 Un dossier **node_modules** sera alors créé dans le dossier courant.