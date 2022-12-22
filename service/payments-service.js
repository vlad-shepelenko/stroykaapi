const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2022-08-01'
});

class PaymentsService {
    async getConfig() {
        return process.env.STRIPE_PUBLISHABLE_KEY
    }

    async createPaymentIntent(price) {
        const paymentIntent = await stripe.paymentIntents.create({
            currency: "BYN",
            amount: price,
            automatic_payment_methods: { enabled: true }
        })

        return paymentIntent;
    }
}

module.exports = new PaymentsService();