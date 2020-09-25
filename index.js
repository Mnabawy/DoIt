const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser');

const app = express()

// connecting DB
const DB_URI = require('./config/keys').mongoURI

mongoose.connect(
    DB_URI,
    {
        useNewUrlParser: true,
    }
).then(()=> {console.log('DB Connected')})
.catch((err) => {console.log(err)})


// middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));

const port = 5000;

app.listen(port, () => {
    console.log(`app is listning in port ${port}`);
})