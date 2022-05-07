const express = require("express");
const mongodb = require('./mongodb');
var bodyParser = require('body-parser');

const app = express()
app.use(bodyParser.json());
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
