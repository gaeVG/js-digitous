const prompt = require("prompt")

var hand =0, bank =0

const cArgs =[
    {
        name: "choice",
        description: "[D]raw, [P]ass, [Q]",
        validator: /^(d|p|q){1}$/gi
    }
];


function init() {
    hand =0
    bank =Math.floor(Math.random() * (21 - 16 +1)) + 16

    console.log("\nExerice Bonus: BlackJack\n-----------\n");
    play()
}

async function draw() {

    return await new Promise(resv => {

        setTimeout(() => {
            console.log("Tirage en cours...\n------------------")
            let bet =Math.floor(Math.random() * (10 - 1 +1)) + 1

            console.log(`Vous avez tiré un ${bet}...`)
            resv(bet)
        }, 500)
    });
}
async function play(relaunch) {

    while (hand < 21) {

        if (hand >= 16) {

            if (relaunch != undefined) {

                if (relaunch === true) {
                    hand =(hand) + await draw()
                } else {

                    break
                }
            
            } else {
                userPrompt()
            }
        } else {
            
            console.log("Nouveau tirage...\n")
            hand =(hand) + await draw()
            console.log(`Votre main est de ${hand}\n`)
       }
    }
}
async function userPrompt() {

    prompt.start();
    prompt.get(cArgs, function(err, res) {

        if (err) return console.error(err)

        const choice = res.choice

        switch (choice) {

            case "d":
                play(true)

                break;
            case "p":
                play(false)

                break
            case "q":
                return
            default:
                play(true)
        }
    })
}


init()