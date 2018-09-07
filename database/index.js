const mongoose = require('mongoose');
let Promise = require('bluebird')
mongoose.Promise = Promise;

mongoose.connect('mongodb://127.0.0.1:27017/yelpReactor', {useNewUrlParser: true });

let restaurantSchema = mongoose.Schema({
  name: String,
  ratings: {
    yearly: {
      '2016': Array,
      '2017': Array,
      '2018': Array
    }, 
    current: Number, 
    stars: {
    	1:Number,
    	2:Number,
    	3:Number,
    	4:Number,
    	5:Number
    },
    amount: Number
  },
  categories: Array,
  dollars: Number,
  address: String,
  city: String,
  state: String,
  postalCode: String,
  latitude: String,
  longitude: String,
  tel: String,
  url: String,
  claimed: Boolean,
  yelpingSince: String
});

let Restaurants = mongoose.model('Restaurants', restaurantSchema);

//Finding all data
Restaurants.find((err, d)=>{
  let count = 0;
  d.forEach((res) => {
    console.log(count, res)
    count++
  })
});
