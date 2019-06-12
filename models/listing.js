mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({
  latitude: {
    type: Number,
    required: true
  },
  longitude : {
    type: Number,
    required: true
  },
  street:{
    type: String,
    required: true,
    unique: true
  },
  city: {
    type:String,
    required: true
  },
  municipality:{
    type: String,
    required: true
  },
  summary: {
    type: String,
    required: true
  },
  price:{
    type: Number,
    required: true
  },
  monthlyFee:{
    type: Number,
    required: true
  },
  bidding:{
    type: Boolean,
    active: true
  }


});


const Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;
