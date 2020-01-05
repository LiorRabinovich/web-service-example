class BadRequestError extends Error {
  constructor(message, data) {
    super(message);
    this.name = 'Bad Request Error';
    this.data = data.details.map(item => ({
      type: 'invalid_param',
      field: item.context.key,
      title: item.message,
    }));
    this.status = 400;
  }
}

module.exports = BadRequestError;
