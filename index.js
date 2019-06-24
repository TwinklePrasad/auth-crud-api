
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { mongoose } = require('./db.js');
var employeeController = require('./controllers/employeeController.js');
var userController = require('./controllers/userController.js');
var app = express();
app.use(bodyParser.json());
app.use(cors())
app.use(
    bodyParser.urlencoded({
        extended: false
    })
)

app.use(cors({ origin: 'http://localhost:4300' }));

app.listen(5000, () => console.log('Server started at port : 3000'));


app.use('/employees', employeeController);
app.use('/api', userController);