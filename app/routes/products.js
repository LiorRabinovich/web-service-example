const express = require('express');

const router = express.Router();

const asyncHandler = require('../helpers/asyncHandler');
const validateBody = require('../helpers/validateBody');

const productScehma = require('../schemes/product');

const {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} = require('../controllers/products.js');

router.post('/', validateBody(productScehma), asyncHandler(createProduct));

router.get('/', asyncHandler(getAllProducts));

router.get('/:productId', asyncHandler(getProductById));

router.put(
  '/:productId',
  validateBody(productScehma),
  asyncHandler(updateProduct)
);

router.delete('/:productId', asyncHandler(deleteProduct));

module.exports = router;
