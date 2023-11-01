const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema({
    purchaseDate: {
        type: Date,
        default: Date.now
    },
    products: [
        {
            type: Schema.Types.ObjectId,
            reg: 'Product'
        }
    ]
});
const Order = mongoose.model('Order', orderSchema);
module.exports= Order;