const cookieParser = require('cookie-parser');
const express = require('express');
const logger = require('morgan');
const path = require('path');

const indexRouter = require('./routes/index');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).json({
        type: 'FAILED',
        message: err.message
    })
})

module.exports = app;
