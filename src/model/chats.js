const mongoose = require('mongoose')
const stringQuery = require('mongoose-string-query')
const timesTamp = require('mongoose-timestamp')

const chatSchema = new mongoose.Schema({
    user_one: String,
    user_two: String,
    lastMessager: String,
    date: Date
})

chatSchema.plugin(stringQuery)
chatSchema.plugin(timesTamp)

let Chat = mongoose.model('chat', chatSchema)

module.exports = Chat