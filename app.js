//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let nomes = [];

function adicionarAmigo(){
    let valorInput = document.getElementById('amigo').value;
    console.log(valorInput);
    nomes.push(valorInput);
    console.log(nomes);
}