const { Schema, model } = require('mongoose')

const SupplierSchema = new Schema({
    supplierName: { type: String, unique: true, required: true }
})

module.exports = model('Supplier', SupplierSchema);