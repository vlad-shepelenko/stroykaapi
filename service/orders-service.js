const OrderModel = require('../models/orders-model');

class OrderService {
    async setOrder(obj) {
        let data = obj[0]
        let date = data.data
        let dateParts = date.split('.')
        var dataObj = new Date(+dateParts[2], dateParts[1]-1, +dateParts[0])
        const order = await OrderModel.create({user: data.userId, products: data.products, status: data.status, date: dataObj})
        return order;
    }

    async getOrdersById(id){
        let orders = await OrderModel.find({user: id})

        return orders
    }
}

module.exports = new OrderService();