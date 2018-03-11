const express = require('express')
const bodyParser = require('body-parser')
const home = require('./routes/home')
const profile = require('./routes/profile')
const search = require('./routes/search')
const cors = require('cors')
require('dotenv').config()
const app = express()
const PORT = 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.use('/home', home)
app.use('/profile', profile)
app.use('/search', search)
// app.get('/', (req, res) => {
//   res.status(201).json({
//     message: 'Connected!'
//   })
// })

// Server
app.listen(PORT, () => {
  console.log(`Connected! on port ${PORT}`) 
})