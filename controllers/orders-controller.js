const orderService = require('../service/orders-service');

class OrderController {
    async setOrder(req, res, next) {
        try {
            const { obj } = req.body
            const order = await orderService.setOrder(obj)
        } catch (e) {
            next(e)
        }
    }

    async getOrdersById(req, res, next){
        try{
            const {id} = req.body;
            const orders = await orderService.getOrdersById(id);

            return res.json(orders);
        }
        catch(e){
            next(e)
        }
    }
}

module.exports = new OrderController();