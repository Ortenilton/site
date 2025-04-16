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
    
    // Configura as bolhas
    const bubbles = document.querySelectorAll('.bolhas span');
    
    bubbles.forEach(bubble => {
        // Posição horizontal aleatória
        const randomLeft = Math.floor(Math.random() * 100);
        bubble.style.left = `${randomLeft}%`;
        
        // Atraso inicial aleatório para criar efeito mais natural
        const randomDelay = Math.random() * 20;
        bubble.style.animationDelay = `${randomDelay}s`;
    });
});
