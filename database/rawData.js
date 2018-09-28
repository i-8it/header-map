let faker = require('faker');
let _ = require('underscore');

const restaurantName = ["Minhas Micro Brewery",
 "CK'S BBQ & Catering", 
 "La Bastringue", "The Coffee Bean & Tea Leaf", "Bnc Cake House", "Thai One On", "Filiberto's Mexican Food", "Sushi 8", "Southern Accent Restaurant", "Original Hamburger Works", "Mysore Indian Cuisine", "Safeway Food & Drug", "Harlow", "CakesbyToi", "Rally's Hamburgers", "Rib Shop", "Mabel's Bakery", "Salsitas", "Los Toros Numero 2", "The Coffee Mill Restaurant", "Teresas Pizzeria", "Chicken Lips", "Subway", "Omelet House Summerlin", "Crossroads Country Cafe'", "Strickland's Ice Cream", "John John's Seafood", "Little Caesars Pizza", "Dunkin Donuts", "Kim Phat Inc", "Manuel's Mexican Restaurant & Cantina - Bell Rd", "La Rosa Chilena", "Junior's Pizzeria", "Subway", "Baja Fresh Mexican Grill", "China Palace", "Allwyn's Bakery", "Fornetti", "Provence Bakery", "Ice Cream Patio", "Hub Coffee House & Locavorium", "Pizza Bellagio", "Regino's Pizza", "Avenue Deli", "More Than Pies Baking", "Indian Street Food Company", "Jack's Liquor", "Tipsy Ryde", "Wendy's", "McDonalds", "Fat Ox", "Tang Dynasty Restaurant And Bar", "Sammy's Beach Bar & Grill", "Harvey's Restaurants", "Honey's Beestro", "The Nest", "Applebee's Grill + Bar", "Anchor Bar", "I Wings", "Frite Alors", "Vocé Ristorante and Lounge", "Whiskey Rose Bar & Grill", "Popeyes Louisiana Kitchen", "Wing's Express", "Pizza Hut", "Sansei Japan", "Burrito Boyz", "L2 Lounge", "Chan Yang", "Long John Silver's", "Sunny Foodmart", "Weinkontor", "Loblaws", "Seasonal Adventures Pumpkin Patch", "Carte Blanche", "Schlotzsky's", "A & A International Food", "Arby's", "Higley Hot Dog Hut", "Pho 198", "Sweet Mahal", "La Cabana", "Hooters", "Boston Market", "Sauter's Inn Restaurant", "El Pollo Loco", "Ave Maria Latin Café", "Dave's Surf & Turf", "Popeyes Louisiana Kitchen", "Chicago Deep Dish Pizza", "Quesada Mexican Grill", "Great Wall", "Ten Feet Tall", "Velvet Sunrise Coffee Roasters", "Caspian Cafe & Catering", "Giulietta", "Sea Hut", "Chicago Brewing Company", "Port of Subs", "Chef's Cafe"];




let restaurants = [];

let rating1 = [null, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let rating2 = [3, 4, 5, 6, 7, 8, 9];
let incDec = [-1, 0, 1];
let categories = {
  'Food': [
    'Afghan',
    'African',
    'South African',
    'American',
    'Arabian',
    'Argentine',
    'Armenian',
    'Asian Fusion',
    'Australian',
    'Austrian',
    'Bangladeshi',
    'Barbeque',
    'Basque',
    'Belgian',
    'Brasseries',
    'Brazilian',
    'British',
    'Buffets',
    'Burgers',
    'Burmese',
    'Cafes',
    'Themed Cafes',
    'Cafeteria',
    'Cajun Creole',
    'Caribbean',
    'Dominican',
    'Haitian',
    'Puerto Rican',
    'Trinidadian',
    'Catalan',
    'Cheesesteaks',
    'Chicken Wings',
    'Chinese',
    'Cantonese',
    'Szechuan',
    'Comfort Food',
    'Creperies',
    'Cuban',
    'Czech',
    'Delis',
    'Diners',
    'Fondue',
    'French',
    'Mauritius',
    'Reunion',
    'Game Meat',
    'Gastropubs',
    'German',
    'GlutenFree',
    'Greek',
    'Guamanian',
    'Halal',
    'Hawaiian',
    'Himalayan',
    'Hot Pot',
    'Hungarian',
    'Indian',
    'Indonesian',
    'Irish',
    'Italian',
    'Sardinian',
    'Sicilian',
    'Japanese',
    'Izakaya',
    'Japanese Curry',
    'Ramen',
    'Teppanyaki',
    'Kebab',
    'Korean',
    'Malaysian',
    'Mediterranean',
    'Falafel',
    'Mexican',
    'Tacos',
    'MiddleEastern',
    'Egyptian',
    'Lebanese',
    'ModernEuropean',
    'Mongolian',
    'Moroccan',
    'Nicaraguan',
    'Noodles',
    'Pizza',
    'Polish',
    'Polynesian',
    'Portuguese',
    'Poutineries',
    'Russian',
    'Salad',
    'Sandwiches',
    'Scandinavian',
    'Scottish',
    'Seafood',
    'Singaporean',
    'Soup',
    'Southern',
    'Spanish',
    'Steakhouses',
    'Thai',
    'Turkish',
    'Ukrainian',
    'Uzbek',
    'Vegan',
    'Vegetarian',
    'Vietnamese',
    'Waffles',
    'Wraps'
  ],
  'Restaurant': [
    'Acai Bowls',
    'Bagels',
    'Bakeries',
    'Beer, Wine & Spirits',
    'Beverage Store',
    'Breweries',
    'Brewpubs',
    'Bubble Tea',
    'Butcher',
    'CSA',
    'Chimney Cakes',
    'Cideries',
    'Coffee & Tea',
    'Coffee Roasteries',
    'Convenience Stores',
    'Cupcakes',
    'Custom Cakes',
    'Desserts',
    'Distilleries',
    'Do-It-Yourself Food',
    'Donuts',
    'Empanadas',
    'Farmers Market',
    'Food Delivery Services',
    'Food Trucks',
    'Gelato',
    'Grocery',
    'Honey',
    'Ice Cream & Frozen Yogurt',
    'Imported Food',
    'International Grocery',
    'Internet Cafes',
    'Juice Bars & Smoothies',
    'Kombucha',
    'Organic Stores',
    'Patisserie/Cake Shop',
    'Piadina',
    'Poke',
    'Pretzels',
    'Shaved Ice',
    'Shaved Snow',
    'Smokehouse',
    'Candy Stores',
    'Cheese Shops',
    'Chocolatiers & Shops',
    'Fruits & Veggies',
    'Health Markets',
    'Herbs & Spices',
    'Macarons',
    'Meat Shops',
    'Olive Oil',
    'Pasta Shops',
    'Popcorn Shops',
    'Seafood Markets',
    'Street Vendors',
    'Tea Rooms',
    'Water Stores',
    'Wineries'
  ]
};

let getRandomRatings = (rate) => {
  let output = [];
  let jan = rate || rating2[Math.floor(Math.random() * Math.floor(7))];
  let temp = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined];
  output.push(jan);
  let ratings = _.map(temp, () => {
    return incDec[Math.floor(Math.random() * Math.floor(3))];
  });
  let rateStore = output[0];
  output = output.concat(_.map(ratings, (rate) => {
    rateStore = rateStore + rate;
    if(rateStore > 10) {
      rateStore = rateStore - (rateStore%10);
    }
    if(rateStore < 0) {
      rateStore = 0;
    }
    return rateStore;
  }));
  return output;
}

