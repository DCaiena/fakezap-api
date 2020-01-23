const mongoose = require('mongoose');
const timesTamp = require('mongoose-timestamp')
const stringQuery = require('mongoose-string-query')


const msgSchema = new mongoose.Schema({
    sendBy: String,
    sender_id: String,
    recipient_id: String,
    body: String,
    date: Date
})

msgSchema.plugin(timesTamp)
msgSchema.plugin(stringQuery)

let MSG = mongoose.model('messages', msgSchema)
module.exports = MSG