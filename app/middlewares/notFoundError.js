/* eslint-disable no-unused-vars */
const NotFoundError = require('../errors/notFound');

module.exports = (req, res, next) => {
  throw new NotFoundError('Not Found');
};
