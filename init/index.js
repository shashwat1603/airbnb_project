const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
    .then(() => {
        console.log("connected to DB");
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
    await Listing.deleteMany({});
    // initData.data = initData.data.map((obj) => ({...obj, owner: '6857fce56ce8a08bb9d41838'}));
    initData.data = initData.data.map((obj) => ({...obj, owner: '6867b3e8c2426ba38cd7d088'}));
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
};

initDB();