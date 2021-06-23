const prompt = require("prompt");
const { calcultate, guess, multiply } = require("./table-utils")
let args =process.argv.slice(2)
let exec =args[0]

function onErr(err) {
    console.log(err)
    
    return 1
}


if (exec === undefined) {
    onErr("Ajouter `-e ou --exercise` en argument pour lancer le programme")
} else if (exec.match(/^--(e|E)xercise$/) || exec.match(/-e/)) {
    exec.matchAll
    var exercises =[
        {
            name: "number",
            description: "Choisir le numéro de l'exercice",
            validator: /^[0-9]$/,
            warning: "Le numéro d'exercice ne doit comporter qu'un seul chiffre"
        }
    ];

    prompt.start()
    prompt.get(exercises, function(err, res) {

        if (err) return onErr(err)
        
        let arguments =[]

        switch (parseInt(res.number)) {
            case 1:
                arguments =[
                    {
                        name: "operand1",
                        description: "Choisir le premier numéro",
                        validator: /^[0-9]*/,
                        warning: "Le numéro d'exercice ne doit comporter qu'un seul numéro"
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
                        validator: /^[0-9]*/,
                        warning: "Le numéro d'exercice ne doit comporter qu'un seul numéro"
                    }
                ];

                break;            
            case 2:
                arguments =[
                    {
                        name: "table",
                        description: "Choisir un numéro",
                        validator: /^[0-9]*/,
                        warning: "Le numéro d'exercice ne doit comporter qu'un seul numéro"
                    }
                ];

                break;
            case 4:
                guess()
                break;
            default:
                console.log("L'exercice n'existe pas...")
        }

        if (arguments.length > 0) {
            prompt.start()
            prompt.get(arguments, function(err, res) {

                if (err) return onErr(err)

                if (res.operator) calcultate(res.operand1, res.operand2, res.operator)
                if (res.table) multiply(res.table)
            })
        }
    })
    
} else if (exec.match(/help/)) {
    console.log("Ajouter `-e ou --exercise` en argument pour lancer le programme")
}
