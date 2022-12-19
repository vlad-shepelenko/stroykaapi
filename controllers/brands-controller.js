const brandsService = require('../service/brands-service')

class BrandsController{
    async getBrandsFirstLetters(req, res, next){
        try{
            const brands = await brandsService.getBrandsFirstLetters();
            return res.json(brands)
        }
        catch(e){
            next(e)
        }
    }

    async getAllBrands(req, res, next){
        try{
            const brands = await brandsService.getAllBrands();
            return res.json(brands)
        }
        catch(e){
            next(e)
        }
    }

    async setBrands(){
        await brandsService.setBrands();
    }
}

module.exports = new BrandsController();