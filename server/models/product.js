const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, minlength: 4 },
    price: { type: Number, required: true },
    imageUrl: { type: String, default: '' }
  },
  { timestamps: true }
);

const Product = mongoose.model('Product', ProductSchema);