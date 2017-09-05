'use strict';

const processResponseWith = require('./helpers/process-response');
const usersService = require('../services/user');

module.exports.getUsers = (req, res) => {
  processResponseWith(res, usersService.getUsers);
};

module.exports.getUserById = (req, res) => {
  const id = req.params.id;
  processResponseWith(res, usersService.getUserById, id);
};

module.exports.addUser = (req, res) => {
  processResponseWith(res, usersService.addUser, req.body);
};

module.exports.updateUser = (req, res) => {
  processResponseWith(res, usersService.updateUser, req.body);
};

module.exports.deleteUser = (req, res) => {
  const id = req.params.id;
  processResponseWith(res, usersService.deleteUserById, id);
};
