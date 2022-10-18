var musica = document.getElementById("musica");
var controle = document.getElementById("controle");
var tocando = false;

function tocarMusica (){
    if (tocando){
        musica.pause()
        controle.classList.remove("fa-pause");
        controle.classList.add("fa-play");
    } else {
        musica.play()
        controle.classList.remove("fa-play");
        controle.classList.add("fa-pause");
    }
}
musica.onplaying = function(){
    tocando = true;
}
musica.onpause = function(){
    musica.currentTime = 0;
    tocando = false;
}