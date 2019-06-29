const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
    id: { type: Number, default: 1 },
    userName: { type: String, require: true },
    restaurantCode: { type: String, default: null },
    restaurantName: { type: String, require: true },
    noOfTables: { type: Number, required: true },
    isHidden: { type: Boolean, default: false },
    isDeleted: { type: Boolean, default: false },
    createdAt: { type: Date },
    updatedAt: { type: Date, default: Date.now }
});

restaurantSchema.pre('save', function (next) {
    const doc = this;
    Restaurant.find({})
        .select('id')
        .sort({ id: -1 })
        .limit(1)
        .exec((err, data) => {
            if (data.length) {
                doc.id = ++data[0].id;
                doc.restaurantCode = `${doc.restaurantName.substr(0, 3)}${
                    doc.id
                }`;
            } else {
                doc.restaurantCode = `${doc.restaurantName.substr(0, 3)}${
                    doc.id
                }`;
            }
            doc.createdAt = Date.now();
            next();
        });
});

restaurantSchema.pre('update', function (next) {
    console.log('todo: this is not working on findOneandUpdate');
    this.update(
        {},
        {
            $set: { updatedAt: new Date() }
        }
    );
});

const Restaurant = mongoose.model('restaurant', restaurantSchema);

module.exports = Restaurant;
