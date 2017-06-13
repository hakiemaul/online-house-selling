var mongoose = require('mongoose');

var houseSchema = mongoose.Schema({
    address: {
      type: String,
      required: [true, "House's address can't be empty!"]
    },
    price: {
      type: Number,
      required: [true, "House's price can't be empty!"]
    },
    specifications: [String],
    contact: {
      type: String,
      required: [true, "Fill your contact detail!"]
    },
    lat: {
      type: String,
      required: [true, "Please enter your location's latitude"]
    },
    lng: {
      type: String,
      required: [true, "Please enter your location's latitude"]
    },
    createdAt: Date
});

var House  = mongoose.model('House', houseSchema);

module.exports = House;