const messageController = require('../controller/chat.controller')

module.exports = server =>{
    const socketIo = require('socket.io')(server.server)

    socketIo.on( 'connection', (socket) =>{
        // socket.on('lastMessager', any =>{
        //    let last =  messageController.index()
        //     socket.emit()
        // })

        socket.on('send', async msg =>{
            // messageController.store(msg)
            socketIo.emit('lastMessager', msg)
        })
    })

}