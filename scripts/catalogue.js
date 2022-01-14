window.addEventListener('load', () => {
    let bio = document.getElementById('filtre-bio');
    let francais = document.getElementById('filtre-francais');

    bio.addEventListener('click', filtrer);
    francais.addEventListener('click', filtrer);
});

function filtrer() {
    let bio = document.getElementById('filtre-bio');
    let francais = document.getElementById('filtre-francais');

    for (let element of document.getElementsByClassName('produit')) {
        if (element.classList.contains('bio') && element.classList.contains('francais')) {
            element.style.opacity = (bio.checked || francais.checked || (!bio.checked && !francais.checked)) ? '100%' : '20%';
        }
        else if (element.classList.contains('bio')) {
            element.style.opacity = ((bio.checked && !francais.checked) || (!bio.checked && !francais.checked)) ? '100%' : '20%';
        }
        else if (element.classList.contains('francais')) {
            element.style.opacity = ((!bio.checked && francais.checked) || (!bio.checked && !francais.checked)) ? '100%' : '20%';
        }
        else {
            element.style.opacity = (!bio.checked && !francais.checked) ? '100%' : '20%';
        }
    }
}