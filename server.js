const express = require("express");
const routes = require('./routes');
const app = express();
require("dotenv").config();
var cors = require("cors");

// Port details and connect function
const port = process.env.PORT || 8080;
const connect = require("./configure");


app.use(express.json());
app.use(cors());

// Set up middleware
app.use(express.json());

// Add routes middleware
app.use('/', routes);

app.get("/", (req, res)=> {
    res.send("Welcome to homepage, you can post /user")
})


app.listen(port,  async() => {
    try{
        await connect();
        console.log(`Server is connected`);
    }
    catch(err){
        console.log(err);
    }
    console.log(`Port ${port} is listening..`);
})
