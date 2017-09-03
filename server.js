const express = require('express');
const app = express();
const router = require('../sudoku/server/routes/routes');
const path = require('path');
const bodyParser = require('body-parser');
const passport = require('passport');
const passportJWT = require('passport-jwt');

const logger = require('./server/utils/logging');
global.logger = logger;
global.log = logger.log;

app.use(bodyParser.urlencoded({
  extended: true,
  limit: '1mb'
}));

app.use(bodyParser.json({
  limit: '1mb'
}));

app.use(passport.initialize());
require('./server/services/authService').init(passport, passportJWT);

app.use(express.static(path.join(__dirname, 'dist')));

router(app);

app.listen(3000);

global.log('info', 'app running on port: 3000');

const mongo = require('./server/utils/mongo').init();
