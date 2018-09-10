var io = require('socket.io-client');
var port = process.env.PORT || 3000;

var socket = io('http://127.0.0.1:' + port, {
    autoConnect: false,
    transports: ['websocket']
});
socket.on('connect', function () {
    socket.emit('foo', 1, 'bar');

    process.exit(0);
});
socket.connect();