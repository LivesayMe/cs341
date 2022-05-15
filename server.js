const express = require("express");
const mongodb = require('./mongodb');
var bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const cors = require('cors');

const app = express()


const port = process.env.PORT || 3000;

require('dotenv').config();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(bodyParser.json());
app.use(cors({origin: "*"}));
app.use('/', require('./routes'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


mongodb.initDB((err, mongodb) => {
    if (err) {
        console.log(err);
        return;
    }
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    })
})
