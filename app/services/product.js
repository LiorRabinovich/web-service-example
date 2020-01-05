const { Product } = require('../../database/models');

module.exports = {
  create: newProductObject => Product.create(newProductObject),
  findAll: () => Product.findAll(),
  findById: productId => Product.findByPk(productId),
  updateById: (productId, newProductObject) =>
    Product.update(newProductObject, { where: { id: productId } }),
  destroyById: productId => Product.destroy({ where: { id: productId } }),
  isProductExist: productId => Product.count({ where: { id: productId } }),
};
