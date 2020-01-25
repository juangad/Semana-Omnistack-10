const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const cors = require('cors')

const app = express()

mongoose.connect('mongodb+srv://geral:geral@cluster0-jraao.mongodb.net/omni10?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false 
})

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3333)