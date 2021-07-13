const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')

mongoose.connect('mongodb://localhost:27017/backend', {
    useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(() =>{
    console.log('connection successful')
}).catch((e) => {
    console.log(e)
    console.log('connection failed')
})  

const directory = path.join(__dirname, '/statics/')
app.use(express.static(directory))
app.use(cors())


app.use(bodyParser.json({
    extended: true,
    limit:'20mb'
  }))
  
  app.use(bodyParser.urlencoded({
    extended: true,
    limit:'20mb'
  }))

  app.use('/user/',require('./routes/user'))
  app.use('/order/',require('./routes/Order'))
  app.use('/kamera/',require('./routes/kamera'))

  app.listen(5000, () =>{
      console.log('server strated')
  })