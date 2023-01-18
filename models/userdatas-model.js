const {Schema, model} = require('mongoose')

const UserdataSchema = new Schema({
    name: {type: String, required: false},
    surname: {type: String, required: false},
    bday: {type: String, required: false},
    phone: {type: String, required: false},
    user: {type: Schema.Types.ObjectId, ref: 'User'}
})

module.exports = model("Userdata", UserdataSchema);