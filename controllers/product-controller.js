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

    async getProductById(req,res, next){
        try{
            const {id} = req.body;
            const product = await productService.getProductById(id);
            return res.json(product)
        }
        catch(e){
            next(e)
        }
    }
}

module.exports = new ProductController();