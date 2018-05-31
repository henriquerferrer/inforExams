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
  
  $(window).ready(function() {
    $("#spotButton").click(function(){
      $("#place-name").append("<h1><%= @randomSpot %></h1>")

      handler = Gmaps.build('Google');
      handler.buildMap({ provider: {}, internal: {id: 'map'}}, function(){
        markers = handler.addMarkers([
          {
            "lat": 1,
            "lng": 1,
            "infowindow": "hello!"
          }
        ]);
        handler.bounds.extendWith(markers);
        handler.fitMapToBounds();
      });
    });
  });

  