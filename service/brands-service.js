const BrandsModel = require('../models/brands-model');

class BrandsService {
    async getBrandsFirstLetters(){
        const brands = await BrandsModel.find({}, {brandName: 1, _id: 0});
        console.log(brands)
        const brandsFirstLetter = new Set();
        brands.map((el) => {
            brandsFirstLetter.add(el.brandName[0])
        })
        const resultArray = []
        for(let letter of brandsFirstLetter){
            const result = brands.filter(brand => brand.brandName[0] === letter)
            let brandName = result.map(item => item.brandName)
            let obj = {[letter]: brandName}
            console.log(obj)
            resultArray.push(obj)
        }
        return resultArray
    }

    async getAllBrands() {
        const brands = await BrandsModel.find();
        return brands;
    }

    async getPopularBrands(){
        let brands = await BrandsModel.find().limit(12);
        return brands;
    }
}

module.exports = new BrandsService();