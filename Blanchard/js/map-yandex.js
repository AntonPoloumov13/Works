ymaps.ready(init);
        function init(){

            var myMap = new ymaps.Map("map", {
              center: [55.759861, 37.610557],
              zoom: 14,
              controls: ['geolocationControl', 'zoomControl']
            }, {
              suppressMapOpenBlock: true,
              geolocationControlSize: "large",
              geolocationControlPosition: {
                top: "330px",
                right: "20px"
              },
              geolocationControlFloat: 'none',
              zoomControlSize: "small",
              zoomControlFloat: "none",
              zoomControlPosition: {
                top: "250px",
                right: "20px"
              }
            });
            myPlacemark = new ymaps.Placemark(myMap.getCenter(48.86, 2.35), {} , {
             // Опции.
              // Необходимо указать данный тип макета.
              iconLayout: 'default#image',
              // Своё изображение иконки метки.
              iconImageHref: './img/map-marker.svg',
              // Размеры метки.
              iconImageSize: [20, 20],
              // Смещение левого верхнего угла иконки относительно
              // её "ножки" (точки привязки).
              //iconImageOffset: [-5, -38]
          }),
          myMap.geoObjects
        .add(myPlacemark)
        }
