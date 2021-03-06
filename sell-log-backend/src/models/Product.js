const mongoose = require('mongoose');

const { Schema } = mongoose;

const ProductSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    discountRate: { type: Number, required: true, default: 0 },
    minCount: { type: Number, required: true, default: 0},
    thumbnailUrl: { type: String, required: true, default: '' },
    detailUrl: { type: String, required: true, default: '' },
    createdAt: { type: Date, default: Date.now }
});

global.Product = global.Product || mongoose.model('Product', ProductSchema);
module.exports = global.Product;