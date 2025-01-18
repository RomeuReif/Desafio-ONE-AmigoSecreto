//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let nomesAmigos = [];

function adicionarAmigo(){
    let valorInput = document.getElementById('amigo').value; // pegando o valor do input
    if (valorInput == '') {
        alert("Por favor, insira um nome.");
    } else {
        if (nomesAmigos.includes(valorInput)){
            alert("Nome duplicado.");
            limparCampo();
        } else {
            nomesAmigos.push(valorInput); // adicionando dentro da lista
            percorrerLista();
            limparCampo();
        }
        
    }
    
    //console.log(nomesAmigos);
}

function limparCampo() {
    valorInput = document.querySelector('input');
    valorInput.value = '';
};


function percorrerLista(){
    let exibirNomes = document.getElementById('listaAmigos');// pegando a ul que mostrarar os nomes
    exibirNomes.innerHTML = ''; // limpa 
    for (let i = 0;  i < nomesAmigos.length; i++){
        let li = document.createElement('li'); // cria elemento li
        li.innerHTML = nomesAmigos[i]; // adiciona o texto
        exibirNomes.appendChild(li); // adiciona o li na lista ul
        //console.log(nomesAmigos[i]);
    }
};

function sortearAmigo() {
    let exibirResultado = document.getElementById("resultado");
    if (nomesAmigos == '') {
        alert('Não tem nenhum amigo para sortear, por favor, adicione amigos');
    } else {
        let sorteando = parseInt(Math.random() * nomesAmigos.length);
        exibirResultado.innerHTML = nomesAmigos[sorteando];
    }
};
