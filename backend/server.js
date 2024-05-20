import mongoose from "mongoose";
import express from "express";
import { item } from './models/item.js';

let conn = await mongoose.connect("mongodb://localhost:27017/scrap");

const app = express()
const port = 3000

//to get all the uploaded items
app.get('/', async (req, res) => {
    let itm = await item.find({ price: 500 });
    res.json(itm)
})

//to upload an item on the app
app.post('/', async (req, res) => {
    const itm = new item({
        name: "cooler",
        desc: "cooler outer body, slightly damage",
        city: "Ujjain",
        address: "Amber colony, Ujjain",
        pincode: "456010",
        year: 2018,
        price: 500
    })
    itm.save();
})

//to delete an item from the app
app.delete('/', async (req, res) => {
    const deleteResult = await item.deleteOne({ year: 2018 }).then(function () { console.log("deleted") }).catch(function () { console.error("not deleted"); });
    res.send({result: deleteResult});
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})