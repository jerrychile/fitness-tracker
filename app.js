const express = require('express');
const path = require('path');

const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');

const userRoutes = require('./routes/userRoutes');

require('dotenv/config');

const app = express();

const DB = process.env.DB;

mongoose.connect(DB,{
    useNewUrlParser: true,
    useUnifiedTopology: true

}).then(con =>{
  console.log('Connected to DB');
})

app.use(morgan('dev'));

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/users/userRoutes', userRoutes);



app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

module.exports = app;