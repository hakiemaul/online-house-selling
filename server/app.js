const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
var houses = require('./routes/houses')

var app = express()

var db_config = {
  development: 'mongodb://localhost/online-house',
  test: 'mongodb://localhost/online-house-test'
}

var current_env = app.settings.env

mongoose.connect(db_config[current_env])

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/houses', houses);

app.listen(3000)

module.exports = app;