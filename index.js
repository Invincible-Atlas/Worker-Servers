const express = require('express');
const bodyParser = require('body-parser');
const app = express();
let port = 4001;
let workers = 5;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('repeated'));
for(let i = 0; i < workers; i++){
    app.listen(port, () => {
        console.log(`App listening`)
    })
    port++
}