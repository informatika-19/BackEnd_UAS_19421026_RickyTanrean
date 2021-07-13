const kameraModel = require('../model/kamera')
const { requestResponse } = require('../config')
const objectId = require('mongoose').Types.ObjectId
const { deleteImage } = require('../uploadConfig')

exports.insertkamera = (data) =>
  new Promise((resolve, reject) => {
    kameraModel.create(data)
    .then(() => resolve(requestResponse.sukses('Berhasil Input kamera')))
    .catch(() => reject(requestResponse.serverError))
})

exports.getAllkamera = () =>
  new Promise((resolve, reject) => {
    kameraModel.find({})
      .then(kamera=> resolve(requestResponse.suksesWithData(kamera)))
      .catch(error => reject(requestResponse.serverError))
  })

  exports.getbyId = (id) =>
  new Promise((resolve, reject) => {
    kameraModel.findOne({
      _id: objectId(id)
    }).then(kamera=> resolve(requestResponse.suksesWithData(kamera)))
    .catch(error => reject(requestResponse.serverError))
  })

  exports.edit = (data, id, changeImage) =>
  new Promise((resolve, reject) => {
    kameraModel.updateOne({
      _id: objectId(id)
    }, data)
      .then(() => {
        if (changeImage) {
          deleteImage(data.oldImage)
        }
        resolve(requestResponse.sukses('Berhasil Edit kamera'))
      }).catch(() => reject(requestResponse.serverError))
  })

  exports.delete = (id) =>
  new Promise((resolve, reject) => {
    kameraModel.findOne({
      _id: objectId(id)
    }).then(kamera => {
      kameraModel.deleteOne({
        _id: objectId(id)
      }).then(() => {
        deleteImage(kamera.image)
        resolve(requestResponse.sukses('Berhasil Delete kamera'))
      }).catch(()=> reject(requestResponse.serverError))
    })
  })