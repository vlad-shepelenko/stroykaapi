const orderService = require('../service/orders-service');

class OrderController {
    async setOrder(req, res, next) {
        try {
            const { obj } = req.body
            console.log(obj)
        } catch (e) {

        }
    }
}

module.exports = new OrderController();