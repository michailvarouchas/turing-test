
// items: [{
//     name: "item",
//     sku: "item",
//     price: 1.00,
//     currency: "USD",
//     quantity: 1
// }]
var PaypalModel = function(model){
    this.intent = model.intent;
}
PaypalModel.create_payment = (intent, method, currency, description, total, items) => {
    return {
        intent: intent,
        payer: {
            payment_method: method
        },
        redirect_urls: {
            return_url: process.env.PAYPAL_RETURN_URL,
            cancel_url: process.env.PAYPAL_CANCEL_URL
        },
        transactions: [{
            item_list: {
                items: items
            },
            amount: {
                currency: currency,
                total: total
            },
            description: description
        }]
    };
}
PaypalModel.execute_payment = function(PayerID, currency, amount){
    return {
        payer_id: PayerID,
        transactions: [
            {
                amount: {
                    currency: currency,
                    total: amount
                }
            }
        ]
    }
}
module.exports = PaypalModel;
