const cors = require('cors')
const mongoose = require('mongoose')
const restify = require('restify')

function serverConfig(server){
    //CORS && PLUGINS
    server.use(cors());
    server.use(restify.plugins.bodyParser({mapParams:true}));
    server.use(restify.plugins.acceptParser(server.acceptable));
    server.use(restify.plugins.queryParser({mapParams:true}));
    //HEADERS
    server.use((req, res, next) =>{
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
        next()
    })
    //MONGO CONNECTION
    mongoose.connect('mongodb+srv://caienawork:avatar@cluster0-to3u8.mongodb.net/chatApp?retryWrites=true&w=majority', { useCreateIndex:true, useFindAndModify:true, useNewUrlParser:true, useUnifiedTopology:true}, () =>{
        console.log('Tá online')
    })
    //SERVER LISTEN
    server.listen(3333, () =>{
        console.log("escutando")
    })



}

module.exports = serverConfig