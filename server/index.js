const _ = require('underscore');
require('newrelic');
const express = require('express');
var cors = require('cors');
let app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
let redisClient = require('redis').createClient;
let redis = redisClient(6379, 'localhost');



//
let getRestaurantsById = require('../database/index.js').getRestaurantsById;
let getRestaurantsByName = require('../database/index.js').getRestaurantsByName;

let postResaurantsById = require('../database/index.js').getRestaurantsById;
let postResaurantsByName = require('../database/index.js').getRestaurantsByName;

app.use(morgan(':method :url :status - :response-time ms'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/:id', express.static('./client/dist'));

var corsOptions = {
  origin: 'http://localhost:1335',
  optionsSuccessStatus: 200
}

app.get('/:id/res', cors(corsOptions), function (req, res) {
  let resIdOrName = req.param('id');
  if (isNaN(parseInt(resIdOrName))) {
    getRestaurantsByName(resIdOrName, (err, data) => {
      res.send(JSON.stringify(data[0]));
    });
  } else {
    getRestaurantsById(resIdOrName, (err, data)=>{
      res.send(JSON.stringify(data[0]));
    });
  }
});

app.get('/api/header/:id/res', cors(corsOptions), function (req, res) {
  let resIdOrName = req.param('id');
  if (isNaN(parseInt(resIdOrName))) {
    getRestaurantsByName(resIdOrName, (err, data) => {
      res.send(JSON.stringify(data[0]));
    }, redis);
  } else {
    getRestaurantsById(resIdOrName, (err, data)=>{
      res.send(JSON.stringify(data[0]));
    }, redis);
  }
});

app.post('/api/header/:id/res', (req, res) => {
  const resIdOrName = req.param('id');
  if (Number.isNaN(parseInt(resIdOrName, 10))) {
    postRestaurantsByName(resIdOrName, (err, data) => {
      res.send(JSON.stringify(data[0]));
    });
  } else {
    postRestaurantsById(resIdOrName, (err, data) => {
      res.send(JSON.stringify(data[0]));
    });
  }
});


let port = 7764;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});