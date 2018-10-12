const mongoose = require('mongoose');
let Promise = require('bluebird');
mongoose.Promise = Promise;

//mongoose.connect('mongodb://127.0.0.1:27017/yelp8', {useNewUrlParser: true });
mongoose.connect('mongodb://ec2-13-57-222-240.us-west-1.compute.amazonaws.com:27017/yelp8', {useNewUrlParser: true});



let restaurantSchema = mongoose.Schema({
  id: Number,
  lName: String,
  name: String,
  ratings: {
    yearly: {
      '2016': Array,
      '2017': Array,
      '2018': Array
    }, 
    current: Number, 
    stars: {
      1: Number,
      2: Number,
      3: Number,
      4: Number,
      5: Number
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
// let getRestaurantsById = (resId, callback) => {
//   let Id = parseInt(resId);
//   Restaurants.find({id: Id}, (err, d)=>{
//     if (err) {
//       callback(err, null);
//     } else {
//       callback(null, d);
//     }
//   });
// };

//redis
let getRestaurantsById = (resId, callback, redis) => {

  redis.get(JSON.stringify(resId), function(err, reply) {
    if(err) {
      callback(null)
    } else if(reply) {
      callback(reply);
    } else {

        let Id = parseInt(resId);
        Restaurants.find({id: Id}, (err, d)=>{
          if (err) {
            callback(err, null);
          } else {

            redis.set(Id, JSON.stringify(d), function() {
              callback(null, d);
            })

            //callback(null, d);
          }
        });

    }
  })
};
//^^

//regular
// let getRestaurantsById = (resId, callback, redis) => {
//   let Id = parseInt(resId);
//   Restaurants.find({id: Id}, (err, d)=>{
//     if (err) {
//       callback(err, null);
//     } else {
//       callback(null, d);
//     }
//   });
// };




let getRestaurantsByName = (resName, callback) => {
  Restaurants.find({lName: resName}, (err, d)=>{
    if (err) {
      callback(err, null);
    } else {
      callback(null, d);
    }
  });
};

//delete
const delRestaurantsById = (resId, callback) => {
  const id = parseInt(resId, 10);
  Restaurants.deleteOne({ id }, (err, d) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, d);
    }
  });
};

const delRestaurantsByName = (resName, callback) => {
  Restaurants.deleteOne({ lName: resName }, (err, d) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, d);
    }
  });
};

//post
const postRestaurantsById = (resId, callback) => {
  const id = parseInt(resId, 10);
  const restName = new Restaurants({ id });
  restName.save((err, d) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, d);
    }
  });
};

const postRestaurantsByName = (resName, callback) => {
  const restName = new Restaurants({ name: resName });
  restName.save((err, d) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, d);
    }
  });
};

//update
const putRestaurantsById = (resId, callback) => {
  const id = parseInt(resId, 10);
  Restaurants.updateOne({ id }, { name: 'sup' }, (err, d) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, d);
    }
  });
};

const putRestaurantsByName = (resName, callback) => {
  Restaurants.updateOne({ lName: resName }, { name: 'sup' }, (err, d) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, d);
    }
  });
};

exports.getRestaurantsByName = getRestaurantsByName;
exports.getRestaurantsById = getRestaurantsById;
exports.delRestaurantsByName = delRestaurantsByName;
exports.delRestaurantsById = delRestaurantsById;
exports.postRestaurantsByName = postRestaurantsByName;
exports.postRestaurantsById = postRestaurantsById;
exports.putRestaurantsByName = putRestaurantsByName;
exports.putRestaurantsById = putRestaurantsById;
