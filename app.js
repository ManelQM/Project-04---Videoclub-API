const express = require('express'); 
const app = express(); 
const PORT = process.env.PORT || 3000; 
const db = require('./db.js');
const router = require ('./router');
const logger = require('./config/winston');
const morgan = require('morgan');
const cors = require("cors"); // Import cors module

app.use (express.json()); 
app.use (router); 
app.use(morgan('combined', { stream: logger.stream }));
app.use(cors(corsOptions));
var corsOptions = {
    origin: "*",  
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204
  };

app.listen(PORT, () => {
    console.log (`Videodrome portal nº ${PORT }`);
    
    db.then( () => {
        console.log ('Nice to see you again (DB connected)');
    }).catch(error => {
        console.log ('This thing between us its not working: ' + error)
    }) 

})

