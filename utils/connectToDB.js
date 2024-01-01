const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
const connectToDatabase = async () => {

    try {

        const DBURL = process.env.DBURL

        await mongoose.connect(DBURL)
        console.log('DB connected')
    } catch (error) {
        console.log(error)
    }

}

module.exports = { connectToDatabase }