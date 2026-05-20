export function initNav() {
    const menu = document.querySelector('#menu-btn');
const navBar = document.querySelector('#nav-bar');
menu.addEventListener('click', () => {
    navBar.classList.toggle('open');
    menu.classList.toggle('open');
});
}