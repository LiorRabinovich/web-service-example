const response = require('../helpers/response');
const NotFoundError = require('../errors/notFound');
const productService = require('../services/product');

const _isProductExist = async productId => {
  if (!productId) return false;
  const isProductExist = await productService.isProductExist(productId);
  return isProductExist;
};

module.exports = {
  createProduct: async (req, res) => {
    const newProduct = await productService.create(req.body);

    res.send(
      response({
        data: newProduct,
        message: 'Product created',
      })
    );
  },
  getAllProducts: async (req, res) => {
    const allProducts = await productService.findAll();

    res.send(
      response({
        data: allProducts,
      })
    );
  },
  getProductById: async (req, res, next) => {
    const { productId } = req.params;

    if (!(await _isProductExist(productId))) {
      throw new NotFoundError('ProductId Not Found');
    }

    const product = await productService.findById(productId);

    res.send(
      response({
        data: product,
      })
    );
  },
  updateProduct: async (req, res) => {
    const { productId } = req.params;

    if (!(await _isProductExist(productId))) {
      throw new NotFoundError('ProductId Not Found');
    }

    await productService.updateById(productId, req.body);

    res.send(
      response({
        message: 'Product updated',
      })
    );
  },
  deleteProduct: async (req, res) => {
    const { productId } = req.params;

    if (!(await _isProductExist(productId))) {
      throw new NotFoundError('ProductId Not Found');
    }

    await productService.destroyById(productId);

    res.send(
      response({
        message: 'Product deleted',
      })
    );
  },
};
