document.addEventListener("DOMContentLoaded", function () {
    const naoButton = document.querySelector(".nao");
    const simButton = document.querySelector(".sim");
    let simClickCount = 0;
    let naoClickCount = 0; // Contador para o botão "Não"

// Evento de clique no botão "Sim"
simButton.addEventListener("click", function () {
    simClickCount++;
    if (simClickCount === 1) {
        alert("Tem certeza?????");
    } else if(simClickCount ===2) {
        window.location.href = "botaoSim.html";
    }
});


    // Evento de clique no botão "Não"
    naoButton.addEventListener("click", function () {
        naoClickCount++;
        if (naoClickCount === 5) {
            alert("NOSSAAAAA NÂO QUER MAIS FICAR CUMIGOO🥺🥺!!!!");
        } else if(naoClickCount ===10){
            alert("PALAAA TU NAUM MI AMAA🥺🥺!!!!")
        } else if(naoClickCount ===15){
            window.location.href = "botaoNao.html";
        }
    });

    // Evento de mouseover para o botão "Não" fugir do mouse
    naoButton.addEventListener("mouseover", function () {
        const windowWidth = window.innerWidth - naoButton.clientWidth;
        const windowHeight = window.innerHeight - naoButton.clientHeight;

        // Define posições aleatórias dentro da tela
        const newX = Math.max(0, Math.min(windowWidth, Math.random() * windowWidth));
        const newY = Math.max(0, Math.min(windowHeight, Math.random() * windowHeight));

        naoButton.style.position = "absolute";
        naoButton.style.left = `${newX}px`;
        naoButton.style.top = `${newY}px`;
    });
});
