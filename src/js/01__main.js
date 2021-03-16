;(function () {

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
        if(target.closest('.header__bottom-inner')) {
            e.stopPropagation();
        } else if (target.closest('.header__bottom-wrapper') && (!target.closest('.header__bottom-inner'))) {
            menu.classList.remove('open');
            body.classList.remove('oh');
        }
    });
    // berger-menu END

})();