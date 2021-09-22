const express = require('express');
const cors = require('cors')
const app = express();
const pool = require("./db")

app.use(cors());
app.use(express.json())//"To request req.body"

//Routes
//create a todo
app.post("/todos", async (req, res) => {
    try {
        const { description } = req.body;
        const newTodo = await pool.query(
            "INSERT INTO todo (description) VALUES($1) RETURNING *", [description]
        );
        res.json(newTodo.rows[0]);

    } catch (error) {
        console.error(error.message);
    }
})

//get all todo

app.get("/todos", async (req, res) => {
    try {
        const allTodo = await pool.query("SELECT * FROM todo");
        res.json(allTodo.rows)
    } catch (error) {
        console.error(error.message);
    }
})


app.listen(5000, () => {
    console.log("Server started at port 5000");
})