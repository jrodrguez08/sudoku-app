const _ = require('lodash');

let cleanUpIds = (data) => {
  let keysToOmit = ['__v'];
  if (_.isArray(data)) {
    return data.map((item) => {
      return _.omit(item, keysToOmit);
    });
  } else {
    return _.omit(data, keysToOmit);
  }
};

module.exports = (res, func, params) => {
  func(params)
    .then(data => {
      res.json({
        'status': 'success',
        'data': cleanUpIds(data)
      });
    })
    .catch(err => {
      // Log the error to get a more traceable info
      global.log('error', '%j', JSON.stringify(err, 0, 4));
      res.json({
        'status': 'error',
        'message': err.message,
        'code': err.code
      });
    });
};