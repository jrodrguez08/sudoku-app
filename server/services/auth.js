const jwt = require('jsonwebtoken');

let jwtOptions = {};

module.exports.init = (passport, JWT) => {
  const ExtractJwt = JWT.ExtractJwt;
  const JwtStrategy = JWT.Strategy;

  jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeader();
  jwtOptions.secretOrKey = 'DiegoTCU';

  const strategy = new JwtStrategy(jwtOptions, (jwt_payload, next) => {
    //user jwt_payload.id to find user data
    const user = {
      name: 'Diego',
      email: 'diego@castro.com',
      subjectName: 'Info'
    };
    if (user) {
      next(null, user);
    } else {
      next(null, false);
    }
  });

  passport.use(strategy);
};

module.exports.login = params => {
  return new Promise((resolve, reject) => {
    //use params.username to find the user on the users table
    const user = {
      id: 1234,
      password: 12345
    };
    if (!user) {
      reject({ message: 'User not found', code: 401 });
    }
    if (user.password === params.password) {
      const payload = { id: user.id, username: params.username };
      const token = jwt.sign(payload, jwtOptions.secretOrKey);
      resolve({
        message: "ok",
        data: {
          token
        }
      });
    } else {
      reject({ message: 'Password incorrect', code: 401 });
    }
  });
};
