import mongoose from "mongoose";

const scrapSchema = mongoose.Schema({
    name: {type: String, require: true},
    desc: String,
    city: {type: String, require: true},
    address: {type: String, require: true},
    pincode: {type: String, require: true},
    year: {type: Number, require: true},
    price: {type: Number, require: true}
});

export const item = mongoose.model('item', scrapSchema);