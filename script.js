// Marca que o JavaScript está ativo (usado nas animações de entrada)
document.documentElement.classList.add('js');

document.addEventListener('DOMContentLoaded', function () {
    const header = document.getElementById('site-header');
    const btnMenu = document.getElementById('btn-menu');
    const reduzirMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // ---------- Menu mobile ----------
    function fecharMenu() {
        header.classList.remove('menu-open');
        btnMenu.setAttribute('aria-expanded', 'false');
        btnMenu.setAttribute('aria-label', 'Open menu');
    }

    btnMenu.addEventListener('click', function () {
        const aberto = header.classList.toggle('menu-open');
        btnMenu.setAttribute('aria-expanded', String(aberto));
        btnMenu.setAttribute('aria-label', aberto ? 'Close menu' : 'Open menu');
    });

    document.querySelectorAll('.main-nav a').forEach(function (link) {
        link.addEventListener('click', fecharMenu);
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') fecharMenu();
    });

    // ---------- Cabeçalho muda de cor ao rolar ----------
    function atualizarCabecalho() {
        header.classList.toggle('scrolled', window.scrollY > 40);
    }
    atualizarCabecalho();
    window.addEventListener('scroll', atualizarCabecalho, { passive: true });

    // ---------- Destaca no menu a seção visível ----------
    const linksMenu = document.querySelectorAll('.main-nav a');
    const secoes = document.querySelectorAll('main section[id]');
    if ('IntersectionObserver' in window) {
        const observadorSecoes = new IntersectionObserver(function (entradas) {
            entradas.forEach(function (entrada) {
                if (entrada.isIntersecting) {
                    linksMenu.forEach(function (link) {
                        link.classList.toggle('active', link.getAttribute('href') === '#' + entrada.target.id);
                    });
                }
            });
        }, { rootMargin: '-45% 0px -50% 0px' });
        secoes.forEach(function (secao) { observadorSecoes.observe(secao); });
    }

    // ---------- Animação de entrada dos blocos ----------
    const blocos = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window && !reduzirMovimento) {
        const observadorBlocos = new IntersectionObserver(function (entradas, obs) {
            entradas.forEach(function (entrada) {
                if (entrada.isIntersecting) {
                    entrada.target.classList.add('visible');
                    obs.unobserve(entrada.target);
                }
            });
        }, { rootMargin: '0px 0px -60px 0px', threshold: 0.05 });
        blocos.forEach(function (bloco) { observadorBlocos.observe(bloco); });
    } else {
        blocos.forEach(function (bloco) { bloco.classList.add('visible'); });
    }

    // ---------- E-mails clicáveis (montados aqui para evitar spam) ----------
    document.querySelectorAll('.email-link').forEach(function (link) {
        const endereco = link.dataset.user + '@' + link.dataset.domain;
        link.href = 'mailto:' + endereco;
        link.textContent = endereco;
    });

    // ---------- Bolhas ----------
    const bolhasContainer = document.querySelector('.bolhas');
    if (bolhasContainer && !reduzirMovimento) {
        bolhasContainer.innerHTML = '';

        // Menos bolhas em telas pequenas para não pesar no celular
        const numBolhas = window.innerWidth < 768 ? 28 : 55;

        for (let i = 0; i < numBolhas; i++) {
            const bolha = document.createElement('span');

            const randomLeft = Math.random() * 100;
            const randomSize = Math.random() * 20 + 10;
            const randomDuration = Math.random() * 40 + 30;
            const randomDelay = Math.random() * 10;

            bolha.style.setProperty('--i', randomDuration);
            bolha.style.left = randomLeft + '%';
            bolha.style.width = randomSize + 'px';
            bolha.style.height = randomSize + 'px';
            bolha.style.animationDelay = randomDelay + 's';

            bolhasContainer.appendChild(bolha);
        }
    }
});
