const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors());
app.use(express.json())//"To request body"
app.listen(5000, ()=>{
    console.log("Server started at port 5000");
})