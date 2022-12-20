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

    async getSubcategoryProdicts(req,res,next){
        try{
            const {subcategory} = req.body;
            const subcategoryProducts = await subcategoryService.getSubcategoryProducts(subcategory);
            return res.json(subcategoryProducts)
        }
        catch(e){
            next(e)
        }
    }
}

module.exports = new SubcategoryController();