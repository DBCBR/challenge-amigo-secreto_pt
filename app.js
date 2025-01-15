let listaAmigos = [];

function adicionarAmigo(){
    let nome = document.getElementById("amigo").value;
    if(nome === ""){
        alert("Digite um nome para adicionar um amigo");
    } else {
        listaAmigos[listaAmigos.length] = nome; // Adiciona o nome ao array
        document.getElementById("amigo").value = "";
        atualizarLista();
    }
}

function atualizarLista() {
    let ul = document.getElementById("listaAmigos");
    ul.innerHTML = ""; // Limpa a lista antes de adicionar os itens atualizados
    let listaHTML = "";
    for (let i = 0; i < listaAmigos.length; i++) {
        listaHTML += "<li>" + listaAmigos[i] + "</li>";
    }
    ul.innerHTML = listaHTML;
}

function sortearAmigo(){
    if (listaAmigos.length === 0) {
        alert("Nenhum amigo disponível para sortear.");
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    let amigoSorteado = listaAmigos[indiceAleatorio];
    document.getElementById("resultado").innerHTML = "O amigo sorteado foi: " + amigoSorteado;
    
    // Limpa a lista de amigos após o sorteio
    listaAmigos = [];
    atualizarLista();
    
    // Limpa a mensagem com o nome da pessoa sorteada após 5 segundos
    setTimeout(function() {
        document.getElementById("resultado").innerHTML = "";
    }, 5000);
}