const express = require('express');
const dotenv = require('dotenv');
const { connectToDB, getAllItems } = require('./dbconfig.js')

const app = express();

dotenv.config()

app.get("/", (req, res) => {
    connectToDB
    const data = getAllItems()
    console.log(data)
    // res.render("pages/home.ejs")
})

const PORT = 3000;
app.listen(PORT, () => console.log(`listening on port ${PORT}`))