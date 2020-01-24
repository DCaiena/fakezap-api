const messageController = require('../controller/chat.controller')

module.exports = server =>{
    const socketIo = require('socket.io')(server.server)

    socketIo.on( 'connection', (socket) =>{
     

        socket.on('getMessages', async data => {
            let msg = await messageController.index(data)
            socketIo.emit('allMsg', msg)
        })

        socket.on('send', async msg =>{
            messageController.store(msg)
            socketIo.emit('lastMessager', msg)
        })
    })


}