const mapClass = document.querySelector(".contacts__map")
if (mapClass) {
  ymaps.ready(init);

  function init() {
    var points = [
      "Москва, SitDownPls на Солянке м. Китай-город, ул. Солянка, д.24",
      "Москва, SitDownPls на Покровке м. Курская, ул. Покровка, д.14"
    ];

    var find = function (points, find) {
      return points.filter(function (value) {
          return (value + "").toLowerCase().indexOf(find.toLowerCase()) != -1;
      });
  };
  var myProvider = {
    suggest: function (request, options) {
        var res = find(points, request),
            arrayResult = [],
            results = Math.min(options.results, res.length);
            for (var i = 0; i < results; i++) {
                arrayResult.push({displayName: res[i], value: res[i]})
            }
        return ymaps.vow.resolve(arrayResult);
    }
  }
  var suggestView = new ymaps.SuggestView('search-input', {provider: myProvider, results: 2});
  const myMap = new ymaps.Map(
    "map",
    {
      center: [55.755494501090126,37.64353399999998],
      zoom: 14.5,
    },
  );
  const myPlacemark = new ymaps.Placemark([55.750615568993275,37.64180899999995], {
    balloonContent: `
          <div class="contacts__balloon balloon">
          <div class="balloon__top">
            <h2 class="balloon__title">SitDownPls на Солянке </h2>
            <address class="balloon__address">м. Китай-город, ул. Солянка, д.24</address>
            <a href="tel:+74958854547" class="balloon__link">
              <svg class="balloon__svg" width="22" height="22">
                <use xlink:href="./img/svg/sprites.svg#tel"></use>
              </svg>
              +7 (495) 885-45-47
            </a>
          </div>
          <div class="balloon__center">
            <p class="balloon__clockwork"><span class="balloon__span">Часы работы:</span> с 10:00 до 21:00</p>
          </div>
          <div class="balloon__bottom">
            <p class="balloon__descr">
              <span class="balloon__span">Что здесь:</span> шоурум, пункт отгрузки, пункт выдачи, пункт обмена-возврата, сервисный центр
            </p>
          </div>
        </div>
    `
  }, {
      iconLayout: "default#image",
      iconImageHref: "./img/map-slone.svg",
      iconImageSize: [32, 22],
      iconImageOffset: [0, 0],
      hideIconOnBalloonOpen: false,
      balloonOffset: [0, -10]
    }
  );

  const myPlacemark2 = new ymaps.Placemark([55.75863431277058,37.64210467193599], {
    balloonContent: `
          <div class="contacts__balloon balloon">
          <div class="balloon__top">
            <h2 class="balloon__title">SitDownPls на Покровке </h2>
            <address class="balloon__address">м. Курская, ул. Покровка, д.14</address>
            <a href="tel:+74958854547" class="balloon__link">
              <svg class="balloon__svg" width="22" height="22">
                <use xlink:href="./img/svg/sprites.svg#tel"></use>
              </svg>
              +7 (495) 885-45-47
            </a>
          </div>
          <div class="balloon__center">
            <p class="balloon__clockwork"><span class="balloon__span">Часы работы:</span> с 10:00 до 21:00</p>
          </div>
          <div class="balloon__bottom">
            <p class="balloon__descr">
              <span class="balloon__span">Что здесь:</span> шоурум, пункт отгрузки, пункт выдачи, пункт обмена-возврата, сервисный центр
            </p>
          </div>
        </div>
    `
  }, {
      iconLayout: "default#image",
      iconImageHref: "./img/map-slone.svg",
      iconImageSize: [32, 22],
      iconImageOffset: [0, 0],
      balloonOffset: [0, -10],
      hideIconOnBalloonOpen: false,
    }
  );

    myMap.controls.remove('geolocationControl'); // удаляем геолокацию
    myMap.controls.remove('searchControl'); // удаляем поиск
    myMap.controls.remove('trafficControl'); // удаляем контроль трафика
    myMap.controls.remove('typeSelector'); // удаляем тип
    myMap.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    myMap.controls.remove('zoomControl'); // удаляем контрол зуммирования
    myMap.controls.remove('rulerControl'); // удаляем контрол правил
    myMap.geoObjects.add(myPlacemark);
    myMap.geoObjects.add(myPlacemark2);
    myPlacemark.balloon.open();
    myPlacemark2.balloon.open();
  }




  // для позднего появления карты

  // let flag = 0;

  // window.addEventListener("scroll", function () {
  //   let scrollY = window.scrollY;
  //   let mapOffset = this.document.querySelector("#map").offsetTop;
  //   if (scrollY >= mapOffset - 1000 && flag == 0) {
  //     ymaps.ready(init);

  //       function init() {
  //       const myMap = new ymaps.Map(
  //         "map",
  //         {
  //           center: [55.76963601332982,37.63668850000002],
  //           zoom: 14,
  //         },
  //       );
  //       var myPlacemark = new ymaps.Placemark([55.76963601332982,37.63668850000002], {}, {
  //         iconLayout: 'default#image',
  //         iconImageHref: '../../img/baloon.png',
  //         iconImageSize: [12, 12],
  //       });

  //       myMap.geoObjects.add(myPlacemark);
  //     }
  //     flag = 1;
  //   }

  // })
}



// html

/*
        <div class="contacts__map" id="map"></div>
<script src="https://api-maps.yandex.ru/2.1/?apikey=&lang=ru_RU"></script>

*/
