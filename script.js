function animarMenu() {
    let menuMob = document.querySelector('.menu-mobile')
    if (menuMob.classList.contains('open')) {
        menuMob.classList.remove('open');
    } else {
        menuMob.classList.add('open');
    }
}
    
    let linksMenu = document.querySelectorAll('.menu-mobile a');
        linksMenu.forEach(link => {
        link.addEventListener('click', () => {
        animarMenu();
    });
});
