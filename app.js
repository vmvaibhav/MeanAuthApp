const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const users = require('./routes/users');
const config = require('./config/database');

mongoose.connect(config.database, { useNewUrlParser: true, useUnifiedTopology: true  }, (err)=>{
    if (err) console.log(err);
    else console.log("Connected to database: " +config.database);
});

const app = express();

const port = 3000;

app.use(cors());

app.use(express.static(path.join(__dirname + 'public')));

app.use(bodyParser.json());
app.use('/users', users);

app.get('/', (req,res)=>{
    res.send("Invalid endpoint");
})

app.listen(port, ()=>{
    console.log("Server started on port: "+port);
    
})