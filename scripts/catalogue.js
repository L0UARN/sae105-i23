window.addEventListener('load', () => {
    let bio = document.getElementById('filtre-bio');
    let breton = document.getElementById('filtre-breton');

    bio.addEventListener('click', filtrer);
    breton.addEventListener('click', filtrer);
});

function filtrer() {
    let bio = document.getElementById('filtre-bio');
    let breton = document.getElementById('filtre-breton');

    for (let element of document.getElementsByClassName('produit')) {
        if (element.classList.contains('bio') && element.classList.contains('breton')) {
            element.style.opacity = (bio.checked || breton.checked || (!bio.checked && !breton.checked)) ? '100%' : '20%';
        }
        else if (element.classList.contains('bio')) {
            element.style.opacity = ((bio.checked && !breton.checked) || (!bio.checked && !breton.checked)) ? '100%' : '20%';
        }
        else if (element.classList.contains('breton')) {
            element.style.opacity = ((!bio.checked && breton.checked) || (!bio.checked && !breton.checked)) ? '100%' : '20%';
        }
        else {
            element.style.opacity = (!bio.checked && !breton.checked) ? '100%' : '20%';
        }
    }
}