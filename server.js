const express = require("express");

const app = express()
const port = process.env.PORT || 3000;

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/', require('./routes'));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})