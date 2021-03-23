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

// social-menu START

; (function () {

    const socialMenu = document.querySelector('.social-menu__social');
    const socialMenuBtn = document.querySelector('.social-menu__btn');

    socialMenuBtn.addEventListener('click', () => {
        socialMenuBtn.classList.toggle('open');
        socialMenu.classList.toggle('open');
    });

})();

// social-menu END

// FAQ modals START

;(function () {
    
    if (document.querySelector('.questions')) {
        const questions = document.querySelectorAll('.questions ul li');
        const body = document.getElementsByTagName('body')[0];
        let modal = '';
        let div = document.createElement('div');
            div.classList.add('current-modal');

        questions.forEach(question => {
            question.addEventListener('click', () => {
                let title = question.children[0].textContent;
                let html = question.children[2].outerHTML;
                simpleModalCreate(title, html);
            });
        });

        function simpleModalCreate(title, html) {
            modal += `
                <div class="overlay overlay--active">
                    <div class="questions__close"></div>
                    <div class="questions-modal">
                        <h4>${title}</h4>
                        ${html}
                    </div>
                 </div>
            `;
            div.innerHTML = modal;
            body.appendChild(div);
            body.classList.add('oh');
        }

        function closeModal() {
            modal = '';
            div.innerHTML = modal;
            body.removeChild(div);
            body.classList.remove('oh')
        }
    
        window.addEventListener('click', (e) => {
            if (e.target.classList.contains('questions__close')) {
                document.querySelector('.questions-modal').classList.add('questions-modal--close');
                setTimeout(() => {
                    closeModal();
                }, 400);
            }

            if (e.target.closest('.questions-modal') && !e.target.closest('.questions__close')) {
                e.stopPropagation();
            } else if (e.target.closest('.overlay')) {
                document.querySelector('.questions-modal').classList.add('questions-modal--close');
                setTimeout(() => {
                    closeModal();
                }, 400);
            }
        });
    }
    
})();

// FAQ modals END

;(function (){

    if(document.getElementById('map')) {

        ymaps.ready(init);

        let myMap;

        function init(){    
            
            myMap = new ymaps.Map('map', {
                center: [56.817656, 53.211194],
                zoom: 16,
                controls: ['zoomControl']
            });

            let myGeoObjects = [];

            myMap.behaviors.disable('scrollZoom');
            myMap.behaviors.enable('drag');

            myGeoObjects = new ymaps.Placemark([56.817656, 53.211194],{
                balloonContentBody: 'Частный наркологический центр',
                },{
                iconLayout: 'default#image',
                // Путь до нашей картинки
                iconImageHref: '/wp-content/themes/narco-centr/assets/img/logo.png', 
                // Размер по ширине и высоте
                iconImageSize: [40, 47],
                // Смещение левого верхнего угла иконки относительно
                // её «ножки» (точки привязки).
                iconImageOffset: [-40, -60]
            });
            
            let clusterer = new ymaps.Clusterer({
                clusterDisableClickZoom: false,
                clusterOpenBalloonOnClick: false,
            });
            
            clusterer.add(myGeoObjects);
            myMap.geoObjects.add(clusterer);   
        }

    }

})();