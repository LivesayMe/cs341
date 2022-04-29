const express = require("express");
const mongodb = require('./mongodb');

const app = express()
const port = process.env.PORT || 3000;

require('dotenv').config();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/', require('./routes'));


mongodb.initDB((err, mongodb) => {
    if (err) {
        console.log(err);
        return;
    }
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    })
})
