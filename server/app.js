const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config()
const cors = require('cors');
var FB = require('fb');


const router = require('./routes');

const PORT = 3000;

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({
    extended:false
}));


app.use('/twatt', router);


app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
})
