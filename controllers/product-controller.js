const productService = require('../service/product-service')

class ProductController {
    async getProducts(req, res, next) {
        try {
            const products = await productService.getProducts();
            return res.json(products)
        }
        catch (e) {
            next(e)
        }
    }

    async setProducts() {
        await productService.setProducts();
    }
}

module.exports = new ProductController();