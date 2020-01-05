const { Product } = require('../../../database/models');
const productService = require('../../../app/services/product');

describe('Product Controller', () => {
  describe('create', () => {
    it('should called once to create method in product model with the right args', async () => {
      // Prepare
      Product.create = jest.fn();
      const newProductObject = expect.any(Object);

      // Execute
      await productService.create(newProductObject);

      // Assert
      expect(Product.create).toBeCalledTimes(1);
      expect(Product.create).toBeCalledWith(newProductObject);
    });
  });

  describe('findAll', () => {
    it('should called once to findAll method in product mode', async () => {
      // Prepare
      Product.findAll = jest.fn();

      // Execute
      await productService.findAll();

      // Assert
      expect(Product.findAll).toBeCalledTimes(1);
    });
  });

  describe('findById', () => {
    it('should called once to findByPk method in product mode with the right args', async () => {
      // Prepare
      Product.findByPk = jest.fn();
      const productId = expect.any(Number);

      // Execute
      await productService.findById(productId);

      // Assert
      expect(Product.findByPk).toBeCalledTimes(1);
      expect(Product.findByPk).toBeCalledWith(productId);
    });
  });

  describe('updateById', () => {
    it('should called once to update method in product mode with the right args', async () => {
      // Prepare
      Product.update = jest.fn();
      const productId = expect.any(Number);
      const newProductObject = expect.any(Object);

      // Execute
      await productService.updateById(productId, newProductObject);

      // Assert
      expect(Product.update).toBeCalledTimes(1);
      expect(Product.update).toBeCalledWith(newProductObject, {
        where: { id: productId },
      });
    });
  });

  describe('destroyById', () => {
    it('should called once to destroy method in product mode with the right args', async () => {
      // Prepare
      Product.destroy = jest.fn();
      const productId = expect.any(Number);

      // Execute
      await productService.destroyById(productId);

      // Assert
      expect(Product.destroy).toBeCalledTimes(1);
      expect(Product.destroy).toBeCalledWith({ where: { id: productId } });
    });
  });

  describe('isProductExist', () => {
    it('should called once to count method in product mode with the right args', async () => {
      // Prepare
      Product.count = jest.fn();
      const productId = expect.any(Number);

      // Execute
      await productService.isProductExist(productId);

      // Assert
      expect(Product.count).toBeCalledTimes(1);
      expect(Product.count).toBeCalledWith({ where: { id: productId } });
    });
  });
});
