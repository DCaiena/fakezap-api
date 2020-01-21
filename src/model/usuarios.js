const mongoose = require('mongoose')
const stringQuery = require('mongoose-string-query')
const timesTamp = require('mongoose-timestamp')

const usuarioSchema = new mongoose.Schema({
    nome_usuario: String,
    numero: String
})

usuarioSchema.plugin(stringQuery)
usuarioSchema.plugin(timesTamp)

let Usuario = mongoose.model('usuarios', usuarioSchema)

module.exports = Usuario