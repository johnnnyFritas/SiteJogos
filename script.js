window.addEventListener("DOMContentLoaded", function() {
    const carregandoAnimacao =()=> {
        document.querySelector('html').classList.remove('cor-fundo');
        document.querySelector('html').classList.add('cor-fundo-real');

        document.getElementById("main").classList.remove('main');

        document.getElementById("carregando-conteudo").style.display = "none";
     }
     this.setTimeout(carregandoAnimacao, 2900);
 });