const { Schema, model } = require('mongoose')

const OrderSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    products: { type: Array, required: true },
    status: { type: String, required: true },
    date: { type: Date, required: true }
})

module.exports = model('Order', OrderSchema);