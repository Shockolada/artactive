ymaps.ready(init);

  function init() {
    var myMap = new ymaps.Map(document.getElementById('map'), {
      center: [57.660259, 39.842565],
      zoom: 15,
      controls: ['zoomControl'],
      behaviors: ['drag'],
    });


      // var myPlacemark = new ymaps.GeoObject({
      //   geometry: {
      //       type: "Point",
      //       coordinates: [57.657235, 39.845805],
      //       iconLayout: 'default#image',
      //       iconImageHref: 'img/icon-map-marker.svg',
      //       iconImageSize: [30, 42],
      //   },
      // });

    var myPlacemark = new ymaps.Placemark([57.657235, 39.845805], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'img/svg/icon-map-marker.svg',
      iconImageSize: [25, 38],
    });

    myMap.geoObjects.add(myPlacemark);
  }
