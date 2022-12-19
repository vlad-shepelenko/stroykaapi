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

    async setBrands(){
        //const brand = await BrandsModel.create({brandName: 'Уют', brandImage: 'https://i.imgur.com/w8rjX2Z.png'});
        //const brand1 = await BrandsModel.create({brandName: 'Фаско', brandImage: 'https://i.imgur.com/w8rjX2Z.png'});
        //const brand2 = await BrandsModel.create({brandName: 'Фертика', brandImage: 'https://i.imgur.com/w8rjX2Z.png'});
        //const brand3 = await BrandsModel.create({brandName: 'Формат', brandImage: 'https://i.imgur.com/w8rjX2Z.png'});
        //const brand4 = await BrandsModel.create({brandName: 'Фрекен Бок', brandImage: 'https://i.imgur.com/w8rjX2Z.png'});
        //const brand5 = await BrandsModel.create({brandName: 'Шахтинская плитка', brandImage: 'https://i.imgur.com/w8rjX2Z.png'});
        //const brand6 = await BrandsModel.create({brandName: 'Штрих', brandImage: 'https://i.imgur.com/w8rjX2Z.png'});
        //const brand7 = await BrandsModel.create({brandName: 'ЭКО', brandImage: 'https://i.imgur.com/w8rjX2Z.png'});
        //const brand8 = await BrandsModel.create({brandName: 'Эко НОМ', brandImage: 'https://i.imgur.com/w8rjX2Z.png'});
        //const brand9 = await BrandsModel.create({brandName: 'Эксперт', brandImage: 'https://i.imgur.com/w8rjX2Z.png'});
        //const brand10 = await BrandsModel.create({brandName: 'Яр краски', brandImage: 'https://i.imgur.com/w8rjX2Z.png'});
    }
}

module.exports = new BrandsService();