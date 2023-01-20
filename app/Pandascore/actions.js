require('dotenv').config();

const request=require('request');


var options = {
  method: "GET",
  url: '',
  headers: {
    Accept: 'application/json',
    Authorization: 'Bearer ' + process.env.PANDASCORE_TOKEN
  }
};


const getAgents = async (op, url) => {
 op.url = url;
 var res = await request(op, function (error, response) {
   if (error) console.log(error);
   console.log((JSON.parse(response.body))[0]);
 });
};


const getTournaments = async (op, url) => {
 op.url = url;
 var res = await request(op, function (error, response) {
   if (error) console.log(error);
   console.log((JSON.parse(response.body))[0]);
 });
};




const getLiveMatches = async (op, url) => {
  op.url = url;
  var res = await request(op, function (error, response) {
    if (error) throw new Error(error);
    console.log('1');
    console.log(response.body);
    //getTournaments(options, "https://api.pandascore.co/valorant/tournaments");
  });
};


getLiveMatches(options, "https://api.pandascore.co/lives?page=1&per_page=50");
getTournaments(options, "https://api.pandascore.co/valorant/tournaments");
getAgents(options, "https://api.pandascore.co/valorant/agents?sort=&page=1&per_page=50");
