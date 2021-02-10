const express = require('express');


const app = express(); //create app
const server = require('http').Server(app); //create server
const io = require('socket.io')(server, {
    cors: {
        origin: '*',
        methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true
    }
}); //create socket


const rooms = new Map();

app.get('/rooms', (req, res) => {
    rooms.set('hello', '');
    res.json(rooms);
});


io.on('connection', (socket) => {
    console.log('user connected', socket.id);
}); //when user connected socket



server.listen(8888, (err) => {
    if (err) {
        throw Error(err);
    }
    console.log('Server Active');
});
