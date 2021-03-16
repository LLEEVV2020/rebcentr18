; (function () {

    // berger-menu START

    const burger = document.querySelector('.header__top-burger');
    const nemuClose = document.querySelector('.header__bottom-close');
    const overlay = document.querySelector('.header__bottom-wrapper');
    const menu = document.querySelector('.header__bottom');
    const body = document.getElementsByTagName('body')[0];


    burger.addEventListener('click', () => {
        menu.classList.add('open');
        body.classList.add('oh');
    });

    nemuClose.addEventListener('click', () => {
        menu.classList.remove('open');
        body.classList.remove('oh');
    });

    overlay.addEventListener('click', (e) => {
        let target = e.target;
        if (target.closest('.header__bottom-inner')) {
            e.stopPropagation();
        } else if (target.closest('.header__bottom-wrapper') && (!target.closest('.header__bottom-inner'))) {
            menu.classList.remove('open');
            body.classList.remove('oh');
        }
    });

})();
// berger-menu END


// price START
; (function () {

    const priceCards = document.querySelectorAll('.price-card');
    const priceBtns = document.querySelectorAll('.price-card__btn');


    priceCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            if (!card.classList.contains('price-card--violet')) {
                card.classList.add('price-card--active');
            }
        });

        card.addEventListener('mouseleave', () => {
            if (!card.classList.contains('price-card--violet')) {
                card.classList.remove('price-card--active');
            }
        });
    });

    priceBtns.forEach((btn, i) => {
        btn.addEventListener('mouseenter', e => {
            priceCards[i].classList.remove('price-card--active');
        });
    });

    priceBtns.forEach((btn, i) => {
        btn.addEventListener('mouseleave', e => {
            priceCards[i].classList.add('price-card--active');
        });
    });

})();
    // price END

