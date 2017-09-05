'use strict';

const processResponseWith = require('./helpers/process-response');
const authService = require('../services/auth');

module.exports.login = (req, res) => {
  processResponseWith(res, authService.login, req.body);
};
