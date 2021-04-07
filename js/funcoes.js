function AdicionarFilme(){
    let campoFilme = document.querySelector("#filme");
    let imagemFilme = campoFilme.value;
      ListarFilmesNaTela(imagemFilme);
    }

function ListarFilmesNaTela(imagem){
    let listaFilmes = document.querySelector("#listaFilmes");
    let eFilme = "<img src=" + imagem + ">";
    console.log(eFilme);
    listaFilmes.innerHTML += eFilme;
}