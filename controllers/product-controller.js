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

    async getSearchProducts(req, res, next) {
        try {
            const { name } = req.body;
            const product = await productService.getSearchProduct(name);
            return res.json(product)
        }
        catch (e) {
            next(e)
        }
    }

    async getProductById(req, res, next) {
        try {
            const { id } = req.body;
            const product = await productService.getProductById(id);
            return res.json(product)
        }
        catch (e) {
            next(e)
        }
    }

    async getFilterProducts(req, res, next) {
        try {
            const { minPrice, maxPrice, brands, supplier } = req.body;
            const products = await productService.getFilterProducts(minPrice, maxPrice, brands, supplier)
            return res.json(products);
        }
        catch (e) {
            next(e)
        }
    }

    async getProductsByCategoryId(req, res, next){
        try{
            const {id} = req.body;
            const products = await productService.getProductsByCategoryId(id);
            return res.json(products)
        }
        catch(e){
            next(e)
        }
    }

    async getPopularProducts(req, res, next){
        try{
            const products = await productService.getPopularProducts();
            return res.json(products);
        }
        catch(e){
            next(e)
        }
    }

    async getProductByBrandId(req, res, next){
        try{
            const {id} = req.body;
            const products = await productService.getProductByBrandId(id);
            return res.json(products);
        }
        catch(e){
            next(e)
        }
    }

    async getProductByBrandName(req, res, next){
        try{
            const {name} = req.body;
            const products = await productService.getProductByBrandName(name)
            return res.json(products)
        }
        catch(e){
            next(e)
        }
    }
}

module.exports = new ProductController();