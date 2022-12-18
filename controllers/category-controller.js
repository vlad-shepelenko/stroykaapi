const categoryService = require('../service/category-service');

class CategoryController {
    async getPopularCategory(req, res, next) {
        try {
            const popularCategory = await categoryService.getPopularCategories();
            return res.json(popularCategory);
        }
        catch (e) {
            next(e)
        }
    }
}

module.exports = new CategoryController();