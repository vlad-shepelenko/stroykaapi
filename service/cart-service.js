const CartModel = require('../models/cart-model')
const ProductModel = require('../models/product-model')

class CartService{
    async getCarts(){
        const carts = await CartModel.find();

        return carts;
    }

    async setCart(user, product, count){
        const carts = await CartModel.find({user, product});
        let productIdCount;
        
        if(carts.length == 0){
            if(product == undefined){
                return
            }else{
                await CartModel.create({user, product, count});
            }
        }
        else{
            carts.map(async (el) => {
                let size = Object.keys(el).length;
                if(size < 2){
                    let productId = JSON.stringify(el.product);
                    productId = productId.replace('"','');
                    productId = productId.replace('"','');
                    productIdCount = el.count + 1;
                    await CartModel.findOneAndUpdate({product: productId}, {count: productIdCount})
                }
                else{
                    return
                }
            })    
        }
    }

    async getCartById(id){
        let carts = await CartModel.find({user: id})

        let arrayProducts = [];

        for(let el of carts){
            let size = Object.keys(el).length;
            if(size < 2){
                return
            }
            else
            {
                try{
                    let product = JSON.stringify(el.product);
                    product = product.replace('"', '');
                    product = product.replace('"', '');

                    let products = await ProductModel.find({_id: product})

                    let obj = {info: el, product: products[0]}
                    arrayProducts.push(obj)
                }
                catch(e){
                    console.log(e)
                }
            }
        }

        return arrayProducts
    }

    async deleteCartProductById(id){
        await CartModel.findByIdAndDelete({_id: id})
    }

    async deleteUserCartById(id){
        const userCart = await CartModel.find({user: id})
        userCart.map(async (el) => {
            let cartId = JSON.stringify(el._id);
            cartId = cartId.replace('"','')
            cartId = cartId.replace('"','')
            
            await CartModel.findByIdAndDelete({_id: cartId})
        })
    }
}

module.exports = new CartService();