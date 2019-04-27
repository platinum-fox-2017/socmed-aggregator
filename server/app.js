const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express();
app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(bodyParser.json())
require('dotenv').config()

const twatsRoutes = require('./routes/twatts.routes')
app.use(cors())
app.use('/', twatsRoutes)



app.listen(3000, () => console.log('Example app listening on port 3000!'))