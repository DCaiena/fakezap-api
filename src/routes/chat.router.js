const chatController = require('../controller/chat.controller')

module.exports = (server) => {
    server.post('/messages', chatController.store)
}