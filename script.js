// Função para o menu mobile
function animarMenu() {
    let menuMob = document.querySelector('.menu-mobile')
    if (menuMob.classList.contains('open')) {
        menuMob.classList.remove('open');
    } else {
        menuMob.classList.add('open');
    }
}

// Adiciona evento de click aos links do menu mobile para fechar o menu após clicar
document.addEventListener('DOMContentLoaded', function() {
    // Configura o funcionamento do menu mobile
    let linksMenu = document.querySelectorAll('.menu-mobile a');
    linksMenu.forEach(link => {
        link.addEventListener('click', () => {
            animarMenu();
        });
    });

// Isso posiciona as bolhas corretamente
document.addEventListener('DOMContentLoaded', function() {
    // Configura as bolhas
    const bubbles = document.querySelectorAll('.bolhas span');
    
    bubbles.forEach(bubble => {
        // Posição horizontal aleatória
        const randomLeft = Math.floor(Math.random() * 100);
        bubble.style.left = `${randomLeft}%`;
        
        // Posição inicial fora da tela (abaixo)
        bubble.style.bottom = `-50px`;
        
        // Atraso inicial aleatório para criar efeito mais natural
        const randomDelay = Math.random() * 20;
        bubble.style.animationDelay = `${randomDelay}s`;
        
        // Tamanho aleatório para mais variedade
        const randomSize = Math.floor(Math.random() * 20) + 20; // entre 20px e 40px
        bubble.style.width = `${randomSize}px`;
        bubble.style.height = `${randomSize}px`;
    });
});
