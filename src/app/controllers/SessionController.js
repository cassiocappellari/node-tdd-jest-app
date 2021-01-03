const {User} = require('../models')

class SessionController {
    async show(req, res) {
        return res.status(200).json({message: 'User is authorized to access the Dashboard'})
    }
    async store(req, res) {
        const {email, password} = req.body

        const user = await User.findOne({where: {email}})

        if (!user) {
            return res.status(401).json({message: 'User not found'})
        }

        if (!(await user.checkPassword(password))) {
            return res.status(401).json({message: 'Invalid password'})
        }

        return res.json({
            user,
            token: user.generateToken()
        })
    }
}

module.exports = new SessionController()