'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
require('dotenv').config()

const twitter = require('./routes/twitter');;
// console.log(process.env.USER_SECRET)
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.use('/twitter', twitter);

app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`)
})