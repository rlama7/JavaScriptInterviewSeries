const express = require('express');
const bodyParser = require('body-parser');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');

const app = express();
app.set('view engine', 'ejs');

// app.use(bodyParser.urlencoded({
//     extended:true
// }));

app.use(express.static('public'));

const port = 3000;
app.listen(port, ()=> {
    console.group(`Server listening on ${port}...`);
})
