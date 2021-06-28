const fs = require("fs");
const { resolve } = require("path");
const prompt = require("prompt")

// 01. File System
console.log("\nExerice 01: File System\n-----------\n");
let file = "./jour07.txt";

fs.stat(file, (err, stat) => {
    if (err) {
        return console.error("Le fichier est introuvable");
    }

    if (!stat.isFile()) {
        return console.error("Une erreur est survenue");
    }

    fs.readFile(file, (err, data) => {
        if (err) {
            return console.error("Impossible de lire le contenu du fichier")
        }
        console.log("Contenu de mon fichier jour07.txt :")
        console.log(JSON.parse(data))
    });
});

setTimeout(() => {

    // 02. Map Double
    console.log("\nExerice 02: Map Double\n-----------\n");

    let array =[1, 2, 3, 4 ,5];
    let double =array.map(number => number *2);

    console.log("Tableau initial :");
    console.table(array);
    console.log("Tableau doublé :");
    console.table(double);

    // 03. Map Names
    console.log("\nExerice 03: Map Names\n-----------\n");

    let longName =[
        { firstName: "Jane", lastName: "Doe" },
        { firstName: "John", lastName: "Smith" }
    ];

    let shortNames =longName.map(user => {
        return { name :user.firstName + " " + user.lastName }
    })

    console.log("Tableau initial :");
    console.table(longName);
    console.log("Tableau doublé :");
    console.table(shortNames);

    // 04. Filter Numbers
    console.log("\nExerice 04: Filter Numbers\n-----------\n");

    let objects =[1, "toto", 34, "javascript", 8];
    let filteredNumbers =objects.filter(object => typeof object == "number");

    console.log("Tableau initial :");
    console.table(objects);
    console.log("Tableau doublé :");
    console.table(filteredNumbers);
    
    // 05. Filter Even
    console.log("\nExerice 05: Filter Even\n-----------\n");

    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let even = numbers.filter(number => (number %2 == 0))

    console.log("Tableau initial :");
    console.table(numbers);
    console.log("Tableau doublé :");
    console.table(even);

    // 06. Cakes
    console.log("\nExerice 06: Cakes\n-----------\n");

    let cakes =[
        {
            name: "cake",
            flavor: "vanilla",
            status: "available"
        },
        {
            name: "brownie",
            flavor: "chocolate",
            status: "available"
        },
        {
            name: "pie",
            flavor: "strawberry",
            status: "available"
        },
        {
            name: "muffin",
            flavor: "pistachio",
            status: "available"
        },
        {
            name: "donut",
            flavor: "chocolate",
            status: "available"
        },
    ];

    let sold =cakes.filter(cake => {
        return (cake.flavor == "chocolate")
    }).map(element => {
        element.status = "sold out"
        
        return element
    });
    

    console.log("Tableau initial :");
    console.table(cakes);
    console.log("Tableau doublé :");
    console.table(sold);

}, 30);

setTimeout(() => {
    var file ="./wordlist.json";
    var retries =0;
    var secretWord ="", userWord ="";

    function onErr(err) {
        console.error(err)
    }

    function checkLetter(req) {
        retries--;

        word.split("").filter(l => {
            return (l === req) ? m : "_"
        }).join("");

        if (result != word) {

            if (retries === 0) {
                onErr("Fin de la partie !")
            }

            userPrompt(word)
        }
    }

    function randomWord() {

        return new Promise(resolve => {
            setTimeout(() => {

                fs.stat(file, function(err, res) {

                    if (res.isFile()) {
                        fs.readFile(file, (err, data) => {
                            let wordlist =JSON.parse(data)
                            resolve(wordlist[Math.floor( Math.random() * ( (wordlist.length -1) +1 ) )])
                        })
                    } 
                });
            }, 1000);
        });
    }

    async function init() {
        retries =10
        secretWord =await randomWord()
        userWord =word.split("").map(letter => "_").join("")

        userPrompt(secretWord, userWord)
    }

    function userPrompt(secretWord, userWord) {

        let arg =[
            {
                name: "letter",
                description: "Choisir une lettre",
                validator: /^[a-zA-Z]{1}$/,
                warning: "Une seule lettre à la fois !"
            }
        ];

        prompt.start();
        prompt.get(arg, function(err, res) {

            if (err) return onErr(err)

            checkLetter(res.letter, secretWord, userWord)
        })
    }

    init()
}, 250);