let increment = 1;

restaurantName.forEach((res) => {
  let data = {};
  data.name = res;
  //ratings
  data.ratings = {
    yearly: {
      '2016': getRandomRatings()
    },
    current: 0,
    stars: {
      '5': Math.floor(Math.random() * Math.floor(50)),
      '4': Math.floor(Math.random() * Math.floor(40)),
      '3': Math.floor(Math.random() * Math.floor(30)),
      '2': Math.floor(Math.random() * Math.floor(30)),
      '1': Math.floor(Math.random() * Math.floor(30))
    },
    amount: 0
  }
  //adding ratings amount & current rating
  data.ratings.amount = data.ratings.stars['5'] + data.ratings.stars['4'] + data.ratings.stars['3'] + data.ratings.stars['2'] + data.ratings.stars['1']; 
  data.ratings.current = Math.floor(((data.ratings.stars['5']*5 + data.ratings.stars['4']*4 + data.ratings.stars['3']*3 + data.ratings.stars['2']*2 + data.ratings.stars['1'])/data.ratings.amount)*2);
  //adding 2017 and 2018(- 9,10,11,12 months) monthly ratings
  data.ratings.yearly['2017'] = getRandomRatings(data.ratings.yearly['2016'][data.ratings.yearly['2016'].length-1]);
  data.ratings.yearly['2018'] = getRandomRatings(data.ratings.yearly['2017'][data.ratings.yearly['2017'].length-1]);
  data.ratings.yearly['2018'][9] = null;
  data.ratings.yearly['2018'][10] = null;
  data.ratings.yearly['2018'][11] = null;
  data.ratings.yearly['2018'][12] = null;
  //categories
  data.categories = [];
  let categoriesNum = Math.floor(Math.random() * Math.floor(3))+1;
  for (let i = 0; i < categoriesNum; i++) {
    let cate = {};
    cate.type = Object.keys(categories)[Math.floor(Math.random() * Math.floor(2))];
    cate.specific = categories[cate.type][Math.floor(Math.random() * Math.floor(categories[cate.type].length))];
    data.categories.push(cate);
  }
  //dollars
  data.dollars = Math.floor(Math.random() * Math.floor(3)) + 1;
  //address
  data.address = faker.address.streetAddress();
  data.city = faker.address.city();
  data.state = faker.address.state();
  data.postalCode = faker.address.zipCode();
  data.latitude = faker.address.latitude();
  data.longitude = faker.address.longitude();
  //other infos
  data.tel = faker.phone.phoneNumber();
  data.url = faker.internet.domainName();
  data.claimed = !!Math.floor(Math.random() * Math.floor(2));
  data.yelpingSince = faker.date.between('2005-01-01', '2017-01-01');
  data.id = increment;
  increment++;
  data.lName = res.toLowerCase();
  restaurants.push(data);
});

//console.log(restaurants);
// console.log(restaurants[0].ratings.yearly['2016'])
// console.log(restaurants[0].ratings.yearly['2017'])
// console.log(restaurants[0].ratings.yearly['2018'])

//data already added to mongodb. This file served its purpose.
//exports.restaurants = restaurants;

const mongoose = require('mongoose');
let Promise = require('bluebird');
mongoose.Promise = Promise;
let restaurantsData = restaurants;

// mongoose.connect('mongodb://127.0.0.1:27017/yelpReactor', {useNewUrlParser: true });
mongoose.connect('mongodb://127.0.0.1:27017/yelpReactor', {useNewUrlParser: true });

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

let removeCollection = () => {
  Restaurants.remove({});
};

removeCollection();
//Saving data to mongodb
restaurantsData.forEach((restaurant) => {
  let res = new Restaurants(restaurant);
  res.save();
});


