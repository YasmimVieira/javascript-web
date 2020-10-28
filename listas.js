console.log("Criando listas")

// const salvador = ;
// const saoPaulo = ;
// const rioDeJaneiro = ;

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

listaDeDestinos.push(`Curitiba`) //adicionando um item na lista

console.log("Destinos possíveis: ");
console.log(listaDeDestinos);

listaDeDestinos.splice(2, 1); //retira um elemento da lista
console.log(listaDeDestinos);

console.log(listaDeDestinos[0], listaDeDestinos[1])