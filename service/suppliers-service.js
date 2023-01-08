const SupplierModel = require('../models/supplier-model')

class SupplierService {
    async getSuppliers() {
        const suppliers = await SupplierModel.find();
        return suppliers;
    }
}

module.exports = new SupplierService();