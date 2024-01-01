
const { userModel } = require('../models/user.model')
const { hashPassword, verifyPassword } = require('../utils/hashAndVerifyPassword')
const jwt = require('jsonwebtoken')

// register user
const register = async (req, res) => {

    try {


        const { name, email, password } = req.body

        const user = await userModel.findOne({ email })

        if (user) {

            res.json({ flag: false, message: 'User already exixts' })
        
        } else {

            // create the user
            const hashPass = await hashPassword(password)
            const newUser = new userModel({ name, email, password: hashPass })

            const newUserData = await newUser.save()

            console.log(newUserData)

            res.status(201).json({ flag: true, message: 'User registerd successfully, logIn to the app' })
        }
    } catch (error) {
        console.log('register -->', error)
        res.status(500).json({ flag: false, message: 'Internal Server error' })
    }
}

// login user
const login = async (req, res) => {

    const { email, password } = req.body

    const user = await userModel.findOne({ email })

    if (!user) {

        res.json({ flag: false, message: 'User is not present with this email, Create Account' })
    } else {

        const verify = await verifyPassword(password, user.password)
       
        if (!verify) {

            res.json({ flag: false, message: 'invalid credintials' })
        } else {

            // generate token
            const secretKey = process.env.SECRET_JWT_Key
            const token = jwt.sign(email, secretKey)

            res.status(200).json({ flag: true, message: 'User Logged in successfull', token: token })
        }
    }

}

module.exports = {

    register, login
}