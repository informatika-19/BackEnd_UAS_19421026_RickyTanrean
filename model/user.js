const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String
    },
    namaLengkap: {
        type: String
    },
    Email: {
        type: String
    },
    password: {
        type: String
    },
    level: {
        type: Number,
        default: 2
    }
})

module.exports = mongoose.model('user', userSchema)