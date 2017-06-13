var mongoose = require('mongoose');

var houseSchema = mongoose.Schema({
    title: {
      type: String,
      required: [true, "House's title can't be empty!"]
    },
    pictures: [String],
    description: {
      type: String,
      required: [true, "House's description can't be empty!"]
    },
    city: String,
    price: {
      type: Number,
      required: [true, "House's price can't be empty!"]
    },
    specifications: {
      bedrooms: { type: Number, required: true },
      bathrooms: { type: Number, required: true },
      area: { type: String, required: true },
      condition: Boolean,
      floors: Number,
      certificate: String
    },
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