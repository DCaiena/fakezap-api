const mongoose = require('mongoose')
const stringQuery = require('mongoose-string-query')
const timesTamp = require('mongoose-timestamp')

const chatSchema = new mongoose.Schema({
    nome_usuario: String,
    numero: String
})

chatSchema.plugin(stringQuery)
chatSchema.plugin(timesTamp)

let Chat = mongoose.model('chat', chatSchema)

module.exports = Chat