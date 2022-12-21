const {Schema, model} = require('mongoose')

const CartSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    product: {type: Schema.Types.ObjectId, ref: 'Product'},
    count: {type: Number}
})

module.exports = model('Cart', CartSchema);