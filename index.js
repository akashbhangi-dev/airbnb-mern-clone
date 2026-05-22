const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 4000;

app.get("/", (req, res) => {
    res.send("Airbnb clone");
});



async function main() {
    await mongoose.connect("mongodb://localhost:27017/airbnb-mern-clone");
}

main().then(() => console.log("Database Connected")).catch(err => console.log(error));



app.listen(port, () => {
    console.log(`Server started at port ${port}, http://localhost:${port}`);
});