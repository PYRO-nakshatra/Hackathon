require('dotenv').config();
const express=require('express');
const bodyParser=require('body-parser');
const request=require('request');

const app=express();
app.use(bodyParser.urlencoded({extended: true}));



app.listen(3000, function(){
  console.log('Server is running at port 3000.')
});

//const {accessToken} = require('./Twitch/newauth.js');


const { list } = require('./Pandascore/actions.js')
