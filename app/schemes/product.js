const Joi = require('joi');

module.exports = Joi.object().keys({
  name: Joi.string()
    .min(2)
    .max(20)
    .required(),
  description: Joi.string()
    .min(2)
    .max(100),
  price: Joi.number().required(),
});
