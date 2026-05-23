export function initNav() {
    const menu = document.querySelector('#menu-btn');
const navBar = document.querySelector('#nav-bar');
menu.addEventListener('click', () => {
    navBar.classList.toggle('open');
    menu.classList.toggle('open');
});

// WayFinding
const currentPath = window.location.pathname;
const navLinks = document.querySelectorAll('#nav-bar a');

navLinks.forEach((link) => {
    if (currentPath.includes(link.getAttribute('href'))) {
        link.classList.add('active');
    }
});
}