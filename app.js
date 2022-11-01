const express = require('express'); 
const app = express(); 
const PORT = 3000; 
const router = require ('./router');


app.use (express.json()); 
app.use (router); 

app.listen(PORT, () => {
    console.log (`Gate of Hell nº ${PORT }`);
    
    // db.authenticate().then( () => {
    //     console.log ('This is my db');
    // }).catch(error => {
    //     console.log ('This thing between us its not working: ' + error)
    // }) 

})