const prompt = require("prompt");

function calcultate(n1, n2, operator) {
    let operand1 =parseInt(n1),
        operand2 =parseInt(n2)
    
    
    if (!operand1 || !operand2) {
        return false
    }

    switch (operator) {
        case "+":
            console.log(`Résultat de l'addition: ${operand1}+${operand2}=${operand1 +operand2}`);
            break;
        case "-":

            console.log(`Résultat de la soustraction: ${operand1}-${operand2}=${operand1 -operand2}`);
            break;
        case "x":
        case "*":
            console.log(`Résultat de la multiplication: ${operand1}x${operand2}=${operand1 *operand2}`);
            console.log(operand1 * operand2);
            break
        case "/":
            console.log(`Résultat de la division: ${operand1}/${operand2}=${operand1 /operand2}`);
            break
        case "%":
            console.log(`Reste de la division: ${operand1}%${operand2}=${operand1 %operand2}`);
            break
        case "**":
        case "²":
            console.log(`Résultat de l'opération: ${operand1} puissance ${operand2}=${operand1 **operand2}`);
            break
        default:
            console.log("Une erreur est survenue")
    }
}

function guess() {

    let mysteryNum =Math.floor(Math.random() * (100)) + 1
    let guessed =false
    let selected


    while (!guessed) {
        selected= play()
        guessed =typeof selected === "number" ? selected : false
    } 

    
}

function play() {
    let number
    let guessed =[
        {
            name: "number",
            description: "Choisir un nombre entre 1 et 100",
            validator: /^[0-9]{1,3}$/,
            warning: "Le numéro choisit doit être compris entre 1 et 100"
        }
    ];


    prompt.start()
    prompt.get(guessed, function(err, res) {

        if (err) {
            console.log("Une erreur est survenue")
            return null
        }

        return res.number
    })

    return new Promise(r => {
        setTimeout(() => {
            r()
        }, !number)
    })
}

function multiply(n) {
    

    let table = {
        operand :[],
        result: []
    };

    for (let i =0; i <= 10; i++) {        
        table.operand.push(parseInt(n))
        table.result.push(n * i);
    }

    console.table(table)
}

module.exports ={
    calcultate,
    guess,
    multiply
}