const express = require('express');
require('dotenv').config();         //to unable .env
const cors=require('cors');
const connectoDb=require('../crud/config/db.js');
const app=express();
//Database Connection
connectoDb();

//Express Middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

const userRoutes =require('./routes/userRoutes.js')
app.use('/', userRoutes);

module.exports = app;