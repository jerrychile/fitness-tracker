const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');

require('dotenv/config');


const DB = process.env.DB;

mongoose.connect(DB,{
    useNewUrlParser: true,
    useUnifiedTopology: true,

}).then(con =>{
  console.log('Connected to DB');
})


app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));



app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

module.exports = app;