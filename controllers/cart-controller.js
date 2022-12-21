const cartService = require('../service/cart-service')

class CartController {
    async getCarts(req, res, next){
        try{
            const carts = await cartService.getCarts();
            return res.json(carts)
        }
        catch(e){
            next(e)
        }
    }

    async setCarts(req, res, next){
        try{
            const {user, product, count} = req.body
            await cartService.setCart(user, product, count);
        }
        catch(e){
            next(e)
        }
    }

    async getCartById(req, res, next){
        try{
            const {id} = req.body;
            const cart = await cartService.getCartById(id);
            return res.json(cart)
        }
        catch(e){
            next(e)
        }
    }

    async deleteCartProductById(req, res, next){
        try{
            const {id} = req.params;
            await cartService.deleteCartProductById(id);
        }
        catch(e){
            next(e)
        }
    }
}

module.exports = new CartController();