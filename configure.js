
require('dotenv').config();
const mongoose = require("mongoose");

const connect = () => {
    return (mongoose.connect("mongodb+srv://manjunath:manju123@taskboard.erovujw.mongodb.net/"));
}

module.exports = connect;
