const jwt = require('jsonwebtoken')
const dotenve = require('dotenv')
dotenve.config()
const verifyToken = async (req, res, next) => {

    const token = req.headers.token
    const secretKey = process.env.SECRET_JWT_Key
    const verifiedUser = await jwt.verify(token, secretKey)

    if (!verifiedUser) {

        res.json({ flag: false, message: 'Something went wrong, Try to Log in agin' })
        return
    } else {

        req.email = verifiedUser
        next()
        return req.email
    }

}

module.exports = { verifyToken }