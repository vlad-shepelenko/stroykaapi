const ProductModel = require('../models/product-model')
const SupplierModel = require('../models/supplier-model')
const SubcategoryModel = require('../models/subcategory-model')
const BrandModel = require('../models/brands-model')

class ProductService {
    async getProducts() {
        const products = await ProductModel.find();

        return products;
    }

    async getProductById(id) {
        let product = await ProductModel.find({ _id: id })

        const { supplierName } = product[0];
        let supplier = JSON.stringify(supplierName);
        supplier = supplier.replace('"', '');
        supplier = supplier.replace('"', '');

        const supplierData = await SupplierModel.find({ _id: supplier })

        let obj = { product: product[0], supplier: supplierData[0].supplierName }

        return obj;
    }

    async getSearchProduct(name) {
        let product = await ProductModel.find({ 'productName': { '$regex': name, '$options': 'i' } })

        return product;
    }

    async getFilterProducts(minPrice, maxPrice, brands, supplier) {
        let products;
        if (brands.length == 0) {
            if (supplier.length == 0) {
                products = await ProductModel.find({ productPrice: { $gte: minPrice, $lte: maxPrice } });
            }
            else {
                products = await ProductModel.find({ productPrice: { $gte: minPrice, $lte: maxPrice }, supplierName: { $eq: supplier } });
            }
        }
        else {
            if (supplier.length == 0) {
                products = await ProductModel.find({ productPrice: { $gte: minPrice, $lte: maxPrice }, brandName: { $in: brands } });
            }
            else {
                products = await ProductModel.find({ productPrice: { $gte: minPrice, $lte: maxPrice }, brandName: { $in: brands }, supplierName: { $eq: supplier } });
            }
        }
        return products;
    }

    async getProductsByCategoryId(id){
        let subcategories = await SubcategoryModel.find({categoryName: {$eq: id}})
        let sucategoriesArray = [];
        for(let el of subcategories){
            sucategoriesArray.push(el._id)
        }
        let products = await ProductModel.find({subcategoryName: {$in: sucategoriesArray}});
        return products;
    }

    async getPopularProducts(){
        let products = await ProductModel.find().limit(4);
        return products;
    }

    async getProductByBrandId(id){
        let products = await ProductModel.find({brandName: {$eq: id}})
        return products;
    }

    async getProductByBrandName(name){
        let brandId = await BrandModel.find({brandName: {$eq: name}})
        let id = brandId[0]._id;
        let products = await ProductModel.find({brandName: {$eq: id}})
        return products
    }
}

module.exports = new ProductService();