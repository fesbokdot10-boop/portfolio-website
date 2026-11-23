const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

function toggleMenu() {
    const isOpen = navbar.classList.toggle('active');
    menuIcon.classList.toggle('bx-x');
    menuIcon.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    menuIcon.setAttribute('aria-expanded', String(isOpen));
}

menuIcon.addEventListener('click', toggleMenu);
menuIcon.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        toggleMenu();
    }
});

navbar.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
        menuIcon.classList.remove('bx-x');
        menuIcon.setAttribute('aria-label', 'Open navigation');
        menuIcon.setAttribute('aria-expanded', 'false');
    });
});