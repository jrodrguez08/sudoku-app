const jwt = require('jsonwebtoken');
const User = require('../models/user');

let jwtOptions = {};

module.exports.init = (passport, JWT) => {
  const ExtractJwt = JWT.ExtractJwt;
  const JwtStrategy = JWT.Strategy;

  jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
  jwtOptions.secretOrKey = 'functionalSudoku';

  const strategy = new JwtStrategy(jwtOptions, (jwt_payload, next) => {

    User.findOne({id: jwt_payload.id}, (err, user) => {
      if (user) {
        next(null, user);
      }
      else {
        next(null, false);
      }
    });
  });

  passport.use(strategy);

};

module.exports.login = params => {

  return new Promise((resolve, reject) => {

    User.findOne({email: params.email}, (err, user) => {

      if (!user) {
        reject({message: 'User not found', code: 401});
      }
      if (user.password === params.password) {
        const payload = {id: user.id, username: params.username};
        const token = jwt.sign(payload, jwtOptions.secretOrKey);
        resolve({
          message: "ok",
          data: {
            token
          }
        });
      } else {
        reject({message: 'Password incorrect', code: 401});
      }
    });

  });

};
