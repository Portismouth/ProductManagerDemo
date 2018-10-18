const mongoose = require('mongoose');
const Product = mongoose.model('Product');

module.exports = {
  getAllProducts: (req, res) => {
    Product.find({}, (err, products) => {
      if (err) {
        res.json(err);
      } else {
        res.json(products);
      }
    });
  },
  getProdById: (req, res) => {},
  editProdById: (req, res) => {},
  deleteProdById: (req, res) => {},
  createProduct: (req, res) => {
    const NewProduct = new Product(req.body);
    console.log(NewProduct);
    NewProduct.save(err => {
      if(err) {
        res.json(err);
      } else {
        res.json(NewProduct);
      }
    })
  }
};
