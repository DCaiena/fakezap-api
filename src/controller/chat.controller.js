const Usuarios = require('../model/usuarios')
const MSG = require('../model/msg')
const Chat = require('../model/chats')

module.exports = {
    async store(msg){
        //na primeira menssagem é criado um chat 
        //o chat possui os elementos 
        //ele verifica se ja existe um chat com aqueles elementos, se n existir entao é criado o primeiro, se existir ele passa a armazernar informações la
        try {

            let messager = await new MSG(msg).save()
        
            let thereIsChat = await Chat.findOne(
            { 
                user_one: msg.sender_id,
                user_two: msg.recipient_id,
            })
            
            if(!thereIsChat){
                await new Chat({  
                    user_one: msg.sender_id,
                    user_two: msg.recipient_id,
                    lastMessager_id: messager._id,
                    date: new Date()
                }).save()
            }else{
                await Chat.findByIdAndUpdate({_id: thereIsChat._id}, {lastMessager_id: messager._id})
            }
            return msg
        } catch (error) {
            console.log(error)
        }
      
    },

}