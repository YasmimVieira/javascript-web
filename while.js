console.log("Trabalho com condicionais")

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 15;
const estaAcompanhada = true;
let temPassagemComprada = false;
const destino = "Salvador";

console.log("Destinos possíveis: ");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;

while (contador < 3) {
    if(listaDeDestinos[contador] == destino) {
        console.log("Destine existe");
        destinoExiste = true;
        break;
    } else {
        destinoExiste = false;
    }
    contador += 1;
}

console.log("Destino existe: ", destinoExiste);