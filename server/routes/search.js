const routes = require('express').Router()
const { search } = require('../controllers/index')

routes.get('/:q', search)
// routes.get('/', (req, res) => {
//   res.status(201).json({
//     message: 'Connected!'
//   })
// })

module.exports = routes;