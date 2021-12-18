async function animate(slides, controls) {
    let current_slide = 0;
    let slide_number = controls.getElementsByClassName('slide-number')[0];
    let last_swap = 0;
    let left_clicked = false;
    let right_clicked = false;

    for (let slide of slides) {
        slide.style.transitionDuration = '1000ms';
    }

    controls.getElementsByClassName('left-button')[0].onclick = () => {
        left_clicked = true;
    }

    controls.getElementsByClassName('right-button')[0].onclick = () => {
        right_clicked = true;
    }

    setInterval(() => {
        if (Date.now() - last_swap > 5000 || left_clicked || right_clicked) {
            if (left_clicked) {
                current_slide -= 1;
                if (current_slide < 0) {
                    current_slide = slides.length - 1;
                }

                left_clicked = false;
            }
            else {
                current_slide = (current_slide + 1) % slides.length;
                right_clicked = false;
            }

            slide_number.innerHTML = `${current_slide + 1} / ${slides.length}`;

            for (let i = 0; i < slides.length; i++) {
                for (let i = 0; i < slides.length; i++) {
                    if (i !== current_slide) {
                        slides[i].style.opacity = '0';
                    }
                    else {
                        slides[i].style.opacity = '100%';
                    }
                }
            }

            last_swap = Date.now();
        }
    }, 5);
}

window.addEventListener('load', () => {
    for (let carrousel of document.getElementsByClassName('carrousel')) {
        let slides = [];
        let controls = undefined;

        for (let child of carrousel.childNodes) {
            if (child.className === 'carrousel-slide') {
                slides.push(child);
            }

            if (child.className === 'carrousel-controls') {
                controls = child;
            }
        }

        animate(slides, controls);
    }
});