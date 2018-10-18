const products = require('../controllers/products.js');

module.exports = function(app) {
  app.route('/api/products')
    .get(products.getAllProducts)
    .post(products.createProduct)
  
  app.route('/api/product/:id')
    .get(products.getProdById)
    .put(products.editProdById)
    .delete(products.deleteProdById)
};
