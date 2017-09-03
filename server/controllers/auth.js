'use strict';

const processResponseWith = require('./helpers/process-response');
const authService = require('../services/auth-service');

module.exports.login = (req, res) => {
  processResponseWith(res, authService.login, req.body);
};
