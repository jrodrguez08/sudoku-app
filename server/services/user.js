'use strict';

const _ = require('lodash');
const User = require('../models/user');
const databaseService = require('./helpers/database-service');

module.exports.getUsers = () => {
  return databaseService.getAllEntities(User);
};

module.exports.addUser = user => {
  return databaseService.createEntity(User, user);
};

module.exports.getUserById = id => {
  return databaseService.getOneEntity(User, { _id: id });
};

module.exports.updateUser = user => {
  return databaseService.updateEntity(User, { id: user._id, data: user })
};

module.exports.deleteUserById = id => {
  return databaseService.deleteEntity(User, { id });
};
