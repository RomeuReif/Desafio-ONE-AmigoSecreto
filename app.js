//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let nomeAmigos = [];

function adicionarAmigo(){
    let exibirNomes = document.getElementById('listaAmigos'); // pegando a ul que mostrarar os nomes
    let valorInput = document.getElementById('amigo').value; // pegando o valor do input
    console.log(valorInput);
    if (valorInput == '') {
        alert("Por favor, insira um nome.");
    } else {
        nomeAmigos.push(valorInput); // adicionando dentro da lista
        exibirNomes.innerHTML = nomeAmigos;
        limparCampo()
    }
    
    
    console.log(nomes);
}

