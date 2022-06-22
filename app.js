const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// const indexRouter = require("./routes/index")
const authRouter = require('./routes/auth');
const usersRouter = require('./routes/users');

require('dotenv').config();

const app = express();
//CONFIGS
require('./configs/mongoose.config');
require('./configs/middleware.config')(app);
require('./configs/session.config')(app);

// view engine setup
app.set('views', path.join(__dirname, 'views'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser('secret'));
app.use(express.static(path.join(__dirname, 'public')));

// app.use("/", indexRouter);
app.use('/api/auth', authRouter);
app.use('/api/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

module.exports = app;
