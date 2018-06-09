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
    $("#place-lat").html(position.coords.latitude)
    $("#place-lng").html(position.coords.longitude)
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

function randomize(){
  var meters = document.getElementById("meters").value;
  meters = meters*1000
  types = [];
  $("input:checkbox[name=type]:checked").each(function(){
    types.push($(this).val());
  });
  console.log(types)
  x = navigator.geolocation;
  x.getCurrentPosition(success);
  function success(position){
    var latitude = position.coords.latitude
    var longitude = position.coords.longitude
    $.ajax({
        type: 'GET',
        url: "randomize",
        data: {latitude: latitude, longitude: longitude, meters: meters, types: types}
    });
  }
}
