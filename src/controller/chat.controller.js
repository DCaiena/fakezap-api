const Usuarios = require('../model/usuarios')
const MSG = require('../model/msg')
const Chat = require('../model/msg')

module.exports = {
    async store(req, res){
        res.json(true)
    }
}