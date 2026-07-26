const express = require('express'); // here we import the express for apis
const morgan = require('morgan'); // morgan is used to log the request and response in the console
const dotenv = require('dotenv'); // dotenv is used to load the environment variables from .env file
const cors = require('cors');  // cors is used to allow the cross origin request from the frontend to backend
const connectDb = require('./config/db');


// config
dotenv.config(); // this is used to load the environment variables from .env file

// database connect 
connectDb(); // this is used to connect to the database using the connectDb function from config/db.js


//rest objects
const app = express(); // this is used to create an instance of express application


// middleware 
app.use(express.json()); // this middleware is used to parse the incoming request body in json format and make it available in req.body
app.use(cors());  //this middleware is used to allow the cross origin request from the frontend to backend
app.use(morgan("dev")); // here explanation of morgan is that it is used to log the request and response in the console


// routes//
app.use('/app/v1/user',require('./routes/userRoute'));
app.use('/app/v1/test', require('./routes/testRoute'));

// app.get('/test', (req , res)=>{
//     res.status(200).send("<h1>Welcome to Node Server</h1>");
// } );

// app.get('/home', (req , res )=>{
//     res.send("<h1>How are you</h1>");
// });


// port 

const PORT = process.env.PORT || 8080;


// listen

app.listen(PORT,()=>{ // this is used to start the server and listen on the specified port
    console.log(`Node Server Running on ${process.env.DEV_MODE} mode on Port on ${PORT}`);
});