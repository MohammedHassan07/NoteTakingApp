const { Schema, model } = require('mongoose')

const userSchema = new Schema({

    name: String,
    email: String,
    password: String

}, { timestamps: true })

const userModel = model('user', userSchema)
module.exports = { userModel }