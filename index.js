const express = require('express');

const app = express()

app.get('/' , (req, res) => {
    res.send('Get request to homepage')
})

app.post('/post' , (req,res) => {
    res.send('POST request to the post page');
})

const port = 5000;

app.listen(port, ()=>{
    console.log(`app is listning in port ${port}`);
})