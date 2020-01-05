class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = 'Not Found Error';
    this.status = 404;
  }
}

module.exports = NotFoundError;
