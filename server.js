const express = require("express");
const routes = require('./routes');
const app = express();
require("dotenv").config();
var cors = require("cors");

// Port details and connect function
const port = process.env.PORT || 5399;
const connect = require("./configure");


app.use(express.json());
app.use(cors());

// Set up middleware
app.use(express.json());

// Add routes middleware
app.use('/', routes);



app.listen(port,  async() => {
    try{
        await connect();
        console.log(`Port 5399 is listening..`);
    }
    catch(err){
        console.log(err);
    }
})
