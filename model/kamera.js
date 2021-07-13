const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MovieSchema = new Schema({
    namabarang: {
        type: String
    },
    harga: {
        type: Number
    },
    super: {
        type: String
    },
    typebarang: {
        type: String
    },
    rating: {
        type: Number,
        default: 0
    },
    deskripsi: {
        type: String
    },
    image: {
        type: String
    }
})

module.exports = mongoose.model('kamera', MovieSchema)