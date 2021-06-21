// 01. Comptons
console.log("\nExerice 1: Comptons\n-----------");

let i =50;

while (i <= 200) {
    if (i % 2 === 0) {
        console.log(i)
    }

    i++
}

// 02. Try again
console.log("\nExerice 2: Try again\n-----------");

function lancerDe (faces =6) {
    return Math.floor(Math.random() * (faces - 1 +1)) + 1
}

let dice =null;
let count =0;
let faces =6

while (dice != faces) {
    dice =lancerDe(faces)
    count++
}

console.log(`Il vous a fallut ${count} lancés pour faire une réussite critique`)

// 03. Course
console.log("\nExerice 3: Course\n-----------");

function strider (stride =10) {
    return Math.floor(Math.random() * (stride - 0 +1)) + 0
}

let winner = null
let leader = null

let runners =[
    {
        name: "Ussain Bolt",
        ran: 0
    },
    {
        name: "Tyson Gay",
        ran: 0
    },
    {
        name: "Andy Bouchet",
        ran: 0
    }
]

console.log("Et c'est partit !")
console.log("")
while (!winner) {
    runners.forEach(function(runner, i) {
        runner.ran +=strider()
        console.log(runner.name, runner.ran)
        if (runner.ran >= 100) {
            winner =runner.name;
        }
        
        if (leader === null) {
            leader =runner
        } else if (runner.ran > leader.ran) {
            console.log(`À ${runner.ran} mètre, le coureur ${runner.name} prend la tête à ${leader.name} !`);

            leader =runner
        }
    })
}

console.log(`Le grand vainqueur de cette course est ${winner}`);
