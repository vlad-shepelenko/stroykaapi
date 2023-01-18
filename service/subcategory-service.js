const SubcategoryModel = require('../models/subcategory-model');
const CategoryModel = require('../models/category-model')
const ProductModel = require('../models/product-model')

class SubcategoryService {
    async getSubcategories() {
        const subcategories = await SubcategoryModel.find();
        const categories = await CategoryModel.find({}, { categoryName: 1, _id: 1 })

        let arrayIds = new Set();
        subcategories.map((el) => {
            let { categoryName } = el;
            categoryName = JSON.stringify(categoryName);
            categoryName = categoryName.replace('"','')
            categoryName = categoryName.replace('"', '')
            arrayIds.add(categoryName);
        })

        const categoryNames = [];
        for (let el of arrayIds) {
            let arr = await CategoryModel.findById(el)
            let id = JSON.stringify(arr._id)
            id = id.replace('"', '')
            id = id.replace('"', '')
            categoryNames.push([id, arr.categoryName, arr.categoryImage]);
        }

        const resultArray = [];
        for (let array of categoryNames) {
            const result = subcategories.filter(el => el.categoryName == array[0])
            let categoryItem = result.map(item => item.subcategoryName)
            let obj = { [array[1]]: categoryItem, image: array[2] }
            resultArray.push(obj)
        }
        return resultArray;
    }

    async getSubcategoryProducts(subcategory){
        const subcat = await SubcategoryModel.find({subcategoryName: subcategory})
        const {_id} = subcat[0];
        
        let id = JSON.stringify(_id);
        id = id.replace('"', '')
        id = id.replace('"', '')

        const products = await ProductModel.find({subcategoryName: _id})

        return products;
    }
}

module.exports = new SubcategoryService();