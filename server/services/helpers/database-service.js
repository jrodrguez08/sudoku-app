module.exports.createEntity = (entity, params) => {
  return new Promise(
    (resolve, reject) => {
      entity.create(params)
        .then(resolve)
        .catch(reject);
    }
  );
};

module.exports.addManyEntities = (entity, params) => {
  return new Promise(
    (resolve, reject) => {
      entity.insertMany(params)
        .then(resolve)
        .catch(reject);
    }
  );
};

module.exports.addManyEntitiesIfNotExists = (entity, filter, params) => {
  return new Promise(
    (resolve, reject) => {
      let options = {new: true, upsert: true, setDefaultsOnInsert: true};
      Promise.all(params.map((p) => {
        let query = {};
        query[filter] = p[filter];
        return module.exports.findOneEntityAndUpdate(entity, query, p, options);
      }))
        .then(resolve)
        .catch(reject);
    }
  );
};

module.exports.findOneEntityAndUpdate = (entity, query, params, options) => {
  return new Promise(
    (resolve, reject) => {
      entity.findOneAndUpdate(query, params, options)
        .lean()
        .exec()
        .then(resolve)
        .catch(reject);
    }
  );
};

module.exports.getOneEntity = (entity, params) => {
  return new Promise(
    (resolve, reject) => {
      entity.findOne(params)
        .lean()
        .exec()
        .then(resolve)
        .catch(reject);
    }
  );
};

module.exports.getAllEntities = (entity, params, fields, sort) => {
  return new Promise(
    (resolve, reject) => {
      entity.find(params, fields)
        .sort(sort)
        .lean()
        .exec()
        .then(resolve)
        .catch(reject);
    }
  );
};

module.exports.countEntities = (entity, params) => {
  return new Promise(
    (resolve, reject) => {
      entity.find(params)
        .count()
        .lean()
        .exec()
        .then(resolve)
        .catch(reject);
    }
  );
};

module.exports.updateEntity = (entity, params) => {
  return new Promise(
    (resolve, reject) => {
      entity.findByIdAndUpdate(params.id, {$set: params.data}, {new: true})
        .lean()
        .exec()
        .then(resolve)
        .catch(reject);
    }
  );
};


module.exports.deleteEntity = (entity, params) => {
  return new Promise(
    (resolve, reject) => {
      entity.findByIdAndRemove(params.id)
        .exec()
        .then(resolve)
        .catch(reject);
    }
  );
};