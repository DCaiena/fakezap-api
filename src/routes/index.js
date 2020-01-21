const userRouter = require('./usuario.router')
const chatRouter = require('./chat.router')

module.exports = (server) =>{
    userRouter(server);
    chatRouter(server);
}