const response = require('../helpers/response');

module.exports = (error, req, res, next) => {
  res.status(error.status || 500);

  res.send(
    response({
      success: false,
      message: error.message || 'Unexpected error',
      data: error.data,
    })
  );
};
