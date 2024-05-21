import mongoose from "mongoose";
import express from "express";
import { user } from './models/user.js';

let conn = await mongoose.connect("mongodb://localhost:27017/scrap");

const app = express();
const port = 3000;

//to get the data of users from the DB
app.get('/', async (req, res) => {
    let us = await user.find({});
    res.jsonp(us);
})

//to update (by id) the user data from the DB
app.put('/', async (req, res) => {
    user.updateOne( {u_id: ""}, { $set: { phone: "1234567889", name: "abhinav chawda"} } ).then(function(){console.log("updated")}).catch(function(){console.error("There is error")});
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})