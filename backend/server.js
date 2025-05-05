const express=require('express');
const cors = require('cors');
require('dotenv').config();

const app =express();

//Middleware
app.use(cors());
app.use(express.json());

// Simple route
app.get('/',(req,res)=>{
    res.send('Server is running');
});

//Start server
const PORT = process.env.PORT||3000;
app.listen(PORT,()=>{
    console.log(`Server listening on port ${PORT}`);
});