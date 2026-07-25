const express = require('express'); // here we import the express for apis
const morgan = require('morgan');
const dotenv = require('dotenv');
const cors = require('cors');


// config
dotenv.config();

//rest objects
const app = express();


// middleware 
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));


// routes//
app.use('/app',require('./routes/testRoute'));
// app.get('/test', (req , res)=>{
//     res.status(200).send("<h1>Welcome to Node Server</h1>");
// } );

// app.get('/home', (req , res )=>{
//     res.send("<h1>How are you</h1>");
// });


// port 

const PORT = process.env.PORT || 8080;


// listen

app.listen(PORT,()=>{
    console.log(`Node Server Running on ${process.env.DEV_MODE} mode on Port on ${PORT}`);
});