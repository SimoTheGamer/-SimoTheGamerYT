//RICERCA YOUTUBE
function ytr(nome) {
    var nome = document.getElementById("nome").value;
    var link = "https://www.youtube.com/channel/UCo_DLowjBpvmiyYpsfH7KYQ/search?query=" + nome;
    window.open(link);
}

let logoController = gsap.timeline({ repeat: -1, yoyo: true, ease: Power2.easeIn });


logoController.fromTo('#logo-controller', { y: 10, duration: 2 }, { y: -20, duration: 1 })