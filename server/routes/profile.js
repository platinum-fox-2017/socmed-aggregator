const routes = require('express').Router()
const { profile } = require('../controllers/index')

routes.get('/', profile)
// routes.get('/', (req, res) => {
//   res.status(201).json({
//     message: 'Connected!'
//   })
// })

module.exports = routes;