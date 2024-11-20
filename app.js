const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');

require('dotenv').config();

const indexRouter = require('./routes/index');
const webhookRouter = require('./routes/webhook');

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Error connecting to MongoDB:', err));

const app = express();

app.use(express.json());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/webhook', webhookRouter);

module.exports = app;
