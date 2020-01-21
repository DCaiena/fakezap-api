const restify = require('restify')
const mongoose = require('mongoose')

const routes = require('./src/routes')

let server = restify.createServer({
    name:"Chat",
    version:"1.0"
})
const io = require('socket.io')(server.server);

server.use(restify.plugins.bodyParser({mapParams:true}))
server.use(restify.plugins.acceptParser(server.acceptable))
server.use(restify.plugins.queryParser({mapParams:true}))

routes(server)


server.use((req, res, next) =>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
    next()
})



io.on( 'connection', (socket) =>{
    socket.on('lastMessagers', any =>{
    })
})


mongoose.connect('mongodb+srv://caienawork:avatar@cluster0-to3u8.mongodb.net/chatApp?retryWrites=true&w=majority', { useCreateIndex:true, useFindAndModify:true, useNewUrlParser:true, useUnifiedTopology:true}, () =>{
    console.log('Tá online')
})

server.post('/send', (req, res, next) =>{
  try {
      console.log(req.body)
      res.json(true)
  } catch (error) {
      console.log(error)
  }

})

server.listen(3333, () =>{
    console.log("escutando")
})