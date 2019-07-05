const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
    id: { type: Number, default: 1 },
    restaurantCode: { type: String },
    itemCode: { type: String, default: null },
    itemName: { type: String, require: true },
    description: { type: String },
    imageURL: { type: String },
    price: { type: Number, required: true },
    unit: { type: String, required: true },
    currency: { type: String, required: true },
    quantity: { type: Number, required: true },
    isHidden: { type: Boolean, default: false },
    isDeleted: { type: Boolean, default: false },
    createdAt: { type: Date },
    updatedAt: { type: Date, default: Date.now }
});

menuSchema.pre('save', function (next) {
    const doc = this;
    Menu.find({})
        .select('id')
        .sort({ id: -1 })
        .limit(1)
        .exec((err, data) => {
            if (data.length) {
                doc.id = ++data[0].id;
                doc.itemCode = `${doc.itemName
                    .substr(0, 3)
                    .toLocaleLowerCase()}${doc.id}`;
            } else {
                doc.itemCode = `${doc.itemName
                    .substr(0, 3)
                    .toLocaleLowerCase()}${doc.id}`;
            }
            doc.createdAt = Date.now();
            next();
        });
});

menuSchema.pre('update', function (next) {
    console.log('todo: this is not working on findOneandUpdate');
    this.update(
        {},
        {
            $set: { updatedAt: new Date() }
        }
    );
});

var Menu = mongoose.model('menu', menuSchema);

module.exports = Menu;
