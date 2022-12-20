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

    async setSubcategories() {
        //const subcategory = await SubcategoryModel.create({ subcategoryName: 'Обои', categoryName: '63a02743a677a01040228ce8' })
    }

    async getSubcategoryProducts(subcategory){
        console.log(subcategory)
        const subcat = await SubcategoryModel.find({subcategoryName: subcategory})
        console.log(subcat)
        const {_id} = subcat[0];
        
        let id = JSON.stringify(_id);
        id = id.replace('"', '')
        id = id.replace('"', '')
        //const category = await CategoryModel.find({}, { categoryName: subcategory, _id: 1 });
        console.log(id);

        const products = await ProductModel.find({subcategoryName: _id})
        console.log(products)

        return products;
    }
}

module.exports = new SubcategoryService();