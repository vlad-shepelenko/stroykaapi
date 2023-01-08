const supplierService = require('../service/suppliers-service')

class SupplierController {
    async getSuppliers(req, res, next) {
        try {
            const supplier = await supplierService.getSuppliers();
            return res.json(supplier);
        }
        catch (e) {
            next(e)
        }
    }
}

module.exports = new SupplierController();