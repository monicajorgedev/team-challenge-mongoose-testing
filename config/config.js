const mongoose = require('mongoose')
require('dotenv').config()

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.URI)
        console.log('Database connection OK')
    } catch (err) {
    throw new Error ({ err: 'Database connection FAILED' })
    }
}

module.exports = dbConnection