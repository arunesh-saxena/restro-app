// import { setTimeout } from 'timers'; import { setTimeout } from 'timers';
const mongoose = require('mongoose');

const CONSTANT = require('../../constants');

const orderSchema = new mongoose.Schema({
    id: {
        type: Number,
        default: 1
    },
    orderBy: {
        type: Number,
        required: true
    },
    items: {
        type: [
            {
                id: {
                    type: Number,
                    required: true
                },
                itemName: {
                    type: String,
                    require: true
                },
                qnty: {
                    type: Number,
                    required: true
                },
                price: {
                    type: Number,
                    required: true
                },
                unit: {
                    type: String,
                    required: true
                },
                itemCode: {
                    type: String,
                    default: null
                }
            }
        ],
        required: true
    },
    status: {
        type: String,
        default: CONSTANT.restro.orderStatus.PENDING
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

orderSchema.pre('save', function (next) {
    const doc = this;
    Order.find({})
        .select('id')
        .sort({ id: -1 })
        .limit(1)
        .exec((err, data) => {
            if (data.length) {
                doc.id = ++data[0].id;
            }
            doc.createdAt = Date.now();
            next();
        });
});

var Order = mongoose.model('order', orderSchema);

module.exports = Order;
