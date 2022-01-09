window.addEventListener('load', () => {
    let burger = document.getElementById('burger');
    let menu = document.getElementById('menu');
    let ouvert = false;

    burger.onclick = () => {
        menu.style.height = ouvert ? '4em' : 'fit-content';
        ouvert = !ouvert;
    };
});