const review__carusel = document.querySelector('.review__carusel');
const reviews__buttonLeft = document.querySelector('.reviews__button-left');
const reviews__buttonRight = document.querySelector('.reviews__button-right');

reviews__buttonLeft.addEventListener('click', () => {
    review__carusel.scrollBy({
left: -130,
    })
});

reviews__buttonRight.addEventListener('click', () => {
    review__carusel.scrollBy({
left: 130,
    })
});
