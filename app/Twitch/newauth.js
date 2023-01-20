require('dotenv').config();
//const express=require('express');
const bodyParser=require('body-parser');
const request=require('request');
const axios = require("axios");
const qs = require("qs");
const fetch = require("fetch").fetchUrl;



//  FIRST REQUEST TO GET TOKEN

const getToken = async () => {
  var options = {
    'method': 'POST',
    'url': 'https://id.twitch.tv/oauth2/token',
    'headers': {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    form: {
      'client_id': process.env.CLIENT_ID,
      'client_secret': process.env.CLIENT_SECRET,
      'grant_type': 'client_credentials'
    }
  };
  var accessToken='false';

  var res = await request(options, function (error, response){
    if (error) throw new Error(error);
    accessToken = JSON.parse(response.body);
    accessToken = accessToken.access_token;
    console.log(accessToken);
    req1(accessToken);
  });
}






const req1 = async (token) => {
  var options = {
    'method': 'GET',
    'url': 'https://api.twitch.tv/helix/videos?game_id=516575',
    'headers': {
      'Client-Id': process.env.CLIENT_ID,
      'Authorization': 'Bearer ' + token,
    }
  };

  var res =  await request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(JSON.parse(response.body));
  });
}




console.log("3");
getToken();
console.log("4");
