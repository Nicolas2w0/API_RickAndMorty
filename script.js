var nome=document.getElementById("nome");
var numero=document.getElementById("numero");
var status=document.getElementById("status");
var especie=document.getElementById("especie");
var genero=document.getElementById("genero");
var origem=document.getElementById("origem");
var imagem=document.getElementById("imagem");
var erro=document.getElementById("erro");

var buscar=document.getElementById("buscar");
var aleatorio=document.getElementById("aleatorio");

function mostrarPersonagem(dados){
    erro.innerHTML="";
    nome.innerHTML=dados.name;
    numero.innerHTML="Número: "+dados.id;
    status.innerHTML="Status: "+dados.status;
    especie.innerHTML="Espécie: "+dados.species;
    genero.innerHTML="Gênero: "+dados.gender;
    origem.innerHTML="Origem: "+dados.origin.name;
    imagem.src=dados.image;
}

function buscarPersonagem(){
    var personagem=document.getElementById("buscar_nome").value;
    personagem=personagem.toLowerCase();

    fetch("https://rickandmortyapi.com/api/character/?name="+personagem)
    .then(function(resposta) {
        if(!resposta.ok){
            throw new Error("Personagem não encontrado");
        }
        return resposta.json();
    })
    .then(function(dados){
        mostrarPersonagem(dados.results[0]);
    });
};

function buscarAleatorio(){
    var id=Math.floor(Math.random()*826)+1;

    fetch("https://rickandmortyapi.com/api/character/"+id)
    .then(function(resposta){
        if(!resposta.ok){
            throw new Error("Erro ao buscar personagem");
        }
        return resposta.json();
    })
    .then(function(dados){
        mostrarPersonagem(dados);
    });
}
