const Joi = require('joi');

const BadRequestError = require('../errors/badRequest');

module.exports = schema => (req, res, next) => {
  const { error } = Joi.validate(req.body, schema);

  if (error !== null) {
    throw new BadRequestError('Bad Request', error);
  }

  next();
};
