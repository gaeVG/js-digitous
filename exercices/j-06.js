// 01. Format
console.log("\nExerice 01: Format\n-----------\n");

function formatDate(date) {
    let fDate =new Date(date)

    return [fDate.getDate(), String(fDate.getMonth()).length < 2 ? "0" + String(fDate.getMonth()) : fDate.getMonth(), fDate.getFullYear()].join("/")
}

console.log(`Nous sommes aujourd'hui le ${formatDate("2021-06-24")}`)

// 02. Age
console.log("\nExerice 02: Age\n-----------\n");

function calculateAge(date) {
    return new Date(Date.now()).getFullYear() - new Date(date).getFullYear()
}

console.log(`Je suis né le 28 Septembre 1989, j'ai donc ${calculateAge("1989-09-28")} ans cette année`)

// 03. Validator
console.log("\nExerice 03: Validator\n-----------\n");

function checkProfile(username, password, mail) {
    let rMail =/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
    let rUsername =/(?=.{6,}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9-]/
    let rPassword =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z\d]).{6,}$/

    
    return [mail.match(rMail), username.match(rUsername), mail.match(rMail)]
}

let myProfile =checkProfile("gaeV", "b1oc*nsOn", "gaev@cenne.xyz")
console.log(myProfile[0][0], myProfile[1][0], myProfile[2][0])