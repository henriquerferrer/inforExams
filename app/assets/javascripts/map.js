$(window).load(function() {
  handler = Gmaps.build('Google');
  x = navigator.geolocation;
  x.getCurrentPosition(success);
  function success(position){
    handler.buildMap({ provider: {zoom: 18}, internal: {id: 'map'}}, function(){
      markers = handler.addMarkers([
        {
          "lat": position.coords.latitude,
          "lng": position.coords.longitude,
          "infowindow": "hello!"
        }
      ]);
      handler.bounds.extendWith(markers);
      handler.map.centerOn({ lat: position.coords.latitude, lng: position.coords.longitude })
    });
  }
});

$(document).ready(function(){
  $("#result").on('show', function(){
    console.log(gon.randomSpot)
    handler = Gmaps.build('Google');
    handler.buildMap({ provider: {zoom: 18}, internal: {id: 'map'}}, function(){
      markers = handler.addMarkers([
        {
          "lat": gon.randomSpot.lat,
          "lng": gon.randomSpot.lng,
          "infowindow": "hello!"
        }
      ]);
      handler.bounds.extendWith(markers);
      handler.map.centerOn({ lat: gon.randomSpot.lat, lng: gon.randomSpot.lng} );
    });
  });
});
