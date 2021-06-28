const fs = require("fs");

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
    console.log("\nExerice 05: Cakes\n-----------\n");

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

    let sold =cakes.map(cake => {
        cake.filter(choco => (cake.flavor)
        )
    })

    console.table(sold)
    
}, 30);