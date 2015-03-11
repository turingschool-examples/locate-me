var app = require('express')();
var http = require('http').Server(app);
var express = require('express');
var path = require('path');
var io = require('socket.io')(http);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
  console.log('Someone connected!');

  socket.on('changeLocation', function (data) {
    console.log('Someone has moved: ' + data.lat + ',' + data.long);
  });
});



http.listen(3000, function(){
  console.log('listening on *:3000');
});