window.addEventListener('load', () => {
    let ouvert = false;
    let menu = document.getElementById('nav-menu');

    document.getElementById('burger-activator').addEventListener('click', () => {
        ouvert = !ouvert;
        menu.style.height = ouvert ? 'auto' : '3.5em';
    });
});