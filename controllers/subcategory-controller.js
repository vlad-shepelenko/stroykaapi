const subcategoryService = require('../service/subcategory-service');

class SubcategoryController {
    async getSubcategories(req, res, next) {
        try {
            const subcategories = await subcategoryService.getSubcategories();
            return res.json(subcategories);
        } catch (e) {
            next(e)
        }
    }

    async setSubcategory() {
        await subcategoryService.setSubcategories();
    }
}

module.exports = new SubcategoryController();