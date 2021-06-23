const prompt = require("prompt");
const color = require("colors")
const tries = 6
const wordlist =[
    "muter", "talus", "durit", "franc", "tança", "abîme", "pinté", "parte", "menas", "loché", "hélée", "fumât", "novée", "cires", "korês", "binai", "plomb", "pâmas", "bâtir", "boume", "bleds", "ample", "tolus", "stria", "nimbé", "manié", "iules", "lusse", "laits", "troué", "chope", "envié", "élimé", "seuil", "vîmes", "crane", "suifs", "ciguë", "rials", "talla", "becté", "satîs", "aplat", "cavée", "cafta", "suces", "agaça", "mûres", "adret", "ferlé", "bosse", "dotes", "creux", "états", "fumez", "auget", "codés", "clapa", "dénie", "aèdes", "rayât", "puent", "goums", "total", "matin", "grive", "tisas", "ripas", "samit", "peiné", "jotas", "lives", "muera", "risse", "rivée", "tonné", "twist", "palpé", "gobes", "robin", "parât", "chaos", "verra", "levez", "capez", "pâlie", "brêlé", "biglé", "celer", "sucez", "redut", "nimba", "gaine", "mimes", "ciste", "dotai", "rebab", "puiez", "pinne", "veaux", "pauma", "osque", "ragué", "cerne", "abbés", "fanai", "luron", "râlai", "radis", "tinta", "limai", "pizza", "front", "amour", "ôtées", "pivot", "skifs", "lieur", "yeuse", "gazés", "longé", "hâtés", "virer", "typos", "jalap", "obvia", "sises", "bacul", "juché", "hurlé", "berme", "jouir", "pince", "votez", "nacre", "coati", "fluxé", "parer", "leurs", "poète", "rapin", "tridi", "dénué", "fadez", "poème", "secte", "durai", "clous", "nopez", "féaux"
]

retries = 0

function clue(scrtWrd, usrWrd) {
    retries--;
    let result = "";

    console.log(scrtWrd)

    if (scrtWrd === usrWrd) {
        console.log("Bravo !".rainbow);
        console.log("Vous avez trouvez le mot à trouver :");
        console.log(scrtWrd.brightWhite.bgGreen);
        console.log("");

        var rPlay =[
            {
                name: "validate",
                description: "Voulez-vous rejouer ? [O]ui / [N]on",
                validator: /^(O|o|N|n)$/,
                warnings:"[O]ui / [N]on"
            }
        ];
    
        prompt.start();
        prompt.get(rPlay, function(err, res) {
    
            if (err) return onErr(err)
            
            if (res.validate.match(/^(O|o)/)) {
                retries =tries;
                init();
            }
            clue(scrtWrd, res.word);
        })
    } else {
        
        for (let iLetter = 0; iLetter < scrtWrd.length; iLetter++) {
            let letter =usrWrd[iLetter];

            if (scrtWrd.indexOf(letter) === -1) {
                result +=((letter).brightWhite);
            } else {

                if (scrtWrd.indexOf(letter, iLetter) === iLetter) {
                    result +=(letter).brightWhite.bgRed;
                } else {

                    result +=(letter).bgYellow;
                }
            }
        }

        console.log(result);

        if (retries === 0) {
            console.log("Dommage !");
            
            return
        }

        tryWord(scrtWrd)
    }
}

function init() {
    retries =tries;
    let secretWord = wordlist[Math.floor(Math.random() * (wordlist.length -1 -0 +1))];

    tryWord(secretWord);
}

function onErr(err) {
    console.log(err)
    
    return 1
}

function tryWord(scrtWrd) {

    console.log(`Vous avez ${retries} essais pour trouver le mot...`)
    var gword =[
        {
            name: "word",
            description: "Choisir un mot de 5 lettres",
            validator: /^\s*[a-zA-Zéèàêçûîâô]+\s*$/
        }
    ];

    prompt.start()
    prompt.get(gword, function(err, res) {

        if (err) return onErr(err)

        let word =(res.word.length === 5) ? res.word : false
        
        if (!word) return onErr(`Le mot ${res.word} ne fait pas 5 lettres mais ${res.word.length}`)
        
        clue(scrtWrd, res.word)
    })
}

module.exports ={ init }