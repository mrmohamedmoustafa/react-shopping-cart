const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const router = require('./routes/routes');


const app = express();
app.use(bodyparser.json());
app.use('/', router);

const connectionString = 'mongodb://localhost/react-shopping-card';
mongoose.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true})
.then(res => console.log("connected successfuly"))


   

app.listen(6001, () => {
    console.log("runing on port 6001");
})