const express = require('express'); // here we import the express for apis


//rest objects
const app = express();


// middleware 


// routes//
app.get('/test', (req , res)=>{
    res.status(200).send("<h1>Welcome to Node Server</h1>");
} );

// app.get('/home', (req , res )=>{
//     res.send("<h1>How are you</h1>");
// });


// port 

const PORT = 8080;


// listen

app.listen(PORT,()=>{
    console.log("Node Server Running");
});