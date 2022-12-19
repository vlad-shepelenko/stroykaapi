const { Schema, model } = require('mongoose')

const BrandsSchema = new Schema({
    brandName: {type: String, unique: true, required: true},
    brandImage: {type: String, required: true}
})

module.exports = model('Brand', BrandsSchema);