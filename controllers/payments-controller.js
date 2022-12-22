const paymentsService = require('../service/payments-service');
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2022-08-01",
});

class PaymentsController {
    async getConfig(req, res, next) {
        try {
            //const key = paymentsService.getConfig();
            res.send({
                publishableKey: process.env.STRIPE_PUBLISHABLE_KEY
            })
        }
        catch (e) {
            next(e);
        }
    }

    async createPayment(req, res, next) {
        const { price } = req.body;
        const paymentIntent = await stripe.paymentIntents.create({
            currency: "BYN",
            amount: price,
            automatic_payment_methods: { enabled: false }
        })

        res.send({
            clientSecret: paymentIntent.client_secret
        })
    }
};

module.exports = new PaymentsController();