const mongoose = require("mongoose");
const Listing = require("../models/listing")
const initData = require("./data.js");

async function main() {
    await mongoose.connect("mongodb://localhost:27017/airbnb-mern-clone");
}

main().then(res => console.log("Database Connected")).catch(err => console.log(err));

async function init() {
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data);
    console.log("Data Inserted");
}

init();