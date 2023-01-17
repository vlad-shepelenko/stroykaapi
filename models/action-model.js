const {Schema, model} = require('mongoose');

const ActionSchema = new Schema({
    product: {type: Schema.Types.ObjectId, ref: 'Product'},
    actionPercent: {type: Number, required: true}
})

module.exports = model('Action', ActionSchema)