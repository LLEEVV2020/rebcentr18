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
                iconImageHref: './wp-content/themes/twentytwenty-child/img/logo.png', 
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