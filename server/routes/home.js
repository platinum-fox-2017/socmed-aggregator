const routes = require('express').Router()
const { home, update } = require('../controllers/index')

routes.get('/', home)
routes.post('/', update)
// routes.get('/', (req, res) => {
//   res.status(201).json({
//     message: 'Connected!'
//   })
// })

module.exports = routes;