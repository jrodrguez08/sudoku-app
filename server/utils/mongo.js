let mongoose = require('mongoose');
let connection = mongoose.connection;
const uri = 'mongodb://localhost:27017/sudoku';

module.exports.init = () => {

  let connect = () => {
    mongoose.connect(uri, {
      reconnectTries: Number.MAX_VALUE,
      reconnectInterval: 1000,
      ssl: process.env.NODE_ENV === 'prod',
      useMongoClient: true
    }, (err, res) => {
      if (err) {
        global.log('Mongoose: Error connecting to: ', uri, err);
      } else {
        global.log('Mongoose: Succeeded connected to:', uri);
      }
    });
  };

  connection.on('error', () => {
    global.log('Mongoose: Could not connect to MongoDB.');
    mongoose.disconnect();
  });

  connection.on('disconnected', () => {
    global.log('Mongoose: Lost MongoDB connection.');
    /* TODO: For some reason, the reconnectInterval option doesnt work
     This is the workaround found that works.
     */
    setTimeout(connect, 15000);
  });

  connection.on('connected', () => {
    global.log('Mongoose: Connection established to MongoDB.');
  });

  connection.on('reconnected', () => {
    global.log('Mongoose: Reconnected to MongoDB.');
  });

  connect();
};
