const express = require('express');
const cors = require('cors')
const app = express();
const pool = require("./db")

app.use(cors());
app.use(express.json())//"To request body"

//Routes
//create a todo
//get all todo
//get a todo
//update a todo
//delete a todo


app.listen(5000, ()=>{
    console.log("Server started at port 5000");
})