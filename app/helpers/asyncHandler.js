module.exports = callback =>
  function(req, res, next) {
    callback(req, res, next).catch(next);
  };
