const authController = require('./../controllers/auth');
const usersController = require('./../controllers/user');
const path = require('path');

module.exports = (app) => {

  //auth route
  app.post('/login', authController.login);

  //user routes
  app.get('/users', usersController.getUsers);
  app.get('/users/:id', usersController.getUserById);
  app.post('/users', usersController.addUser);
  app.put('/users', usersController.updateUser);
  app.delete('/users/:id', usersController.deleteUser);

  //SPA route
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../dist/index.html'));
  });

};
