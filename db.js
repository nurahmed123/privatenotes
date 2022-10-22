const mongoose = require("mongoose");
const mongoURI = "mongodb+srv://privatenotes:$69Monamrkmnkmnkore@cluster0.du23o4p.mongodb.net/?retryWrites=true&w=majority"
const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log("Connected to bongNotes server Successfully.");
    })
}
module.exports = connectToMongo;