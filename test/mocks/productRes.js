const productReqMock = require('./productReq');

module.exports = {
  ...productReqMock,
  id: expect.any(Number),
  createdAt: expect.any(String),
  updatedAt: expect.any(String),
};
