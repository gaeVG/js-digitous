const axios = require("axios")

// 01. Countries

async function getCountries() {
    let countriesName =await new Promise(resolve => {

        setTimeout(() => {
            let names =[];
    
            axios.get("https://restcountries.eu/rest/v2/all").then((res) => {
                const countries = res.data
                
                for (let i = 0; i < countries.length; i++) {
                    names.push(countries[i].name)
                }

                resolve(names.join("-"))
            }, 250);  
         });
    });

    console.log("\nExerice 01: Country\n-----------\n");
    console.log(countriesName)
}

getCountries()

// 02. Chuck Norris

async function getFact() {
    let fact =await new Promise(resolve => {

        setTimeout(() => {
    
            axios.get("https://api.chucknorris.io/jokes/random").then((res) => {
                resolve(res.data.value)
            
            }).catch((err) => {
                console.error(`Une erreur est survenue\n: ${err}`)
                
                resolve(false)
            });

        }, 1000);
    });
    
    if (fact) {
        console.log("\nExerice 02: Chuck Norris\n-----------\n");
        console.log(`Fait intéressant à propos de Chuck Norris\n: ${fact}\n`)
    }
}

getFact()


// 03. Pokemon

async function catchPokemon() {
    let pokemon =await new Promise(resolve => {

        setTimeout(() => {
            let min =0, max =1000;
            let loot =Math.floor(Math.random() * (max - min +1)) + min

            axios.get(`https://pokeapi.co/api/v2/pokemon-species/${loot}`).then((res) => {                
                const names =res.data.names

                resolve({ name :names[4].name, id: res.data.id });
            
            }).catch((err) => {
                console.error(`[${err.response.status}] Le Pokémon attrapé n°${loot} n'existe pas ?!`)
                
                resolve(false)
            });

        }, 2000);
    });

    if (pokemon) {
        console.log("\nExerice 03: Pokemon\n-----------\n");
        console.log(`Bien joué ! Vous avez attrapé un ${pokemon.name} (ID: ${pokemon.id}) !`)
    }
}

catchPokemon()


// Bonus

let hand
let bank =Math.floor(Math.random() * (21 - 16 +1)) + 16

function init() {

}

function turn() {
    
}