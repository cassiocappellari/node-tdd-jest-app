const routes = require('express').Router()
const {User} = require('./app/models')

User.create({
    name: "Cássio",
    email: "cassiocappellari@gmail.com",
    password_hash: "123456789"
})

module.exports = routes