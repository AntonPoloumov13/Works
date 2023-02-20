const mapClass = document.querySelector(".contacts__card-right")
if (mapClass) {
  ymaps.ready(init);

  function init() {
    const myMap = new ymaps.Map(
      "map", {
        center: [55.75467, 37.61855],
        zoom: 13,
        controls: ['geolocationControl', 'zoomControl']
      },
      {
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
      }
    );
    var myPlacemark = new ymaps.Placemark([55.76932, 37.63952], {}, {
      iconLayout: 'default#image',
      iconImageHref: '../../img/baloon.png',
      iconImageSize: [12, 12],
    });
    myMap.geoObjects
  .add(myPlacemark);

    myMap.controls.remove('geolocationControl');//
    myMap.controls.remove('searchControl');//
    myMap.controls.remove('trafficControl');//
    myMap.controls.remove('typeSelector');//
    myMap.controls.remove('fullscreenControl');//
    myMap.controls.remove('zoomControl');//
    myMap.controls.remove('rulerControl');//
  }
}
