require('dotenv').config()
// 1- import express
const express = require('express');
const path = require('path');
const connectDB=require('./config/db');
const productRoutes = require('./routes/productRoutes')
connectDB()
//2-init the APP
const app = express();
app.use(express.json());
app.use('/api/products', productRoutes)

//serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    // set static folder 
    app.use(express.static(path.join(__dirname, 'frontend/build')))
    app.get('*', (req, res) =>{
    res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'));
    
    });
    
    }else{  app.get('*', (req, res) =>{
        res.send("API RUNNING");})
    }
// 3- create a port 
PORT = process.env.PORT || 5000;

// 4- create a server
app.listen(PORT, ()=>console.log(`server listening on port ${PORT}`)); 




// package json file
// "dev": "concurrently \"cd backend && nodemon server.js\" \"cd frontend && npm start\""