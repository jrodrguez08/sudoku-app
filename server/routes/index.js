const authController = require('./../controllers/auth');
const path = require('path');

module.exports = (app) => {

  app.post('/login', authController.login);

  //SPA route
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../dist/index.html'));
  });

};
