const express = require('express');
var path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const mt = require("mime-types");
const app = express();
const port = 4001;
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/workera',express.static(path.join(__dirname, 'public'),{}));
app.use('/workerb',express.static(path.join(__dirname, 'public'),{}));
app.use('/workerc',express.static(path.join(__dirname, 'public'),{}));
app.use('/workerd',express.static(path.join(__dirname, 'public'),{}));
app.use('/workere',express.static(path.join(__dirname, 'public'),{}));
app.get("/worker/",(req,res)=>{

})
app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})