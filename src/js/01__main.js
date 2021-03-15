;(function () {

    // berger-menu START

    const burger = document.querySelector('.header__top-burger');
    const nemuClose = document.querySelector('.header__bottom-close');
    const menu = document.querySelector('.header__bottom');
    
    burger.addEventListener('click', () => {
        menu.classList.add('open');
    });

    nemuClose.addEventListener('click', () => {
        menu.classList.remove('open');
    });

    window.addEventListener('click', (e) => {
	    let target = e.target;
            if(target.closest('.header__bottom-inner') && !target.closest('.header__bottom-close')) {
                e.stopPropagation();
            } else if (target.closest('.header__bottom-wrapper'))
            menu.classList.remove('open');
	});

    // berger-menu END

})();