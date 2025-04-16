// Função para o menu mobile
function animarMenu() {
    let menuMob = document.querySelector('.menu-mobile');
    if (menuMob.classList.contains('open')) {
        menuMob.classList.remove('open');
    } else {
        menuMob.classList.add('open');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Configura o funcionamento do menu mobile
    let linksMenu = document.querySelectorAll('.menu-mobile a');
    linksMenu.forEach(link => {
        link.addEventListener('click', () => {
            animarMenu();
        });
    });
    
    // Configuração das bolhas
    const bolhasContainer = document.querySelector('.bolhas');
    
    // Remove as bolhas estáticas do HTML
    bolhasContainer.innerHTML = '';
    
    // Cria bolhas dinâmicas
    const numBolhas = 60;
    
    for (let i = 0; i < numBolhas; i++) {
        const bolha = document.createElement('span');
        
        // Propriedades aleatórias
        const randomLeft = Math.random() * 100;
        const randomSize = Math.random() * 20 + 10;
        const randomDuration = Math.random() * 40 + 30;
        const randomDelay = Math.random() * 10;
        const randomBottom = Math.random() * 20;
        
        bolha.style.setProperty('--i', randomDuration);
        bolha.style.left = `${randomLeft}%`;
        bolha.style.width = `${randomSize}px`;
        bolha.style.height = `${randomSize}px`;
        bolha.style.animationDelay = `${randomDelay}s`;
        bolha.style.bottom = `${randomBottom}px`;
        
        bolhasContainer.appendChild(bolha);
    }
});
