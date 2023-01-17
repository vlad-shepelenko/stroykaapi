const ProductModel = require('../models/product-model')
const ActionModel = require('../models/action-model')

class ActionService {
    async getActions(){
        const actions = await ActionModel.find();
        let productArr = []
        for(let product of actions){
            const productData = await ProductModel.find({ _id: {$eq: product.product}})
            let actionPrice = productData[0].productPrice - (productData[0].productPrice * product.actionPercent / 100) 
            productArr.push({action: product, product: productData[0], newPrice: actionPrice.toFixed(2)})
        }
        return productArr;
    }
}

module.exports = new ActionService();