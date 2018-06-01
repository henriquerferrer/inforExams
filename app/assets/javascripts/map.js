$(window).load(function() {
  handler = Gmaps.build('Google');
  handler.buildMap({ provider: {zoom: 18}, internal: {id: 'map'}}, function(){
    markers = handler.addMarkers([
      {
        "lat": gon.lat,
        "lng": gon.lng,
        "infowindow": "hello!"
      }
    ]);
    handler.bounds.extendWith(markers);
    handler.map.centerOn({ lat: gon.lat, lng: gon.lng })
  });
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
 