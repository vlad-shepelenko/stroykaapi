const { Schema, model } = require('mongoose')

const SubcategorySchema = new Schema({
    subcategoryName: { type: String, unique: true, required: true },
    categoryName: { type: Schema.Types.ObjectId, ref: 'Category' }
})

module.exports = model('Subcategory', SubcategorySchema);