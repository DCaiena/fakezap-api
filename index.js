const routes = require('./src/routes')
const restify = require('restify')
const serverConfig = require('./src/config')
const socketActions = require( './src/net/sockets')
let server = restify.createServer({name:"Chat",version:"1.0"})



serverConfig(server)
socketActions(server)
routes(server)

