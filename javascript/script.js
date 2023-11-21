//RICERCA YOUTUBE
function ytr(nome) {
    var link = "https://www.youtube.com/channel/UCo_DLowjBpvmiyYpsfH7KYQ/search?query=" + nome;
    window.open(link);
}

anime({
    targets: '#logo-controller',
    translateY: -20,
    duration: 2000,
    loop: true,
    direction: 'alternate',
});

anime({
    targets: '#carouselExampleSlidesOnly',
    translateY: [0, 20],
    opacity: [0 , 1],
    duration: 1500,
    delay: 1000,
});

anime({
    targets: '#stg-discord-logo',
    translateX: [50, 0],
    opacity: [0 , 1],
    duration: 1500,
    delay: 1000,
});