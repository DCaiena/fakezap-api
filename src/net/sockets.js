module.exports = server =>{
    const socketIo = require('socket.io')(server.server)

    socketIo.on( 'connection', (socket) =>{
        socket.on('lastMessagers', any =>{
        })
    })

}