const winston = require('winston');

winston.configure({
  transports: [
    new winston.transports.File({
      filename: './server.log',
      handleExceptions: true,
      json: true,
      maxsize: 5242880, //5MB
      maxFiles: 5,
      colorize: false
    }),
    new winston.transports.Console({
      handleExceptions: true,
      json: false,
      colorize: true
    })
  ]
});

module.exports = winston;