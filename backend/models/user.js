import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {type: String},
    phone: {type: String},
    email: {type: String, default: ""},
    u_id: {type: String, require: true}
});

export const user = mongoose.model('user', userSchema);