const Usuarios = require('../model/usuarios')
const MSG = require('../model/msg')
const Chat = require('../model/chats')

module.exports = {
    async store(msg) {
        try {
             await new MSG(msg).save()
            return msg
        } catch (error) {
            console.log(error)
        }
    },
    async index(data) {
        let messages = await MSG.aggregate([{
            $match:{$or: [
                { sender_id: data.sender_id, recipient_id: data.recipient_id },
                { sender_id: data.recipient_id, recipient_id: data.sender_id }
            ]
        }}]).sort({data})
        console.log(messages)
        return messages
    }

}