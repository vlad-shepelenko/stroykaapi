const CategoryModel = require('../models/category-model');

class CategoryService {
    async getPopularCategories() {
        const categories = await CategoryModel.find();
        return categories;
    }
}
module.exports = new CategoryService();