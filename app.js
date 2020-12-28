const path = require('path');
var express = require('express');
const helmet = require('helmet');
var createError = require('http-errors');
var cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var compression = require('compression');
let wiki = require('./wiki.js')
var app = express();
let catalog = require('./routes/catalog')
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
let dev_db_url = "mongodb+srv://AlphaMike:Ali54561ali@cluster0.vu77b.mongodb.net/local_library?retryWrites=true&w=majority";
let mongoDB = process.env.MONGODB_URI || dev_db_url
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(helmet());
app.use(compression());
mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true});
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.use('/wiki' , wiki);
app.use('/' , indexRouter)
app.use('/catalog' , catalog)
module.exports = app;
