const prompt = require("prompt");
const { calcultate, guess, multiply } = require("./table-utils");
const { init } = require("./motus.js")
let args =process.argv.slice(2);
let exec =args[0];
var exercises =[
    {
        name: "number",
        description: `Choisir un exercice:
[1 - Calculatrice]
[2 - Tables de multiplication]
[4 - Trouver le nombre]
$ `,
        validator: /^(1|2|4)$/,
        warning: `Le n° d'exercice ne peut être que 1, 2 ou 4`
    }
];

function displayHelp() {
    console.log("Ajouter `-e ou --exercise` en argument pour lancer le programme");
    console.log("Ajouter `-m ou --motus` en argument pour lancer le jeu");
    console.log("Ajouter `-h ou --help` en argument pour afficher ce message");
}

function displayStatement(statement) {
    let arguments =[];

    switch (parseInt(statement)) {
        case 1:
            arguments =[
                {
                    name: "operand1",
                    description: "Choisir le premier numéro",
                    validator: /^[0-9]*$/,
                    warning: "Le premier opérande ne doit comporter qu'un seul numéro"
                },
                {
                    name: "operator",
                    description: "Choisir le signe opérateur",
                    validator: /^(\+|-|x|\*|\/|%)$/,
                    warning: `L'opérateur ne peut être que "+", "-", "x" (ou *), "/" ou "%"`
                },
                {
                    name: "operand2",
                    description: "Choisir le deuxième numéro",
                    validator: /^[0-9]*$/,
                    warning: "Le second opérande ne doit comporter qu'un seul numéro"
                }
            ];

            break;            
        case 2:
            console.log("Exercice 02. Table:")
            arguments =[
                {
                    name: "table",
                    description: "Choisir un numéro",
                    validator: /^[0-9]*$/,
                    warning: "Le numéro d'exercice ne doit comporter qu'un seul numéro"
                }
            ];

            break;
        case 4:
            guess()

            break;
    }

    if (arguments.length > 0) {
        prompt.start()
        prompt.get(arguments, function(err, res) {

            if (err) return onErr(err)

            if (res.operator) calcultate(res.operand1, res.operand2, res.operator)
            if (res.table) multiply(res.table)
        })
    }
}

function onErr(err) {
    console.error(err)
    
    return 1
}

console.log("\nJour 05\n--------")

if (exec === undefined) {
    displayHelp()
} else if (exec.match(/^--(e|E)xercise$/) || exec.match(/-e/)) {

    if (!args[1]) {

        prompt.start()
        prompt.get(exercises, function(err, res) {

            if (err) return onErr(err)
            
            displayStatement(res.number)
        })
    } else {
        displayStatement(args[1])
    }
    
} else if (exec.match(/^--help$/) || exec.match(/^-h$/)) {
    displayHelp()
} else if (exec.match(/^--motus$/) || exec.match(/^-m$/)) {
    init()
}
