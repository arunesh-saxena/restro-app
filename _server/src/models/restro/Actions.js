const mongoose = require('mongoose');

const actionsSchema = new mongoose.Schema({
    actionId: { type: Number, default: 1 },
    actionName: { type: String, require: true },
    createdAt: { type: Date },
    updatedAt: { type: Date, default: Date.now }
});
actionsSchema.pre('save', function (next) {
    const doc = this;
    Actions.find({})
        .select('actionId')
        .sort({ actionId: -1 })
        .limit(1)
        .exec((err, data) => {
            if (data.length) {
                doc.actionId = ++data[0].actionId;
            }
            doc.createdAt = Date.now();
            next();
        });
});
const Actions = mongoose.model('actions', actionsSchema);

module.exports = Actions;
