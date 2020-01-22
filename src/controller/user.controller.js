const Users = require('../model/usuarios')

module.exports = {
    async store(req, res){
        try {
            let { nome_usuario, numero } = req.body
            let user = await Users.findOne({nome_usuario, numero})
            if(!user){
                let newUser = await new Users(req.body).save()
                res.json(newUser)
            }else{
                res.json(user)
            }
        } catch (error) {
            res.status(400)
            res.json(error)
        }
    },
    async index(req, res){
        try {
            let users = await Users.find()
            res.json(users)
        } catch (error) {
            res.status(400)
            res.json(error)
        }

    },
}