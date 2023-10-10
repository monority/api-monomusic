const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const monoSchema = new Schema({
    id: String,
    name: String,
    image: String,
    price: Number,  
    sell: { type: Number, default: 0 },
    options: {
        batterylife: Number,
        bassBoost: Boolean,
        db: Number,
        bluetooth: String,
    },
});

const monoModel = mongoose.model("mono", monoSchema);

module.exports = monoModel;
