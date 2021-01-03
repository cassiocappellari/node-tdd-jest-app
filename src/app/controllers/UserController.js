const {User} = require('../models')

class UserController {
    async post(req, res) {
        const {
            name,
            email,
            password
        } = req.body

        const user = {
            name,
            email,
            password
        }

        const results = await User.findOne({where: {email}})

        if(results) {
            const userEmail = results.dataValues.email
    
            if (userEmail === email) {
                return res.status(401).json({message: 'user already registered'})
            }
        }

        try {
            await User.create(user)
        } catch (err) {
            return res.status(400).json({message: 'error creating user'})
        }

        return res.status(200).json({message: 'user created'})
    }
}

module.exports = new UserController()