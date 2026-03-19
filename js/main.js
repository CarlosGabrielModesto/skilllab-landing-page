/* ============================================================
   SkillLab — JavaScript principal
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
    initTema();
    initNavbarScroll();
    initFAQ();
    initScrollReveal();
    initSmoothScroll();
    initMenuMobile();
});


/* Alterna entre tema claro e escuro, salva preferência */
function initTema() {
    const btn = document.getElementById('themeToggle');
    const temaSalvo = localStorage.getItem('theme');

    // Aplica tema salvo ou detecta preferência do sistema
    if (temaSalvo) {
        document.documentElement.setAttribute('data-theme', temaSalvo);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }

    btn.addEventListener('click', () => {
        const atual = document.documentElement.getAttribute('data-theme');
        const novo = atual === 'dark' ? 'light' : 'dark';

        document.documentElement.setAttribute('data-theme', novo);
        localStorage.setItem('theme', novo);
    });
}


/* Adiciona classe 'scrolled' na navbar ao rolar */
function initNavbarScroll() {
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    });
}


/* Accordion do FAQ — apenas um aberto por vez */
function initFAQ() {
    document.querySelectorAll('.faq-question').forEach((btn) => {
        btn.addEventListener('click', () => {
            const item = btn.parentElement;
            const aberto = item.classList.contains('open');

            // Fecha todos
            document.querySelectorAll('.faq-item').forEach((i) => i.classList.remove('open'));

            // Abre o clicado (se não estava aberto)
            if (!aberto) item.classList.add('open');
        });
    });
}


/* Revela elementos com classe 'rv' ao entrar na viewport */
function initScrollReveal() {
    const elementos = document.querySelectorAll('.rv');

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry, i) => {
                if (entry.isIntersecting) {
                    setTimeout(() => entry.target.classList.add('vis'), i * 60);
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    elementos.forEach((el) => observer.observe(el));
}


/* Rolagem suave para links âncora */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const alvo = document.querySelector(link.getAttribute('href'));
            if (alvo) alvo.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
}


/* Menu hamburguer para mobile */
function initMenuMobile() {
    const btn = document.getElementById('hamburger');
    const menu = document.querySelector('.nav-links');
    let aberto = false;

    btn.addEventListener('click', () => {
        aberto = !aberto;

        if (aberto) {
            Object.assign(menu.style, {
                display: 'flex',
                position: 'absolute',
                top: '100%',
                left: '0',
                right: '0',
                flexDirection: 'column',
                padding: '1.2rem',
                gap: '0.8rem',
                background: 'var(--bg-surface)',
                borderBottom: '1px solid var(--border)',
                backdropFilter: 'blur(20px)',
            });
        } else {
            menu.style.display = '';
        }
    });

    // Fecha menu ao clicar em um link
    menu.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            if (aberto) {
                aberto = false;
                menu.style.display = '';
            }
        });
    });
}
