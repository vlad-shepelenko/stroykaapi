const CartModel = require('../models/cart-model')
const ProductModel = require('../models/product-model')

class CartService{
    async getCarts(){
        const carts = await CartModel.find();

        return carts;
    }

    async setCart(user, product, count){
        const carts = await CartModel.find({user, product});
        console.log(carts)
        let productIdCount;
        

        if(carts.length == 0){
            await CartModel.create({user, product, count});
        }
        else{
            carts.map(async (el) => {
                let productId = JSON.stringify(el.product);
                productId = productId.replace('"','');
                productId = productId.replace('"','');
                productIdCount = el.count + 1;
                await CartModel.findOneAndUpdate({product: productId}, {count: productIdCount})
            })    
        }
    }

    async getCartById(id){
        let carts = await CartModel.find({user: id})

        let arrayProducts = [];

        for(let el of carts){
            let product = JSON.stringify(el.product);
            product = product.replace('"', '');
            product = product.replace('"', '');

            let products = await ProductModel.find({_id: product})

            let obj = {info: el, product: products[0]}
            arrayProducts.push(obj)
        }

        return arrayProducts
    }

    async deleteCartProductById(id){
        console.log(id)
        await CartModel.findByIdAndDelete({_id: id})
    }
}

module.exports = new CartService();