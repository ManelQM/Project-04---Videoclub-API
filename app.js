const express = require('express'); 
const app = express(); 
const PORT = process.env.PORT || 3000; 
const db = require('./db');
const router = require ('./router');
const cors = require("cors"); // Import cors module

app.use (express.json()); 
app.use (router); 
app.use(cors(corsOptions));
var corsOptions = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204
  };


app.listen(PORT, () => {
    console.log (`Gate of Hell nº ${PORT }`);
    
    db.authenticate().then( () => {
        console.log ('This is my db');
    }).catch(error => {
        console.log ('This thing between us its not working: ' + error)
    }) 

})

