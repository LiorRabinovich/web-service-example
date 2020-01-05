const request = require('supertest');
const { execSync } = require('child_process');

const app = require('../../../app/app.js');
const { sequelize } = require('../../../database/models');

// Mocks
const productReqMock = require('../../mocks/productReq');
const productResMock = require('../../mocks/productRes');

describe('Product Controller', () => {
  beforeAll(async done => {
    try {
      execSync('npm run db:create');
      execSync('npm run db:migrate');
    } catch (error) {
      console.log('DB Error', error);
    }

    done();
  });

  afterAll(async done => {
    try {
      sequelize.close();
      execSync('npm run db:drop');
    } catch (error) {
      console.log('DB Error', error);
    }

    done();
  });

  describe('[POST] /products/', () => {
    it('should create a new product', async done => {
      const res = await request(app)
        .post('/products/')
        .send(productReqMock);

      expect(res.statusCode).toEqual(200);
      expect(res.body).toEqual({
        success: true,
        message: 'Product created',
        data: productResMock,
      });

      done();
    });
  });

  describe('[GET] /products/', () => {
    it('should get all products', async done => {
      const res = await request(app).get('/products/');

      expect(res.statusCode).toEqual(200);
      expect(res.body).toEqual({
        success: true,
        message: expect.any(String),
        data: expect.any(Array),
      });

      done();
    });
  });

  describe('[GET] /products/:productId', () => {
    it('should get product by product id', async done => {
      const res = await request(app).get('/products/1');

      expect(res.statusCode).toEqual(200);
      expect(res.body).toEqual({
        success: true,
        message: expect.any(String),
        data: expect.any(Object),
      });

      done();
    });
  });

  describe('[PUT] /products/:productId', () => {
    it('should update product', async done => {
      const res = await request(app)
        .put('/products/1')
        .send({
          ...productReqMock,
          name: 'new product name',
        });

      expect(res.statusCode).toEqual(200);
      expect(res.body).toEqual({
        success: true,
        message: 'Product updated',
        data: expect.any(Array),
      });

      done();
    });
  });

  describe('[DELETE] /products/:productId', () => {
    it('should delete product by product id', async done => {
      const res = await request(app).delete('/products/1');

      expect(res.statusCode).toEqual(200);
      expect(res.body).toEqual({
        success: true,
        message: 'Product deleted',
        data: expect.any(Object),
      });

      done();
    });
  });
});
