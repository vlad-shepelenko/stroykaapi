const { Schema, model } = require('mongoose')

const ProductSchema = new Schema({
    productName: { type: String, required: true },
    productPrice: { type: Number, required: true },
    productDescription: { type: String, required: true },
    productAvailability: { type: Boolean, required: true },
    subcategoryName: { type: Schema.Types.ObjectId, ref: 'Subcategory' },
    brandName: { type: Schema.Types.ObjectId, ref: 'Brands' },
    supplierName: { type: Schema.Types.ObjectId, ref: 'Supplier' }
})

module.exports = model('Product', ProductSchema)