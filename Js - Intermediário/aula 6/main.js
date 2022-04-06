let amigos = [{"nome" : "Emerson","sobrenome" : "Pereira"},
                {"nome" : "Jade","sobrenome" : "Picon"},
                {"nome" : "Franga","sobrenome" : "Magalhões"}];

let convert = JSON.stringify(amigos);

const obj = JSON.parse(convert);

function friends() {
    for (let i of obj) {
        console.log(i)
    };
}

//console.log(obj[0].nome , obj[0].sobrenome)

console.log(friends(obj))

