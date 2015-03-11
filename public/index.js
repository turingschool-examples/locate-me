var socket = io();

var watchID = navigator.geolocation.watchPosition(function(position) {
  console.log(position.coords.latitude, position.coords.longitude);
  socket.emit('changeLocation', {
    lat: position.coords.latitude,
    long: position.coords.longitude
  });
});